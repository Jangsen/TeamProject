package com.teamproject.gaxga.dto;


import lombok.AllArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@ToString
public class GabowatdagoForm {
    private Long id;
    private String title;
    private String local;
    private String thema;
}
