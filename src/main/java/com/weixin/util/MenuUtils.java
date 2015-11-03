package com.weixin.util;

import java.lang.reflect.Method;
import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.admin.controller.HomeController;

public class MenuUtils {
	
	             public static void  menu(Class<?> clazz,String ...method){
	            	           if(method==null||method.length==0){
	            	        	      throw new  IllegalArgumentException("参数非法");
	            	           }
	            	           if(!clazz.isAnnotationPresent(Controller.class)){
	            	        	   return ;
	            	           }
	            	           StringBuffer  path = new StringBuffer();
	            	            String pre = null;
	            	          if( clazz.isAnnotationPresent(RequestMapping.class)){
	            	        	  RequestMapping map =   clazz.getAnnotation(RequestMapping.class);
	            	        	   pre = map.value()[0];
	            	          }
	            	           
	            	          Method[] methods =    clazz.getMethods();
	            	          for(Method m:methods){
	            	        	    if(Arrays.asList(method).contains(m.getName())){
	            	        	    	  if(m.isAnnotationPresent(RequestMapping.class)){
	            	        	    		  RequestMapping mp =   m.getAnnotation(RequestMapping.class);
	            	        	    		   path.append(pre).append(mp.value()[0]);
	            	        	    		  if(mp.params()!=null&&mp.params().length>0){
	            	        	    			  path.append('?');
	            	        	    			  for(String kv:mp.params()){
		            	        	    			   path.append(kv).append('&');
		            	        	    		   }
	            	        	    			  if(path.lastIndexOf("&")!=-1){
	            	        	    				  path.deleteCharAt(path.lastIndexOf("&"));
	            	        	    			  }
	            	        	    		  }
	            	        	    		   
	            	        	    	  }
	            	        	    	  if(m.isAnnotationPresent(Menu.class)){
	            	        	    		  Menu menu = 	  m.getAnnotation(Menu.class);
	            	        	    		  System.out.println(menu.name());
	            	        	    		  System.out.println(path.toString());
	            	        	    	  }
	            	        	    }
	            	          }
	             }
	             
	             public static void main(String[] args) {
					menu(HomeController.class, "login");
				}

}
