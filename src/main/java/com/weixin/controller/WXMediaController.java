package com.weixin.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.weixin.message.bean.WXBaseMessage;
import com.weixin.service.FileService;
import com.weixin.service.impl.TokenService;
import com.weixin.util.Const;

@Controller
@RequestMapping("/upload")
public class WXMediaController extends BaseController{
	    @Autowired
	      private FileService fileService;
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
        	     String  uploadDir  =  request.getServletContext().getRealPath(Const.UPLOAD_DIR.get(WXBaseMessage.MSG_IMAGE));
        	    for(String key:files.keySet()){
        	    	MultipartFile file = files.get(key);
        	    	 int index = file.getOriginalFilename().lastIndexOf(".");
        	    	 String sub = index!=-1? file.getOriginalFilename().substring(index):"";
        	    	try {
				fileService.wxUpload(file.getInputStream(), uploadDir, System.currentTimeMillis()+sub,"");
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
        	    }
	    	          return null;
	       }
}
