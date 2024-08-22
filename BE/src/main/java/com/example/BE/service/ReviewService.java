package com.example.BE.service;

import com.example.BE.dto.ReviewDTO;
import com.example.BE.dto.ReviewResponse;
import com.example.BE.entity.Facility;
import com.example.BE.entity.Review;
import com.example.BE.model.User;
import com.example.BE.repository.FacilityRepository;
import com.example.BE.repository.ReviewRepository;
import com.example.BE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    private UserRepository userRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Review> getReviewsByFacilityId(int fac_id) {
        return reviewRepository.findReviewsByFacilityId(fac_id);
    }

    public Review saveReview(int fac_id, ReviewDTO reviewDTO) {
        // Facility ID 검증
        Facility facility = facilityRepository.findById(fac_id).orElse(null);
        if (facility == null) {
            throw new IllegalArgumentException("Facility not found");
        }

        // User ID 검증
        User user = userRepository.findById((long) reviewDTO.getUser_id()).orElse(null);
        if (user == null) {
            throw new RuntimeException("User not found");
        }


        // Review 객체 생성 및 설정
        Review review = new Review();
        review.setReview(reviewDTO.getReview());
        review.setGood_YN(reviewDTO.isGoodYN());
        review.setDate(Date.valueOf(reviewDTO.getDate())); // 문자열을 java.sql.Date로 변환
        review.setFacility(facility);

        // 리뷰 저장
        return reviewRepository.save(review);
    }
}

