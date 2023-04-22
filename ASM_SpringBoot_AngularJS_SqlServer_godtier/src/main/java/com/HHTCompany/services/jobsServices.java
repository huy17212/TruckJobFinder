package com.HHTCompany.services;

import java.util.List;

import com.HHTCompany.entity.jobs;

public interface jobsServices {
	
	public List<jobs> getAllJobs();
	public List<jobs> getAllJobsForContrain(jobs jobs);
	
	
}
