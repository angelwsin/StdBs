package com.taskjob.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskjob.bean.ActCard;
import com.taskjob.dao.ActCardDao;
import com.taskjob.service.ActCardService;

@Service("actCardServiceImpl")
public class ActCardServiceImpl implements ActCardService{
	
	      @Autowired
	       private ActCardDao  actCardDao;

	public void save(ActCard card) {
		// TODO Auto-generated method stub
		actCardDao.save(card);
	}

	public List<ActCard> findLimit(int start, int max) {
		// TODO Auto-generated method stub
		  String hql = "from "+ ActCard.class.getSimpleName()+" where status = :status";
		  List<ActCard> list  =  actCardDao.findLimit(hql, new String[]{"status"}, new Object[]{0}, start, max);
		  if(list==null){
			  return new ArrayList<ActCard>();
		  }
		 return list;
	}

	public ActCard findActCardById(Serializable id) {
		// TODO Auto-generated method stub
		return actCardDao.findObjectById(id);
	}
	        

}
