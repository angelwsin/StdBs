package com.weixin.service.impl;



import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.dao.BaseDao;
import com.weixin.service.BaseService;

@Service("baseService")
public class BaseServiceImpl<T> implements BaseService<T>{
	        @Resource(name="baseDao")
	        private BaseDao<T> baseDao;

			public void save(T entity) {
				// TODO Auto-generated method stub
				baseDao.save(entity);
			}

			public List<T> queryAll(String clazz) {
				// TODO Auto-generated method stub
				return baseDao.findAll(clazz);
			}
	        
	        
	      

}
