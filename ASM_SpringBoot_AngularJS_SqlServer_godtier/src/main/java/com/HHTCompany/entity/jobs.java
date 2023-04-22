package com.HHTCompany.entity;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class jobs {
	private int idJobs;
	private String imgCountry;
	private String logoCompany;
	private String nameCompany;
	private String discription;
	private String hiddenDescription;
	private String timeWork;
	private Boolean isOpen;
	private String header;
	private Double salary;
	
	
}
