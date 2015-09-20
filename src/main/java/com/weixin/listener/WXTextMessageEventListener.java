package com.weixin.listener;


import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.SmartApplicationListener;
import org.springframework.stereotype.Component;

import com.weixin.controller.BaseController;
import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXTextReqMessage;
import com.weixin.message.bean.WXTextRespMessage;
import com.weixin.util.WXMessageFactory;


@Component
public class WXTextMessageEventListener implements SmartApplicationListener{
              
	public void onApplicationEvent(ApplicationEvent event) {
		// TODO Auto-generated method stub
	
			WXTextReqMessage message= (WXTextReqMessage) event.getSource();
			 WXTextRespMessage msg = new WXTextRespMessage();
			 msg.setFromUserName(message.getToUserName());
			 msg.setToUserName(message.getFromUserName());
			 Date now = new Date();
			 msg.setCreateTime(now.getTime());
			 msg.setMsgType("text");
			 msg.setContent("你是狗吗?");
			HttpServletResponse response =  message.getResponse();
			String text  =WXMessageFactory.getMessageToXmlDefault(msg);
			System.out.println(text);
			BaseController.writeToResponse(response,text );
		
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
		return WXTextReqMessage.class==sourceType;
	}

}
