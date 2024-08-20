package com.example.BE.controller;

import com.example.BE.dto.UserDTO;
import com.example.BE.model.User;
import com.example.BE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    //test용
    @GetMapping("user/hello")
    public String hello(){
        return "Hello !";
    }
    //회원가입 - test 성공
    @PostMapping("user/create")
    public User registerUser(@RequestBody UserDTO userDTO) {
        return userService.registerUser(userDTO.getEmail(), userDTO.getPwd());
    }
    //로그인 - test 성공
    @PostMapping("user/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        Optional<User> user = userService.loginUser(userDTO.getEmail(), userDTO.getPwd());

        if (user.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
    //회원탈퇴 - test 성공
    @DeleteMapping("user/delete/{user_id}")
    public void deleteUser(@PathVariable Long user_id) {
        userService.deleteUser(user_id);
    }
}

