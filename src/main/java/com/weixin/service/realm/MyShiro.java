package com.weixin.service.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixin.bean.Role;
import com.weixin.bean.User;
import com.weixin.service.UserService;

@Service
public class MyShiro extends AuthorizingRealm{

	@Autowired
	  private  UserService userService;
	/** 
     * 权限认证 
     */  
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
		// TODO Auto-generated method stub
		//获取登录时输入的用户名  
		 String loginName=(String) principalCollection.fromRealm(getName()).iterator().next();
		    //到数据库查是否有此对象  
		  User user = userService.getUserByUsername(loginName);
		  
		  if(user!=null){
			// 权限信息对象info,用来存放查出的用户的所有的角色（role）及权限（permission）  
			  SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();  
			  //用户的角色集合
			  info.setRoles(user.getRolesName());
			   //用户的角色对应的所有权限，如果只使用角色定义访问权限，下面的四行可以不要  
			  for (Role role : user.getRoles()) {
				  info.setStringPermissions(role.getPermissionsByRole());
			}
			  return info;
		  }
		return null;
	}
	 /** 
     * 登录认证; 
     */  
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
		// TODO Auto-generated method stub
		 //UsernamePasswordToken对象用来存放提交的登录信息  
		 UsernamePasswordToken token=(UsernamePasswordToken) authenticationToken;  
	        //查出是否有此用户  
		 User user = userService.getUserByUsername(token.getUsername());
		 if(user!=null){  
	            //若存在，将此用户存放到登录认证info中  
	            return new SimpleAuthenticationInfo(user.getUsername(), user.getPassword(), getName());  
	        }  
		return null;
	}

}
