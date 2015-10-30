package com.weixin.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class WXMenuUtils {
	  private static  final Properties  WXMenu= new Properties();;
	  static{
		 InputStream is = WXMenuUtils.class.getClassLoader().getResourceAsStream("wxMenu.properties");
		
		 try {
			WXMenu.load(is);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	  }
	
	  public static void main(String[] args) throws Exception{
		 
		   
		
	}
	  
	  

}
