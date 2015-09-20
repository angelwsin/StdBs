package com.weixin.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;

import com.weixin.util.JSONUtil;

public class TokenService {
	             private static final String APPID ="wx9358ab8a3d283aed";
	             private static final String SECRET ="f7d86e7711e0e4b4fe6150c54971f6bf";
	             private static final String TOKEN_ACCESS_URL="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential";
	             private static long expiresIn;
	
	       public static   String getAcessToken(){
		          HttpClient  client =  HttpClients.createDefault();
		         
		         String url = TOKEN_ACCESS_URL+"&appid="+APPID+"&secret="+SECRET;
		         HttpGet get = new HttpGet(url);
		        get.setHeader(" Content-Type", "text/html;charset=utf-8");
		        try {
		        	HttpResponse response = 	client.execute(get);
		        	StatusLine status = response.getStatusLine();
		        	if(status.getStatusCode()==200){
		        		 // 获取响应消息实体  
		                HttpEntity entity = response.getEntity();  
		                InputStream is  = entity.getContent();
		               BufferedReader reader = new BufferedReader(new InputStreamReader(is));
		               StringBuffer buffer = new StringBuffer();
		               String s =null;
		               while((s=reader.readLine())!=null){
		            	   buffer.append(s);
		               }
		               is.close();
		               reader.close();
		               return buffer.toString();
		        	}
				} catch (ClientProtocolException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return null;
	   }   
	       
	     @SuppressWarnings("unchecked")
		public static String acessToken(){
	    	    Map<String,String> map =   JSONUtil.getJsonT(getAcessToken(), Map.class);
	    	    return   map.get("access_token");
	       }
	  
	  public static void main(String[] args) {
		   System.out.println(acessToken());
	}   

}
