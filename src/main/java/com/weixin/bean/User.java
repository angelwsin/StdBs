package com.weixin.bean;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fasterxml.jackson.annotation.JsonIgnore;

//当前的类是一个持久化类，是Category这个类。他映射了一个表category。所对应的 数据库是test
//这句：@Table(name="user",catalog="test") 可以省略
@SuppressWarnings("serial")
@Entity
@Table(name="users")
public class User implements Serializable{

	
	  private int id;
	  private String username;
	  private String email;
	  private String password;
	  private int status;
	  private Date addTime;
	  private String phone;
	  private int  bindStatus;
	  private Set<Role> roles = new HashSet<Role>();
	// 主键 ：@Id    主键生成方式：strategy = "increment"
  //映射表中id这个字段，不能为空，并且是唯一的
	//@GenericGenerator(name = "generator", strategy = "increment")
	@Id
	@Column(name = "id", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	//映射表中name这个字段 ，长度是500
  @Column(name = "username", length = 50,nullable=false)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Column(name = "email", length = 40,nullable=true)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name = "password", length = 20,nullable=true)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name = "status", length = 1,nullable=false)
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	/*
	 * 多对多注解: 
           在多对多注解中,双方都采用@ManyToMany.
             其中被控方,像一对多注解中设置一样,也要设置mappedBy.
          其中主控方,不像一对多注解那样,采用@joinColumn,而是采用@joinTable.如下:
  @JoinTable(name="j_student_course" ,joinColumns={@JoinColumn(name="sid")},inverseJoinColumns={@JoinColumn(name="cid")})
       其中,如上所说,mappedBy,相当于inverse="true".所以,在@joinTable中的inverseJoinColumns中定义的字段为mappedBy所在类的主键.
  joinColumns定义的字段,就是当前类的主键.
	 */
	//级联操作：cascade = CascadeType.ALL
	 //延迟加载：fetch = FetchType.LAZY
	 //映射：mappedBy = "category"
	 //一对多方式
	 //@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "category")
	//inverseJoinColumns中对应的id为以下属性Role的对应id.
	@Column(name = "addTime", nullable=false)
	public Date getAddTime() {
		return addTime;
	}
	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}
	@Column(name = "phone", length =11 ,nullable=true)
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Column(name = "bindStatus", length =1,nullable=true)
	public int getBindStatus() {
		return bindStatus;
	}
	public void setBindStatus(int bindStatus) {
		this.bindStatus = bindStatus;
	}
	
	    @ManyToMany(fetch=FetchType.EAGER)
	    @JoinTable(name="users_roles")
	    @Cache(usage=CacheConcurrencyStrategy.READ_WRITE)
	    @JsonIgnore
	    public Set<Role> getRoles() {
	        return roles;
	    }

	    public void setRoles(Set<Role> roles) {
	        this.roles = roles;
	    }
	    
	    @Transient  
	    public Set<String> getRolesName(){  
	        Set<String> set=new HashSet<String>();  
	        for (Role role :getRoles()) {  
	            set.add(role.getName());  
	        }  
	        return set;  
	    }  
	
	
}