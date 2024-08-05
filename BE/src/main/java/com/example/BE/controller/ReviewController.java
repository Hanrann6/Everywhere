package com.example.BE.controller;

import com.example.BE.entity.Review;
import com.example.BE.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/fac/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/{facId}")
    public ResponseEntity<?> getReviewsByFacilityId(@PathVariable int facId) {
        List<Review> reviews = reviewService.getReviewsByFacilityId(facId);

        Map<String, Object> response = new HashMap<>();
        response.put("totalReview", reviews.size());

        for (int i = 0; i < reviews.size(); i++) {
            Map<String, Object> reviewMap = new HashMap<>();
            reviewMap.put("id", i + 1);
            reviewMap.put("review", Map.of(
                    "reviewId", reviews.get(i).getReviewId(),
                    "content", reviews.get(i).getReview(),
                    "goodYN", reviews.get(i).isGood_YN(),
                    "date", reviews.get(i).getDate(),
                    "userId", reviews.get(i).getUser() != null ? reviews.get(i).getUser().getUser_id() : null
            ));
            response.put("review" + (i + 1), reviewMap);
        }

        return ResponseEntity.ok(response);
    }
}

