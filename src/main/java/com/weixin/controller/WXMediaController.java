package com.weixin.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.weixin.service.impl.TokenService;

@Controller
@RequestMapping("/upload")
public class WXMediaController extends BaseController{
	
	       @RequestMapping(value="/uploadView")
	       public String showUploadView(HttpServletRequest request){
	    	    request.setAttribute("access_token", TokenService.acessToken());
	    	    request.setAttribute("type", "image");
	    	   return "upload/upload";
	       }
           @RequestMapping(value="/wxUpload")
	       public  String  upload(HttpServletRequest request,HttpServletResponse response){
	    	         //  System.out.println(request.getParameter("file").getClass());
        	     MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request; 
        	     
        	     Map<String,MultipartFile> files = multipartRequest.getFileMap();
        	    for(String key:files.keySet()){
        	    	    System.out.println(key+"----"+files.get(key));
        	    }
	    	          return null;
	       }
}
