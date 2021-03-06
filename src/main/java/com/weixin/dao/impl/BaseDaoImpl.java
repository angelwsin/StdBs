package com.weixin.dao.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.weixin.bean.Page;
import com.weixin.dao.BaseDao;
/*
 * Hibernate3 dao层支持事物  Hibernate4 dao层不支持事物
 */
@Repository(value="baseDao")
@Transactional
public  class BaseDaoImpl<T> implements BaseDao<T> {
	
	    private SessionFactory sessionFactory;
	    protected Class<T> clazz;

		@SuppressWarnings({ "unchecked", "rawtypes" })
		public BaseDaoImpl() {
			Class type = getClass();
			if (type != BaseDaoImpl.class) {
				Class parent = type.getSuperclass();
				while (parent != BaseDaoImpl.class) {
					parent = (type = parent).getSuperclass();
				}
				Type[] types = ((ParameterizedType) type.getGenericSuperclass()).getActualTypeArguments();
				if (types.length > 0) {
					this.clazz = (Class<T>) types[0];
				}
			}
		}

		public Class<T> getClazz() {
			return this.clazz;
		}
	    
	    
      public SessionFactory getSessionFactory() {
			return sessionFactory;
		}

        @Resource(name="sessionFactory")
		public void setSessionFactory(SessionFactory sessionFactory) {
			this.sessionFactory = sessionFactory;
		}
        
        public Session getSession(){
        	return    this.sessionFactory.getCurrentSession();
        }

	  public void save(T entiry) {
    	// TODO Auto-generated method stub
    	  getSession().save(entiry);
    }
	@SuppressWarnings("unchecked")
	public List<T> findAll(){
	Criteria criteria=getSession().createCriteria(getClazz());
		 return (List<T>)	criteria.list();
		//  return (List<T>) getSession().createQuery(" from  "+getClazz().getSimpleName()).list();
	}
	
	@SuppressWarnings("unchecked")
	public List<T> findObjectByMap(Map<String,Object> map){
		Criteria criteria=getSession().createCriteria(getClazz());
		for(String key:map.keySet()){
			 criteria.add(Restrictions.eq(key, map.get(key)));
		}
		return (List<T>)criteria.list();
	}
	
	
	 public void saveOrUpdate(T entiry){
		   getSession().saveOrUpdate(entiry);
	 }
	 @SuppressWarnings("unchecked")
	public T  findObjectById(Serializable id){
		                 
		      return   (T) getSession().get(getClazz(),id);
	 }

	@SuppressWarnings("unchecked")
	public List<T> findAll(String clazz) {
		// TODO Auto-generated method stub
		return getSession().createQuery("from "+clazz).list();
	}

	@SuppressWarnings("unchecked")
	public List<T> queryByPage(String hql,Page<T> page) {
		// TODO Auto-generated method stub
		Query query = getSession().createQuery(hql);
		query.setFirstResult(page.getStartPage());
		query.setMaxResults(page.getPageSize());
		page.setList(query.list());
		return query.list();
	}

	public int getTotalRows(String hql) {
		// TODO Auto-generated method stub
		 String Hql = "select count(0) "+hql;
		Query query = getSession().createQuery(Hql);
		 Long c =(Long) query.uniqueResult();
		return c.intValue();
	}
	public int getTotalRows(String hql,Map<String,Object> params) {
		// TODO Auto-generated method stub
		 StringBuffer Hql =new StringBuffer( "select count(0) ").append(hql);
		Query query = getSession().createQuery(Hql.toString());
		if(params!=null&&params.keySet().size()>0){
			 for(String key:params.keySet()){
				   query.setParameter(key, params.get(key));
			 }
		 }
		 Long c =(Long) query.uniqueResult();
		return c.intValue();
	}

	public void del(T entity) {
		// TODO Auto-generated method stub
		getSession().delete(entity);
	}

	@SuppressWarnings("unchecked")
	public List<T> queryByPage(String hql, Page<T> page, Map<String, Object> params) {
		// TODO Auto-generated method stub
		Query query = getSession().createQuery(hql);
		 if(params!=null&&params.keySet().size()>0){
			 for(String key:params.keySet()){
				   query.setParameter(key, params.get(key));
			 }
		 }
		query.setFirstResult(page.getStartPage());
		query.setMaxResults(page.getPageSize());
		page.setList(query.list());
		return query.list();
	}

	@SuppressWarnings("unchecked")
	public List<T> queryByPage(String hql, Page<T> page, Object bean) {
		// TODO Auto-generated method stub
		Query query = getSession().createQuery(hql);
		 if(bean!=null){
			query.setProperties(bean);
		 }
		query.setFirstResult(page.getStartPage());
		query.setMaxResults(page.getPageSize());
		page.setList(query.list());
		return query.list();
	}

	public void delByHql(String hql, Object[] values) {
		// TODO Auto-generated method stub
		 Query query =  getSession().createQuery(hql);
		 for(int i=0;values!=null&&i<values.length;i++){
			   query.setParameter(i, values[i]);
		 }
		 query.executeUpdate();
	}

	public void update(Object entity) {
		// TODO Auto-generated method stub
		getSession().update(entity);
	}
	public Object  findObjectById(Class<?> clazz,Serializable id){
	      return   getSession().get(clazz,id);
}
	
	 
	 
	
	
}
