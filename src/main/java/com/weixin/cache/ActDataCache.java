package com.weixin.cache;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import com.weixin.bean.ActCard;

public class ActDataCache {
           public static List<ActCard> linkedList = Collections.synchronizedList(new LinkedList<ActCard>());
           
           public static void add(ActCard s){
        	        linkedList.add(s);
           }
           
           public static ActCard removeFirst(){
        	   synchronized (linkedList) {
        		    if(linkedList.size()>0){
        		    	 return    linkedList.remove(0);
        		    }
        		    return null;
			}
        	     
           }
           public static void addAll(List<ActCard> list){
   	        linkedList.addAll(list);
      }
           
          
}
