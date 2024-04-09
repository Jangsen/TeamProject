package com.teamproject.gaxga.dto;


import com.teamproject.gaxga.entity.Gabowatdago;
import lombok.AllArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@ToString
public class GabowatdagoForm {
    private Long id;
    private String title;
    private String local;
    private String tema;
    private String image;
    private String date;
    private String writer;
    private String content;
    private String address;
    private String de_address;


    public Gabowatdago toEntity() {
        return new Gabowatdago(id,title,local,tema,image,date,writer,content,address,de_address);
    }
}
