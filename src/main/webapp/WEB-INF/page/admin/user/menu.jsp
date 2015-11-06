<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="/WEB-INF/page/comm/header.jsp" %>
</head>
<body>
          <div style="margin: 50px  100px  200px 100px ;width: 40%;float: left;">
    <table id="jqGrid" ></table>
    <div id="jqGridPager"></div>
</div>

 <div style="margin: 50px  0px  0px 10px ;width: 40%;float: left;">
    <table id="jqGridR" ></table>
    <div id="jqGridPagerR"></div>
</div>
 <div id="res-dialog" style="display: none;">
    <form action="addRole">
     <input type="text">
     </form>
 </div>
          
</body>
<script type="text/javascript">
 $(document).ready(function () {
        	var grid = $("#jqGrid"); 
            $("#jqGrid").jqGrid({
                url: '${root}/manager/Menu',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "json",
                colNames: ["id","菜单名称 ", "排序","状态","操作"],  
                colModel: [
                    {  name: 'id', key: true, width:160, align: "center",hidden:true },
                    {  name: 'nameM', width:160, align: "center",editable:true },
                    { name: 'order', width: 50, align: "center",editable:true },
                    { name: 'status', width: 150, align: "center",editable:true },
                    { name: 'Edit', width: 150, align: "center"}
                ],
                scroll:false,
                gridComplete: function(){//caption居中
                            $('#jqGrid').closest("div.ui-jqgrid-view")
                                .children("div.ui-jqgrid-titlebar")
                	                .css("text-align", "center")
                	                 .children("span.ui-jqgrid-title")
                	                .css("float", "none");
                            var ids = jQuery("#jqGrid").jqGrid('getDataIDs');
                            for (var i = 0; i < ids.length; i++) {
                            var id = ids[i];
                            var editBtn = "<a href='#' style='color:#f60' onclick=OpenAllocationDialog('"+ids[i]+"') >Edit</a>";
                            jQuery("#jqGrid").jqGrid('setRowData', ids[i], { Edit: editBtn });
                            }
                	         },
                editurl:'${root}/manager/Menu/edit',
                caption:'菜单列表',
             //   rowList:[10,20,30],
				viewrecords: true,
                height: 400,
                rowNum: 10,
                autowidth:true,
                rownumbers:true,//添加左侧行号
                jsonReader:{
                	 root: "list",//返回的数组集合
                    id: "id",//设置返回参数中，表格ID的名字为id
                    total: "totalPage", //总页数 
                    page: "curPage",//当前页数
                    records: "total",//总行数 
                    repeatitems : false
                },
                onSelectRow : function (ids){
                	var rowDatas = jQuery('#jqGrid').jqGrid('getRowData',ids);
                      rowDatas["name"]
                },
                pager: "#jqGridPager"
            }).navGrid('#jqGridPager', 
            		{ add: true,edit: true, del: true,search:true,refresh:true }
            ); 
            
           
            
           // $("#jqGrid").jqGrid('navGrid','#jqGridPager');  
            
        });
 
 $(function(){
	 var gridR = $("#jqGridR"); 
     $("#jqGridR").jqGrid({
         url: '${root}/manager/Resource',
         mtype: "GET",
			styleUI : 'Bootstrap',
         datatype: "json",
         colNames: ["id","资源名称", "资源路径","权限类型"],  
         colModel: [
                    {  name: 'id', key: true, width:160, align: "center",hidden:true },
                    {  name: 'name',  width: 500, align: "center",editable:true },
             {  name: 'value', width: 500, align: "center",editable:true },
             { name: 'type', width: 150, align: "center",editable:true },
         ],
         scroll:false,
         gridComplete: function(){//caption居中
                     $('#jqGridR').closest("div.ui-jqgrid-view")
                         .children("div.ui-jqgrid-titlebar")
         	                .css("text-align", "center")
         	                 .children("span.ui-jqgrid-title")
         	                .css("float", "none");
         	         },
         editurl:'${root}/manager/Resource/edit',
         caption:'资源列表',
       //  rowList:[10,20,30],
			viewrecords: true,
         height: 400,
         rowNum: 10,
         autowidth:true,
         rownumbers:true,//添加左侧行号
         jsonReader:{
         	 root: "list",//返回的数组集合
             id: "id",//设置返回参数中，表格ID的名字为id
             total: "totalPage", //总页数 
             page: "curPage",//当前页数
             records: "total",//总行数 
             repeatitems : false
         },
         pager: "#jqGridPagerR"
     }).navGrid('#jqGridPagerR', 
     		{ add: true,edit: true, del: true,search:true,refresh:true }
     ); 
 })
 
 function OpenAllocationDialog(ids){
	   var rowDatas = jQuery('#jqGrid').jqGrid('getRowData',ids);
       var name = rowDatas["name"];
       var obj = {'name':name};
	 ajaxDataOnSuccess("","manager/Resource",function(data){
		 if(data.result){
			//提示成功信息
				showMsg(data.message,"success");
				//重新加载查询列表
				
				 $('#res-dialog').dialog("close");
		 }else{
			 showMsg(data.message,"error");
		 }
		
	});
 }
 </script>
</html>