package com.example.BE.service;

import com.example.BE.entity.Facility;
import com.example.BE.repository.FacilityRepository;
import com.example.BE.specification.FacilitySpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository facilityRepository;

    public Optional<Facility> getFacilityById(int fac_id) {
        return facilityRepository.findById(fac_id);
    }

    public List<Facility> getFacilities(
            List<Integer> buildingIds,  // 변경: List<Integer>로 buildingIds
            Boolean socketYn,
            Boolean typingYn,
            Boolean whisperYn,
            Boolean loudYn,
            Boolean teamYn,
            Boolean lieYn,
            Boolean eatYn,
            Boolean convYn,
            Boolean cafeYn,
            Boolean computerYn,
            Boolean reserveYn,
            Boolean seatYn
    ) {
        Specification<Facility> spec = FacilitySpecification.withFilters(
                buildingIds, socketYn, typingYn, whisperYn, loudYn, teamYn, lieYn, eatYn, convYn, cafeYn, computerYn, reserveYn, seatYn
        );
        return facilityRepository.findAll(spec);
    }

}
