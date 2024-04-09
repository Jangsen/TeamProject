package com.teamproject.gaxga.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Gabowatdago {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String title;
    @Column
    private String local;
    @Column
    private String tema;
    @Column
    @Nullable
    private String image;
    @Column
    private String date;
    @Column
    private String writer;
    @Column
    private String content;
    @Column
    private String address;
    @Column
    private String de_address;


}
