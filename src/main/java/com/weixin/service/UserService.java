package com.weixin.service;

import java.io.Serializable;

import com.weixin.bean.User;
import com.weixin.message.bean.WXSubscribeEventMessage;
import com.weixin.message.bean.WXUnsubscribeEventMessage;


public interface UserService {
	
	public void save(User user);
	
	public User getUserById(Serializable id);
	public User getUserByUsername(String username) ;
	 public void saveOrUpdate(User user);
	public User   subscribe(WXSubscribeEventMessage subMessage);
    public void unSubscribe(WXUnsubscribeEventMessage message);
}
