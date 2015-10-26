package com.weixin.service.realm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.weixin.service.ResourceService;

public class SimpleFilterChainDefinitionsSectionMetaService extends AbstractChainDefinitionSectionMetaSource{

	
	 @Autowired
	  private ResourceService resourceService;
	public Map<String, String> initOtherPermission() {
		// TODO Auto-generated method stu
		return resourceService.getSectionMeta();
	}

}
