package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.HHTCompany.entity.jobs;

@Mapper
public interface jobsMapper {
		
	public List<jobs> getAllJobs();
	public List<jobs> getAllJobsForContrain(jobs jobs);
	
}
