<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
<!DOCTYPE html>
<!-- saved from url=(0098)https://mp.weixin.qq.com/advanced/autoreply?t=ivr/reply&action=beadded&token=1423695882&lang=zh_CN -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">

<meta charset="utf-8">
<script type="text/javascript">
window.wxError=function(){
function e(e,i){
return e.replace(/\{(\w+)\}/g,function(e,n){
return void 0!==i[n]?(i[n]+"").replace(/\s/g,"_").slice(0,150):"";
});
}
function i(e){
return/MicroMessenger/i.test(e)?"wechat":/firefox/i.test(e)?"firefox":/chrome/i.test(e)?"chrome":/opera/i.test(e)?"opera":/safari/i.test(e)?"safari":/msie 6/i.test(e)?"IE6":/msie 7/i.test(e)?"IE7":/msie 8/i.test(e)?"IE8":/msie 9/i.test(e)?"IE9":/msie 10/i.test(e)?"IE10":"other";
}
function n(){
r.path=/(?:mp\.)?weixin\.qq\.com(?::8080)?\/(.*\?)/.exec(location.href)[1],/action=.*/.exec(location.href)&&(action=/action=.*/.exec(location.href)[0].split("&")[0],
r.path+=action);
for(var e in r.PATH_REG_MAP)if(r.PATH_REG_MAP[e]instanceof RegExp&&r.PATH_REG_MAP[e].exec(r.path)){
path=e;
break;
}
r.ua=i(window.navigator.userAgent);
}
var r={
PATH_REG_MAP:{
advanced:/^advanced\/\w/,
cardticket:/\/merchant\/(cardstat|electroniccardmgr|cardshelf|carduse|carduserecord|cardapply)/
}
};
return n(),window.onerror=function(n,t,a,o,c){
var s="path:{path};file:{file};line:{line};msg:{msg};uin:{uin};col:{col};ua:{ua};from:mp",l=new Image;
if(!t||/^http(s)?\:\/\/(mp\.weixin\.qq\.com)|(res\.wx\.qq\.com)\//.test(t)){
var u=[];
t.replace(/(\w*)\.js/g,function(e,i){
u.push(i);
}),u=u.length>0?u.join("|"):t.replace(/[\?&]token=[^&]+/,"").replace(/[\?&]lang=[^&]+/,"");
var d={
path:(r.path||"").replace(/=/g,"-"),
file:u,
line:a,
msg:n,
uin:"3236070842",
ua:window.navigator.userAgent.replace(/[\:,;]/g,"|"),
col:o
};
if(r.hook&&r.hook(d),d.msg.indexOf("ueditor")>-1||d.file.indexOf("editor_all_min")>-1){
d.ua=i(window.navigator.userAgent);
var s=e("file:{file};line:{line};col:{col};uin:{uin};ua:{ua};",d)+"msg:"+n;
return s=s.substr(0,1024),void(l.src="/misc/jslog?id=18&level=error&content="+encodeURIComponent(s));
}
s=e(s,d),c&&c.stack&&(s+=";stack:"+c.stack,s=s.slice(0,1024)),s=["https://mp.weixin.qq.com/mp/speedreport?data_type=3&net=wifi&os=pc&ua=",i(window.navigator.userAgent),"&ext_data=",encodeURIComponent(s)].join(""),
l.src=s;
}
},window.wx_loaderror=function(i){
var n=i.tagName.toLowerCase(),r={
link:33,
script:34
};
if(r[n]){
var t="/misc/jslog?level=error&id={id}&content=[uin:3236070842,url:{url},pageurl:{pageurl},ua:{ua}]";
t=e(t,{
id:r[n],
url:encodeURIComponent(i.href||i.src),
pageurl:encodeURIComponent(window.location.href),
ua:window.navigator.userAgent
}),(new Image).src=t;
}
},{
data:r
};
}();
</script>
<script type="text/javascript">
    //上报测速 --初始点
    window._points=[+new Date()];

    //上报测速 --js加载完成点,通过编译工具加在seajs.use回调中
    function wx_main(mod){
        window._points&&(window._points[3]=+new Date());
    };
</script>
<title>微信公众平台</title>
<link href="https://res.wx.qq.com/mpres/htmledition/images/favicon218877.ico" rel="Shortcut Icon">
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="${root}/css/admin/layout_head2880f5.css">
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="${root}/css/admin/base284ee4.css">
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="${root}/css/admin/lib22f1a9.css">



        
        
<link onerror="wx_loaderror(this)" rel="stylesheet" href="${root}/css/admin/advanced_reply_common27d7ed.css">
<link rel="stylesheet" type="text/css" href="${root}/css/admin/msg_sender2880f5.css">

    <style></style></head>
    <body class="zh_CN">
        <div class="head" id="header">
            <script type="text/javascript">
    //上报测速 --css加载完成点
    window._points&&(window._points[1]=+new Date());
</script>
<div class="head_box">
    <div class="inner wrp">
        <h1 class="logo"><a href="https://mp.weixin.qq.com/" title="微信公众平台"></a></h1>
                                <div class="account">
                        <div class="account_meta account_info account_meta_primary">
                                <a href="https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/index&action=index&token=1423695882&lang=zh_CN" class="nickname">夕阳雨</a>
                                <span class="type_wrp">
                                        <a href="https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/index&action=index&token=1423695882&lang=zh_CN" class="type icon_subscribe_label">订阅号</a>
                                        
                                        <a href="https://mp.weixin.qq.com/merchant/store?action=detail&t=wxverify/detail&info=verify&lang=zh_CN&token=1423695882" class="type icon_verify_label fail">未认证</a>
                                        
                </span>
                                <a href="https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/index&action=index&token=1423695882&lang=zh_CN"><img src="./微信公众平台3_files/getheadimg" class="avatar"></a>
                            </div>
            <div id="accountArea" class="account_meta account_inbox account_meta_primary">
                                <a href="https://mp.weixin.qq.com/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=1423695882" class="account_inbox_switch">
                                        <span class="icon_dot_notices">
                        1
                        <span class="icon_dot_notices_left"></span>
                        <span class="icon_dot_notices_right"></span>
                    </span>
                                    </a>
                            </div>
                <div class="account_meta account_logout account_meta_primary"><a id="logout" href="https://mp.weixin.qq.com/cgi-bin/logout?t=wxm-logout&lang=zh_CN&token=1423695882">退出</a></div>
                                </div>
                    </div>
</div>

        </div>
        <div id="body" class="body page_advanced_reply">
            <div id="js_container_box" class="container_box cell_layout side_l">
                
                                <div class="col_side">
                    <div class="menu_box" id="menuBar">
<dl class="menu no_extra">
    <dt class="menu_title">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_function.png
        ) no-repeat;">
    </i>功能
                </dt> 

				<dd class="menu_item "><a data-id="10005" href="${root }/adminWXFun/batchSend">群发功能        </a></dd>
					<dd class="menu_item selected"><a data-id="10006" href="${root}/adminWXFun/autoResp">自动回复        </a></dd>
					<dd class="menu_item "><a data-id="10007" href="${root}/adminWXFun/defMenu">自定义菜单        </a></dd>
					<dd class="menu_item "><a data-id="10038" href="https://mp.weixin.qq.com/cgi-bin/newoperatevote?action=list&token=1423695882&lang=zh_CN">投票管理        </a></dd>
				    <dd class="menu_plugins"><a class="btn_plugins_add" data-id="10025" href="https://mp.weixin.qq.com/cgi-bin/plugincenter?t=service/plugins&act=all&token=1423695882&lang=zh_CN">添加功能插件</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_management.png
        ) no-repeat;">
    </i>管理
                </dt> 

				<dd class="menu_item "><a data-id="10012" href="https://mp.weixin.qq.com/cgi-bin/message?t=message/list&count=20&day=7&token=1423695882&lang=zh_CN">消息管理        </a></dd>
					<dd class="menu_item "><a data-id="10013" href="https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pageidx=0&type=0&token=1423695882&lang=zh_CN">用户管理        </a></dd>
					<dd class="menu_item "><a data-id="10014" href="https://mp.weixin.qq.com/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list&token=1423695882&lang=zh_CN">素材管理        </a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_ad.png
        ) no-repeat;">
    </i>推广
                </dt> 

				<dd class="menu_item "><a data-id="10026" href="https://mp.weixin.qq.com/merchant/ad_client_index?t=ad_system/client_index&token=1423695882&lang=zh_CN">广告主        </a></dd>
					<dd class="menu_item "><a data-id="10027" href="https://mp.weixin.qq.com/merchant/ad_host_index?t=ad_system/host_index&token=1423695882&lang=zh_CN">流量主        </a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_statistics.png
        ) no-repeat;">
    </i>统计
                </dt> 

				<dd class="menu_item "><a data-id="10015" href="https://mp.weixin.qq.com/misc/useranalysis?&token=1423695882&lang=zh_CN">用户分析        </a></dd>
					<dd class="menu_item "><a data-id="10016" href="https://mp.weixin.qq.com/misc/appmsganalysis?action=all&order_direction=2&token=1423695882&lang=zh_CN">图文分析        </a></dd>
					<dd class="menu_item "><a data-id="10017" href="https://mp.weixin.qq.com/misc/messageanalysis?type=daily&t=statistics/msg&token=1423695882&lang=zh_CN">消息分析        </a></dd>
					<dd class="menu_item "><a data-id="10018" href="https://mp.weixin.qq.com/misc/interfaceanalysis?type=daily&token=1423695882&lang=zh_CN">接口分析        </a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_setup.png
        ) no-repeat;">
    </i>设置
                </dt> 

				<dd class="menu_item "><a data-id="10019" href="https://mp.weixin.qq.com/cgi-bin/settingpage?t=setting/index&action=index&token=1423695882&lang=zh_CN">公众号设置        </a></dd>
					<dd class="menu_item "><a data-id="10020" href="https://mp.weixin.qq.com/merchant/store?action=detail&t=wxverify/detail&info=verify&token=1423695882&lang=zh_CN">微信认证        </a></dd>
					<dd class="menu_item "><a data-id="10022" href="https://mp.weixin.qq.com/cgi-bin/safecenterstatus?action=view&t=setting/safe-index&token=1423695882&lang=zh_CN">安全中心        </a></dd>
					<dd class="menu_item "><a data-id="10045" href="https://mp.weixin.qq.com/cgi-bin/illegalrecord?count=10&token=1423695882&lang=zh_CN">违规记录        </a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title clickable">
        <a href="https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=1423695882&lang=zh_CN">
        <i class="icon_menu" style="background:url(
        https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_developer.png
        ) no-repeat;">
    </i>开发者中心
            </a>
        </dt> 

	</dl>
</div>

<script type="text/javascript">
    var _new_comment_num=""||0;
</script>
                </div>
                                
                <div class="col_main">
                    

<div class="main_hd">
    <h2>自动回复</h2>
