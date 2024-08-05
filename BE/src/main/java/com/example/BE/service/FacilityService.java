package com.example.BE.service;

import com.example.BE.entity.Facility;
import com.example.BE.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository facilityRepository;

    public Optional<Facility> getFacilityById(int facId) {
        return facilityRepository.findById(facId);
    }
}
