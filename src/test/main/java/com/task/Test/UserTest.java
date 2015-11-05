package com.task.Test;

import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

import com.weixin.bean.Permission;
import com.weixin.bean.Resource;
import com.weixin.bean.Role;
import com.weixin.bean.User;
import com.weixin.service.PermissionService;
import com.weixin.service.ResourceService;
import com.weixin.service.RoleService;
import com.weixin.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:applicationContext-context.xml")
@WebAppConfiguration("classpath:spring-servlet.xml")
@TransactionConfiguration(defaultRollback=false)
public class UserTest {
	@Autowired
	   private UserService userService;
	@Autowired
	private PermissionService permissionService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private ResourceService resourceService;
	  @Test
        public void saveTestP(){
		   Permission p = new Permission();
		   p.setDescription("查看");
		   p.setPermission("query");
		   Set pers  =new HashSet();
		   
		   pers.add(p);
		   Set roles = new HashSet();
		    Role r = new Role();
		    r.setName("manager");
		    r.setDescription("manager");
		    r.setPermissions(pers);
		  
		    roles.add(r);
             User user = new User();
             user.setAddTime(new Date());
             user.setId(1);
             user.setBindStatus(0);
             user.setEmail("angelwsin@163.com");
             user.setPassword("123456");
             user.setPhone("12434455");
             user.setRoles(roles);
              user.setStatus(0);
              user.setUsername("zhangsan");
            //  permissionService.save(p);
              //roleService.save(r);
             //userService.save(user);
              Resource res = new Resource();
             // res.setPermissions("anon");
              res.setValue("/index");
             // resourceService.save(res);
   
       
        }
}
