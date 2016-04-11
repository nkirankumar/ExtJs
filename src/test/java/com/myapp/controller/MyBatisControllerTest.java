package com.myapp.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("/test-servlet-context.xml")
public class MyBatisControllerTest {

	@Autowired
	private WebApplicationContext wac;
	private MockMvc mockMvc;

	@Before
	public void setup() {

		this.mockMvc = webAppContextSetup(this.wac).build();		
	}
	
	@Test
	public void getRecords() {

		try
		{
			//this.mockMvc.perform(get("/myResource/method").accept(MediaType.APPLICATION_JSON)).andDo(print());
			this.mockMvc.perform(post("/myBatis/insert").accept(MediaType.APPLICATION_JSON)).andDo(print());

		} catch (Exception e)
		{
			e.printStackTrace();
		}
	
	}
	
}