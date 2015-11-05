 
 
 function add(){
	  /* $("#detailInfo")[0].reset();
	   $("#dbId").removeAttr("readonly");*/
	 $('#res-dialog').dialog({
	        title : '添加记录',
	        height : 300,
	        width : 800,
	        draggable:false,
	        modal:true,
	        resizable : false,
	        buttons: [{
	            text: "提交",
	            click: function() {
	            
	            	var inData = getData("detailInfo");
	        			//增加操作标志
	        			inData["oper"]="add";
	        			
	        			//inData["managementService"] = "dbInfoServiceImpl";
	        			//调用新增方法
	        			ajaxDataOnSuccess(inData,"manage/DBInfo",function(data){
	        				 if(data.result){
	        					//提示成功信息
	             				showMsg(data.message,"success");
	             				//重新加载查询列表
	             				$("#gridTable").jqGrid("setGridParam",{
	             					datatype: 'json',
	             				}).trigger("reloadGrid", [{page:1}]);
	             				 $('#res-dialog').dialog("close");
	        				 }else{
	        					 showMsg(data.message,"error");
	        				 }
	        				
	        			});
	        			
	        			
	        	
	            }
	            
	          },{
	              text: "取消",
	              click: function() { $(this).dialog("close"); }
	        }]
	        
	    });
	
}