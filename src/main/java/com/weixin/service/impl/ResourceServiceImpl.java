package com.weixin.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixin.bean.Resource;
import com.weixin.dao.ResourceDao;
import com.weixin.service.ResourceService;
@Service
public class ResourceServiceImpl extends BaseServiceImpl<Resource> implements ResourceService{
	@Autowired
        private ResourceDao resourceDao;
	public Map<String, String> getSectionMeta() {
		// TODO Auto-generated method stub
		return resourceDao.getSectionMeta();
	}

}
