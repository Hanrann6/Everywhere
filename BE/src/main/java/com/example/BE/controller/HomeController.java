package com.example.BE.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // This refers to src/main/resources/templates/home.html
    }

    @GetMapping("/home")
    public String homeLink() {
        return "home"; // This refers to src/main/resources/templates/home.html
    }
}
