package com.weixin.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="resource") 
public class Resource {
	 //主键id  
  
    private String id;  
    //action url  
    private String value;  
    //shiro permission;  
    private String permissions;
    @Id
    @GeneratedValue
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	 @Column(name = "url", length = 100,nullable=false)
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	 @Column(name = "permissions", length = 100,nullable=false)
	public String getPermissions() {
		return permissions;
	}
	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}
	
    
    
}
