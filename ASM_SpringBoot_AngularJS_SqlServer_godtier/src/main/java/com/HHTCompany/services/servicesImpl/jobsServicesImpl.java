package com.HHTCompany.services.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.jobs;
import com.HHTCompany.mapper.jobsMapper;
import com.HHTCompany.services.jobsServices;

@Service
public class jobsServicesImpl implements jobsServices {
	
	@Autowired
	jobsMapper jobsMapper;
	
	@Override
	public List<jobs> getAllJobs() {
		return jobsMapper.getAllJobs();
	}

	@Override
	public List<jobs> getAllJobsForContrain(jobs jobs) {
		return jobsMapper.getAllJobsForContrain(jobs);
	}
	
}
