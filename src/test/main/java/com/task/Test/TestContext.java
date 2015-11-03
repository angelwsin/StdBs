package com.task.Test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

import com.weixin.service.BaseService;
import com.weixin.service.ScheduleJobService;
import com.weixin.util.SpringUtils;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:applicationContext-context.xml")
@WebAppConfiguration("classpath:spring-servlet.xml")
@TransactionConfiguration(defaultRollback=false)
public class TestContext {
      
	 @Autowired
	      private ScheduleJobService scheduleJobService;
	     @Autowired
	     private SpringUtils springUtils;
	
	         @Test
	         public void test(){
	        	//scheduleJobService.updateStatus("0");
	        	// scheduleJobService.getAll();
	        	 /* for(int i=0;i<100;i++){
	        		 ActCard card = new ActCard();
	        		  card.setAddTime(new Date());
	        		  card.setCard(UUID.randomUUID().toString().split("-")[0]+i);
	        		  card.setStatus(0);
	        		  actCardService.save(card);
	        	  }*/
	        System.out.println((BaseService) springUtils.getBean("userServiceImpl"));	;
	         }
}
