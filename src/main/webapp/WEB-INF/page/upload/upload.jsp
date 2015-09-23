<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>UploadiFive Test</title>
<script src="${root }/js/jquery.min.js" type="text/javascript"></script>
<script src="${root }/js/bootstrap/jquery.uploadifive.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="${root }/css/uploadifive.css">
<style type="text/css">
body {
	font: 13px Arial, Helvetica, Sans-serif;
}
.uploadifive-button {
	float: left;
	margin-right: 10px;
}
#queue {
	border: 1px solid #E5E5E5;
	height: 177px;
	overflow: auto;
	margin-bottom: 10px;
	padding: 0 3px 3px;
	width: 300px;
}
</style>
</head>

<body>
	<h1>UploadiFive Demo</h1>
	<form>
		<div id="queue"></div>
		<input id="file_upload" name="file" type="file" multiple="true">
		<a style="position: relative; top: 8px;" href="javascript:$('#file_upload').uploadifive('upload')">Upload Files</a>
	</form>
  <div>微信上传临时文件</div>
  <form id="wxForm" action="${root }//upload/wxUpload" method="post"  enctype="multipart/form-data">
       <input type="hidden" name="access_token"  value="${access_token}">
        <input type="hidden" name=" type"  value="${type}">
        <input type="file"  data-type="file"  name="media">
        <input type="button" value="上传"  id="wxUpload">
  </form>
	<script type="text/javascript">
		$(function() {
			$('#file_upload').uploadifive({
				//'auto'             : false,
				//'checkScript'      : 'check-exists.php',
				'formData'         : {
									   'timestamp' : '0000000000',
									   'token'     : '977777777777'
				                     },
				 'fileObjName':"media",
				'queueID'          : 'queue',
				'uploadScript'     : '${root }//upload/wxUpload',
				'onUploadComplete' : function(file, data) { console.log(data); }
			});
			$("#wxUpload").click(function(){
				$.post
			});
			
		});
	</script>
</body>
</html>





