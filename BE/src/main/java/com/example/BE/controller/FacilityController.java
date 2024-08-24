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
    public ResponseEntity<?> getFacilities(FacilitySearchCriteria criteria) {
        try {
            List<Facility> facilities = facilityService.getFacilities(
                    criteria.getBuildingIds(), criteria.getSocketYn(), criteria.getTypingYn(), criteria.getWhisperYn(), criteria.getLoudYn(),
                    criteria.getTeamYn(), criteria.getLieYn(), criteria.getEatYn(), criteria.getConvYn(), criteria.getCafeYn(), criteria.getComputerYn(), criteria.getPrinterYn(), criteria.getNonstopYn(),
                    criteria.getReserveYn(), criteria.getSeatYn()
            );
            return ResponseEntity.ok(facilities);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(400, "Facility Found Fail"));
        }
    }
}
