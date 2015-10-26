package com.weixin.event;

import org.springframework.context.ApplicationEvent;

import com.weixin.bean.Resource;

@SuppressWarnings("serial")
public class SectionMetaEvent extends ApplicationEvent{

	public SectionMetaEvent(Resource source) {
		super(source);
		// TODO Auto-generated constructor stub
	}

}
