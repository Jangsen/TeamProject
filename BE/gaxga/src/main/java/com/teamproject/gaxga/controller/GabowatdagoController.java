package com.teamproject.gaxga.controller;

import com.teamproject.gaxga.dto.GabowatdagoForm;
import com.teamproject.gaxga.entity.Gabowatdago;
import com.teamproject.gaxga.repository.GabowatdagoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
public class GabowatdagoController {
    @Autowired
    private GabowatdagoRepository gabowatdagoRepository;
    @GetMapping("/gabowatdago/gabowatdagoing_p")
    public String newForm(){
        return "gabowatdago/gabowatdagoing_p";
    }

    @PostMapping("/gabowatdago/create")
    public String create(GabowatdagoForm form) {
        log.info(form.toString());
        //1. DTO를 엔티티로
        Gabowatdago gabowatdago = form.toEntity();
        log.info(gabowatdago.toString());
        //2. 레퍼지토리로 엔티티를 DB에 저장
        Gabowatdago saved = gabowatdagoRepository.save(gabowatdago);
        log.info(saved.toString());
    return "";
    }
}