</div>
<div class="main_bd">
    <div class="highlight_box icon_wrap icon_small border" id="div_stop" style="display:none">
        <div class="opr">
            <a href="javascript:;" class="btn btn_primary" id="btn_start">开启</a>
        </div>
        <span class="icon lock">
            
        </span>
        <h4 class="title">未开启自动回复设置</h4>
        <p class="desc">
            通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。<a href="javascript:;" class="detail_desc">查看详情</a>
        </p>
    </div>
    <div class="reply_pop_tips popover normal_flow pos_right" id="div_alertTips" style="display:none">
        <div class="popover_inner">
            <div class="popover_content">
                
                <p class="">由于在开发者中心开启了回调URL和Token，当前自动回复设置已失效。你可以前往<a href="https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=1423695882&lang=zh_CN">开发者中心</a>进行停用。</p>
                
            </div>
        </div>
        <i class="popover_arrow popover_arrow_out"></i>
        <i class="popover_arrow popover_arrow_in"></i>
    </div>
    <div class="highlight_box icon_wrap icon_small border" id="div_start" style="">
        <div class="opr">
            <a href="javascript:;" class="btn btn_warn" id="btn_stop">停用</a>
        </div>
        <span class="icon unlock">
            
        </span>
        <h4 class="title">已开启自动回复设置</h4>
        <p class="desc">
            通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。<a href="javascript:;" class="detail_desc">查看详情</a>
        </p>
    </div>

    <div class="content_wrap" id="div_replyContent" style="">
        <div class="global_mod mt_layout reply_tab_wrp">
            <div class="section_tab">
                <ul class="tab_navs">
                    <li class="tab_nav  selected">
                        <a href="./微信公众平台3_files/微信公众平台3.html">被添加自动回复</a>
                    </li>
                    <li class="tab_nav  ">
                        <a href="https://mp.weixin.qq.com/advanced/autoreply?t=ivr/reply&action=autoreply&token=1423695882&lang=zh_CN">消息自动回复</a>
                    </li>
                    <li class="tab_nav no_extra ">
                        <a href="https://mp.weixin.qq.com/advanced/autoreply?t=ivr/keywords&action=smartreply&token=1423695882&lang=zh_CN">关键词自动回复</a>
                    </li>
                </ul>
            </div>
            
            <div class="global_extra">
                                <span class="reply_title_tips mini_tips icon_after"><a href="http://kf.qq.com/info/80935.html" target="_blank">公众平台如何设置被添加自动回复 <i class="icon_mini_tips document_link"></i></a></span>
                            </div>
            
        </div>

        <div class="msg_sender" id="js_msgSender"><div class="msg_tab">
	<ul class="tab_navs">
	    
        <li class="tab_nav tab_text width4 selected" data-type="1" data-tab=".js_textArea" data-tooltip="文字">
		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">文字</span></a>
	    </li>
	    
        <li class="tab_nav tab_img width4" data-type="2" data-tab=".js_imgArea" data-tooltip="图片">
		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">图片</span></a>
	    </li>
	    
        <li class="tab_nav tab_audio width4" data-type="3" data-tab=".js_audioArea" data-tooltip="语音">
		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">语音</span></a>
	    </li>
	    
        <li class="tab_nav tab_video width4 no_extra" data-type="15" data-tab=".js_videoArea" data-tooltip="视频">
		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">视频</span></a>
	    </li>
	    
	</ul>
	<div class="tab_panel">
	    
	    <div class="tab_content" style="display: block;">
	    	<div class="js_textArea inner no_extra"><div class="emotion_editor">
    <div class="edit_area js_editorArea" style="display: none;"></div><div class="edit_area js_editorArea" contenteditable="true" style="overflow-y: auto; overflow-x: hidden;"></div>
    <div class="editor_toolbar">
        
        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>
        
        
        <p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>
        <p class="editor_tip js_editorTip">还可以输入<em>600</em>字</p>
        <div class="emotion_wrp js_emotionArea"><span class="hook">
	<span class="hook_dec hook_top"></span>
	<span class="hook_dec hook_btm"></span>
</span>
<ul class="emotions" onselectstart="return false;"> 
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" data-title="微笑" style="background-position:0px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif" data-title="撇嘴" style="background-position:-24px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif" data-title="色" style="background-position:-48px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif" data-title="发呆" style="background-position:-72px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif" data-title="得意" style="background-position:-96px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif" data-title="流泪" style="background-position:-120px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif" data-title="害羞" style="background-position:-144px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif" data-title="闭嘴" style="background-position:-168px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif" data-title="睡" style="background-position:-192px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif" data-title="大哭" style="background-position:-216px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif" data-title="尴尬" style="background-position:-240px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif" data-title="发怒" style="background-position:-264px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif" data-title="调皮" style="background-position:-288px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif" data-title="呲牙" style="background-position:-312px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif" data-title="惊讶" style="background-position:-336px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif" data-title="难过" style="background-position:-360px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif" data-title="酷" style="background-position:-384px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif" data-title="冷汗" style="background-position:-408px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif" data-title="抓狂" style="background-position:-432px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif" data-title="吐" style="background-position:-456px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif" data-title="偷笑" style="background-position:-480px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif" data-title="可爱" style="background-position:-504px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif" data-title="白眼" style="background-position:-528px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif" data-title="傲慢" style="background-position:-552px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif" data-title="饥饿" style="background-position:-576px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif" data-title="困" style="background-position:-600px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif" data-title="惊恐" style="background-position:-624px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif" data-title="流汗" style="background-position:-648px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif" data-title="憨笑" style="background-position:-672px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif" data-title="大兵" style="background-position:-696px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif" data-title="奋斗" style="background-position:-720px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif" data-title="咒骂" style="background-position:-744px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif" data-title="疑问" style="background-position:-768px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif" data-title="嘘" style="background-position:-792px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif" data-title="晕" style="background-position:-816px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif" data-title="折磨" style="background-position:-840px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif" data-title="衰" style="background-position:-864px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif" data-title="骷髅" style="background-position:-888px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif" data-title="敲打" style="background-position:-912px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif" data-title="再见" style="background-position:-936px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif" data-title="擦汗" style="background-position:-960px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif" data-title="抠鼻" style="background-position:-984px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif" data-title="鼓掌" style="background-position:-1008px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif" data-title="糗大了" style="background-position:-1032px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif" data-title="坏笑" style="background-position:-1056px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif" data-title="左哼哼" style="background-position:-1080px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif" data-title="右哼哼" style="background-position:-1104px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif" data-title="哈欠" style="background-position:-1128px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif" data-title="鄙视" style="background-position:-1152px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif" data-title="委屈" style="background-position:-1176px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif" data-title="快哭了" style="background-position:-1200px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif" data-title="阴险" style="background-position:-1224px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif" data-title="亲亲" style="background-position:-1248px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif" data-title="吓" style="background-position:-1272px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif" data-title="可怜" style="background-position:-1296px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif" data-title="菜刀" style="background-position:-1320px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif" data-title="西瓜" style="background-position:-1344px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif" data-title="啤酒" style="background-position:-1368px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif" data-title="篮球" style="background-position:-1392px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif" data-title="乒乓" style="background-position:-1416px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif" data-title="咖啡" style="background-position:-1440px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif" data-title="饭" style="background-position:-1464px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif" data-title="猪头" style="background-position:-1488px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif" data-title="玫瑰" style="background-position:-1512px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif" data-title="凋谢" style="background-position:-1536px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif" data-title="示爱" style="background-position:-1560px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif" data-title="爱心" style="background-position:-1584px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif" data-title="心碎" style="background-position:-1608px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif" data-title="蛋糕" style="background-position:-1632px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif" data-title="闪电" style="background-position:-1656px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif" data-title="炸弹" style="background-position:-1680px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif" data-title="刀" style="background-position:-1704px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif" data-title="足球" style="background-position:-1728px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif" data-title="瓢虫" style="background-position:-1752px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif" data-title="便便" style="background-position:-1776px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif" data-title="月亮" style="background-position:-1800px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif" data-title="太阳" style="background-position:-1824px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif" data-title="礼物" style="background-position:-1848px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif" data-title="拥抱" style="background-position:-1872px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif" data-title="强" style="background-position:-1896px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif" data-title="弱" style="background-position:-1920px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif" data-title="握手" style="background-position:-1944px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif" data-title="胜利" style="background-position:-1968px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif" data-title="抱拳" style="background-position:-1992px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif" data-title="勾引" style="background-position:-2016px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif" data-title="拳头" style="background-position:-2040px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif" data-title="差劲" style="background-position:-2064px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif" data-title="爱你" style="background-position:-2088px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif" data-title="NO" style="background-position:-2112px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif" data-title="OK" style="background-position:-2136px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif" data-title="爱情" style="background-position:-2160px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif" data-title="飞吻" style="background-position:-2184px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif" data-title="跳跳" style="background-position:-2208px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif" data-title="发抖" style="background-position:-2232px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif" data-title="怄火" style="background-position:-2256px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif" data-title="转圈" style="background-position:-2280px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif" data-title="磕头" style="background-position:-2304px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif" data-title="回头" style="background-position:-2328px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif" data-title="跳绳" style="background-position:-2352px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif" data-title="挥手" style="background-position:-2376px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/100.gif" data-title="激动" style="background-position:-2400px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/101.gif" data-title="街舞" style="background-position:-2424px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/102.gif" data-title="献吻" style="background-position:-2448px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/103.gif" data-title="左太极" style="background-position:-2472px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/104.gif" data-title="右太极" style="background-position:-2496px 0;">
            </i>
        </li>
    
</ul>
<span class="emotions_preview js_emotionPreviewArea"></span>
</div>
    </div>
</div>

</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_imgArea inner ">
	    		<!--type 10图文 2图片  3语音 15视频 11商品消息-->
	    		
                <div class="tab_cont_cover jsMsgSendTab" data-index="1" data-type="2">
                    <div class="media_cover">
			            <span class="create_access">
			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="2" data-index="1">
                                <i class="icon36_common add_gray"></i>
                                <strong>从素材库中选择</strong>
                            </a>
			            </span>
                    </div>
                    <div class="media_cover">
			            <span class="create_access webuploader-container">
			                <a class="add_gray_wrp webuploader-pick" id="msgSendImgUploadBt" data-type="2" href="javascript:;">
                                <i class="icon36_common add_gray"></i>
                                <strong>上传图片</strong>
                            </a>
			            <ul class="upload_file_box" style="display:none"></ul><div id="rt_rt_1a02ds4l31mk76u41ginko5fst1" style="position: absolute; top: 82px; left: 182.875px; width: 56px; height: 57px; overflow: hidden; bottom: auto; right: auto;"><input type="file" accept="image/*" style="display: none;"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></span>
                    </div>
                </div>
	    		
	    	</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_audioArea inner ">
	    		<!--type 10图文 2图片  3语音 15视频 11商品消息-->
	    		
                <div class="tab_cont_cover jsMsgSendTab" data-index="2" data-type="3">
                    <div class="media_cover">
			            <span class="create_access">
			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="3" data-index="2">
                                <i class="icon36_common add_gray"></i>
                                <strong>从素材库中选择</strong>
                            </a>
			            </span>
                    </div>
                    <div class="media_cover">
			            <span class="create_access">
			                <a class="add_gray_wrp " id="msgSendAudioUploadBt" href="javascript:;">
                                <i class="icon36_common add_gray"></i>
                                <strong>新建语音</strong>
                            </a>
			            </span>
                    </div>
                </div>
	    		
	    	</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_videoArea inner ">
	    		<!--type 10图文 2图片  3语音 15视频 11商品消息-->
	    		
                <div class="tab_cont_cover jsMsgSendTab" data-index="3">
                    <div class="media_cover">
			            <span class="create_access">
			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;" data-type="15" data-index="3">
                                <i class="icon36_common add_gray"></i>
                                <strong>从素材库中选择</strong>
                            </a>
			            </span>
                    </div>
                    <div class="media_cover">
			            <span class="create_access">
			                <a target="_blank" class="add_gray_wrp" href="https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token=1423695882">
                                <i class="icon36_common add_gray"></i>
                                <strong>新建视频</strong>
                            </a>
			            </span>
                    </div>
                </div>
	    		
	    	</div>
	    </div>
	    
	</div>
