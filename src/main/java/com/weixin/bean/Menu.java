package com.weixin.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity  
@Table(name="menu") 
@Cache(usage= CacheConcurrencyStrategy.READ_WRITE)
public class Menu {
	  private int id;
	  private String mName;
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
	@Column(name = "mName", length = 100,nullable=false)
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	@Column(name = "orderM")
	public int getOrder() {
		return order;
	}
	public void setOrder(int order) {
		this.order = order;
	}
	@ManyToOne(cascade = { CascadeType.MERGE }, optional = false)
	 @JoinColumn(name = "parent_id") 
	public Menu getParentM() {
		return parentM;
	}
	public void setParentM(Menu parentM) {
		this.parentM = parentM;
	}
	@OneToMany(targetEntity=Menu.class,cascade = { CascadeType.ALL }, fetch = FetchType.LAZY, mappedBy = "parentM")
	public List<Menu> getChilderM() {
		return childerM;
	}
	 
	public void setChilderM(List<Menu> childerM) {
		this.childerM = childerM;
	}
	@ManyToOne(cascade = { CascadeType.MERGE }, optional = false)
	 @JoinColumn(name = "res_id") 
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
