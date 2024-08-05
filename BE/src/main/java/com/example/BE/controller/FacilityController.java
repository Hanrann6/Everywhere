package com.example.BE.controller;

import com.example.BE.entity.Facility;
import com.example.BE.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/fac")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    //시설 상세 조회 api - test 성공
    @GetMapping("/{facId}")
    public ResponseEntity<?> getFacilityById(@PathVariable int facId) {
        Optional<Facility> facility = facilityService.getFacilityById(facId);
        if (facility.isPresent()) {
            return ResponseEntity.ok(facility.get());
        } else {
            return ResponseEntity.status(404).body("Facility not found");
        }
    }
}
