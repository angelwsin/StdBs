package com.weixin.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weixin.bean.ActCard;
import com.weixin.bean.ActDetail;
import com.weixin.bean.User;
import com.weixin.cache.ActDataCache;
import com.weixin.service.ActDetailService;
import com.weixin.util.AjaxMessage;


@Controller
@RequestMapping(value="/act")
public class ActController extends BaseController{
	      @Autowired
           private ActDetailService  actDetailService;
	  @RequestMapping(value="/guagugle")
	  public String  act(HttpServletRequest request){
		    User user  = new User();
		    user.setId(1);
		  ActCard card =   ActDataCache.removeFirst();
		ActDetail d =   actDetailService.saveActToUser(user,card);
		  request.setAttribute("card", card.getCard());
		  request.setAttribute("id", d.getId());
		    return "act/act";
	  }
	  @RequestMapping(value="/active")
	  public String  active(HttpServletResponse response,ActDetail d){
		  actDetailService.active(d);
		  writeJson(response,new AjaxMessage("成功"));
		    return  null;
	  }
}
