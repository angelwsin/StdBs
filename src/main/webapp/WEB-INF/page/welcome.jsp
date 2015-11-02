<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="comm/header.jsp" %>
<style type="text/css">
.ui-th-column-header
{
 text-align: center;
}
</style>
</head>
<body style="width: 100%">
  <div style="margin: 50px  100px  200px 100px ;width: 80%">
    <table id="jqGrid" ></table>
    <div id="jqGridPager"></div>
</div>
 
</body>
<script type="text/javascript"> 
        $(document).ready(function () {
        	var grid = $("#jqGrid"); 
            $("#jqGrid").jqGrid({
                url: '${root}/manager/User',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "json",
                colNames: ["姓名", "邮件", "密码", "状态", "添加时间"],  
                colModel: [
                    {  name: 'username', key: true, width: 500, align: "center",editable:true },
                    { name: 'email', width: 150, align: "center",editable:true },
                    {   name: 'password', width: 150 , align: "center",editable:true},
                    { name: 'status', width: 150, align: "center",editable:true },
                    { name: 'addTime', width: 300 , align: "center"}
                ],
                scroll:false,
                gridComplete: function(){//caption居中
                            $('#jqGrid').closest("div.ui-jqgrid-view")
                                .children("div.ui-jqgrid-titlebar")
                	                .css("text-align", "center")
                	                 .children("span.ui-jqgrid-title")
                	                .css("float", "none");
                	         },
                editurl:'${root}/manager/User/edit',
                caption:'用户信息列表',
                rowList:[10,20,30],
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
                pager: "#jqGridPager"
            }).navGrid('#jqGridPager', 
            		{ add: true, afterAdd:add,edit: true, del: true,search:true,refresh:true },
            			{ beforeShowForm: function(form) {
            			     // "editmodlist"
            			     var dlgDiv = $("#editmod" + grid[0].id);
            			     var parentDiv = dlgDiv.parent(); // div#gbox_list
            			     var dlgWidth = dlgDiv.width();
            			     var parentWidth = parentDiv.width();
            			     var dlgHeight = dlgDiv.height();
            			     var parentHeight = parentDiv.height();
            			     // TODO: change parentWidth and parentHeight in case of the grid
            			     //  is larger as the browser window
            			     dlgDiv[0].style.top = Math.round((parentHeight-dlgHeight)/2) + "px";
            			     dlgDiv[0].style.left = Math.round((parentWidth-dlgWidth)/2) + "px";
            			    }}
            
            
            ); 
            
           // $("#jqGrid").jqGrid('navGrid','#jqGridPager');  
            
        });
        
        function add(){
        	  alert(098);
        }
 
   </script>
</html>