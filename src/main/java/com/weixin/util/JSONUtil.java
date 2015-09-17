package com.weixin.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;


public class JSONUtil {
	
	
	 public static final String encode(Object object){
		 return JSON.toJSONString(object, new SerializerFeature[] { SerializerFeature.DisableCircularReferenceDetect });
	 }

}
