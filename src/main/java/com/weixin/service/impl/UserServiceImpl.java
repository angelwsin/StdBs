package com.weixin.service.impl;

import java.io.Serializable;
import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.bean.User;
import com.weixin.controller.BaseController;
import com.weixin.dao.UserDao;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.message.bean.WXNewItmesMessage;
import com.weixin.message.bean.WXNewsRespMessage;
import com.weixin.message.bean.WXSubscribeEventMessage;
import com.weixin.message.bean.WXUnsubscribeEventMessage;
import com.weixin.service.UserService;
import com.weixin.util.WXMessageFactory;

@Service("userServiceImpl")
public class UserServiceImpl  implements UserService {
          private UserDao userDaoImpl;
         
		public UserDao getUserDaoImpl() {
			return userDaoImpl;
		}
        @Resource(name="userDaoImpl")
		public void setUserDaoImpl(UserDao userDaoImpl) {
			this.userDaoImpl = userDaoImpl;
		}

		public void save(User user) {
			// TODO Auto-generated method stub
			this.userDaoImpl.save(user);
		}
		
		public User getUserById(Serializable id) {
			// TODO Auto-generated method stub
			return userDaoImpl.getUserById(id);
		}
		public User getUserByUsername(String username) {
			// TODO Auto-generated method stub
			return userDaoImpl.getUserByUsername(username);
		}
		public void saveOrUpdate(User user) {
			// TODO Auto-generated method stub
			userDaoImpl.saveOrUpdate(user);
		}
		public User subscribe(WXSubscribeEventMessage subMessage) {
			// TODO Auto-generated method stub
			User  user = new User();
			user.setAddTime(new Date());
			user.setUsername(subMessage.getFromUserName());
			user.setStatus(1);
			userDaoImpl.save(user);
			WXNewsRespMessage news = new WXNewsRespMessage();
			 news.setCreateTime(new Date().getTime());
			 news.setArticleCount(1);
			 news.setFromUserName(subMessage.getToUserName());
			 news.setMsgType(WXBaseMessage.MSG_NEWS);
			 news.setToUserName(subMessage.getFromUserName());
			 WXNewItmesMessage ites = new WXNewItmesMessage();
			 ites.setDescription("关注成功请绑定");
			 ites.setPicUrl("http://angelwsin.tunnel.mobi/weixin/upload/image/1442993108074.jpg");
			 ites.setTitle("关注成功请绑定");
			 ites.setUrl("http://angelwsin.tunnel.mobi/weixin/home/login");
			 news.addNewItmes(ites);
			BaseController.writeToResponse(subMessage.getResponse(), WXMessageFactory.getMessageToXmlDefault(news));
			return user;
		}
		public void unSubscribe(WXUnsubscribeEventMessage message) {
			// TODO Auto-generated method stub
			 User user  =userDaoImpl.getUserByUsername(message.getFromUserName());	 
			          user.setStatus(0);
		}

		
        
          
          
}
