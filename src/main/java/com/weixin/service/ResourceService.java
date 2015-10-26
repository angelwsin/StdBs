package com.weixin.service;

import java.util.Map;

import com.weixin.bean.Resource;

public interface ResourceService extends BaseService<Resource> {
	public Map<String, String> getSectionMeta() ;
}
