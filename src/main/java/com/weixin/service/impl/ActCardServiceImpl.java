package com.weixin.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.bean.ActCard;
import com.weixin.cache.ActDataCache;
import com.weixin.dao.ActCardDao;
import com.weixin.service.ActCardService;

@Service("actCardServiceImpl")
public class ActCardServiceImpl implements ActCardService{
	
	      @Autowired
	       private ActCardDao  actCardDao;

	public void save(ActCard card) {
		// TODO Auto-generated method stub
		actCardDao.save(card);
	}

	@Transactional(isolation=Isolation.SERIALIZABLE,propagation=Propagation.REQUIRED)
	public List<ActCard> findLimit(int start, int max) {
		// TODO Auto-generated method stub
		  String hql = "from "+ ActCard.class.getSimpleName()+" where status = :status";
		  List<ActCard> list  =  actCardDao.findLimit(hql, new String[]{"status"}, new Object[]{0}, start, max);
   	   for(ActCard card:list){
   		    System.out.println(card.getCard());
   		   card.setStatus(1);
   	   }
   	  ActDataCache.addAll( list);
		 return list;
	}

	public ActCard findActCardById(Serializable id) {
		// TODO Auto-generated method stub
		return actCardDao.findObjectById(id);
	}
	        

}
