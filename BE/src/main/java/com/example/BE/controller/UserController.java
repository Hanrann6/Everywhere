package com.example.BE.controller;

import com.example.BE.dto.UserDTO;
import com.example.BE.model.User;
import com.example.BE.response.ResponseMessage;
import com.example.BE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    //test용
    @GetMapping("/hello")
    @CrossOrigin(origins = "http://localhost:3000")
    public String hello(){
        return "Hello !";
    }
    //회원가입 - test 성공
    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            User user = userService.registerUser(userDTO.getEmail(), userDTO.getPwd());
            String currentDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(200, "User Create Success", currentDate));

        } catch (RuntimeException e) {
            if (e.getMessage().equals("Email already exists")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage(404, "User already exists"));
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(400, "User Create Fail"));
        }
    }
    //로그인 - test 성공
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseMessage loginUser(@RequestBody UserDTO userDTO) {
        User user = userService.authenticateUser(userDTO.getEmail(), userDTO.getPwd());

        if (user == null) {
            return new ResponseMessage(404, "User Not Exists");
        }

        if (user.getPassword().equals(userDTO.getPwd())) { // Password should be hashed in production
            return new ResponseMessage(200, "User Login Success", user.getUser_id());
        } else {
            return new ResponseMessage(400, "User Login Fail");
        }
    }

    //회원탈퇴 - test 성공
    @DeleteMapping("/delete/{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseMessage deleteUser(@PathVariable("userId") Long userId) {
        boolean isDeleted = userService.deleteUserById(userId);

        if (isDeleted) {
            return new ResponseMessage(200, "User Delete Success");
        } else {
            return new ResponseMessage(400, "User Delete Fail");
        }
    }
}

