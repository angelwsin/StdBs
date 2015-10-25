package com.weixin.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="permission") 
public class Permission {
	 private Long id;

	    private String permission;

	    private String description;
	    @Id
		@Column(name = "id", unique = true, nullable = false)
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		public Long getId() {
			return id;
		}
      
		public void setId(Long id) {
			this.id = id;
		}
		@Column(name = "permission", length = 50,nullable=false)
		public String getPermission() {
			return permission;
		}

		public void setPermission(String permission) {
			this.permission = permission;
		}
		@Column(name = "description", length = 100,nullable=false)
		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
	    
	    
}
