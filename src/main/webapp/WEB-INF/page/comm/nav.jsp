<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<div class="bs-example" data-example-id="nav-pills-with-dropdown">
	<ul class="nav nav-pills">
		<li class="active" role="presentation"><a href="#">Home</a></li>
		<li role="presentation"><a href="#">Help</a></li>
		<li class="dropdown" role="presentation">
		<a class="dropdown-toggle" aria-expanded="false" aria-haspopup="true"
			role="button" href="#" data-toggle="dropdown"> Dropdown <span class="caret"></span>
		</a>
			<ul class="dropdown-menu">
				<li><a href="#">Action</a></li>
				<li><a href="#">Another action</a></li>
				<li><a href="#">Something else here</a></li>
				<li class="divider" role="separator"></li>
				<li><a href="#">Separated link</a></li>
			</ul></li>
	</ul>
</div>

