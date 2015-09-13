<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${root }/js/bootstrap/jquery-1.11.2.js"></script>
</head>
<body>
            <div>
            
            </div>
            <p><a href="${root }/taskManager/add">添加</a></p>
            
           <table>
              <thead>
                <tr>
                 <td>任务的名称</td><td>任务的时间</td><td>操作</td>
                </tr>
              </thead>
              <tbody>
              <c:forEach items="${jobList }" var="job">
              <tr>
                 <td>${job.jobName }</td><td><input type="text" name="cronExpression" value="${job.cronExpression }"  onchange="editTime('${job.jobId}',this)"></td><td><a href="${root }/taskManager/task/${job.jobId}/${job.jobStatus}">${job.jobStatus=="1"?"停止":"启用"}</a></td><td>修改</td>
                 </tr>
              </c:forEach>
              </tbody>
              
           </table>
           <p>运行中</p>
           <table>
              <thead>
                <tr>
                 <td>任务的名称</td><td>任务的时间</td><td>操作</td>
                </tr>
              </thead>
              <tbody>
              <c:forEach items="${runingList }" var="job">
              <tr>
                 <td>${job.jobName }</td><td>${job.cronExpression}</td><td>${job.jobStatus}</td>
                 </tr>
              </c:forEach>
              </tbody>
              
           </table>
           
           <script type="text/javascript">
               function editTime(id,e){
            	       $.post("${root}/taskManager/task/editTime",{"jobId":id,"cronExpression":$(e).val()},function(data){
            	    	   var msg = $.parseJSON(data); 
            	    	   alert(msg.message)
            	       })
               }
               
           </script>
          
</body>
</html>