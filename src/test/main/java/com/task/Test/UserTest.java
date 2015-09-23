package com.task.Test;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

import com.weixin.bean.User;
import com.weixin.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:applicationContext-context.xml")
@WebAppConfiguration("classpath:spring-servlet.xml")
@TransactionConfiguration(defaultRollback=false)
public class UserTest {
	@Autowired
	   private UserService userService;
	  @Test
        public void saveTestP(){
        
        	
        }
}
