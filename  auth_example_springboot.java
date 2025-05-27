// auth_example_springboot.java
// Minimal Spring Boot authentication example: registration & login with JWT

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class AuthExampleSpringBoot {
    private Map<String, String> users = new ConcurrentHashMap<>();
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
        users.put(email, encoder.encode(password));
        return "Registered";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        String hash = users.get(email);
        if (hash == null || !encoder.matches(password, hash)) {
            return Map.of("error", "Invalid credentials");
        }
        String token = Jwts.builder()
                .setSubject(email)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
        return Map.of("token", token);
    }
}