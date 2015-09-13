package com.taskjob.bean;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@SuppressWarnings("serial")
@Entity
@Table(name="actDetail")
public class ActDetail {
	
	   private int id;
	   private ActCard actCard;
	   private User user;
	   private Date addTime;
	   private int status;

		@Id
		@Column(name = "id", unique = true, nullable = false)
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	 

		    @OneToOne(cascade=CascadeType.ALL,fetch=FetchType.LAZY,targetEntity=ActCard.class)
		    @JoinColumn(name="c_id",nullable=false,updatable=false)//指定一个外键，也可以不指定。
	public ActCard getActCard() {
		return actCard;
	}
	public void setActCard(ActCard actCard) {
		this.actCard = actCard;
	}
	 @OneToOne(cascade=CascadeType.ALL,fetch=FetchType.LAZY,targetEntity=User.class)
	    @JoinColumn(name="u_id",nullable=false,updatable=false)//指定一个外键，也可以不指定。
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Column(name = "addTime",  nullable = false)
	public Date getAddTime() {
		return addTime;
	}
	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}
	@Column(name = "status",  nullable = false)
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	   

}
