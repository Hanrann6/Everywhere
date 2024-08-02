package com.example.BE.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class User {

    @Id
    private int id;

    @Column(unique=true)
    private String email;

    @Column
    private String password;


}

