package com.weixin.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weixin.bean.Message;
import com.weixin.bean.Page;
import com.weixin.service.BaseService;
import com.weixin.util.ObjectUtils;
import com.weixin.util.SpringUtils;
import com.weixin.util.StringUtils;

@Controller
@RequestMapping("/manager")
public class ManagerController extends BaseController{
	private static final Logger LOGGER = LogManager.getLogger(ManagerController.class);
                @Autowired
	             private  BaseService<Object>  baseService;
	             @SuppressWarnings({ "unchecked", "rawtypes" })
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
	            	  baseService.queryByPage(beanClass,page,requestToMapByObject(request,beanClass));
	            	return  page; 
	             }
	             
	            
				@SuppressWarnings({ "unchecked", "rawtypes" })
				@RequestMapping("/{beanClass}/edit")
	             public String edit(@RequestParam("oper")String oper,@PathVariable("beanClass") String beanClass,HttpServletRequest request,@RequestParam(value="service", required=false)String service,HttpServletResponse response){
	            	           if("add".equals(oper)){
	            	        	   if(StringUtils.isEmpty(service)){
	            	        		   baseService.save(ObjectUtils.mapToObject(beanClass,requestToMap(request) ));
	            	        		   writeJson(response, new Message("ok", "success"));
		            	        	    return null ;
	            	        	   }
	            	        	  ((BaseService) SpringUtils.getBean(service)).save(ObjectUtils.mapToObject(beanClass,requestToMap(request)));
	            	        	 
	            	           }else if("del".equals(oper)){
	            	        	   if(StringUtils.isEmpty(service)){
	            	        		   baseService.del(ObjectUtils.mapToObject(beanClass,requestToMap(request) ));
	            	        		   writeJson(response, new Message("ok", "success"));
		            	        	    return null ;
	            	        	   }
	            	        	  ((BaseService) SpringUtils.getBean(service)).del(ObjectUtils.mapToObject(beanClass,requestToMap(request)));
	            	           }else if("edit".equals(oper)){
	            	        	   if(StringUtils.isEmpty(service)){
	            	        		   baseService.save(ObjectUtils.mapToObject(beanClass,requestToMap(request) ));
	            	        		   writeJson(response, new Message("ok", "success"));
		            	        	    return null ;
	            	        	   }
	            	        	  ((BaseService) SpringUtils.getBean(service)).save(ObjectUtils.mapToObject(beanClass,requestToMap(request)));
	            	           }
	            	           return null;
	             }

}