</div>
</div>
        
        <div class="tool_bar">
            <span id="js_save" class="btn btn_primary btn_input"><button>保存</button></span>
            <span id="js_del" class="btn btn_default btn_input btn_disabled"><button disabled="disabled">删除回复</button></span>
        </div>
    </div>

	<div class="page_msg mini plugin_update_tips" id="js_authrized" style="display:none">
        <div class="inner group">
            <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>
            <div class="msg_content">
                <p>由于该公众号已授权给<span class="js_thirdname"></span>，请注意：本页的自动回复设置已失效（且暂无法修改），若确认需要，可在<a href="https://mp.weixin.qq.com/cgi-bin/component_unauthorize?action=list&t=service/auth_plugins&token=1423695882&lang=zh_CN">授权管理</a>中取消授权。</p>
            </div>
        </div>
    </div>

</div>

<div class="dn" id="pop_desc">
    <p class="title">什么是临时会话？</p>
    <p class="desc">微信用户在没有关注该公众号的前提下，临时发起的会话。</p>
</div> 


                </div>
            </div>
            
                                    <div class="faq">
                <ul class="links">
                                        <li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
                    <li class="links_item"><a href="https://mp.weixin.qq.com/acct/infringement?action=getmanual&t=infringement/manual&type=1&lang=zh_CN&token=1423695882" target="_blank">侵权投诉</a></li>
                </ul>
                <p class="tail">反馈官号weixingongzhong</p>
            </div>
                                    
        </div>
        <div class="foot" id="footer">
	<ul class="links ft">
					<li class="links_item no_extra"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/agreement_tmpl&type=info&lang=zh_CN&token=1423695882" target="_blank">服务协议</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=1423695882" target="_blank">运营规范</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9" target="_blank">辟谣中心</a></li>
			<li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
                        			<li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
            				<li class="links_item"><p class="copyright">Copyright © 2012-2015 Tencent. All Rights Reserved.</p> </li>
	</ul>
    
	
</div>
<script type="text/javascript">
    //上报测速 --dom加载完成点
    window._points&&(window._points[2]=+new Date());
