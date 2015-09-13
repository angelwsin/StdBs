package com.taskjob.service.act.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskjob.bean.ActCard;
import com.taskjob.cache.ActDataCache;
import com.taskjob.service.ActCardService;


@Service("guaTaskService")
public class GuagTaskService {
          @Autowired
	      private ActCardService actCardService;
	    public void loadData(){
	    	  System.out.println(" 加载数据............... ");
	    	 List<ActCard> list  = actCardService.findLimit(0,100);
	    	   for(ActCard card:list){
	    		   card.setStatus(1);
	    	   }
	    	  ActDataCache.addAll( list);
	    	  System.out.println("加载数据完成............... ");
	    }
}
