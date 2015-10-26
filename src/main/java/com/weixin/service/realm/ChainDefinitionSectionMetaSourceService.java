package com.weixin.service.realm;

import java.util.Map;

public interface ChainDefinitionSectionMetaSourceService {
	 public static final String PREMISSION_STRING = "perms[{0}]"; // 资源结构格式  
	    public static final String ROLE_STRING = "role[{0}]"; // 角色结构格式  
	    //注意/r/n前不能有空格

	    public static final String CRLF= "\r\n";

	    public  static final String LAST_AUTH_STR= "/** =authc\r\n";
	  
	    /** 初始化框架权限资源配置 */  
	    public abstract void intiPermission();  
	  
	    /** 重新加载框架权限资源配置 (强制线程同步) */  
	    public abstract void updatePermission();  
	  
	    /** 初始化第三方权限资源配置 */  
	    public abstract Map<String, String> initOtherPermission(); 
	
}
