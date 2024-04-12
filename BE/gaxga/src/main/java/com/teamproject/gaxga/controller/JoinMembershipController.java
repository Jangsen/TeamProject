package com.teamproject.gaxga.controller;

import com.teamproject.gaxga.dto.JoinMembershipForm;
import com.teamproject.gaxga.entity.JoinMembership;
import com.teamproject.gaxga.repository.JoinMembershipRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
public class JoinMembershipController {
    @Autowired
    private JoinMembershipRepository joinMembershipRepository;

    @GetMapping("/joinMembership")
    public String showJoinMembership(){
        return "accountManagement/joinMembership";
    }

    @PostMapping("/joinMembership/create")
    public String createJoinMembership(JoinMembershipForm joinMembershipForm){
        log.info(joinMembershipForm.toString());
        JoinMembership joinMembership = joinMembershipForm.toEntity();
        log.info(joinMembership.toString());
        JoinMembership savedJoinMembership = joinMembershipRepository.save(joinMembership);
        log.info(savedJoinMembership.toString());
        return "";
    }
}
