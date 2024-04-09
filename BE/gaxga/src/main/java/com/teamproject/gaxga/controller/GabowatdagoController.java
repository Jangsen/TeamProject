package com.teamproject.gaxga.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class GabowatdagoController {
    @GetMapping("/gabowatdago/gabowatdagoing_p")
    public String newForm(){
        return "gabowatdago/gabowatdagoing_p";
    }
}
