package com.example.BE.controller;

import com.example.BE.dto.ReviewDTO;
import com.example.BE.entity.Review;
import com.example.BE.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/fac/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    //시설별 리뷰 조회
    @GetMapping("/{fac_id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getReviewsByFacilityId(@PathVariable("fac_id") Integer fac_id) {
        try {
            List<Review> reviews = reviewService.getReviewsByFacilityId(fac_id);

            List<Map<String, Object>> response = new ArrayList<>();

            for (Review review : reviews) {
                Map<String, Object> reviewMap = new HashMap<>();
                reviewMap.put("review_id", review.getReview_id());
                reviewMap.put("content", review.getReview());
                reviewMap.put("density", review.getDensity());
                reviewMap.put("clean", review.getClean());
                reviewMap.put("satisfy", review.getSatisfy());
                reviewMap.put("date", review.getDate());

                response.add(reviewMap);
            }

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // 예외 발생 시
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", 400);
            errorResponse.put("message", "Review Found Fail");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    //리뷰 작성 api
    @PostMapping("/{fac_id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> postReview(@PathVariable("fac_id") Integer fac_id, @RequestBody ReviewDTO reviewDTO) {
        try {
            // 리뷰 작성 서비스 호출
            Review savedReview = reviewService.saveReview(fac_id, reviewDTO);

            // 성공 응답 생성
            Map<String, Object> successResponse = new HashMap<>();
            successResponse.put("status", 200);
            successResponse.put("message", "Review Upload Success");
            successResponse.put("reviewId", savedReview.getReview_id());

            return ResponseEntity.ok(successResponse);
        } catch (Exception e) {
            // 실패 응답 생성
            Map<String, Object> failureResponse = new HashMap<>();
            failureResponse.put("status", 400);
            failureResponse.put("message", "Review Upload Fail");

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(failureResponse);
        }
    }

}

