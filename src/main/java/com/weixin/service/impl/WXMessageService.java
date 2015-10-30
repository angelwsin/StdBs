package com.weixin.service.impl;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ApplicationEvent;
import org.springframework.stereotype.Service;

import com.weixin.util.WXEventMessageApplicationContext;

@Service
public class WXMessageService  implements ApplicationContextAware{
	              private ApplicationContext applicationContext;
	              @Autowired
	              private WXEventMessageApplicationContext wxEventMessageApplicationContext;

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		// TODO Auto-generated method stub
		      this.applicationContext = applicationContext;
	}
	/*
	 * 利用spring的事件驱动处理
	 * 接受微信信息处理的总入口
	 */
	public void onMessage(ApplicationEvent  event){
		wxEventMessageApplicationContext.publishEvent(event);
	}

	      
}
