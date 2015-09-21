package com.weixin.service.impl;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXMessage;

@Service
public class WXMessageService  implements ApplicationContextAware{
	              private ApplicationContext applicationContext;
	              @Autowired
	              private WXEventMessageApplicationContext wxEventMessageApplicationContext;

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		      this.applicationContext = applicationContext;
	}
	
	public void onMessage(WXMessage message){
		wxEventMessageApplicationContext.publishEvent(new WXMessageEvent(message));
	}

	      
}
