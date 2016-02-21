package com.mypack.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mypack.model.BaseResponseDTO;
import com.mypack.model.BookDTO;

@Controller
@RequestMapping("/myResource")
public class MyController {
	private static final Logger logger = LoggerFactory.getLogger(MyController.class);
	
	@RequestMapping(value = {"/method"}, method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public BaseResponseDTO getRecords() {

		BaseResponseDTO response = new BaseResponseDTO();
		try
		{
			logger.info("in myController");
			List<BookDTO> list=new ArrayList<BookDTO>();
			
			BookDTO bookDTO=new BookDTO();
			bookDTO.setName("Java");
			bookDTO.setAuthor("James gossling");
			list.add(bookDTO);
			
			BookDTO bookDTO1=new BookDTO();
			bookDTO1.setName("Spring");
			bookDTO1.setAuthor("Rod johnson");
			list.add(bookDTO1);
			
			response.setSuccess(true);
			response.setDataBean(list);
			response.setSuccessMessage("Retrieval Success");
		} catch (Exception e)
		{

			logger.error("Exception in fetching", e);
			response.setSuccess(false);
			response.setErrorMessage("Retrieval Failed");

		}

		return response;
	}

}
