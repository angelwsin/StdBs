package com.weixin.service.impl;

import java.io.Serializable;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.bean.User;
import com.weixin.dao.UserDao;
import com.weixn.service.UserService;

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

		
        
          
          
}
