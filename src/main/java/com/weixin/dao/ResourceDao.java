package com.weixin.dao;

import java.util.Map;

import com.weixin.bean.Resource;

public interface ResourceDao extends BaseDao<Resource>{
	public Map<String,String> getSectionMeta();
}
