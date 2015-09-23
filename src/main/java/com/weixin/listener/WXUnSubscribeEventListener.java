package com.weixin.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.SmartApplicationListener;
import org.springframework.stereotype.Component;

import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXUnsubscribeEventMessage;
import com.weixin.service.UserService;

@Component
public class WXUnSubscribeEventListener implements SmartApplicationListener{
	            @Autowired
                private UserService userService;
	public void onApplicationEvent(ApplicationEvent event) {
		// TODO Auto-generated method stub
		 WXUnsubscribeEventMessage message =  (WXUnsubscribeEventMessage) event.getSource();
		  userService.unSubscribe(message);
	}

	public int getOrder() {
		// TODO Auto-generated method stub
		return 0;
	}

	public boolean supportsEventType(Class<? extends ApplicationEvent> eventType) {
		// TODO Auto-generated method stub
		return eventType==WXMessageEvent.class;
	}

	public boolean supportsSourceType(Class<?> sourceType) {
		// TODO Auto-generated method stub
		return sourceType==WXUnsubscribeEventMessage.class;
	}

}
