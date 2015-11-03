package com.weixin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
	
	       @RequestMapping("/resource")
	       public String resource(){
	    	    return "admin/user/resource";
	       }
	       @RequestMapping("/role")
	       public String role(){
	    	    return "admin/user/role";
	       }

}
