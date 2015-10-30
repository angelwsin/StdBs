package com.weixin.util;

import java.lang.reflect.Field;
import java.sql.Date;
import java.util.Map;

public class ObjectUtils {
	     private static final String PACKAGE="com.weixin.bean";
	     
	   public static Object  mapToObject(String className,Map<String,Object> map){
		             try {
					Class<?> clazz = 	Class.forName(PACKAGE+"."+className);
					 Object  obj =  clazz.newInstance();
					     Field[]  fields = clazz.getDeclaredFields();
					     for(int i=0;fields!=null&&i<fields.length;i++){
					    	 fields[i].setAccessible(true);
					    	 if( fields[i].getType()==String.class){
					    		 fields[i].set(obj, map.get(fields[i].getName()));
					    	 }else if( fields[i].getType()==Integer.class){
					    		 fields[i].set(obj, Integer.valueOf((String)map.get(fields[i].getName())));
					    	 }else if( fields[i].getType()==Date.class){
					    		 fields[i].set(obj, DateUtils.parseToDate((String)map.get(fields[i].getName()), DateUtils.DATETIME));
					     }
					     }
					  return obj;
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		             return null;
	   }

}
