package com.weixin.bean;

import java.util.List;

public class Page<T> {
	
	 private int curPage;//当前页
	 private int totalPage;//总页数
	 private int total;//总行数
	 private int pageSize;//每页的条数
	 private List<T> list;
	public int getCurPage() {
		return curPage;
	}
	public void setCurPage(int curPage) {
		this.curPage = curPage;
	}
	public int getTotalPage() {
		
		return  totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public List<T> getList() {
		return list;
	}
	public void setList(List<T> list) {
		this.list = list;
	}
	
	public int getStartPage(){
		return  (curPage-1)*pageSize;
	}
	 
	public int getCountPage(){
		 return total%pageSize==0?total/pageSize:total/pageSize+1;
	}
	 

}
