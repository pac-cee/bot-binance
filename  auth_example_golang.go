// auth_example_golang.go
// Minimal Go authentication example: registration & login with JWT

package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"

    "github.com/golang-jwt/jwt/v5"
    "golang.org/x/crypto/bcrypt"
    "github.com/pquerna/otp/totp"
)

type User struct {
    Email        string
    PasswordHash string
    TOTPSecret   string
}

var (
    users    = make(map[string]*User)
    usersMux = sync.Mutex{}
    jwtKey   = []byte("supersecretkey")
)

func register(w http.ResponseWriter, r *http.Request) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    json.NewDecoder(r.Body).Decode(&req)
    usersMux.Lock()
    defer usersMux.Unlock()
    if _, exists := users[req.Email]; exists {
        http.Error(w, "User exists", http.StatusBadRequest)
        return
    }
    hash, _ := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
    users[req.Email] = &User{Email: req.Email, PasswordHash: string(hash)}
    fmt.Fprint(w, "Registered")
}

func login(w http.ResponseWriter, r *http.Request) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
        TOTP     string `json:"totp"`
    }
    json.NewDecoder(r.Body).Decode(&req)
    usersMux.Lock()
    user, exists := users[req.Email]
    usersMux.Unlock()
    if !exists || bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(req.Password)) != nil {
        http.Error(w, "Invalid credentials", http.StatusUnauthorized)
        return
    }
    // If user has TOTP enabled, require code
    if user.TOTPSecret != "" {
        if !totp.Validate(req.TOTP, user.TOTPSecret) {
            http.Error(w, "Invalid TOTP code", http.StatusUnauthorized)
            return
        }
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "email": req.Email,
        "exp":   time.Now().Add(time.Hour).Unix(),
    })
    tokenString, _ := token.SignedString(jwtKey)
    json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
}

func setupTOTP(w http.ResponseWriter, r *http.Request) {
    // For demo: get email from query param (in production, use JWT auth)
    email := r.URL.Query().Get("email")
    usersMux.Lock()
    user, exists := users[email]
    usersMux.Unlock()
    if !exists {
        http.Error(w, "User not found", http.StatusNotFound)
        return
    }
    secret := totp.GenerateOpts{
        Issuer:      "DemoApp",
        AccountName: email,
    }
    key, _ := totp.Generate(secret)
    usersMux.Lock()
    user.TOTPSecret = key.Secret()
    usersMux.Unlock()
    json.NewEncoder(w).Encode(map[string]string{"secret": key.Secret(), "url": key.URL()})
}

func protected(w http.ResponseWriter, r *http.Request) {
    auth := r.Header.Get("Authorization")
    if len(auth) < 8 || auth[:7] != "Bearer " {
        http.Error(w, "Missing token", http.StatusUnauthorized)
        return
    }
    tokenStr := auth[7:]
    token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
        return jwtKey, nil
    })
    if err != nil || !token.Valid {
        http.Error(w, "Invalid token", http.StatusUnauthorized)
        return
    }
    fmt.Fprint(w, "Protected content")
}

func main() {
    http.HandleFunc("/api/register", register)
    http.HandleFunc("/api/login", login)
    http.HandleFunc("/api/setup-totp", setupTOTP)
    http.HandleFunc("/api/protected", protected)
    log.Println("Server running on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}