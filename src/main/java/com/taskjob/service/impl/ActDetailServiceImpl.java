package com.taskjob.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskjob.bean.ActCard;
import com.taskjob.bean.ActDetail;
import com.taskjob.bean.User;
import com.taskjob.dao.ActDetailDao;
import com.taskjob.service.ActCardService;
import com.taskjob.service.ActDetailService;
import com.taskjob.service.UserService;

@Service
public class ActDetailServiceImpl implements ActDetailService{
 
	 @Autowired
	  private ActDetailDao actDetailDao;
	 @Autowired
	 private UserService userService;
	 @Autowired
	 private ActCardService actCardService;
	public void save(ActDetail actDetail) {
		// TODO Auto-generated method stub
		actDetailDao.save(actDetail);
	}
	public ActDetail saveActToUser(User user, ActCard card) {
		// TODO Auto-generated method stub
	  User u= 	userService.getUserById(user.getId());
	  ActCard c  = actCardService.findActCardById(card.getId());
	  ActDetail  d = new ActDetail();
	  d.setAddTime(new Date());
	  d.setStatus(0);
	  d.setActCard(c);
	  d.setUser(u);
	  actDetailDao.save(d);
	  return d;
	}
	public void active(ActDetail card) {
		// TODO Auto-generated method stub
		ActDetail c = actDetailDao.findObjectById(card.getId());
		c.setStatus(2);
	}
	
	
	
	

}
