package com.weixin.event;

import org.springframework.context.ApplicationEvent;

@SuppressWarnings("serial")
public class RegisterMessageEvent extends ApplicationEvent{

	public RegisterMessageEvent(Object source) {
		super(source);
		// TODO Auto-generated constructor stub
	}

}
