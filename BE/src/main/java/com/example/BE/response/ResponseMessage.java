package com.example.BE.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseMessage {

    private int status;
    private String message;
    private String date;   // 회원가입 시 사용
    private Long userId;   // 로그인 시 사용

    // Constructors
    public ResponseMessage(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseMessage(int status, String message, String date) {
        this.status = status;
        this.message = message;
        this.date = date;
    }

    public ResponseMessage(int status, String message, Long userId) {
        this.status = status;
        this.message = message;
        this.userId = userId;
    }



    // Getters and Setters
}
