package com.example.BE.service;

import com.example.BE.entity.Review;
import com.example.BE.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReviewsByFacilityId(int facId) {
        return reviewRepository.findByFacilityFacId(facId);
    }
}

