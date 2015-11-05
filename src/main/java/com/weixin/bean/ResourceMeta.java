package com.weixin.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="resourceMeta") 
public class ResourceMeta {
	 private int id;
	 private String  permItem;
	  @Id
	    @GeneratedValue
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name = "name", length = 100,nullable=false)
	public String getPermItem() {
		return permItem;
	}
	public void setPermItem(String permItem) {
		this.permItem = permItem;
	}
    
}
