<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!-- The jQuery library is a prerequisite for all jqSuite products -->
    <script type="text/ecmascript" src="js/jquery.min.js"></script> 
    <!-- We support more than 40 localizations -->
    <script type="text/ecmascript" src="js/i18n/grid.locale-en.js"></script>
    <!-- This is the Javascript file of jqGrid -->   
    <script type="text/ecmascript" src="js/jquery.jqGrid.min.js"></script>
    <!-- This is the localization file of the grid controlling messages, labels, etc.
    <!-- A link to a jQuery UI ThemeRoller theme, more than 22 built-in and many more custom -->
	<link rel="stylesheet" href="css/bootstrap.min.css"> 
    <!-- The link to the CSS that the grid needs -->
    <link rel="stylesheet" type="text/css" media="screen" href="css/ui.jqgrid-bootstrap.css" />
	<script>
		$.jgrid.defaults.width = 780;
	</script>
	<script src="js/bootstrap/bootstrap.min.js"></script>
</head>
<body style="width: 100%">
  <div style="margin: 50px  100px  200px 260px ;width: 80%">
    <table id="jqGrid" ></table>
    <div id="jqGridPager"></div>
</div>
</body>
<script type="text/javascript"> 
        $(document).ready(function () {
            $("#jqGrid").jqGrid({
                url: '${root}/manager/User',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "json",
                colModel: [
                    { label: 'username', name: 'username', key: true, width: 500 },
                    { label: 'email', name: 'email', width: 150 },
                    { label: 'password', name: 'password', width: 150 },
                    { label: 'status', name: 'status', width: 150 },
                    { label:'addTime', name: 'addTime', width: 300 }
                ],
				viewrecords: true,
                height: 250,
                rowNum: 10,
                width:600,
                pager: "#jqGridPager"
            });
        });
 
   </script>
</html>