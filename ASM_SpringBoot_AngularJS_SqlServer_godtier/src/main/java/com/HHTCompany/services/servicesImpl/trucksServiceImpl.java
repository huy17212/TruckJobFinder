package com.HHTCompany.services.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.trucks;
import com.HHTCompany.mapper.trucksMapper;
import com.HHTCompany.services.trucksService;

@Service
public class trucksServiceImpl implements trucksService {
	
	@Autowired
	trucksMapper trucksMapper;
	
	@Override
	public List<trucks> getAllTrucks() {
		return trucksMapper.getAllTrucks();
	}
	
}
