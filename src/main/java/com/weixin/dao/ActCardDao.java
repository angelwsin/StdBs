package com.weixin.dao;

import java.util.List;

import com.weixin.bean.ActCard;

public interface ActCardDao extends BaseDao<ActCard>{
	public List<ActCard> findLimit(String hql,String[] params,Object[] values,int start, int max);
}
