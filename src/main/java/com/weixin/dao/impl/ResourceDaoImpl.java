package com.weixin.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.weixin.bean.Resource;
import com.weixin.bean.ResourceMeta;
import com.weixin.dao.ResourceDao;
import com.weixin.service.realm.ChainDefinitionSectionMetaSourceService;
@Repository
public class ResourceDaoImpl extends BaseDaoImpl<Resource> implements ResourceDao{

	
	public Map<String, String> getSectionMeta() {
		// TODO Auto-generated method stub
		     Map<String,String> map = new HashMap<String,String>();
		     List<Resource> list =     findObjectByMap(new HashMap<String, Object>());
		    for(int i=0;list!=null&&i<list.size();i++){
		    	StringBuffer perms = new StringBuffer();
		    	  if(ChainDefinitionSectionMetaSourceService.PERMS.equals(list.get(i).getType())){
		    		  perms.append( ChainDefinitionSectionMetaSourceService.PERMS).append('[').append(ChainDefinitionSectionMetaSourceService.USER);
		    		  Set<ResourceMeta> ps =   list.get(i).getPermissions();
		    		  getPermis(perms,ps);
		    	  }else if(ChainDefinitionSectionMetaSourceService.ROLES.equals(list.get(i).getType())){
		    		  perms.append(ChainDefinitionSectionMetaSourceService.ROLES).append('[');
		    		  Set<ResourceMeta> ps =   list.get(i).getPermissions();
		    		  getPermis(perms,ps);
		    	  }else{
		    		  perms.append(list.get(i).getType());
		    	  }
		    	  map.put(list.get(i).getValue(),perms.toString());
		      }
		return map;
	}
	
	private void  getPermis(StringBuffer perms,Set<ResourceMeta> ps){
		   if(ps==null){
			   return ;
		   }
		for(ResourceMeta s:ps){
      	  perms.append(s.getPermItem()).append(',') ;
        }
        if(perms.lastIndexOf(",")!=-1){
      	  perms.deleteCharAt(perms.lastIndexOf(","));
        }
        perms.append(']');
	}

	  
}
