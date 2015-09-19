package com.weixin.util;

import java.util.Arrays;

public class StringUtils {
	
	  public static String Token ="angelwsin";
	public static boolean   wxCheckSignature(String signature,String  timestamp,String nonce,String token){
       /* if(isEmpty(signature)||isEmpty(timestamp)||isEmpty(nonce)||isEmpty(token)){
        	    throw new IllegalArgumentException("  参数 不正确");
        }*/
                String s[] = new String[]{timestamp,nonce,token};
                 Arrays.sort(s);
                 StringBuffer buff = new StringBuffer();
                   for(String str:s){
                   	   buff.append(str);
                   }
           if(signature.equals(SHA1.sha1(buff.toString()))){
           	return true;
           }
           return  false;
      }
	
	   public static boolean isEmpty(String s){
		              return s==null||s.length()==0;
	   }

}
