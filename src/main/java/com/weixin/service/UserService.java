package com.weixin.service;

import java.io.Serializable;

import com.weixin.bean.User;


public interface UserService extends BaseService<User>{
	
	public void save(User user);
	
	public User getUserById(Serializable id);
	public User getUserByUsername(String username) ;
	 public void saveOrUpdate(User user);
}
