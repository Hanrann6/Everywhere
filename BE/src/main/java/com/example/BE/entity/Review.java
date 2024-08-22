package com.example.BE.entity;

import com.example.BE.model.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int review_id;

    @Column(name = "review")
    private String review;

    @Column(name = "good_YN")
    private boolean good_YN;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "fac_id")
    private Facility facility;

    @Column(name = "build_id")
    private int build_id;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}