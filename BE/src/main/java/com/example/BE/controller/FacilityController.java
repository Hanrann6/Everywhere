package com.example.BE.controller;

import com.example.BE.dto.FacilitySearchCriteria;
import com.example.BE.entity.Facility;
import com.example.BE.response.ResponseMessage;
import com.example.BE.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/fac")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    //시설 상세 조회
    @GetMapping("/{facId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getFacilityById(@PathVariable("facId") int facId) {
        try {
            Optional<Facility> facilityOptional = facilityService.getFacilityById(facId);
            if (facilityOptional.isPresent()) {
                Facility facility = facilityOptional.get();
                return ResponseEntity.ok(facility);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage(404, "Facility Not Exists"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(400, "Facility Found Fail"));
        }
    }

    //시설 필터링
    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getFacilities( @RequestParam(value = "buildId", required = false) List<Integer> buildId,
                                            @RequestParam(value = "socketYn", required = false) Boolean socketYn,
                                            @RequestParam(value = "typingYn", required = false) Boolean typingYn,
                                            @RequestParam(value = "whisperYn", required = false) Boolean whisperYn,
                                            @RequestParam(value = "loudYn", required = false) Boolean loudYn,
                                            @RequestParam(value = "teamYn", required = false) Boolean teamYn,
                                            @RequestParam(value = "lieYn", required = false) Boolean lieYn,
                                            @RequestParam(value = "eatYn", required = false) Boolean eatYn,
                                            @RequestParam(value = "convYn", required = false) Boolean convYn,
                                            @RequestParam(value = "cafeYn", required = false) Boolean cafeYn,
                                            @RequestParam(value = "computerYn", required = false) Boolean computerYn,
                                            @RequestParam(value = "printerYn", required = false) Boolean printerYn,
                                            @RequestParam(value = "nonstopYn", required = false) Boolean nonstopYn,
                                            @RequestParam(value = "reserveYn", required = false) Boolean reserveYn,
                                            @RequestParam(value = "seatYn", required = false) Boolean seatYn) {
        try {
            List<Facility> facilities = facilityService.getFacilities(
                    buildId, socketYn, typingYn, whisperYn, loudYn,
                    teamYn, lieYn, eatYn, convYn, cafeYn, computerYn, printerYn, nonstopYn,
                    reserveYn, seatYn
            );
            return ResponseEntity.ok(facilities);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(400, "Facility Found Fail"));
        }
}}
