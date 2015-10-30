package com.weixin.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.weixin.service.BaseService;

@Controller
@RequestMapping("/manager")
public class ManagerController {
               
                 @Resource(name="baseService")
	             private  BaseService  baseService;
	             @RequestMapping(value="/{beanClass}", produces = "application/json;charset=UTF-8")
	             @ResponseBody
	             public  List   query(@PathVariable("beanClass") String beanClass){
	            	return  baseService.queryAll(beanClass); 
	             }

}
