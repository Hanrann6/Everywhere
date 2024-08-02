package com.example.BE.controller;

import com.example.BE.dto.UserDTO;
import com.example.BE.model.User;
import com.example.BE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public User registerUser(@RequestBody UserDTO userDTO) {
        return userService.registerUser(userDTO.getEmail(), userDTO.getPassword());
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userService.loginUser(email, password);

        if (user.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}

