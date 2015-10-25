package com.weixin.admin.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.bean.User;
import com.weixin.controller.BaseController;

@Controller
@RequestMapping("/admin/home")
public class HomeController extends BaseController{
	       @RequestMapping("/login")
           public String login(User user,HttpServletRequest request){
	    	      if(!isPost(request)){
	    	    	   return "login";
	    	      }
	    	   // 使用权限工具进行用户登录，登录成功后跳到shiro配置的successUrl中，与下面的return没什么关系！  
	              SecurityUtils.getSubject().login(new UsernamePasswordToken(user.getUsername(), user.getPassword()));  
	              return "redirect:/user";  
	       }
	       
	       @RequestMapping("/user")
	       public String user(){
	    	   return "welcome";
	       }
	       @RequestMapping("/anon")
	       public String anon(){
	    	   return "anon";
	       }
}
