package com.example.BE.controller;

import com.example.BE.entity.Facility;
import com.example.BE.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fac")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    //시설 상세 조회 api - test 성공
    @GetMapping("/{fac_id}")
    public ResponseEntity<?> getFacilityById(@PathVariable("fac_id") Integer fac_id) {
        Optional<Facility> facility = facilityService.getFacilityById(fac_id);
        if (facility.isPresent()) {
            return ResponseEntity.ok(facility.get());
        } else {
            return ResponseEntity.status(404).body("Facility not found");
        }
    }

    @GetMapping("/fac")
    public List<Facility> getFacilities(
            @RequestParam(required = false) List<Integer> buildingIds,
            @RequestParam(required = false) Boolean socketYn,
            @RequestParam(required = false) Boolean typingYn,
            @RequestParam(required = false) Boolean whisperYn,
            @RequestParam(required = false) Boolean loudYn,
            @RequestParam(required = false) Boolean teamYn,
            @RequestParam(required = false) Boolean lieYn,
            @RequestParam(required = false) Boolean eatYn,
            @RequestParam(required = false) Boolean convYn,
            @RequestParam(required = false) Boolean cafeYn,
            @RequestParam(required = false) Boolean computerYn,
            @RequestParam(required = false) Boolean reserveYn,
            @RequestParam(required = false) Boolean seatYn
    ) {
        return facilityService.getFacilities(buildingIds, socketYn, typingYn, whisperYn, loudYn, teamYn, lieYn, eatYn, convYn, cafeYn, computerYn, reserveYn, seatYn);
    }
}
