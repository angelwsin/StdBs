package com.weixin.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.SmartApplicationListener;
import org.springframework.stereotype.Component;

import com.weixin.event.WXMessageEvent;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.message.bean.WXImageReqMessage;
import com.weixin.service.FileService;
import com.weixin.util.Const;

@Component
public class WXImageMessageEventListener implements SmartApplicationListener{
	   @Autowired
        private FileService fileService;
	public void onApplicationEvent(ApplicationEvent event) {
		// TODO Auto-generated method stub
		    WXImageReqMessage img =   (WXImageReqMessage) event.getSource();
		    try {
				fileService.uploadEventFile(img.getPicUrl(), System.currentTimeMillis()+".jpg", img);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		 
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
		return sourceType==WXImageReqMessage.class;
	}

}
