package com.HHTCompany.services.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.reviews;
import com.HHTCompany.mapper.reviewsMapper;
import com.HHTCompany.services.reviewsService;

@Service
public class reviewsServiceImpl implements reviewsService {
		
	@Autowired
	reviewsMapper reviewsMapper;
	
	@Override
	public List<reviews> getAllReviews() {
		return reviewsMapper.getAllReviews();
	}
	
	
}
