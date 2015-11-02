package com.weixin.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.weixin.bean.Page;
import com.weixin.service.BaseService;
import com.weixin.util.ObjectUtils;

@Controller
@RequestMapping("/manager")
public class ManagerController extends BaseController{
	private static final Logger LOGGER = LogManager.getLogger(ManagerController.class);
                 @Resource(name="baseService")
	             private  BaseService  baseService;
	             @SuppressWarnings("unchecked")
				@RequestMapping(value="/{beanClass}", produces = "application/json;charset=UTF-8")
	             @ResponseBody
	             public  Page   query(@PathVariable("beanClass") String beanClass,HttpServletRequest request){
	            	   int  curPage = Integer.valueOf(request.getParameter("page"));
	            	   int  pageSize = Integer.valueOf(request.getParameter("rows"));
	            	 LOGGER.info(" 取得当前页数 page:"+curPage);
	            	 LOGGER.info("取得每页显示行数 rows:"+pageSize);
	            	  Page page = new Page();
	            	  page.setCurPage(curPage);
	            	  page.setPageSize(pageSize);
	            	  baseService.queryByPage(beanClass,page);
	            	return  page; 
	             }
	             
	             @SuppressWarnings("unchecked")
				@RequestMapping("/{beanClass}/edit")
	             public String edit(@RequestParam("oper")String oper,@PathVariable("beanClass") String beanClass,HttpServletRequest request){
	            	           if("add".equals(oper)){
	            	        	    baseService.save(ObjectUtils.mapToObject(beanClass,requestToMap(request) ));
	            	        	    return null;
	            	           }else{
	            	        	   return null;
	            	           }
	             }

}
