package com.weixin.bean;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


@Entity  
@Table(name="resource") 
public class Resource {
	 //主键id  
  
    private int id;  
    private String name ;
    //action url  
    private String value;  
    //shiro permission;  
    private Set<ResourceMeta> permissions;
    private String type;
    @Id
    @GeneratedValue
    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	 @Column(name = "url", length = 100,nullable=false)
	public String getValue() {
		return value;
	}
	
	public void setValue(String value) {
		this.value = value;
	}
	@ManyToOne(targetEntity=ResourceMeta.class)
    @JoinTable(name="res_permissions")
    @Cache(usage=CacheConcurrencyStrategy.READ_WRITE)
	public Set<ResourceMeta> getPermissions() {
		return permissions;
	}
	public void setPermissions(Set<ResourceMeta> permissions) {
		this.permissions = permissions;
	}
	@Column(name = "name", length = 100,nullable=false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name = "type", length = 40,nullable=false)
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
    
    
}
