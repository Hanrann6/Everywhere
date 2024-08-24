package com.example.BE.specification;

import com.example.BE.entity.Facility;
import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;

import java.util.List;

public class FacilitySpecification {

    public static Specification<Facility> withFilters(
            List<Integer> buildId,
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
            Boolean printerYn,
            Boolean nonstopYn,
            Boolean reserveYn,
            Boolean seatYn
    ) {
        return (root, query, criteriaBuilder) -> {
            Predicate predicate = criteriaBuilder.conjunction();

            if (buildId != null && !buildId.isEmpty()) {
                predicate = criteriaBuilder.and(predicate, root.get("build_id").in(buildId));
            }

            if (socketYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("socket_YN"), socketYn));
            }
            if (typingYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("typing_YN"), typingYn));
            }
            if (whisperYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("whisper_YN"), whisperYn));
            }
            if (loudYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("loud_YN"), loudYn));
            }
            if (teamYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("team_YN"), teamYn));
            }
            if (lieYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("lie_YN"), lieYn));
            }
            if (eatYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("eat_YN"), eatYn));
            }
            if (convYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("conv_YN"), convYn));
            }
            if (cafeYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("cafe_YN"), cafeYn));
            }
            if (computerYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("computer_YN"), computerYn));
            }
            if (printerYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("printer_YN"), printerYn));
            }
            if (nonstopYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("nonstop_YN"), nonstopYn));
            }
            if (reserveYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("reserve_YN"), reserveYn));
            }
            if (seatYn != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("seat_YN"), seatYn));
            }

            return predicate;
        };
    }
}