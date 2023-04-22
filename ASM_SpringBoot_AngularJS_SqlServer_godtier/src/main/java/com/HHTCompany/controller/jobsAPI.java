package com.HHTCompany.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.entity.jobs;
import com.HHTCompany.services.jobsServices;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("api/jobs")
@RestController
@Slf4j
public class jobsAPI {
	
	@Autowired
	jobsServices jobsServices;

	@GetMapping("/getAllJobs")
	@CrossOrigin
	ResponseEntity<?> getAllKhachHang(){
		return ResponseEntity.ok(jobsServices.getAllJobs());
	}
	
	@PostMapping("/getAllJobsForContrain")
	@CrossOrigin
	ResponseEntity<?> getAllJobsForContrain(@RequestBody jobs job){
		return ResponseEntity.ok(jobsServices.getAllJobsForContrain(job));
	}
	
}
