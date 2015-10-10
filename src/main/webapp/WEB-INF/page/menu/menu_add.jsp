<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="${root }/js/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript"  src="${root}/js/signature.js"></script>
<script type="text/javascript" src="${root}/js/jquery.sha1.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<script type="text/javascript">
var noncestr='Wm3WZYTPz0wzccnW'
 var jsapi_ticket='sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg'
 var timestamp=1414587457
 var url='http://mp.weixin.qq.com?params=value' ;
   var  s  = wxSignature(noncestr,jsapi_ticket,timestamp,url);
   alert(s);
</script>
<body>
     <form >
        <input type="text"  name="access_token"  value="${access_token}"  id="access_token"><br>
        <textarea rows="20" cols="20"  name="body"   id="body">${body }</textarea><br>
        <input type="button"  value="add" id="add">
     </form>
</body>
<script type="text/javascript">
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx75475762bb0ef533', // 必填，公众号的唯一标识
    timestamp:1444368826 , // 必填，生成签名的时间戳
    nonceStr: '1409467468', // 必填，生成签名的随机串
    signature: 'af44d8e6eb1997ef3c172c3d2140eb183d545129',// 必填，签名，见附录1
    jsApiList: ['onMenuShareQQ'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.ready(function(){
	wx.onMenuShareQQ({
	    title: 'QQ分享', // 分享标题
	    desc: '分享描述', // 分享描述
	    link: 'http://baidu.com', // 分享链接
	    imgUrl: 'http://cdn-img.easyicon.net/png/11901/1190114.gif', // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	       alert("succwss")
	    },
	    cancel: function () { 
	       // 用户取消分享后执行的回调函数
	    }
	});
  
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});

wx.error(function(res){
	 alert(001);
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

});




    

</script>
</html>