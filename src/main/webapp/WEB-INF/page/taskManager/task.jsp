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


          
           <script type="text/javascript">
               function editTime(id,e){
            	       $.post("${root}/taskManager/task/editTime",{"jobId":id,"cronExpression":$(e).val()},function(data){
            	    	   var msg = $.parseJSON(data); 
            	    	   alert(msg.message)
            	       })
               }
               
           </script>
          
</body>
<script type="text/javascript">
 $(document).ready(function () {
        	var grid = $("#jqGrid"); 
            $("#jqGrid").jqGrid({
                url: '${root}/manager/ScheduleJob',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "json",
                colNames: ["任务名称 ", "任务分组 ", "任务状态", "cron表达式", "描述 ","包名+类名","任务是否有状态","spring bean","任务调用的方法名"],  
                colModel: [
                    {  name: 'jobName', key: true, width: 500, align: "center",editable:true },
                    { name: 'jobGroup', width: 150, align: "center",editable:true },
                    {   name: 'jobStatus', width: 150 , align: "center",editable:true },
                    { name: 'cronExpression', width: 150, align: "center",editable:true },
                    { name: 'description', width: 150, align: "center",editable:true },
                    { name: 'beanClass', width: 150, align: "center",editable:true },
                    { name: 'isConcurrent', width: 300 , align: "center",editable:true},
                    { name: 'springId', width: 300 , align: "center",editable:true },
                    { name: 'methodName', width: 300 , align: "center",editable:true }
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
                caption:'调度任务列表',
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
            		{ add: true,edit: true, del: true,search:true,refresh:true },
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
 </script>
</html>