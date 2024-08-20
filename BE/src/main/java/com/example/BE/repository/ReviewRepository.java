package com.example.BE.repository;

import com.example.BE.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    @Query("SELECT r FROM Review r WHERE r.facility.fac_id = :fac_id")
    List<Review> findReviewsByFacilityId(@Param("fac_id") int facId);
}

