package com.weixin.service;

import java.util.List;
import java.util.Map;

import com.weixin.bean.Page;

public interface BaseService<T> {
	
	  public void save(T entity);
	  
	  public List<T> queryAll(String clazz);
	  public List<T> queryByPage(String clazz,Page<T> page);
	  public List<T> queryByPage(String clazz,Page<T> page,Map<String,Object> params);
	  public List<T> queryByPage(String clazz, Page<T> page,Object bean) ;
		public void del(T entity) ;
	  

}
