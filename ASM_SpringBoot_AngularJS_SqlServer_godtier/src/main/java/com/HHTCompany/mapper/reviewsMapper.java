package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.HHTCompany.entity.reviews;

@Mapper
public interface reviewsMapper {
	
	public List<reviews> getAllReviews();
	
}
