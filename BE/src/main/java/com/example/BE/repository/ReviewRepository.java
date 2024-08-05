package com.example.BE.repository;

import com.example.BE.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findByFacilityFacId(int facId);
}

