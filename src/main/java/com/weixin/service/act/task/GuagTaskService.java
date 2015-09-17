package com.weixin.service.act.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixn.service.ActCardService;


@Service("guaTaskService")
public class GuagTaskService {
          @Autowired
	      private ActCardService actCardService;
	    public void loadData(){
	    	  System.out.println(" 加载数据............... ");
	    	      actCardService.findLimit(0,50);
	    	  
	    	  System.out.println("加载数据完成............... ");
	    }
}
