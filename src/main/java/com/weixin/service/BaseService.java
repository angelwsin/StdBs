package com.weixin.service;

import java.util.List;

public interface BaseService<T> {
	
	  public void save(T entity);
	  
	  public List<T> queryAll(String clazz);
	  

}
