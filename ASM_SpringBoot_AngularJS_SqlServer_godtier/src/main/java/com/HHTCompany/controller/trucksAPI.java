package com.HHTCompany.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.services.trucksService;

import lombok.Getter;

@RestController
@RequestMapping("api/trucks")
public class trucksAPI {
	
	
	@Autowired
	trucksService trucksService;
	
	@CrossOrigin
	@GetMapping("/all")
	ResponseEntity<?> getAllTrucks(){
		return ResponseEntity.ok(trucksService.getAllTrucks());
	}
}
