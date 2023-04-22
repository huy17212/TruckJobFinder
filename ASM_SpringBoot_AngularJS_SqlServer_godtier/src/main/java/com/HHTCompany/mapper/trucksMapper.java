package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.HHTCompany.entity.trucks;

@Mapper
public interface trucksMapper {
	
	public List<trucks> getAllTrucks();
		
}
