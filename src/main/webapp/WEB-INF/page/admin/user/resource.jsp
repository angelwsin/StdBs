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
          <div style="margin: 50px  100px  200px 100px ;width: 80%">
    <table id="jqGrid" ></table>
    <div id="jqGridPager"></div>
</div>
          
</body>
<script type="text/javascript">
 $(document).ready(function () {
        	var grid = $("#jqGrid"); 
            $("#jqGrid").jqGrid({
                url: '${root}/manager/Resource',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "json",
                colNames: ["资源路径 ", "权限"],  
                colModel: [
                    {  name: 'value', key: true, width: 500, align: "center",editable:true },
                    { name: 'permissions', width: 150, align: "center",editable:true },
                ],
                scroll:false,
                gridComplete: function(){//caption居中
                            $('#jqGrid').closest("div.ui-jqgrid-view")
                                .children("div.ui-jqgrid-titlebar")
                	                .css("text-align", "center")
                	                 .children("span.ui-jqgrid-title")
                	                .css("float", "none");
                	         },
                editurl:'${root}/manager/ScheduleJob/edit',
                caption:'资源列表',
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
            		{ add: true,edit: true, del: true,search:true,refresh:true }
            ); 
            
           // $("#jqGrid").jqGrid('navGrid','#jqGridPager');  
            
        });
 </script>
</html>