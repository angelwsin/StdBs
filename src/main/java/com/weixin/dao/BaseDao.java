package com.weixin.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.hibernate.SessionFactory;

import com.weixin.bean.Page;

public interface BaseDao<T> {
	 public void save(T entiry);
	 public List<T> findAll();
	 public List<T> findObjectByMap(Map<String,Object> map);
	 public T  findObjectById(Serializable id);
	 public void saveOrUpdate(T entiry);
	 public SessionFactory getSessionFactory() ;
	 public List<T> findAll(String clazz);
	 public List<T> queryByPage(String HQL, Page<T> page);
     public  int  getTotalRows(String hql);
 	public void del(T entity) ;
 	public List<T> queryByPage(String hql, Page<T> page, Map<String, Object> params) ;
 	public List<T> queryByPage(String clazz, Page<T> page, Object bean) ;
 	public int getTotalRows(String hql,Map<String,Object> params);
	public void delByHql(String hql,Object[] values);
	public void update(Object entity);
	public Object  findObjectById(Class<?> clazz,Serializable id);


}
