package com.weixin.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.weixin.bean.Resource;
import com.weixin.dao.ResourceDao;
@Repository
public class ResourceDaoImpl extends BaseDaoImpl<Resource> implements ResourceDao{

	@SuppressWarnings("unchecked")
	public Map<String, String> getSectionMeta() {
		// TODO Auto-generated method stub
		     Map<String,String> map = new HashMap<String,String>();
		     List<Object[]>   list =   getSession().createQuery("select value,permissions from "+getClass()).list();
		      for(int i=0;list!=null&&i<list.size();i++){
		    	    map.put((String)list.get(i)[0],(String) list.get(i)[1]);
		    	    System.out.println((String)list.get(i)[0]);
		      }
		return map;
	}

	  
}
