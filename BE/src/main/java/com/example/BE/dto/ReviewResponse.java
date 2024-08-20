package com.example.BE.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewResponse {
    private int status;
    private String message;
    private Integer reviewId; // 리뷰 ID가 성공 시에만 포함될 수 있음
}
