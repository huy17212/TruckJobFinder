package com.HHTCompany.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.services.reviewsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/reviews")
@Slf4j
public class reviewsAPI {
	
	@Autowired
	reviewsService reviewsService;
	
	@GetMapping("/getAllReviews")
	@CrossOrigin
	ResponseEntity<?> getAllReviews(){
		return ResponseEntity.ok(reviewsService.getAllReviews());
	}
	
}
