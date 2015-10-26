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
		     List<Resource> list =     findObjectByMap(new HashMap<String, Object>());
		    for(int i=0;list!=null&&i<list.size();i++){
		    	    map.put(list.get(i).getValue(),list.get(i).getPermissions());
		      }
		return map;
	}

	  
}
