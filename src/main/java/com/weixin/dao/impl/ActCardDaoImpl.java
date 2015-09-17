package com.weixin.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.weixin.bean.ActCard;
import com.weixin.dao.ActCardDao;

@Repository
public class ActCardDaoImpl  extends BaseDaoImpl<ActCard> implements ActCardDao{

	@SuppressWarnings("unchecked")
	public List<ActCard> findLimit(String hql,String[] params, Object[] values, int start, int max) {
		// TODO Auto-generated method stub
		     
		     if(params.length!=values.length){
		    	 throw new IllegalArgumentException("非法的参数");
		     }
		       Query query =  getSession().createQuery(hql);
		             for(int i=0;i<params.length;i++){
		            	  query.setParameter(params[i], values[i]);
		             }
		        return  (List<ActCard>)  query.setFirstResult(start).setMaxResults(max).list();
	}

}
