package com.weixin.util;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.Map;

import com.weixin.bean.ScheduleJob;

public class ObjectUtils {
	     public  static final String PACKAGE="com.weixin.bean";
	     
	   public static Object  mapToObject(String className,Map<String,Object> map){
		             try {
					Class<?> clazz = 	Class.forName(PACKAGE+"."+className);
					 Object  obj =  clazz.newInstance();
					     Field[]  fields = clazz.getDeclaredFields();
					     Method method = null;
					     for(int i=0;fields!=null&&i<fields.length;i++){
					    	// fields[i].setAccessible(true);
					    	 if( fields[i].getModifiers()==2){
					    		 if( fields[i].getType()==String.class){
						    		 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{String.class});
						    		 method.invoke(obj, new Object[]{ map.get(fields[i].getName())});
						    	 }else if( fields[i].getType()==Integer.class){
						    		 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{Integer.class});
						    		 method.invoke(obj, new Object[]{Integer.valueOf((String)map.get(fields[i].getName()))});
						    	 }else if( fields[i].getType()==Date.class){
						    		 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{Date.class});
						    		  if("addTime".equals(fields[i].getName())||"createTime".equals(fields[i].getName())||"updateTime".equals(fields[i].getName())){
						       method.invoke(obj, new Object[]{new Date()});
						    		  }else{
						     method.invoke(obj, new Object[]{DateUtils.parseToDate((String)map.get(fields[i].getName()), DateUtils.DATETIME)});
						    		  }
						     } 
					    	 }
					    	
					     }
					  return obj;
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		             return null;
	   }
	   
	   
	   
	   public static void main(String[] args) {
		       Field[] fields = ScheduleJob.class.getDeclaredFields();
		       for(int i=0;i<fields.length;i++){
		    	     System.out.println(fields[i].getName()+":"+fields[i].getModifiers());
		       }
	}

}
