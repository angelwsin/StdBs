package com.weixin.util;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.Id;

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
					    	 if( fields[i].getModifiers()==2&&map.keySet().contains(fields[i].getName())){
					    		 if( fields[i].getType()==String.class){
						    		 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{String.class});
						    		 method.invoke(obj, new Object[]{ map.get(fields[i].getName())});
						    	 }else if( fields[i].getType()==Integer.class||fields[i].getType()==int.class){
						    		 Class<?>claz = fields[i].getType()==Integer.class?Integer.class:int.class;
						    		 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{claz});
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
	   
	   public static Object[]  mapToHql(String key,String className,Map<String,Object> map){
           try {
			Class<?> clazz = 	Class.forName(PACKAGE+"."+className);
			     Field[]  fields = clazz.getDeclaredFields();
			     List<Object> values= new ArrayList<Object>();
			     StringBuffer hql = new StringBuffer(key).append("  where 1=1 ");
			     for(int i=0;fields!=null&&i<fields.length;i++){
			    	// fields[i].setAccessible(true);
			    	 if( fields[i].getModifiers()==2&&map.keySet().contains(fields[i].getName())){
			    		 Object  k  =map.get(fields[i].getName());
			    		 if( fields[i].getType()==String.class){
			    	         if(k!=null){
			    	        	 hql.append(" and ").append(fields[i].getName()).append("=?");
			    	        	 values.add(map.get(fields[i].getName()));
			    	         }
				    	 }else if( fields[i].getType()==Integer.class||fields[i].getType()==int.class){
				    		 if(k!=null){
			    	        	 hql.append(" and ").append(fields[i].getName()).append("=?");
			    	        	 values.add(Integer.valueOf((String)map.get(fields[i].getName())));
			    	         }
				    	 }else if( fields[i].getType()==Date.class){
				    		 if(k!=null){
			    	        	 hql.append(" and ").append(fields[i].getName()).append("=?");
			    	        	 values.add(DateUtils.parseToDate((String)map.get(fields[i].getName()), DateUtils.DATETIME));
			    	         }
				    		
				     } 
			    	 }
			    	
			     }
			    
			  return new Object[]{hql.toString(),values.toArray()};
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
           return null;
}
	   public static Object mapToUpate(Object obj,Map<String,Object> map){
           try {
			Class<?> clazz = 	obj.getClass();
			     Field[]  fields = clazz.getDeclaredFields();
			     Method method = null;
			     for(int i=0;fields!=null&&i<fields.length;i++){
			    	// fields[i].setAccessible(true);
			    	 if( fields[i].getModifiers()==2&&map.keySet().contains(fields[i].getName())){
			    		 Object  k  =map.get(fields[i].getName());
			    		 if( fields[i].getType()==String.class){
			    			 Method idGet =  clazz.getMethod(StringUtils.getAndSet("get", fields[i].getName()));
				    		  if(idGet.isAnnotationPresent(Id.class)){
				    			   continue;
				    		  }
			    	         if(k!=null){
			    	        	 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{String.class});
					    		 method.invoke(obj, new Object[]{ map.get(fields[i].getName())});
			    	         }
				    	 }else if( fields[i].getType()==Integer.class||fields[i].getType()==int.class){
				    	      
				    		Method idGet =  clazz.getMethod(StringUtils.getAndSet("get", fields[i].getName()));
				    		  if(idGet.isAnnotationPresent(Id.class)){
				    			   continue;
				    		  }
				    		  Class<?>claz = fields[i].getType()==Integer.class?Integer.class:int.class;
				    		 if(k!=null){
				    			 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{claz});
					    		 method.invoke(obj, new Object[]{Integer.valueOf((String)map.get(fields[i].getName()))});
			    	         }
				    	 }else if( fields[i].getType()==Date.class){
				    		 if(k!=null){
				    			 method =  clazz.getMethod(StringUtils.getAndSet("set", fields[i].getName()), new Class<?>[]{Date.class});
					    		  if("addTime".equals(fields[i].getName())||"createTime".equals(fields[i].getName())||"updateTime".equals(fields[i].getName())){
					       method.invoke(obj, new Object[]{new Date()});
					    		  }else{
					     method.invoke(obj, new Object[]{DateUtils.parseToDate((String)map.get(fields[i].getName()), DateUtils.DATETIME)});
					    		  }
			    	         }
				    		
				     } 
			    	 }
			    	
			     }
			    
			  return  obj;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
           return null;
}
	   
	   public static Serializable   mapToId(String className,Map<String,Object> map){
		   Class<?> clazz = null;
		try {
			clazz = Class.forName(PACKAGE+"."+className);
			Method[] methods =   clazz.getMethods();
		      for(Method md :methods){
		    	    if(md.isAnnotationPresent(Id.class)){
		    	    	if(md.getReturnType()==Integer.class||md.getReturnType()==int.class){
		    	    		 return  Integer.valueOf((String)map.get(StringUtils.firstToLowerCase(md.getName().substring(3)))) ;
		    	    	}
		    	       return (Serializable) map.get(StringUtils.firstToLowerCase(md.getName().substring(3)));
		    	    }
		      }
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		    return null;
	   }
	   public static Class<?>   getClazz(String className){
		   Class<?> clazz = null;
		
			try {
				clazz = Class.forName(PACKAGE+"."+className);
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return clazz;
		}
	   
	   public static void main(String[] args) {
		       Field[] fields = ScheduleJob.class.getDeclaredFields();
		       for(int i=0;i<fields.length;i++){
		    	     System.out.println(fields[i].getName()+":"+fields[i].getModifiers());
		       }
	}

}
