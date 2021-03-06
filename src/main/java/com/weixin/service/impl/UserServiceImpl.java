package com.weixin.service.impl;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.bean.User;
import com.weixin.controller.BaseController;
import com.weixin.dao.UserDao;
import com.weixin.service.UserService;
import com.weixin.util.HttpClientUtils;
import com.weixin.util.JSONUtil;

@Service("userServiceImpl")
public class UserServiceImpl extends BaseServiceImpl<User>  implements UserService{
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
		
		
        
          
          
}
