package com.weixin.service.impl;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.Filter;

import org.springframework.stereotype.Service;

import com.weixin.bean.User;
import com.weixin.controller.BaseController;
import com.weixin.dao.UserDao;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.message.bean.WXCustTextMessage;
import com.weixin.message.bean.WXCustTextRespMessage;
import com.weixin.message.bean.WXNewItmesMessage;
import com.weixin.message.bean.WXNewsRespMessage;
import com.weixin.message.bean.WXSubscribeEventMessage;
import com.weixin.message.bean.WXUnsubscribeEventMessage;
import com.weixin.service.UserService;
import com.weixin.util.HttpClientUtils;
import com.weixin.util.JSONUtil;
import com.weixin.util.WXMessageFactory;

@Service("userServiceImpl")
public class UserServiceImpl  implements UserService{
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
			BaseController.writeToResponse(subMessage.getResponse(), "success");
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
			 ites.setPicUrl("http://angelwsin.tunnel.mobi/weixin/upload/image/1443055335165.jpg");
			 ites.setTitle("关注成功请绑定");
			 ites.setUrl("http://angelwsin.tunnel.mobi/weixin/home/login");
			 news.addNewItmes(ites);
			 WXCustTextRespMessage text = new WXCustTextRespMessage();
       	   text.setTouser(subMessage.getFromUserName());
       	   text.setMsgtype(WXBaseMessage.MSG_TEXT);
       	   WXCustTextMessage t = new WXCustTextMessage();
       	   t.setContent("你是狗");
       	   text.setText(t);
       	   Map<String,String> params = new HashMap<String,String>();
       	   System.out.println(TokenService.acessToken());
       	   params.put("access_token", TokenService.acessToken());
       	   params.put("body", JSONUtil.encode(text));
       	  System.out.println(HttpClientUtils.doPost("https://api.weixin.qq.com/cgi-bin/message/custom/send", null, params, true)); 
			return user;
		}
		public void unSubscribe(WXUnsubscribeEventMessage message) {
			// TODO Auto-generated method stub
			 User user  =userDaoImpl.getUserByUsername(message.getFromUserName());	 
			          user.setStatus(0);
		}

		
        
          
          
}
