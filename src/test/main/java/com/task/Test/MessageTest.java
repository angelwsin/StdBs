package com.task.Test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:applicationContext-context.xml")
@Configuration("classpath*:spring-servlet.xml")
public class MessageTest {

	 @Autowired
	      private ApplicationContext applicationContext;
	 private WebApplicationContext webApplicationContext;
	// @Test
	   public void  testMessage(){
		 FileInputStream is;
		try {
			is = new FileInputStream("d:\\message.txt");
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	   }
	   @Test
	   public void test(){
		  
		    
	   }
}
