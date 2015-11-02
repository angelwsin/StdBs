package com.weixin.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;

import com.weixin.util.JSONUtil;


@Controller
public class BaseController {
	   public static final  String EDIT ="edit";
	   public static final  String ADD ="add";
	   public static final String DEL ="delete";
	   public static final String QUERY ="query";
	   
	     public   boolean  isPost(HttpServletRequest request){
	    	  return "POST".equals(request.getMethod());
	     }
	     
	     public void writeJson(HttpServletResponse response, Object object) {

	 		if (object != null) {
	 			writeToResponse(response, JSONUtil.encode(object), "utf-8");
	 		}

	 	}

	 	protected static void writeToResponse(HttpServletResponse response, String text,String encoding) {
	 		response.setContentType("text/html;charset=" + encoding);
	 		try {
	 			response.getWriter().write(text);
	 		} catch (IOException e) {
	 			throw new IllegalStateException(e);
	 		}
	 	}

	 	public static void  writeToResponse(HttpServletResponse response, String text) {
	 		writeToResponse(response, text, "utf-8");
	 	}
	 	
	 	
	 	public  Map<String,Object>  requestToMap(HttpServletRequest request){
	 	//	Enumeration<String>  paramNames =   request.getParameterNames();
	 		Map<String,Object> map = new HashMap<String, Object>();
	 		Map<String,String[]> reqMap = request.getParameterMap();
	 		 for(String key :reqMap.keySet()){
        		   if(reqMap.get(key).length==1){
        			   map.put(key, reqMap.get(key)[0]);
        		   }else{
        			   map.put(key,  reqMap.get(key));
        		   }
        	 }
	 		/* while(paramNames.hasMoreElements()){
	 			 String param = paramNames.nextElement();
	 			 map.put(param, request.getParameter(param));
	 		 }*/
	 		 return map;
	 	}
	 	

}
