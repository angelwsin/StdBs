package com.weixin.listener;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.SmartApplicationListener;
import org.springframework.stereotype.Component;

import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXPicSysPhotoMessage;
@Component
public class WXPicSysphotoEventListener implements SmartApplicationListener {

	public void onApplicationEvent(ApplicationEvent event) {
		// TODO Auto-generated method stub
		WXPicSysPhotoMessage msg=  (WXPicSysPhotoMessage) event.getSource();
		  System.out.println(msg.getSendPicsInfo().getPicList().get(0).getPicMd5Sum());
		
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
		return sourceType==WXPicSysPhotoMessage.class;
	}

}
