package com.weixin.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@SuppressWarnings("serial")
@Entity
@Table(name="fileResp")
public class UploadFile {
	            private int  id;
	            private String url;
	            private String type;
	            private Date addTime;
	            private Date  updateTime;
	            private String mediaId;
	            private String thumbMediaId;
	            private String title;
	            private String desc;
	            @Id
	        	@Column(name = "id", unique = true, nullable = false)
	        	@GeneratedValue(strategy = GenerationType.IDENTITY)
				public int getId() {
					return id;
				}
				public void setId(int id) {
					this.id = id;
				}
				 @Column(name = "url",  nullable = false)
				public String getUrl() {
					return url;
				}
				public void setUrl(String url) {
					this.url = url;
				}
				 @Column(name = "type",  nullable = false)
				public String getType() {
					return type;
				}
				public void setType(String type) {
					this.type = type;
				}
				 @Column(name = "addTime",  nullable = false)
				public Date getAddTime() {
					return addTime;
				}
				public void setAddTime(Date addTime) {
					this.addTime = addTime;
				}
				 @Column(name = "updateTime",  nullable = true)
				public Date getUpdateTime() {
					return updateTime;
				}
				public void setUpdateTime(Date updateTime) {
					this.updateTime = updateTime;
				}
				 @Column(name = "mediaId",  nullable = true)
				public String getMediaId() {
					return mediaId;
				}
				public void setMediaId(String mediaId) {
				   this.mediaId = mediaId;
				}
				@Column(name = "thumbMediaId",  nullable = true)
				public String getThumbMediaId() {
					return thumbMediaId;
				}
				public void setThumbMediaId(String thumbMediaId) {
					this.thumbMediaId = thumbMediaId;
				}
				@Column(name = "title",  nullable = true)
				public String getTitle() {
					return title;
				}
				public void setTitle(String title) {
					this.title = title;
				}
				@Column(name = "desc_",  nullable = true)
				public String getDesc() {
					return desc;
				}
				public void setDesc(String desc) {
					this.desc = desc;
				}
				
			
	            
	            

}
