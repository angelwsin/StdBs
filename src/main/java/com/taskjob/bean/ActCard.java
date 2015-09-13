package com.taskjob.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="actCard")
public class ActCard {
	
	  private int id;
	  private String card;
	  private Date  addTime;
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
	@Column(name = "card",  unique = true,nullable = false)
	public String getCard() {
		return card;
	}
	public void setCard(String card) {
		this.card = card;
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
