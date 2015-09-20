package com.weixin.message.bean;

public class WXBaseMessage extends WXMessage{
	private long     MsgId;
	public long getMsgId() {
		return MsgId;
	}
	public void setMsgId(long msgId) {
		MsgId = msgId;
	}
}
