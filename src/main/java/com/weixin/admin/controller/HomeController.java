package com.weixin.admin.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.bean.User;
import com.weixin.controller.BaseController;
import com.weixin.util.Menu;

@Controller
@RequestMapping("/admin/home")
public class HomeController extends BaseController{
	       @RequestMapping(value="/login")
	       @Menu(name="登录")
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
	       @RequestMapping("/logout")
	       public String anon(){
	    	   Subject subject = SecurityUtils.getSubject();
	    		if (subject.isAuthenticated()) {
	    			subject.logout(); // session 会销毁，在SessionListener监听session销毁，清理权限缓存
	    		}
	    	   return "redirect:/login";
	       }
	       
}