</script>

        <script type="text/javascript">var MODULES = {'user/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/index2880f5.js','common/wx/dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dialog26a308.js','common/wx/Tips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Tips26a308.js','common/wx/pagebar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pagebar271dfd.js','common/wx/remark.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/remark264f38.js','common/wx/top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/top2880f5.js','common/wx/tooltips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltips218877.js','common/wx/RichBuddy.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/RichBuddy27b666.js','user/user_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/user_cgi2767e5.js','user/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/group_cgi2880f5.js','biz_web/ui/dropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dropdown218878.js','common/qq/events.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/events218877.js','common/qq/emoji.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/emoji218877.js','common/wx/popover.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popover276121.js','tpl/user/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/grouplist.html21e2b9.js','tpl/user/userlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/userlist.html27898a.js','tpl/user/verifylist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/verifylist.html21d289.js','biz_web/ui/checkbox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/checkbox2880f5.js','common/wx/inputCounter.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/inputCounter281a63.js','common/wx/searchInput.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/searchInput280571.js','.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/.js','user/validate_wx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_wx23b6ff.js','common/wx/Cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Cgi21dee3.js','safe/Scan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Scan27deac.js','common/wx/Step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Step218877.js','safe/safe_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_check259007.js','user/active_wx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/active_wx25bc41.js','common/wx/upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/upload2442b5.js','biz_common/cookie.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/cookie26d05a.js','user/validate_sp.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_sp2519cc.js','user/force_change_pwd.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/force_change_pwd218877.js','biz_web/lib/json.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/json218878.js','user/validate_phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_phone218877.js','biz_common/jquery.validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.validate26d05a.js','media/plugin/audio.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/plugin/audio26f6ea.js','common/wx/popup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popup26a308.js','tpl/media/plugin/audio.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/plugin/audio.html2767e5.js','tpl/media/plugin/audioItem.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/plugin/audioItem.html26f6ea.js','common/wx/media/audio.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/audio26f6ea.js','biz_common/moment.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/moment26d05a.js','media/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/list26f6ea.js','common/qq/mask.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/mask218877.js','common/wx/media/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/video238f6d.js','common/wx/time.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/time253a4f.js','common/wx/media/img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/img218877.js','media/media_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_cgi27bb72.js','media/picture_preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/picture_preview218877.js','common/wx/tooltip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltip218877.js','common/qq/jquery.plugin/btn.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/btn23b187.js','media/appmsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_edit28a82e.js','widget/media/appmsg_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/appmsg_editor238f6d.css','page/vote/dialog_vote_table.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/vote/dialog_vote_table2567db.css','widget/date_select.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/date_select218878.css','media/media_static_data.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_static_data27402d.js','common/qq/Class.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/Class218877.js','biz_web/lib/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/store21a6f0.js','biz_web/utils/upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/utils/upload271e7c.js','common/lib/datepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/datepicker218877.js','common/wx/media/imageDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/imageDialog289cd3.js','common/wx/media/videoDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/videoDialog27dcd8.js','tpl/vote/vote.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/vote/vote.html282885.js','tpl/simplePopup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simplePopup.html2545e0.js','tpl/media/appmsg_edit/first_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/first_appmsg.html262dd6.js','tpl/media/appmsg_edit/small_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/small_appmsg.html236289.js','tpl/media/dialog/audiomsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/audiomsg_layout.html26f6ea.js','tpl/media/appmsg_edit/editor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/editor.html2880f5.js','common/wx/verifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/verifycode218877.js','vote/new.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/vote/new25404f.js','tpl/vote/vote_table.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/vote/vote_table.html25404f.js','cardticket/send_card.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/send_card28a82e.js','cardticket/parse_data.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/parse_data28a82e.js','media/media_dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_dialog27d7ed.js','widget/media/media_dialog.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/media_dialog27dcd8.css','widget/media/richvideo.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/richvideo2880f5.css','common/wx/media/appmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsg218877.js','tpl/media/dialog/file_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file_layout.html27d7ed.js','tpl/media/dialog/appmsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/appmsg_layout.html2767e5.js','tpl/media/dialog/videomsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/videomsg_layout.html27bb72.js','tpl/media/dialog/file.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file.html236289.js','media/appmsg_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_list27dcd8.js','tpl/media/videocard.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/videocard.html27bb72.js','tpl/media/videomsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/videomsg.html253a4f.js','media/video_add.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/video_add27df33.js','media/videomsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/videomsg_edit27bb72.js','media/img_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/img_list28a2a0.js','common/wx/preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/preview218877.js','media/origin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/origin280571.js','media/appmsg_list_v2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_list_v228755e.js','media/audio_add.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/audio_add275d6c.js','common/qq/tvu.uploader.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/tvu.uploader27bb72.js','biz_web/ui/input/lentips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/input/lentips26a308.js','common/wx/videoChange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/videoChange27dcd8.js','tpl/media/video_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video_edit.html27bb72.js','tpl/media/video_edit_tag.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video_edit_tag.html27bb72.js','tpl/media/video_edit_up.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video_edit_up.html27bb72.js','widget/upload.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/upload22a2de.css','widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/dropdown273ba2.css','widget/media/video/edit.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/video/edit27dcd8.css','message/message_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/message_cgi27402d.js','message/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/send260591.js','common/wx/richEditor/msgSender.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/msgSender2880f5.js','message/renderList.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/renderList27d7ed.js','message/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/list27898a.js','common/wx/simplePopup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/simplePopup264f38.js','common/wx/media/idCard.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/idCard218877.js','tpl/msgListItem.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/msgListItem.html27d7ed.js','common/wx/media/simpleAppmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/simpleAppmsg262dd6.js','tpl/message/video_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/message/video_popup.html218877.js','common/wx/richEditor/emotionEditor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotionEditor27ab39.js','register/type_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/type_select218877.js','register/bank_info_refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/bank_info_refill26f6ea.js','register/banklist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/banklist2491a7.js','register/data_bank_city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/data_bank_city2497b1.js','register/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/entreg260591.js','common/wx/region.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/region2491a7.js','register/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/commonreg27bb93.js','register/base_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/base_info22a84f.js','tpl/verifycode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/verifycode.html244d4b.js','common/qq/jquery.plugin/serializeObject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/serializeObject218877.js','common/lib/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.md5.js','common/qq/prototype.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/prototype21a6f0.js','register/upgrade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/upgrade218877.js','wxverify/validateExtend.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/validateExtend218877.js','register/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step32491a7.js','register/data_banks.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/data_banks260ac5.js','register/step1_tmpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step1_tmpl218877.js','register/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step122a84f.js','register/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step222a84f.js','register/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/govreg218877.js','biz_common/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.md526d05a.js','register/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step4260ac5.js','common/wx/qrcheck.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/qrcheck25404f.js','common/wx/idcardhelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/idcardhelper218877.js','register/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/mediareg266ffa.js','register/otherreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/otherreg266ffa.js','register/personreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/personreg21d289.js','register/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step5281a63.js','register/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/index21d289.js','tpl/register/bankdialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/register/bankdialog.html260591.js','tpl/register/banklist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/register/banklist.html2491a7.js','register/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/refill2254d3.js','notification/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/notification/index27d256.js','home/appeal.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/appeal2442b5.js','home/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/index2880f5.js','home/login.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/login218877.js','wbverify/step3_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_tx218877.js','wbverify/step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step218877.js','wbverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step1218877.js','wbverify/step2_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_tx218877.js','wbverify/step2_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_sina218877.js','wbverify/step3_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_sina218877.js','material/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/list25621d.js','material/material_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/material_cgi218877.js','ad_system/helper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/helper222ca2.js','material/common_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/common_edit24a3c0.js','material/materialDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/materialDialog218877.js','widget/msg_list.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_list218878.css','tpl/material/material_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/layout.html218877.js','tpl/material/material_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/item.html218877.js','material/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/edit25621d.js','original/copyright.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/original/copyright27402d.js','original/reprint.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/original/reprint284937.js','biz_web/lib/json2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/json2.js','third/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/third/index2519cc.js','common/wx/messenger.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger.method2880f5.js','biz_common/utils/url/parse.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/url/parse26d05a.js','news/operation_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/operation_guide218877.js','common/wx/anchor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/anchor218877.js','news/authorization.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/authorization218877.js','news/news_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/news_list218877.js','bizpage/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/list218877.js','bizpage/cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/cgi218877.js','wxverify/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/entreg218877.js','wxverify/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/commonreg25404f.js','wxverify/mediaentreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediaentreg218877.js','wxverify/profitablereg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/profitablereg218877.js','common/qq/queryString.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/queryString218877.js','wxverify/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/govreg2254d3.js','wxverify/supplement_verify_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/supplement_verify_info2442b5.js','common/wx/stopMultiRequest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/stopMultiRequest21aa14.js','wxverify/civilianreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/civilianreg218877.js','wxverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step1218877.js','tpl/wxverify/step1.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step1.html218877.js','wxverify/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step2281a63.js','biz_common/aes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/aes26d05a.js','wxverify/init.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/init2442b5.js','wxverify/nonprofitreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/nonprofitreg218877.js','wxverify/shopreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/shopreg218877.js','wxverify/socialreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/socialreg218877.js','wxverify/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediareg218877.js','wxverify/artistreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/artistreg218877.js','wxverify/publicservice.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/publicservice2254d3.js','tpl/wxverify/entreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/entreg.html270770.js','tpl/wxverify/mediaentreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaentreg.html270770.js','tpl/wxverify/govreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/govreg.html281a63.js','tpl/wxverify/nonprofitreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofitreg.html281a63.js','tpl/wxverify/civilianreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilianreg.html281a63.js','tpl/wxverify/profitablereg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitablereg.html281a63.js','tpl/wxverify/shopreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shopreg.html23b289.js','tpl/wxverify/socialreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/socialreg.html281a63.js','tpl/wxverify/mediareg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediareg.html270770.js','tpl/wxverify/artistreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artistreg.html270770.js','tpl/wxverify/publicservice.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/publicservice.html281a63.js','tpl/wxverify/commonreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/commonreg.html270770.js','tpl/wxverify/step2.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step2.html2254d3.js','wxverify/confirmName.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/confirmName218877.js','wxverify/commonreg_141210.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/commonreg_141210.js','wxverify/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step3281a63.js','tpl/wxverify/step3.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step3.html2254d3.js','tpl/wxverify/confirmname.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/confirmname.html281a63.js','wxverify/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step42442b5.js','tpl/wxverify/ent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/ent_preview.html2254d3.js','tpl/wxverify/mediaent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaent_preview.html2588f9.js','tpl/wxverify/gov_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/gov_preview.html2254d3.js','tpl/wxverify/nonprofit_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofit_preview.html2254d3.js','tpl/wxverify/civilian_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilian_preview.html2254d3.js','tpl/wxverify/profitable_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitable_preview.html2254d3.js','tpl/wxverify/shop_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shop_preview.html2254d3.js','tpl/wxverify/social_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/social_preview.html2254d3.js','tpl/wxverify/media_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/media_preview.html2588f9.js','tpl/wxverify/artist_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artist_preview.html2254d3.js','tpl/wxverify/publicservice_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/publicservice_preview.html2254d3.js','tpl/wxverify/common_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/common_preview.html2254d3.js','tpl/wxverify/increment_tax_form.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/increment_tax_form.html270770.js','tpl/wxverify/step4.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step4.html2588f9.js','wxverify/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step526cf40.js','tpl/wxverify/step5.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step5.html26cf40.js','common/qq/jquery.plugin/zclip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/zclip218877.js','wxverify/invoice_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/invoice_edit2442b5.js','tpl/wxverify/invoice_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/invoice_edit.html218877.js','wxverify/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/detail260591.js','common/wx/Idcheck.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Idcheck218877.js','wxverify/step3_141210.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step3_141210.js','tpl/wxverify/step3_141210.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step3_141210.html2254d3.js','tpl/wxverify/confirmname_141210.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/confirmname_141210.html2254d3.js','tpl/wxverify/commonreg_141210.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/commonreg_141210.html2254d3.js','wxverify/confirmName_141210.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/confirmName_141210.js','wxverify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/index2442b5.js','wxverify/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/refill2442b5.js','scan/item_service.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_service27dcd8.js','scan/item_action_banner.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_banner265518.js','scan/biz_category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/biz_category280571.js','scan/scan_category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/scan_category27b666.js','common/wx/multiSelector.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector25676c.js','tpl/scan/category.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/scan/category.html27b666.js','scan/item_action_recommend_product.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_recommend_product26f6ea.js','scan/edit_product.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/edit_product27b666.js','scan/product_model.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/product_model27b666.js','scan/mobile_preview_v2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/mobile_preview_v2280571.js','scan/item_tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_tab265518.js','scan/item_edit_mode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_edit_mode266ffa.js','scan/item_category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_category265518.js','scan/item_tag.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_tag2767e5.js','scan/item_preview_image.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_preview_image265518.js','scan/item_product_name.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_product_name265518.js','scan/item_desc_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_desc_list265518.js','scan/item_color.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_color27b666.js','scan/item_detail_tips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_detail_tips27b666.js','scan/item_banner_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_banner_list265518.js','scan/item_action_entityshop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_entityshop27b666.js','scan/item_action_shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_shop2680ab.js','scan/item_action_desc.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_desc265518.js','scan/item_action_cell.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_action_cell280571.js','scan/item_channel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_channel24f234.js','common/wx/hash.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/hash218877.js','biz_common/utils/string/html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/string/html26d05a.js','scan/apply_v2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/apply_v22588f9.js','scan/scan_barcode_batch.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/scan_barcode_batch28541f.js','scan/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/step122c391.js','scan/product_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/product_detail280571.js','scan/create_product.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/create_product24f234.js','scan/mobile_preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/mobile_preview24f234.js','scan/item_basic.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_basic24f234.js','scan/item_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/item_detail24f234.js','tpl/scan/barcode_batch.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/scan/barcode_batch.html28541f.js','tpl/scan/mobile_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/scan/mobile_preview.html24f234.js','scan/whitelist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/whitelist222ca2.js','common/wx/tooltipsManager.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltipsManager218877.js','tpl/scan/mobile_preview_v2.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/scan/mobile_preview_v2.html280571.js','scan/product_claimlist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/product_claimlist24f234.js','scan/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/apply2442b5.js','scan/barcode_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/barcode_list2442b5.js','biz_common/jquery.ui/jquery.ui.sortable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.sortable26d05a.js','scan/add_business_category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/add_business_category2442b5.js','scan/scan_barcode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/scan_barcode2442b5.js','tpl/scan/barcode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/scan/barcode.html27deac.js','scan/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/overview280571.js','biz_web/lib/highcharts.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/highcharts218878.js','biz_web/ui/dateRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dateRange26a308.js','scan/add_barcode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/add_barcode25828b.js','scan/category_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/category_list2442b5.js','scan/product_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/product_list28541f.js','common/wx/qrcode_download.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/qrcode_download218877.js','scan/appeal.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/scan/appeal27b666.js','ad_system/promotion/edit/show.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/edit/show2442b5.js','ad_system/promotion/edit/click.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/edit/click227c33.js','ad_system/promotion/ad_timeset.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_timeset218877.js','ad_system/promotion/new_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/new_edit26bdba.js','common/qq/url.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/url218877.js','ad_system/promotion/ad_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_cgi227c33.js','common/wx/multiSelector/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/city218877.js','common/wx/multiSelector/industry.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/industry218877.js','common/wx/multiSelector/interest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/interest23182d.js','common/wx/slider.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/slider218877.js','common/wx/hourspan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/hourspan218877.js','ad_system/promotion/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/edit22f1a9.js','ad_system/promotion/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/list23182d.js','common/wx/dropdowns.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dropdowns218877.js','common/wx/multiSelector/data/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/data/city218877.js','common/wx/multiSelector/data/industry.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/data/industry222ca2.js','common/wx/multiSelector/data/interest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/data/interest23182d.js','ad_system/client_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_report236289.js','biz_common/underscore.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/underscore26d05a.js','common/wx/Excel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Excel22f1a9.js','ad_system/host_push.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_push222ca2.js','ad_system/host.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host273ba2.js','common/wx/autocomplete.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/autocomplete273ba2.js','ad_system/pop_test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/pop_test218877.js','ad_system/client.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client26cf7c.js','ad_system/file.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/file2442b5.js','tpl/ad_system/helper.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/ad_system/helper.html222ca2.js','ad_system/client_bill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_bill264398.js','ad_system/host_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_index27e25d.js','ad_system/client_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_index222ca2.js','ad_system/host_manage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_manage28755e.js','ad_system/host_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_pay222ca2.js','ad_system/client_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_pay227c33.js','ad_system/host_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_report22f1a9.js','accusation/accuse_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/accusation/accuse_info2442b5.js','business/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/faq218877.js','business/rightlist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rightlist2442b5.js','business/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/order218877.js','common/wx/dateSelect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dateSelect218877.js','business/whitelist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/whitelist218877.js','business/right.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/right218877.js','business/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/setting218877.js','business/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/release218877.js','business/arbist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/arbist2442b5.js','business/first_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/first_check2442b5.js','business/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/info218877.js','business/rank.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rank218877.js','business/course.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/course218877.js','business/source.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/source218877.js','business/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/iframe2880f5.js','business/pay-reg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/pay-reg218877.js','common/wx/iframe.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe.method2880f5.js','business/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/overview218877.js','shop_verify/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/info218877.js','shop_verify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/index218877.js','payApply/finance.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/finance2442b5.js','payApply/baseInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/baseInfo2442b5.js','payApply/businessInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessInfo2442b5.js','payApply/businessMenu.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessMenu218877.js','payApply/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/index218877.js','payApply/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/release218877.js','payApply/earnest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/earnest218877.js','service/profile.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/profile253a4f.js','service/plugins.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/plugins253a4f.js','service/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/detail24cb22.js','service/myService.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/myService253a4f.js','service/pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/pay218877.js','service/base.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/base218877.js','service/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/order24cb22.js','service/package.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/package218877.js','mass/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/list2880f5.js','tpl/media/card_ticket.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/card_ticket.html236289.js','tpl/media/word.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/word.html236289.js','common/wx/media/multipleAppmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/multipleAppmsg262dd6.js','tpl/media/simple_videomsg_new.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/simple_videomsg_new.html27bb72.js','mass/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/send2880f5.js','tpl/mass/original_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/mass/original_popup.html280571.js','rumor/tpl/rumor_helper.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/rumor/tpl/rumor_helper.html24ca4c.js','rumor/rumor_helper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/rumor/rumor_helper262dd6.js','rumor/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/rumor/list24ca4c.js','rumor/result.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/rumor/result24ca4c.js','shop/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/group_cgi23182d.js','shop/deliverylist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliverylist23182d.js','shop/feedback.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/feedback23182d.js','shop/delivery_common.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/delivery_common23182d.js','tpl/shop/feedback.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/feedback.html2254d3.js','page/shop/shop_feedback.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/shop/shop_feedback218878.css','shop/create_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_cgi23182d.js','shop/shopdropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shopdropdown23182d.js','biz_web/widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/dropdown218878.css','tpl/shop/shopdropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/shopdropdown.html218877.js','shop/shop_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shop_guide23182d.js','shop/order_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_info23182d.js','shop/order_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_cgi23182d.js','shop/express.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/express285953.js','shop/deliveryedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliveryedit23182d.js','common/wx/multiSelector/shop_city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/shop_city218877.js','shop/goods_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/goods_cgi23182d.js','shop/create_img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_img2442b5.js','shop/order_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_list2582d7.js','shop/wrapper_move.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/wrapper_move23182d.js','shop/myshelf.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/myshelf23182d.js','shop/shelf_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_cgi23182d.js','shop/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/faq23182d.js','shop/tmpl_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/tmpl_management2442b5.js','common/wx/wxt.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/wxt218877.js','shop/config.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/config23182d.js','shop/create_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_edit26a308.js','shop/imglist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imglist2442b5.js','shop/precreate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/precreate23182d.js','shop/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/list23182d.js','shop/category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/category23182d.js','tpl/shop/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/grouplist.html218877.js','tpl/shop/igoodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/igoodlist.html218877.js','tpl/shop/goodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/goodlist.html218877.js','tpl/shop/minilist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/minilist.html218877.js','shop/push.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/push24329a.js','shop/test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/test23182d.js','shop/shelf_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_management23182d.js','shop/imgs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imgs23182d.js','common/wx/editit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/editit218877.js','shop/create.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create285953.js','shop/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/overview27deac.js','shop/shelf_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_edit23182d.js','shop/template_choose.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/template_choose23182d.js','vote/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/vote/list25404f.js','vote/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/vote/detail280571.js','tpl/vote/vote_question.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/vote/vote_question.html25404f.js','tpl/vote/vote_item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/vote/vote_item.html25404f.js','cardticket/member_manage/member_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/member_manage/member_cgi25676c.js','cardticket/member_manage/member_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/member_manage/member_detail28a292.js','page/cardticket/dialog_merber_msg.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/dialog_merber_msg28a292.css','tpl/cardticket/member_manage/member_detail.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/member_manage/member_detail.html260591.js','tpl/cardticket/member_manage/member_detail_bonus.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/member_manage/member_detail_bonus.html25676c.js','tpl/cardticket/member_manage/member_tag.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/member_manage/member_tag.html25676c.js','cardticket/add/validtime.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/validtime25676c.js','cardticket/add/color.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/color25676c.js','cardticket/add/nearby.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/nearby25676c.js','cardticket/add/preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/preview25676c.js','cardticket/add/member_time.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/member_time27898a.js','cardticket/add/config_url.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/config_url28a82e.js','cardticket/add/maxlength.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/maxlength25676c.js','tpl/cardticket/config_url.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/config_url.html28a82e.js','homepage/appmsgdialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/appmsgdialog253a4f.js','cardticket/select_shelf.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/select_shelf25676c.js','tpl/cardticket/config_url_item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/config_url_item.html28a82e.js','cardticket/add/member_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/member_detail2767e5.js','cardticket/add/logo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/logo28a292.js','cardticket/select_sub_merchant.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/select_sub_merchant280571.js','cardticket/add/member_active.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/member_active2767e5.js','tpl/multiSelector/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/item.html222ca2.js','cardticket/add/member_info_flag.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/member_info_flag25676c.js','cardticket/add/init.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/init27b666.js','cardticket/add/share_type.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/share_type2767e5.js','cardticket/add/submit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/submit28a82e.js','cardticket/clickreport.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/clickreport234186.js','cardticket/common_template_helper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/common_template_helper28a82e.js','cardticket/common_validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/common_validate262dd6.js','cardticket/add/section_mgr.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/section_mgr28a82e.js','cardticket/add/shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/shop28a82e.js','cardticket/select_shop_popup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/select_shop_popup26cf7c.js','cardticket/add/code_type.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/code_type25676c.js','cardticket/add/msg_operate_type_html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/msg_operate_type_html2767e5.js','tpl/media/cardmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/cardmsg.html236289.js','cardticket/add/msg_operate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add/msg_operate28a82e.js','page/cardticket/section_card_notification.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/section_card_notification28a82e.css','cardticket/detail/refuse_reason.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/refuse_reason25676c.js','cardticket/detail/edit_custom_url.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/edit_custom_url25676c.js','cardticket/detail/modify_time.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/modify_time25676c.js','cardticket/detail/no_card.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/no_card25676c.js','cardticket/detail/edit_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/edit_detail28a82e.js','cardticket/detail/shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/shop28a292.js','cardticket/store_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_cgi262dd6.js','cardticket/edit_card_shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/edit_card_shop28a82e.js','cardticket/detail/img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/img25676c.js','biz_common/utils/norefererimg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/norefererimg26d05a.js','cardticket/detail/msg_operate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail/msg_operate28a82e.js','cardticket/shelf/shelf_helper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/shelf/shelf_helper22bfc4.js','cardticket/intercomm_reclist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/intercomm_reclist262dd6.js','cardticket/topmenu.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/topmenu28a82e.js','cardticket/overview_user_analyze.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_user_analyze22bfc4.js','cardticket/overview_enum.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_enum22bfc4.js','cardticket/init_card_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/init_card_list22bfc4.js','common/wx/report_util.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/report_util265438.js','cardticket/add.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/add28a82e.js','cardticket/common_init.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/common_init27b666.js','cardticket/overview_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_detail24ca4c.js','cardticket/select_shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/select_shop2767e5.js','cardticket/shelf_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/shelf_management22bfc4.js','cardticket/tmpl_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/tmpl_management25676c.js','tpl/cardticket/select_shelf.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/select_shelf.html25676c.js','page/cardticket/dialog_select_goods_shelf.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/dialog_select_goods_shelf28a8ec.css','cardticket/overview_record.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_record22bfc4.js','cardticket/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview22bfc4.js','cardticket/batch_card.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/batch_card28a82e.js','cardticket/sendout.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/sendout28a82e.js','cardticket/create_task.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/create_task24ca4c.js','cardticket/card_quantity.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/card_quantity28446c.js','cardticket/intercomm_noauth.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/intercomm_noauth245405.js','cardticket/whitelist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/whitelist22bfc4.js','cardticket/member_manage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/member_manage26cf7c.js','tpl/cardticket/create_task.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/create_task.html284ee4.js','page/cardticket/dialog_choose_card.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/dialog_choose_card28a292.css','cardticket/marker_mgr.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/marker_mgr22bfc4.js','cardticket/store_marker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_marker242c7c.js','cardticket/changeRemark.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/changeRemark22bfc4.js','cardticket/apply_grade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_grade2442b5.js','cardticket/area_selector.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/area_selector22bfc4.js','common/wx/sosomap/citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/citydata28a292.js','common/wx/sosomap/util.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/util218877.js','cardticket/store_category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_category22bfc4.js','cardticket/multi_pic_upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/multi_pic_upload2442b5.js','tpl/cardticket/multi_pic_upload.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/multi_pic_upload.html22bfc4.js','page/cardticket/widget_add_img.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/widget_add_img25b76d.css','cardticket/destroy_ticket.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/destroy_ticket2767e5.js','cardticket/codepad.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/codepad22bfc4.js','cardticket/create_shop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/create_shop22bfc4.js','tpl/cardticket/create_shop.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/create_shop.html22bfc4.js','common/wx/sosomap/city_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/city_select24bdf0.js','common/wx/sosomap/event.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/event218877.js','cardticket/store_helper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_helper262dd6.js','cardticket/overview_member.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_member25676c.js','cardticket/apply_shake.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_shake234186.js','cardticket/search_map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/search_map22bfc4.js','tpl/cardticket/marker_show_new.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/marker_show_new.html22bfc4.js','cardticket/searchResult.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/searchResult22bfc4.js','tpl/cardticket/search_result.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/search_result.html262dd6.js','page/cardticket/store_map.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/store_map262dd6.css','cardticket/apply_logo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_logo2442b5.js','page/cardticket/apply_widget_form.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/apply_widget_form28a292.css','tpl/cardticket/apply_logo.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/apply_logo.html284ee4.js','page/cardticket/dialog_select_shop.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/cardticket/dialog_select_shop28a82e.css','tpl/cardticket/select_shop.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/select_shop.html2767e5.js','cardticket/store_edit_new.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_edit_new262dd6.js','common/wx/sosomap/map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/map234186.js','cardticket/simple_search_map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/simple_search_map262dd6.js','tpl/cardticket/marker_drag.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/marker_drag.html22bfc4.js','cardticket/store_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_detail270770.js','cardticket/simple_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/simple_report273ba2.js','tpl/cardticket/sendout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/sendout.html28a292.js','tpl/cardticket/addimg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/addimg.html26cf7c.js','tpl/cardticket/card_table.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/card_table.html28a82e.js','tpl/cardticket/card_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/card_preview.html22bfc4.js','tpl/cardticket/send_card.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/send_card.html28a82e.js','cardticket/carduse_record.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/carduse_record28a292.js','cardticket/member_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/member_detail280571.js','tpl/cardticket/marker_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/marker_edit.html22bfc4.js','tpl/cardticket/marker_show.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/marker_show.html22bfc4.js','cardticket/profile.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/profile28a292.js','cardticket/apply_cardpay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_cardpay28a292.js','cardticket/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/detail28a82e.js','tpl/cardticket/card_quantity.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/card_quantity.html22bfc4.js','cardticket/myshelf.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/myshelf28a292.js','tpl/cardticket/edit_card_shop.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/edit_card_shop.html284fa3.js','tpl/cardticket/edit_shoplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/edit_shoplist.html243125.js','cardticket/apply_mp_highlevel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_mp_highlevel27b666.js','cardticket/apply_entityshop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_entityshop23b289.js','cardticket/member_add.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/member_add28a82e.js','cardticket/apply_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_list22bfc4.js','cardticket/store_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_list2442b5.js','cardticket/intercomm_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/intercomm_list24ca4c.js','cardticket/permission.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/permission25676c.js','cardticket/apply_prepaid.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_prepaid2442b5.js','cardticket/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/info22bfc4.js','cardticket/store_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/store_edit22bfc4.js','common/wx/isdspeed.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/isdspeed218877.js','cardticket/import_card.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/import_card22bfc4.js','tpl/cardticket/import_card.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/import_card.html22bfc4.js','cardticket/pay_card_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/pay_card_detail22bfc4.js','cardticket/apply_api_highlevel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_api_highlevel22bfc4.js','cardticket/apply_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_detail28a292.js','cardticket/overview_batch.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_batch22bfc4.js','cardticket/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/list22bfc4.js','cardticket/apply_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_index22f1a9.js','cardticket/apply_card.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/apply_card2442b5.js','tpl/cardticket/apply_card_deal.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/apply_card_deal.html22bfc4.js','cardticket/pay_card_record.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/pay_card_record22bfc4.js','cardticket/overview_detail_new.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/overview_detail_new2767e5.js','cardticket/assistsend_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/assistsend_detail28a292.js','cardticket/assistsend_add.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/assistsend_add28480e.js','tpl/cardticket/select_sub_merchant.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/select_sub_merchant.html28a82e.js','cardticket/assistsend_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/cardticket/assistsend_list280571.js','safe/tpl/safe_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/tpl/safe_check.html2254d3.js','safe/admins.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/admins2254d3.js','safe/Mobile.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Mobile2254d3.js','safe/record.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/record2254d3.js','safe/remind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/remind2254d3.js','safe/protect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/protect2254d3.js','safe/token.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/token2254d3.js','safe/phone_modify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone_modify2254d3.js','widget/qrcode_scan.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/qrcode_scan262dd6.css','safe/force.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/force2254d3.js','safe/safe_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_cgi2254d3.js','safe/change_pwd.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/change_pwd2853a1.js','safe/rebind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/rebind2254d3.js','safe/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/index262dd6.js','safe/notify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/notify2254d3.js','safe/phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone2254d3.js','enterprise/login_enterprise_frame.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/enterprise/login_enterprise_frame218878.js','subscribe/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/subscribe/index264f38.js','subscribe/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/subscribe/apply218878.js','tmplmsg/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/detail218877.js','tmplmsg/payment_lib.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/payment_lib218877.js','tmplmsg/tpl_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tpl_cgi218877.js','tmplmsg/submit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/submit25f3fd.js','biz_common/template-2.0.1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/template-2.0.126d05a.js','tmplmsg/payment_apply_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/payment_apply_detail218877.js','tmplmsg/payment_faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/payment_faq218877.js','tmplmsg/tplEdit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tplEdit218877.js','common/lib/colorpicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/colorpicker218877.js','widget/colorpicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/colorpicker218878.css','tmplmsg/success.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/success218877.js','tmplmsg/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/list218877.js','tmplmsg/payment.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/payment218877.js','tmplmsg/preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/preview218877.js','tmplmsg/suggest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/suggest218877.js','tmplmsg/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/apply25aae4.js','common/wx/trade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/trade218877.js','tmplmsg/searchBar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/searchBar218877.js','tmplmsg/intro.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/intro218877.js','tmplmsg/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/store218877.js','tmplmsg/payment_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/payment_detail218877.js','mall/template_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_list218877.js','mall/template_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_cgi218877.js','mall/card_verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/card_verify218877.js','infringement/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/apply270770.js','infringement/login.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/login24a3c0.js','infringement/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/list27d91f.js','infringement/supplement.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/supplement2442b5.js','infringement/manual.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/manual234186.js','infringement/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/detail218878.js','infringement/apply_new.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/infringement/apply_new27deac.js','homepage/plugins/plugin1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/plugins/plugin123b289.js','page/homepage/plugins/plugin1.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/homepage/plugins/plugin1267c1b.css','tpl/homepage/plugins/plugin1.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin1.html23b289.js','tpl/homepage/plugins/plugin1_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin1_edit.html23b289.js','homepage/plugins/base.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/plugins/base23b289.js','homepage/importAppmsgList.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/importAppmsgList23b289.js','homepage/plugins/plugin2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/plugins/plugin223b289.js','page/homepage/plugins/plugin2.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/homepage/plugins/plugin227d7ed.css','tpl/homepage/plugins/plugin2.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin2.html23b289.js','tpl/homepage/plugins/plugin2_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin2_edit.html23b289.js','homepage/cateList.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/cateList23b289.js','homepage/plugins/plugin3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/plugins/plugin323b289.js','page/homepage/plugins/plugin3.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/homepage/plugins/plugin323b289.css','tpl/homepage/plugins/plugin3.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin3.html23b289.js','tpl/homepage/plugins/plugin3_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin3_edit.html23b289.js','homepage/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/list24b995.js','homepage/homepage_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/homepage_cgi23b289.js','tpl/homepage/importAppmsgList/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/importAppmsgList/layout.html23b289.js','tpl/homepage/importAppmsgList/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/importAppmsgList/item.html23b289.js','homepage/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/homepage/edit273ba2.js','tpl/homepage/appmsgdialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/appmsgdialog.html23b289.js','tpl/homepage/appmsglist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/appmsglist.html23b289.js','tpl/homepage/plugins/plugin2_edit/cate_list_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/homepage/plugins/plugin2_edit/cate_list_edit.html23b289.js','statistics/user_stat/attr/attr.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr27cccc.js','statistics/user_stat/top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/top271dfd.js','statistics/user_stat/attr/attr-state.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-state271dfd.js','statistics/user_stat/attr/attr-bars.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-bars271dfd.js','statistics/user_stat/attr/attr-provinces.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-provinces27cccc.js','statistics/user_stat/attr/attr-cities.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-cities27cccc.js','statistics/user_stat/attr/attr-types.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-types280571.js','statistics/user_stat/attr/attr-table.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/attr/attr-table27cccc.js','statistics/user_stat/common.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/common271dfd.js','statistics/common.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/common28a292.js','statistics/chart/jquery-chart.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/chart/jquery-chart271dfd.js','statistics/components/tab-bar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/components/tab-bar271dfd.js','biz_web/ui/map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/map271dfd.js','statistics/user_stat/summary/summary-state.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/summary/summary-state271dfd.js','statistics/user_stat/summary/summary-chart.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/summary/summary-chart271dfd.js','statistics/user_stat/summary/summary.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/user_stat/summary/summary27cccc.js','statistics/components/date-range.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/components/date-range284317.js','tpl/statistics/date-range.tpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/date-range.tpl271dfd.js','statistics/components/event-emitter.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/components/event-emitter271dfd.js','tpl/statistics/tab-bar.tpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/tab-bar.tpl265438.js','statistics/components/trapezoid.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/components/trapezoid27cccc.js','statistics/tab-bar/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/index265438.js','tpl/statistics/date-submenu.tpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/date-submenu.tpl265438.js','statistics/tab-bar/event-emitter.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/event-emitter265438.js','statistics/tab-bar/msg-tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/msg-tab265438.js','statistics/tab-bar/tab-date.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/tab-date265438.js','statistics/tab-bar/msg-keyword-tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/msg-keyword-tab265438.js','statistics/tab-bar/tab-keyword-date.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tab-bar/tab-keyword-date265438.js','tpl/statistics/keyword-date-submenu.tpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/keyword-date-submenu.tpl265438.js','statistics/article/detail/detail/type.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/type280571.js','statistics/article/detail/detail/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/detail27cccc.js','statistics/article/detail/state.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/state27cccc.js','statistics/article/detail/detail/bars.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/bars27cccc.js','statistics/article/detail/detail/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/overview280571.js','statistics/article/detail/detail/province.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/province284317.js','statistics/article/detail/detail/table.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/table27cccc.js','statistics/article/detail/detail/trend.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/detail/trend27cccc.js','statistics/article/detail/compare.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/compare27cccc.js','statistics/article/detail/article-item.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/article-item27cccc.js','statistics/article/detail/all.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/all28a292.js','statistics/article/detail/filters-menu.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/filters-menu27cccc.js','tpl/statistics/article-item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/article-item.html284317.js','statistics/article/detail/main.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/detail/main284317.js','statistics/article/top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/top27cccc.js','statistics/article/analyse/main.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/article/analyse/main284317.js','statistics/tooltip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/tooltip265438.js','statistics/common_util.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/common_util284317.js','statistics/msg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/msg27cccc.js','statistics/msg_top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/msg_top265438.js','statistics/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/index25df2d.js','statistics/msg_keyword.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/msg_keyword271dfd.js','statistics/report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/report271dfd.js','tpl/statistics/keydata.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/statistics/keydata.html27cccc.js','device/apply_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/apply_list218878.js','device/create.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/create2442b5.js','device/tech_apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/tech_apply2442b5.js','device/datachart.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/datachart218877.js','device/func.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/func23b6ff.js','device/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/setting218877.js','tpl/RichBuddy/RichBuddyContent.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyContent.html27898a.js','tpl/RichBuddy/RichBuddyLayout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyLayout.html25df2d.js','tpl/cardticket/store_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/cardticket/store_edit.html22bfc4.js','tpl/media/single_appmsg_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/layout.html236289.js','tpl/media/single_appmsg_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/item.html236289.js','tpl/media/dialog/image_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/image_list.html236289.js','tpl/media/dialog/image_group.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/image_group.html236289.js','tpl/media/dialog/image_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/image_layout.html236289.js','tpl/media/multiple_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/multiple_appmsg.html27402d.js','tpl/media/qqmusicaudio.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/qqmusicaudio.html25df2d.js','tpl/media/video.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video.html238f6d.js','tpl/media/img.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/img.html236289.js','tpl/media/wxvideo.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/wxvideo.html24329a.js','tpl/media/id_card.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/id_card.html236289.js','tpl/media/simple_videomsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/simple_videomsg.html236289.js','tpl/media/appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg.html27402d.js','tpl/media/simple_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/simple_appmsg.html27402d.js','tpl/media/audio.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/audio.html2880f5.js','tpl/richEditor/emotion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotion.html238f6d.js','tpl/richEditor/emotionEditor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotionEditor.html26a916.js','tpl/setting/multi_infowindow_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_check.html218877.js','tpl/setting/more_size.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/more_size.html218877.js','tpl/setting/multi_search_result.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_search_result.html218877.js','tpl/setting/multi_infowindow_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_edit.html218877.js','tpl/sosomap/multi_search_result.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/sosomap/multi_search_result.html218877.js','tpl/sosomap/multi_infowindow_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/sosomap/multi_infowindow_edit.html218877.js','tpl/sosomap/multi_infowindow_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/sosomap/multi_infowindow_check.html218877.js','tpl/notice/index.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/notice/index.html218877.js','tpl/multiSelector/list_item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/list_item.html222ca2.js','tpl/multiSelector/list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/list.html222ca2.js','tpl/advanced/homepage_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/advanced/homepage_list.html267c1b.js','tpl/advanced/menu_link_dialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/advanced/menu_link_dialog.html267c1b.js','tpl/advanced/appmsg_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/advanced/appmsg_list.html267c1b.js','tpl/shop/skulist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/skulist.html218877.js','tpl/biz_web/ui/dateRange.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dateRange.html265438.js','tpl/biz_web/ui/dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dropdown.html218877.js','tpl/biz_web/ui/checkbox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/checkbox.html218877.js','tpl/step.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/step.html218877.js','tpl/uploader.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/uploader.html230dc4.js','tpl/colorpicker.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/colorpicker.html218877.js','tpl/dateSelect.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dateSelect.html218877.js','tpl/dropdowns.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dropdowns.html218877.js','tpl/editit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/editit.html218877.js','tpl/slider.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/slider.html218877.js','tpl/faqscene.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/faqscene.html262dd6.js','tpl/searchInput.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/searchInput.html26a308.js','tpl/noticeBox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/noticeBox.html26a308.js','tpl/popover.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popover.html253a4f.js','tpl/account_message_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/account_message_list.html218877.js','tpl/confirm.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/confirm.html218877.js','tpl/hourspan.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/hourspan.html218877.js','tpl/accordion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/accordion.html218877.js','tpl/top.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/top.html218877.js','tpl/qrcode_download.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/qrcode_download.html280571.js','tpl/multi_ddchild.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_ddchild.html218877.js','tpl/multi_dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_dropdown.html218877.js','tpl/simple_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simple_popup.html218877.js','tpl/tooltips.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltips.html253a4f.js','tpl/basekeyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/basekeyword.html218877.js','tpl/qrcheck.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/qrcheck.html26c40f.js','tpl/pay_by_qrcode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pay_by_qrcode.html218877.js','tpl/remark.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/remark.html218877.js','tpl/preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/preview.html253a4f.js','tpl/phone_validate.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/phone_validate.html218877.js','tpl/searchClassifyInput.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/searchClassifyInput.html280571.js','tpl/keyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/keyword.html218877.js','tpl/idcardhelper.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/idcardhelper.html270770.js','tpl/Idcheck.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/Idcheck.html218877.js','tpl/tooltip.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltip.html218877.js','tpl/dialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dialog.html253a4f.js','tpl/Excel.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/Excel.html218877.js','tpl/pagebar.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pagebar.html218877.js','tpl/popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popup.html253a4f.js','tpl/tab.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tab.html26f6ea.js','tpl/replyContent.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/replyContent.html27898a.js','tpl/reply.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/reply.html27898a.js','ivr/reply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/reply27d7ed.js','ivr/ivr_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/ivr_cgi218878.js','ivr/keywords.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/keywords238f6d.js','common/wx/media/cardmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/cardmsg25676c.js','discuss/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/apply23ac21.js','discuss/category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/category23ac21.js','discuss/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/index2880f5.js','discuss/list_latest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/list_latest2880f5.js','discuss/opt.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/opt27898a.js','common/wx/reply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/reply27ab39.js','discuss/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/discuss/list28a292.js','setting/temp/meeting-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/meeting-account22db22.js','setting/temp/bind-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/bind-account218878.js','setting/tpl/postedit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/tpl/postedit.html218878.js','setting/multi_citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_citydata25bca6.js','setting/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/dev218878.js','setting/wxverifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/wxverifycode218878.js','setting/multi_search.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_search218878.js','setting/bind-email-status.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email-status22a84f.js','setting/SearchResultPanel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/SearchResultPanel218878.js','setting/CitySelectComponent.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/CitySelectComponent218878.js','setting/citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/citydata218878.js','setting/multiMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multiMarker218878.js','setting/owner-setting-owner.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/owner-setting-owner2442b5.js','common/wx/phone_validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/phone_validate28541f.js','setting/set-location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/set-location22f1a9.js','setting/markerTool.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/markerTool218878.js','setting/bind-email.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email2395a4.js','setting/owner-setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/owner-setting218878.js','setting/invade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/invade2442b5.js','setting/map_setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/map_setting2442b5.js','setting/mphelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/mphelper218878.js','setting/upgrade-notes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/upgrade-notes22db22.js','setting/safehelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/safehelper2254d3.js','setting/MyMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/MyMarker218878.js','setting/multi_city_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_city_select218878.js','setting/multi_location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_location218878.js','setting/multi_map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_map218878.js','setting/function.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/function273ba2.js','setting/postedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/postedit218878.js','setting/owner-setting-operator.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/owner-setting-operator28541f.js','setting/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/index289601.js','common/lib/jquery.Jcrop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.Jcrop218877.js','setting/upgradeService.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/upgradeService22db22.js','test/preview_test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/test/preview_test218878.js','reward/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/list259007.js','reward/allreward.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/allreward25f3fd.js','reward/list2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/list225621d.js','reward/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/setting259007.js','reward/invite.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/invite259007.js','reward/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/detail25f3fd.js','reward/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/apply25b76d.js','reward/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/reward/overview259007.js','widget/media.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media2880f5.css','biz_web/lib/soundmanager2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/soundmanager226f6ea.js','page/media/dialog_img_pick.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/media/dialog_img_pick25621d.css','biz_web/lib/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/video218878.js','biz_web/lib/swfobject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/swfobject218878.js','page/smallvideo/dialog_select_video.css': 'https://res.wx.qq.com/mpres/htmledition/style/page/smallvideo/dialog_select_video27ab39.css','common/wx/media/appmsgDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsgDialog218877.js','common/wx/media/factory.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/factory27bb72.js','common/wx/richEditor/emotion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotion218877.js','widget/emotion_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emotion_editor23b187.css','common/wx/richEditor/wysiwyg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/wysiwyg270770.js','common/wx/richEditor/editorRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/editorRange218877.js','widget/msg_sender.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_sender2880f5.css','common/qq/jquery.plugin/tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/tab25df2d.js','common/wx/sosomap/searchService.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/sosomap/searchService218877.js','common/wx/messenger.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger218877.js','widget/rich_buddy.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/rich_buddy27898a.css','common/wx/dragHelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dragHelper218877.js','common/wx/Log.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Log2254d3.js','widget/slider.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/slider218878.css','common/wx/noticeBox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/noticeBox26a308.js','widget/verifycode.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/verifycode244d4b.css','common/wx/accordion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/accordion218877.js','common/wx/cgiReport.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/cgiReport218877.js','common/lib/MockJax.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/MockJax218877.js','common/wx/multiDropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiDropdown218877.js','common/wx/pay_by_qrcode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pay_by_qrcode218877.js','widget/qrcode_check.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/qrcode_check262dd6.css','common/wx/keyword.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/keyword218877.js','biz_common/jquery.ui/jquery.ui.draggable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.draggable26d05a.js','common/wx/widgetBridge.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/widgetBridge218877.js','common/wx/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe218877.js','widget/processor_bar.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/processor_bar218878.css','widget/img_preview.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/img_preview222ca2.css','biz_web/lib/webuploader.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader270770.js','widget/tooltip.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/tooltip218878.css','widget/areaselector.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/areaselector218878.css','widget/pagination.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/pagination218878.css','widget/msg_tab.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_tab25df2d.css','biz_web/lib/spin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/spin218878.js','widget/emoji.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emoji218878.css','widget/datepicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/datepicker218878.css','selfapply/data_interest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/selfapply/data_interest25b76d.js','selfapply/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/selfapply/index26211c.js','selfapply/data_industry.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/selfapply/data_industry247b6f.js','advanced/customer_apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/customer_apply218877.js','advanced/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/index218877.js','advanced/menuApply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuApply218877.js','advanced/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/dev25df2d.js','advanced/interface.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/interface280571.js','advanced/menu_link_dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menu_link_dialog267c1b.js','advanced/group-alert.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/group-alert218877.js','advanced/iframe-crossdomain.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/iframe-crossdomain218877.js','advanced/menuSetting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuSetting2880f5.js','biz_common/xss.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/xss26d05a.js','advanced/verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/verify22db22.js','advanced/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/edit218877.js','advanced/warning.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/warning218877.js','authorize/validate_wx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/authorize/validate_wx218877.js','authorize/auth_login.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/authorize/auth_login27deac.js','authorize/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/authorize/list218877.js','authorize/plugin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/authorize/plugin218877.js','biz_web/lib/webuploader/lib/transport.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/transport230dc4.js','biz_web/lib/webuploader/base.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/base230dc4.js','biz_web/lib/webuploader/runtime/client.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/client230dc4.js','biz_web/lib/webuploader/mediator.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/mediator230dc4.js','biz_web/lib/webuploader/lib/filepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/filepicker26d05a.js','biz_web/lib/webuploader/lib/file.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/file230dc4.js','biz_web/lib/webuploader/lib/image.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/image270770.js','biz_web/lib/webuploader/lib/blob.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/lib/blob230dc4.js','biz_web/lib/webuploader/widgets/image.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/image270770.js','biz_web/lib/webuploader/uploader.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/uploader230dc4.js','biz_web/lib/webuploader/widgets/widget.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/widget230dc4.js','biz_web/lib/webuploader/widgets/runtime.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/runtime230dc4.js','biz_web/lib/webuploader/runtime/runtime.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/runtime230dc4.js','biz_web/lib/webuploader/widgets/queue.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/queue26d05a.js','biz_web/lib/webuploader/queue.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/queue230dc4.js','biz_web/lib/webuploader/file.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/file230dc4.js','biz_web/lib/webuploader/widgets/upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/upload270770.js','biz_web/lib/webuploader/widgets/validator.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/validator230dc4.js','biz_web/lib/webuploader/widgets/filepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/widgets/filepicker230dc4.js','biz_web/lib/webuploader/runtime/html5/imagemeta/exif.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/imagemeta/exif230dc4.js','biz_web/lib/webuploader/runtime/html5/imagemeta.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/imagemeta230dc4.js','biz_web/lib/webuploader/runtime/html5/jpegencoder.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/jpegencoder230dc4.js','biz_web/lib/webuploader/runtime/html5/util.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/util230dc4.js','biz_web/lib/webuploader/runtime/html5/transport.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/transport230dc4.js','biz_web/lib/webuploader/runtime/html5/runtime.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/runtime230dc4.js','biz_web/lib/webuploader/runtime/html5/filepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/filepicker230dc4.js','biz_web/lib/webuploader/runtime/html5/blob.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/blob230dc4.js','biz_web/lib/webuploader/runtime/html5/image.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/html5/image270770.js','biz_web/lib/webuploader/runtime/compbase.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/compbase230dc4.js','biz_web/lib/webuploader/runtime/flash/image.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/image230dc4.js','biz_web/lib/webuploader/runtime/flash/runtime.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/runtime230dc4.js','biz_web/lib/webuploader/runtime/flash/transport.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/transport230dc4.js','biz_web/lib/webuploader/runtime/flash/filepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/filepicker230dc4.js','biz_web/lib/webuploader/runtime/flash/blob.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/runtime/flash/blob230dc4.js','biz_web/lib/webuploader/dollar-builtin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/dollar-builtin230dc4.js','biz_web/lib/webuploader/dollar-third.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/dollar-third230dc4.js','biz_web/lib/webuploader/promise.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/webuploader/promise230dc4.js','biz_web/lib/uploadify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/uploadify218878.js','biz_web/lib/raphael-min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/raphael-min.js','eve.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/eve.js','biz_web/lib/audiojs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/audiojs218878.js','biz_web/widget/date_range.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/date_range218878.css','jquery-1.7.2.min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/jquery-1.7.2.min218878.js','biz_common/utils/string/emoji.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/string/emoji26d05a.js','biz_common/utils/asyncJs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/asyncJs26d05a.js','biz_common/utils/report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/report26d05a.js','biz_common/utils/geolocation.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/geolocation26d05a.js','biz_common/utils/cookie.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/cookie26d05a.js','biz_common/utils/spin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/spin26d05a.js','biz_common/ui/imgonepx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/ui/imgonepx26d05a.js','biz_common/dom/attr.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/dom/attr26d05a.js','biz_common/dom/event.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/dom/event26d05a.js','biz_common/dom/class.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/dom/class26d05a.js','biz_common/log/jserr.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/log/jserr26d05a.js','biz_common/jquery-1.9.1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery-1.9.126d05a.js','biz_common/template-2.0.1-cmd.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/template-2.0.1-cmd26d05a.js','biz_common/tmpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/tmpl26d05a.js','operation/rumor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/operation/rumor27898a.js','operation/rumor_detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/operation/rumor_detail27898a.js','operation/showWord.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/operation/showWord27898a.js','operation/rumor_account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/operation/rumor_account27898a.js'};var seajs_crossorigin = true;</script>
        <script type="text/javascript">
    window.wx ={
        version:"4.0.0",
        data:{
            t:"1423695882",
            ticket:"4c399b0974fd419a5e573841adcf38c63c6ea7c8",
            lang:'zh_CN',
            param:["&token=1423695882",'&lang=zh_CN'].join(""),
            uin:"3236070842",
            uin_base64:"MzIzNjA3MDg0Mg==",
            user_name:"gh_bb5bab4269a1",
            nick_name:"夕阳雨",
            time:"1443190674"||new Date().getTime()/1000
        },
        path:{
            video : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/video-js218877.swf",    
            audio : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/audiojs218877.swf",
            uploadify : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/uploadify218877.swf",
            webuploader : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/webuploader230dc3.swf",
            zoom : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/zoom230dc3.swf",
            rimgcrop : "https://res.wx.qq.com/mpres/htmledition/images/cut-round218877.gif"
        },
        acl:{
                        "msg_acl" : {
                "can_text_msg" : 1,
                "can_image_msg" : 1,
                "can_voice_msg" : 1,
                "can_video_msg" : 1,
                "can_app_msg" : 1,
                "can_commodity_app_msg" : 0,
                "can_card_msg" : "0"*1||0, // @cunjinli改掉
                "can_use_shortvideo" : "0"*1,
                "can_use_reprintapply_list":"0"*1 ///原创二期上线前文库和订阅都暂缓不上了，只上授权申请，这里新增授权申请入口 @tunnyhuang @tedwang
            },
            "ivr_acl" : {
                "can_text_msg" : 1,
                "can_image_msg" : 1,
                "can_voice_msg" : 1,
                "can_video_msg" : 1,
                "can_app_msg" : 1,
                "can_commodity_app_msg" : 0
            },
            "merchant_acl" : {
                "can_use_pay_tmpl" : ""*1,
                "can_use_account_manage" : ""*1
            },
                        "ad_system" : {
                "can_use_sp" : ""*1                                ,"can_use_new_ad" : ""*1
                            }
        },
        events:{}//全局的事件绑定
    };
