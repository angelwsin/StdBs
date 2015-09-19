package com.weixin.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.util.StringUtils;


@Controller
public class WeiXinDispatcherController extends BaseController{
	
	private static final Logger LOGGER = LogManager.getLogger(WeiXinDispatcherController.class);
	         @RequestMapping(value="/wxDispatcher")
	         public String  wxSignature(HttpServletRequest request,HttpServletResponse response){
	        	// TODO Auto-generated method stub
	        	 if(!isPost(request)){
	        		 doGet(request, response);
	        	 }else{
	        		  doPost(request, response);
	        	 }
	        	   return null;
	         }
	         
	       private void doGet(HttpServletRequest request,HttpServletResponse response){
	    	   String signature = request.getParameter("signature");
	  	       String timestamp = request.getParameter("timestamp");
	  	       String nonce = request.getParameter("nonce");
	  	       String echostr = request.getParameter("echostr");
	  	     LOGGER.info(signature);
	  	     LOGGER.info(timestamp);
	  	     LOGGER.info(nonce);
	  	     LOGGER.info(echostr);
	  	       if(StringUtils.wxCheckSignature(signature, timestamp, nonce, StringUtils.Token)){
	  	    	 writeToResponse(response, echostr);
	  	       }
	       }
	       
	       private void doPost(HttpServletRequest request,HttpServletResponse response){


	       }

	    	
	  
}
