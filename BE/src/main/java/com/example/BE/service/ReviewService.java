package com.example.BE.service;

import com.example.BE.dto.ReviewDTO;
import com.example.BE.entity.Facility;
import com.example.BE.entity.Review;
import com.example.BE.model.User;
import com.example.BE.repository.FacilityRepository;
import com.example.BE.repository.ReviewRepository;
import com.example.BE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Review> getReviewsByFacilityId(int fac_id) {
        return reviewRepository.findReviewsByFacilityId(fac_id);
    }

    public Review saveReview(Integer fac_id, ReviewDTO reviewDTO) {
        try {
            Review review = new Review();
            review.setReview(reviewDTO.getReview());
            review.setDensity(reviewDTO.getDensity());
            review.setClean(reviewDTO.getClean());
            review.setSatisfy(reviewDTO.getSatisfy());
            review.setDate(reviewDTO.getDate());

            // fac_id를 URL에서 받아와서 설정
            Facility facility = facilityRepository.findById(fac_id)
                    .orElseThrow(() -> new RuntimeException("Facility not found"));
            review.setFacility(facility);

            review.setBuild_id(facility.getBuild_id());

            // userId는 DTO에서 받아와서 설정
            User user = new User();
            user.setUser_id(reviewDTO.getUser_id());
            review.setUser(user);

            // 리뷰 저장
            return reviewRepository.save(review);
        } catch (Exception e) {
            throw new RuntimeException("Review upload failed");
        }
    }
}

