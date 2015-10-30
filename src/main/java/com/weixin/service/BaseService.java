package com.weixin.service;

import java.util.List;

import com.weixin.bean.Page;

public interface BaseService<T> {
	
	  public void save(T entity);
	  
	  public List<T> queryAll(String clazz);
	  public List<T> queryByPage(String clazz,Page<T> page);
	  

}
