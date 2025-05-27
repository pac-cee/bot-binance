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

    "golang.org/x/crypto/bcrypt"
    "github.com/golang-jwt/jwt/v5"
)

var (
    users    = make(map[string]string)
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
    users[req.Email] = string(hash)
    fmt.Fprint(w, "Registered")
}

func login(w http.ResponseWriter, r *http.Request) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    json.NewDecoder(r.Body).Decode(&req)
    usersMux.Lock()
    hash, exists := users[req.Email]
    usersMux.Unlock()
    if !exists || bcrypt.CompareHashAndPassword([]byte(hash), []byte(req.Password)) != nil {
        http.Error(w, "Invalid credentials", http.StatusUnauthorized)
        return
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "email": req.Email,
        "exp":   time.Now().Add(time.Hour).Unix(),
    })
    tokenString, _ := token.SignedString(jwtKey)
    json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
}

func main() {
    http.HandleFunc("/api/register", register)
    http.HandleFunc("/api/login", login)
    log.Println("Server running on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}