package com.weixin.bean;

public class Message {
	 private String code;
	 private String msg;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Message(String code, String msg) {
		super();
		this.code = code;
		this.msg = msg;
	}
	 

}
