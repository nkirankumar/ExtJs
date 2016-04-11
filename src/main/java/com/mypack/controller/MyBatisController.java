package com.mypack.controller;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mypack.mapper.Student;
import com.mypack.model.BaseResponseDTO;

@Controller
@RequestMapping("/myBatis")
public class MyBatisController {
	private static final Logger logger = LoggerFactory
			.getLogger(MyBatisController.class);

	@RequestMapping(value = { "/insert" }, method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public BaseResponseDTO insert() {

		BaseResponseDTO response = new BaseResponseDTO();
		try {
			logger.info("in MyBatisController");
			Reader reader = Resources.getResourceAsReader("mybatis/SqlMapConfig.xml");
			SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder()
					.build(reader);
			SqlSession session = sqlSessionFactory.openSession();

			// Create a new student object
			Student student = new Student("Mohammad", "It", 80, 984803322,
					"Mohammad@gmail.com");

			// Insert student data
			session.insert("Student1.insert", student);
			logger.info("record inserted successfully");
			session.commit();
			session.close();
			response.setSuccess(true);
			// response.setDataBean(list);
			response.setSuccessMessage("record inserted successfully");
		} catch (Exception e) {

			logger.error("Exception in fetching", e);
			response.setSuccess(false);
			response.setErrorMessage("Retrieval Failed");

		}

		return response;
	}

}