</script>
<script onerror="wx_loaderror(this)" crossorigin="" type="text/javascript" src="${root}/js/admin/sea27d2ff.js"></script>  
<script onerror="wx_loaderror(this)" crossorigin="" type="text/javascript" src="${root}/js/admin/lib27616c.js"></script>  
<script onerror="wx_loaderror(this)" crossorigin="" type="text/javascript" src="${root}/js/admin/wx2880f5.js"></script>  
<script type="text/javascript" src="${root}/js/bootstrap/jquery-1.11.2.js"></script>

<script type="text/javascript">
/* function getico(n){
var o=new Image(1,1);
o.src=wx.url&&wx.url(location.protocol+"//"+location.host+"/misc/getico?location="+(n||-1)+"&rand="+Math.random());
}
getico("1714"),jQuery(function(){
window._points&&(window._points[4]=+new Date);
}),window.onload=function(){
window._points&&(window._points[5]=+new Date);
var n=[1,3,5,7,9,11],o="edit";
"/cgi-bin/appmsg"==location.pathname&&"beadded"==o&&(n=[21,23,25,27,29,31]);
var t=[],i=window.performance&&window.performance.timing,e=i&&i.navigationStart||_points[0],a=i&&i.responseStart||_points[1],s=_points[3],c=i&&i.domComplete||_points[4],r=i&&i.loadEventEnd||_points[5];
t.push([n[0],r-e]),t.push([n[1],a-e]),t.push([n[2],s-e]),t.push([n[3],c-a]),i&&i.secureConnectionStart&&(t.push([n[4],i.connectEnd-i.connectStart]),
t.push([n[5],i.connectEnd-i.secureConnectionStart])),seajs.use("biz_common/utils/monitor",function(n){
var o,i;
for(o=0;o<t.length;++o)i=t[o],i[1]>0&&i[1]<36e5&&n.setAvg(27823,i[0],i[1]);
n.send();
});
}; */
</script>   


        
<script type="text/javascript">define('widget/processor_bar.css', [], function(){return null;});
define('widget/emoji.css', [], function(){return null;});
define('page/cardticket/dialog_choose_card.css', [], function(){return null;});
define('page/smallvideo/dialog_select_video.css', [], function(){return null;});
define('page/media/dialog_img_pick.css', [], function(){return null;});
define('widget/pagination.css', [], function(){return null;});
define('widget/upload.css', [], function(){return null;});
define('widget/tooltip.css', [], function(){return null;});
define('widget/media.css', [], function(){return null;});
define('widget/media/richvideo.css', [], function(){return null;});
define('widget/media/media_dialog.css', [], function(){return null;});
define('widget/emotion_editor.css', [], function(){return null;});
define('widget/msg_tab.css', [], function(){return null;});
define('widget/msg_sender.css', [], function(){return null;});</script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/card_preview.html22bfc4.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/spin218878.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/soundmanager226f6ea.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/pagebar271dfd.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/cardmsg25676c.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/ivr_cgi218878.js"></script>
<script onerror="wx_loaderror(this)" type="text/javascript" src="${root}/js/admin/reply27d7ed.js"></script>
<script type="text/html" id="detail_pop">
    <div class="page_msg simple default">
        <div class="inner">
            <span class="msg_icon_wrapper"><i class="icon_msg info"></i></span>
            <div class="msg_content">
                <h4>该项需要有开发能力才能进行</h4>
                <p>开发者需要完成以下两步，来进行自动回复的开发</p>
                <ul>
                    
                    <li>1. 阅读接入指南<a href="http://mp.weixin.qq.com/wiki" target="_blank">接口文档</a>，并在<a href="/advanced/advanced?action=dev&t=advanced/dev&token=1423695882" target="_blank">开发者中心</a>设置回调URL和Token</li>
                    
                    <li>2. 设置成功后，在接收到用户信息时，自行根据需求通过代码进行回复</li>
                </ul>
            </div>
        </div>
    </div>
