// auth_example_springboot.java
// Enhanced Spring Boot authentication: registration, login, JWT, TOTP 2FA, protected endpoint

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import dev.turingcomplete.javaotp.Totp;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class AuthExampleSpringBoot {
    static class User {
        String email;
        String passwordHash;
        String totpSecret;
        User(String email, String passwordHash) {
            this.email = email;
            this.passwordHash = passwordHash;
        }
    }

    private Map<String, User> users = new ConcurrentHashMap<>();
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private String jwtSecret = "supersecretkey";

    public static void main(String[] args) {
        SpringApplication.run(AuthExampleSpringBoot.class, args);
    }

    @PostMapping("/register")
    public String register(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        if (users.containsKey(email)) return "User exists";
        users.put(email, new User(email, encoder.encode(password)));
        return "Registered";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        String totp = body.get("totp");
        User user = users.get(email);
        if (user == null || !encoder.matches(password, user.passwordHash)) {
            return Map.of("error", "Invalid credentials");
        }
        if (user.totpSecret != null) {
            Totp totpObj = new Totp(user.totpSecret);
            if (!totpObj.verify(totp)) {
                return Map.of("error", "Invalid TOTP code");
            }
        }
        String token = Jwts.builder()
                .setSubject(email)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
        return Map.of("token", token);
    }

    @PostMapping("/setup-totp")
    public Map<String, String> setupTotp(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        User user = users.get(email);
        if (user == null) return Map.of("error", "User not found");
        String secret = Totp.randomBase32Secret();
        user.totpSecret = secret;
        String url = "otpauth://totp/DemoApp:" + email + "?secret=" + secret + "&issuer=DemoApp";
        return Map.of("secret", secret, "url", url);
    }

    @GetMapping("/protected")
    public String protectedEndpoint(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return "Missing token";
        }
        String token = authHeader.substring(7);
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return "Protected content";
        } catch (Exception e) {
            return "Invalid token";
        }
    }
}