<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="/WEB-INF/page/comm/header.jsp" %>
<script type="text/javascript" src="${root }/js/admin/user/resource.js"></script>
<style type="text/css">

</style>
</head>
<body>
	<div class="container">
		<%@include file="/WEB-INF/page/comm/nav.jsp"%>
		<div style="margin: 50px 100px 200px 100px; width: 80%">
			<table id="jqGrid"></table>
			<div id="jqGridPager"></div>
		</div>
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
        colNames: ["名称","资源路径 ","类型", "操作"],  
        colModel: [
                   {  name: 'name', key: true, width: 500, align: "center",editable:true },
            {  name: 'value', key: true, width: 500, align: "center",editable:true },
            {  name: 'type', key: true, width: 500, align: "center",editable:true },
            { name: 'op', width: 150, align: "center"},
        ],
        scroll:false,
        gridComplete: function(){//caption居中
                    $('#jqGrid').closest("div.ui-jqgrid-view")
                        .children("div.ui-jqgrid-titlebar")
        	                .css("text-align", "center")
        	                 .children("span.ui-jqgrid-title")
        	                .css("float", "none");
        	         },
        editurl:'${root}/manager/Resource/edit',
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
    ,{ //edit 编辑时
    	 top : 10,  //位置
    	 left: 200, //位置
    	 height:280, //大小
    	 width:750, //大小
    	 
    	},{ //add 添加时
    	 top : 10,
    	 left: 200,
    	 height:280,
    	 width:750,
    	 
    	},{ //del
    	},{ //search
    	},{ //view
    	},
    	{beforeShowForm : function(form) {},
            reloadAfterSubmit : true,
            closeAfterEdit : true
        

},
              {beforeShowForm : function(form) {},
            reloadAfterSubmit : true,
            closeAfterAdd : true
},
              {reloadAfterSubmit : true,
                   
},
              {multipleSearch:false}
    ); 
    
   // $("#jqGrid").jqGrid('navGrid','#jqGridPager');  
    
});
 </script>
</html>