</script>
<script type="text/javascript">
    wx.cgiData = {
        replytype : "beadded"
        	,authrized: "0"
	        	,auth_info: {}
	        	,authirze_component_name: ""
	                    };
	var replyData = {
				
					
			can:{
				autoReply:true			},
			modify:{
				autoReplyModify:true			},			
					 
		is:{
			isOpen:true,//开启关闭开发模式
			autoReply:true			}
		}
    seajs.use('ivr/reply', wx_main);;
</script>

        
<script type="text/html" id="js_faqscene_tpl">
<div class="faqscene" id="js_faqscene_p">
<div class="faqscene_inner">
    <div class="faqscene_name js_faq_trigger">常见问题</div>
    <div class="faqscene_panel js_faq_main_panel">
        <a href="###" class="faqscene_close">x</a>
        <div class="faqscene_hd">{data.question}</div>
        <div class="faqscene_bd">
            <div class="faqscene_tabs">
                <div class="faqscene_tab_hd">
                    <ul class="js_faq_class1">
                        {if data.guide_list.length>2}
                        {each data.guide_list as guide i}
                        {if guide}
                        <li data-report-id="{guide.report_id}"><a {if i==0}class="active"{/if} href="javascript:;">{guide.itemname}</a></li>
                        {/if}

                        {/each}
                        {/if}
                    </ul>
                </div>
                {if data.guide_list.length>1}
                {/if}
                {each data.guide_list as guide i}
                {if guide}
                <div class="faqscene_tab_bd js_faqscene_content">
                    <ul>
                        {each guide.subitems as subitem i}
                        {if subitem}
                        <li><a target="_blank" href="{subitem.kf_url}">{subitem.title}</a></li>
                        {/if}
                        {/each}
                    </ul>
                </div>
                {/if}
                {/each}
            </div>
        </div>
        <div class="faqscene_ft"><a href="{data.more_help.kf_url}" target="_blank">{data.more_help.title}</a></div>
    </div>
