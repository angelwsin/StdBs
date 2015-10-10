package com.weixin.listener;


import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.SmartApplicationListener;
import org.springframework.stereotype.Component;

import com.weixin.controller.BaseController;
import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.message.bean.WXMessage;
import com.weixin.message.bean.WXNewItmesMessage;
import com.weixin.message.bean.WXNewsRespMessage;
import com.weixin.message.bean.WXTextReqMessage;
import com.weixin.message.bean.WXTextRespMessage;
import com.weixin.util.WXMessageFactory;


@Component
public class WXTextMessageEventListener implements SmartApplicationListener{
              
	public void onApplicationEvent(ApplicationEvent event) {
		// TODO Auto-generated method stub
	
			WXTextReqMessage message= (WXTextReqMessage) event.getSource();
			 WXNewsRespMessage resp = new WXNewsRespMessage();
        	 resp.setArticleCount(1);
        	 resp.setCreateTime(new Date().getTime());
        	 resp.setFromUserName(message.getToUserName());
        	 resp.setMsgType(WXBaseMessage.MSG_NEWS);
        	 resp.setToUserName(message.getFromUserName());
        	 WXNewItmesMessage nes = new WXNewItmesMessage();
        	 nes.setDescription("你好吗?");
        	 nes.setPicUrl("http://cdn-img.easyicon.net/png/11901/1190114.gif");
        	 nes.setTitle("我很好");
        	 nes.setUrl("http://angelwsin.tunnel.mobi/weixin/WXMenu/add");
        	 resp.addNewItmes(nes);
			HttpServletResponse response =  message.getResponse();
			String text  =WXMessageFactory.getgetMessageToXmlWXNews(resp);
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
