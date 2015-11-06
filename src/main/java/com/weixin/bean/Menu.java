package com.weixin.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity  
@Table(name="menu") 
@Cache(usage= CacheConcurrencyStrategy.READ_WRITE)
public class Menu {
	  private int id;
	  private String nameM;
	  private int order;
	  private Menu parentM;
	  private List<Menu> childerM;
	  private Resource  resM;
	  private int status;
	  @Id
	    @GeneratedValue
	   
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	@Column(name = "orderM")
	public int getOrder() {
		return order;
	}
	@Column(name = "mName", length = 100,nullable=false)
	public String getNameM() {
		return nameM;
	}
	public void setNameM(String nameM) {
		this.nameM = nameM;
	}
	public void setOrder(int order) {
		this.order = order;
	}
	@ManyToOne(cascade = { CascadeType.MERGE },  optional = true)
	 @JoinColumn(name = "parent_id") 
	public Menu getParentM() {
		return parentM;
	}
	public void setParentM(Menu parentM) {
		this.parentM = parentM;
	}
    @JsonIgnore
	@OneToMany(targetEntity=Menu.class,cascade = { CascadeType.ALL },mappedBy = "parentM")
	public List<Menu> getChilderM() {
		return childerM;
	}
	 
	public void setChilderM(List<Menu> childerM) {
		this.childerM = childerM;
	}
	@ManyToOne(cascade = { CascadeType.MERGE }, optional = true)
	 @JoinColumn(name = "res_id") 
	@JsonIgnore
	public Resource getResM() {
		return resM;
	}
	public void setResM(Resource resM) {
		this.resM = resM;
	}
	@Column(name = "status")
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	  
  
}
