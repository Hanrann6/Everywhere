package com.example.BE.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int facId;
    private int buildId;
    private String facName;
    private String imagepath;
    private String flour;
    private String time;
    private String info;
    private boolean socket_YN;
    private boolean typing_YN;
    private boolean whisper_YN;
    private boolean loud_YN;
    private boolean team_YN;
    private boolean lie_YN;
    private boolean eat_YN;
    private boolean conv_YN;
    private boolean cafe_YN;
    private boolean computer_YN;
    private boolean reserve_YN;
    private boolean seat_YN;

}
