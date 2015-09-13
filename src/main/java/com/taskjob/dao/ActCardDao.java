package com.taskjob.dao;

import java.util.List;

import com.taskjob.bean.ActCard;

public interface ActCardDao extends BaseDao<ActCard>{
	public List<ActCard> findLimit(String hql,String[] params,Object[] values,int start, int max);
}
