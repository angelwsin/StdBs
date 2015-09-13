<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
            <div>
            <form action="${root}/taskManager/add/Update/" method="post">
                 任务名称 <input type="text" name="jobName"><br>
                 任务分组<input type="text" name="jobGroup"><br>
                 cron表达式 <input type="text" name="cronExpression"><br>
                 描述 <input type="text" name="description"><br>
                 类名 <input type="text" name="beanClass"><br>
                 bean <input type="text" name="springId"><br>
                 任务调用的方法名 <input type="text" name="methodName"><br>
                  <input type="hidden" name="op" value="${op }">
                  <input type="submit"  value="添加">
            </form>
            </div>
            
          
</body>
</html>