package com.example.BE.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReviewDTO {

    private int fac_id; // 시설 ID
    private String review; // 리뷰 내용
    private boolean goodYN; // 긍정 여부
    private String date; // 리뷰 작성 날짜 (형식: yyyy-MM-dd)
    private int user_id; // 사용자 ID
}