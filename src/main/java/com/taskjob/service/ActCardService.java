package com.taskjob.service;

import java.io.Serializable;
import java.util.List;

import com.taskjob.bean.ActCard;

public interface ActCardService {
        
	   public void save(ActCard card);
	   public List<ActCard> findLimit(int start,int max);
	   public ActCard findActCardById(Serializable id);
}
