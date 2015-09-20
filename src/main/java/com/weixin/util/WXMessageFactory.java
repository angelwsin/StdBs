package com.weixin.util;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import com.thoughtworks.xstream.XStream;
import com.weixin.message.bean.WXMessage;
import com.weixin.message.bean.WXNewItmesMessage;
import com.weixin.message.bean.WXNewsRespMessage;

public class WXMessageFactory {
	         public static Properties  MESSAGETYPE = new Properties();
	         public static final String XMLHEADER="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
	       static{
	    	  InputStream is =  WXMessageFactory.class.getClassLoader().getResourceAsStream("MessageMap.properties");
	    	   try {
				MESSAGETYPE.load(is);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	       }

	public static WXMessage getMessageInstance(InputStream is) {
		SAXReader reader = new SAXReader();
		BufferedReader r = null;
		StringBuffer buffer = null;
		try {
			r = new BufferedReader(new InputStreamReader(is));
			buffer = new StringBuffer(XMLHEADER);
			String t = null;
			while ((t = r.readLine()) != null) {
				buffer.append(t);
			}
			System.out.println(buffer.toString());
			Document doc = reader.read(new ByteArrayInputStream(buffer.toString().getBytes()));
			Element e = doc.getRootElement();
			String type = doc.selectSingleNode("/xml/MsgType").getText();
			Node node =  doc.selectSingleNode("/xml/Event");
			String event =node==null?"":"."+node.getText();
			e.setName(MESSAGETYPE.getProperty(type+event));
			XStream s = new XStream();
			WXMessage msg = (WXMessage) s.fromXML(e.asXML());
			is.close();
			r.close();
			return msg;

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;

	}
	
	public static <T>String getMessageToXml(T message,String[] alias, Class<?>[] clazz){
		     if(alias.length!=clazz.length){
		    	 throw new IllegalArgumentException("非法的参数");
		     }
		XStream s = new XStream();
		for(int i=0;i<alias.length;i++){
			s.alias(alias[i], clazz[i]);
		}
		return s.toXML(message);
	}
	
	public static <T>String getMessageToXmlDefault(T message){
		     return getMessageToXml(message,new String[]{"xml"},new Class<?>[]{message.getClass()});
	}
	
	public static String getgetMessageToXmlWXNews(WXNewsRespMessage message){
		return getMessageToXml(message,new String[]{"xml","item"} ,new Class<?>[]{WXNewsRespMessage.class,WXNewItmesMessage.class});
	}

	         public static void main(String[] args) {
				   try {
					FileInputStream is = new FileInputStream("d:\\message.txt");
					   getMessageInstance(is);
				
					
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

}
