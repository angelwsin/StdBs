package com.taskjob.dao;

import java.io.Serializable;

import com.taskjob.bean.User;

public interface UserDao extends BaseDao<User> {
	
	  public User getUserById(Serializable id);
	  public User getUserByUsername(String username) ;
	  
} 
