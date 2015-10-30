package com.weixin.util;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import javax.servlet.ServletContext;

public class Const {
     
	 public  static  ServletContext CONTEXT ;
	 public static   String contextPath;
	 public static final  ConcurrentMap<String,String> UPLOAD_DIR =new ConcurrentHashMap<String, String>();
	 static{
		
	 }
	public static final String DEFAULT_UPLOAD_DIR="default";
	public static final String TEST_PATH="http://angelwsin.tunnel.mobi/weixin/";
	
}
