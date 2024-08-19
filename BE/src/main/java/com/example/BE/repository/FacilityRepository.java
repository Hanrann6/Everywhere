package com.example.BE.repository;

import com.example.BE.entity.Facility;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FacilityRepository extends JpaRepository<Facility, Integer> {
    List<Facility> findAll(Specification<Facility> spec);
}

