package com.weixin.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.weixin.menu.bean.WXMenu;
import com.weixin.menu.bean.WXTopMenu;
import com.weixin.service.impl.TokenService;

public class WXMenuUtils {
	
	  public static void main(String[] args) {
		   WXTopMenu top = new WXTopMenu();
		   WXMenu t1 = new WXMenu();
		   t1.setType("click");
		   t1.setName("今日歌曲");
		   t1.setKey("V1001_TODAY_MUSIC");
		   WXMenu t2 = new WXMenu();
		   t2.setName("菜单");
		   List<WXMenu> sub= new ArrayList<WXMenu>();
		   WXMenu sub1 = new WXMenu();
		   sub1.setType("view");
		   sub1.setName("搜索");
		   sub1.setUrl("http://www.soso.com/");
		   WXMenu sub2 = new WXMenu();
		   sub2.setType("view");
		   sub2.setName("视频");
		   sub2.setUrl("http://v.qq.com/");
		   WXMenu sub3 = new WXMenu();
		   sub3.setType("click");
		   sub3.setName("赞一下我们");
		   sub3.setUrl("V1001_GOOD");
		   sub.add(sub1);
		   sub.add(sub2);
           sub.add(sub3);
           t2.setSub_button(sub);
		   List<WXMenu> l = new ArrayList<WXMenu>();
		   l.add(t1);
		   l.add(t2);
		   top.setButton(l);
		   Map<String,String> params = new HashMap<String,String>();
		    params.put("access_token", TokenService.acessToken());
		    params.put("body", JSONUtil.encode(top));
		  String result =    HttpClientUtils.doPost("https://api.weixin.qq.com/cgi-bin/menu/create", null, params,true);
		   System.out.println(result);
	}
	  
	  

}
