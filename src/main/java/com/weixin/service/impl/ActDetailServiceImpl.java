package com.weixin.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixin.bean.ActCard;
import com.weixin.bean.ActDetail;
import com.weixin.bean.User;
import com.weixin.dao.ActDetailDao;
import com.weixn.service.ActCardService;
import com.weixn.service.ActDetailService;
import com.weixn.service.UserService;

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
