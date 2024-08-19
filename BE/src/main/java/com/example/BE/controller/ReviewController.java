package com.example.BE.controller;

import com.example.BE.dto.ReviewResponse;
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

    //시설별 리뷰 조회
    @GetMapping("/{fac_id}")
    public ResponseEntity<?> getReviewsByFacilityId(@PathVariable("fac_id") Integer fac_id) {
        List<Review> reviews = reviewService.getReviewsByFacilityId(fac_id);

        Map<String, Object> response = new HashMap<>();
        response.put("totalReview", reviews.size());

        for (int i = 0; i < reviews.size(); i++) {
            Map<String, Object> reviewMap = new HashMap<>();
            reviewMap.put("id", i + 1);
            reviewMap.put("review", Map.of(
                    "review_id", reviews.get(i).getReview_id(),
                    "content", reviews.get(i).getReview(),
                    "good_YN", reviews.get(i).isGood_YN(),
                    "date", reviews.get(i).getDate()
            ));
            response.put("review" + (i + 1), reviewMap);
        }

        return ResponseEntity.ok(response);
    }

    //리뷰 작성 api
    @PostMapping("/{fac_id}")
    public ResponseEntity<ReviewResponse> uploadReview(@PathVariable int fac_id, @RequestBody Review review) {
        ReviewResponse response = reviewService.uploadReview(fac_id, review);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}