</div>
</div>
</script>


<script type="text/javascript"> 

;;;(function() {

var jq = jQuery;
var dom = null;
var panel = null;
var close = null
var faqArea = null;
var timer = null;
var tab_heads = null;
var tab_contents = null;
var token = "1423695882"
var report_id = null;

/**
 * 加载FAQ数据以及进行初始化
 */
function loadDataAndInit() {
    var param = "&cginame=" + urlParser.parser.pathname.replace(/^\//, '');
    var tValue = urlParser.getParam("t");
    var actionValue = urlParser.getParam("action");

    param += token 
             ? ("&token=" + token ) // 带上token
             : "";
    param += tValue
             ? ("&t=" + tValue)
             : ("&action=" + actionValue);

    var getFAQUrl = "/misc/faq?action=getfaq&lang=zh_CN&f=json" + param;

    $.ajax({
        type: "GET",
        url: getFAQUrl
    }).success(function(data) {
        if (data.base_resp.ret !== 0) return;
        wx.faq_list = data.base_resp.assistant.problem;
        if (!wx.faq_list.question) return; // 做保护，防止没有吐出
        renderFaq();
        makeActions();
        initReport();
        panel.hide();
        g(0);
    }).error(function(error) {
        ; // ignore
    });
}

function renderFaq() {
    jq("body").append(template.render("js_faqscene_tpl", {data: wx.faq_list}));
    dom = jq("#js_faqscene_p");
    panel = dom.find(".js_faq_main_panel");
    close = dom.find(".faqscene_close");
    faqArea = dom.find(".faqscene_inner");
    timer = null;
    tab_heads = dom.find(".js_faq_class1 li");
    tab_contents = dom.find(".js_faqscene_content");
}

/**
 * 点击某个字分类显示该子分类的问题列表
 * 
 * @param {Number} idx - 该子分类的下标
 */
function g(idx) {
    var $currentTab = tab_heads.eq(idx);
    tab_contents.hide();
    subitem = $currentTab.find("a").text();
    report_id = (idx === 0)
              ? wx.faq_list.guide_list[0].report_id
              : $currentTab.data("report-id");
    jq(tab_contents[idx]).show();
    tab_heads.find("a").removeClass("active");
    jq(tab_heads[idx]).find("a").addClass("active");
}

function makeActions() {
    tab_heads.click(function() {
        var idx = jq(this).index();
        g(idx);
    });

    // 点击x隐藏FAQ
    close.on("click", function(event) {
        event.preventDefault();
        clearTimeout(timer);
        panel.hide();
    });

    // 鼠标移出FAQ隐藏
    faqArea.on("mouseover", function() {
        clearTimeout(timer);
        panel.show();
    });

    faqArea.on("mouseout", function(event) {
        timer = setTimeout(function() {
            panel.hide();
        }, 300);
    });
}

/*======================== 用户点击，上报数据统计 =======================*/
var subitem = null;
var questText = "none";
var questLink = "none";
var urlParser = new URLParser(window.location.href);

function initReport() {
    subitem = wx.faq_list.guide_list[0].itemname;
    report_id = wx.faq_list.guide_list[0].report_id;
    // 上报每个独立的问题
    jq("div.js_faqscene_content").find("a").click(function(event) {
        var $question = jq(this);
        questText = $question.text();
        questLink = $question.attr("href");
        var reportData = getReportData();
        report(reportData);
    });
    // 上报更多问题链接的点击
    jq("div.faqscene_ft a").click(function(event) {
        var $more = jq(this);
        questText = $more.text();
        var reportData = getReportData();
        reportData.report_id = wx.faq_list.help_report_id;
        report(reportData);
    });
}

/**
 * ajax上报点击统计数据
 *
 * @param {Object} data - 统计数据
 */
function report(data) {
    //console.log(data);
    var reportUrl = "/misc/faq?action=report"
    $.ajax({
        url: reportUrl,
        data: data,
        type: "POST"
    }).success(function(data) {
        //console.log(data);
    });
}

/**
 * 获取需要上报的数据
 * 
 * @return {Object} 需要上报的数据
 */
function getReportData() {
    var data = {};
    data.report_id = report_id;
    data.question = questText;
    data.action = "report";

    return data;
}


/**
 * URL分析器
 * 
 * @param {String} url - 需要传入的URL
 * @constructor
 */ 
function URLParser(url) {
    // Check out this gist for URL parser hack: 
    // https://gist.github.com/jlong/2428561
    var $el = jq("<a></a>").attr("href", url);
    this.el = $el.get(0);
    this.parser = this.el;
}

/**
 * 获取URL中的请求特定的请求参数
 *
 * @param {String} key - 需要查询的参数的键
 * @return {String|Null} - 返回值，不存在则为null
 */
URLParser.prototype.getParam = function(key) {
    var KEY_REG = new RegExp("([\?&])" + key + "=([^&#]*)([&#])?");
    var result = this.el.search.match(KEY_REG);
    return result
           ? result[2]
           : null;
};


loadDataAndInit();
})();
</script>


    


<div class="scale_tips" id="zoom_tips" style="display:none;">
<div class="scale_tips_inner">
<i class="icon_scale_tips"></i>
<p class="scale_tips_content"><span id="zoom_msg"></span><a href="javascript:;" id="zoom_prompt">不再提示</a></p>
</div>
</div><div style="position: absolute; right: 0px; bottom: 0px; visibility: visible;"><object type="application/x-shockwave-flash" data="https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/zoom230dc3.swf" width="10" height="10" id="ZoomFlash"><param name="movie" value="https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/zoom230dc3.swf"><param name="allowscriptaccess" value="always"><param name="wmode" value="transparent"><param name="scale" value="noScale"></object></div><div class="faqscene" id="js_faqscene_p">
<div class="faqscene_inner">
    <div class="faqscene_name js_faq_trigger">常见问题</div>
    <div class="faqscene_panel js_faq_main_panel" style="display: none;">
        <a href="https://mp.weixin.qq.com/advanced/autoreply?t=ivr/reply&action=beadded&token=1423695882&lang=zh_CN###" class="faqscene_close">x</a>
        <div class="faqscene_hd">自动回复问题</div>
        <div class="faqscene_bd">
            <div class="faqscene_tabs">
                <div class="faqscene_tab_hd">
                    <ul class="js_faq_class1">
                        
                    </ul>
                </div>
                
                
                
                <div class="faqscene_tab_bd js_faqscene_content" style="display: block;">
                    <ul>
                        
                        
                        <li><a target="_blank" href="http://kf.qq.com/faq/120322fu63YV130422fme2mQ.html?scene_id=pc95">什么是消息自动回复</a></li>
                        
                        
                        
                        <li><a target="_blank" href="http://kf.qq.com/faq/120322fu63YV130422rYNjYB.html?scene_id=pc96">如何设置关键词自动回复</a></li>
                        
                        
                        
                        <li><a target="_blank" href="http://kf.qq.com/faq/120322fu63YV130422aEv6nq.html">如何设置被添加自动回复</a></li>
                        
                        
                        
                        <li><a target="_blank" href="http://kf.qq.com/faq/120911VrYVrA1307306Jry63.html?scene_id=pc98">自动回复优先规则是什么</a></li>
                        
                        
                        
                        <li><a target="_blank" href="http://kf.qq.com/faq/120322fu63YV130422uuIrIr.html?scene_id=pc99">自定义自动回复上限是多少</a></li>
                        
                        
                    </ul>
                </div>
                
                
            </div>
        </div>
        <div class="faqscene_ft"><a href="http://kf.qq.com/faq/120322fu63YV130422q6FBrm.html" target="_blank">点击查看更多</a></div>
    </div>
</div>
</div></body></html>