package com.weixin.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.controller.BaseController;

@Controller
@RequestMapping("/adminWXFun")
public class WXFunctController extends BaseController{
	             
	             @RequestMapping(value="/batchSend")
	            public String batchSend(){
	            	  return "admin/fun/batchSend";
	            }
	  
	             @RequestMapping(value="/autoResp")
	            public String autoResp(){
	            	  return "admin/fun/autoReply";
	            }
	             @RequestMapping(value="/defMenu")
	             public String defineMenu(){
	            	  return "admin/fun/defMenu";
	             }

}
