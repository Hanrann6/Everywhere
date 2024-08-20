package com.example.BE.service;

import com.example.BE.dto.ReviewResponse;
import com.example.BE.entity.Facility;
import com.example.BE.entity.Review;
import com.example.BE.repository.FacilityRepository;
import com.example.BE.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Review> getReviewsByFacilityId(int fac_id) {
        return reviewRepository.findReviewsByFacilityId(fac_id);
    }

    public ReviewResponse uploadReview(int fac_id, Review review) {
        ReviewResponse response = new ReviewResponse();

        try {
            // Facility ID 검증
            Facility facility = facilityRepository.findById(fac_id).orElse(null);
            if (facility == null) {
                response.setStatus(400);
                response.setMessage("Facility not found");
                return response;
            }

            // 리뷰 객체의 Facility 설정
            review.setFacility(facility);

            // 리뷰 저장
            Review savedReview = reviewRepository.save(review);

            response.setStatus(200);
            response.setMessage("Review Upload Success");
            response.setReviewId(savedReview.getReview_id());
        } catch (Exception e) {
            response.setStatus(400);
            response.setMessage("Review Upload Fail");
        }

        return response;
    }
}

