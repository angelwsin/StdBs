define("tpl/tooltips.html.js",[],function(){
return'<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("tpl/cardticket/card_quantity.html.js",[],function(){
return'<div class="pop_store">\n	<!--增减库存-->\n	{if setquantity}\n	<div class="frm_control_group">\n        <div class="frm_controls">\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">增加</span>\n				<input type="radio" name="isadd" checked value="1" class="frm_radio js_quantity_type">\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">减少</span>\n				<input type="radio" name="isadd" value="0" class="frm_radio js_quantity_type">\n			</label>\n		</div>\n	</div>\n	{/if}\n	<div class="frm_control_group">                        \n		<div class="frm_controls">\n			<div class="frm_controls_hint group">\n				<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n				<span class="frm_hint">份</span>\n			</div>\n			<p class="frm_tips fail">库存不能少于1</p>\n		</div>\n	</div>\n	<!--增减库存 end-->\n</div>';
});define("cardticket/add/msg_operate_type_html.js",["tpl/media/cardmsg.html.js"],function(a){
"use strict";
var s={
1:'{if msg_operation.appmsg_title}<div class="appmsg">                <div class="appmsg_content">                    <h4 class="appmsg_title">                        <a href="{msg_operation.url}" target="_blank">{msg_operation.appmsg_title}</a>                    </h4>                    <div class="appmsg_info">                        <em class="appmsg_date">{msg_operation.appmsg_update_time}</em>                    </div>                    <div class="appmsg_thumb_wrp">                         <img src="{msg_operation.appmsg_cover}" alt="" class="appmsg_thumb">                    </div>                    <p class="appmsg_desc">{msg_operation.appmsg_digest}</p>                </div>             </div>             {else}            <a href="{msg_operation.url}" target="_blank">{msg_operation.text}</a>             {/if}',
2:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
5:a("tpl/media/cardmsg.html.js"),
4:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
0:""
};
return s;
});define("common/wx/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
f.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),t=e("common/wx/dialog.js"),a=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,l=wx.path.webuploader,s=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",c={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/*"
},
fileSingleSizeLimit:2097152
},
3:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/*"
},
fileSingleSizeLimit:5242880
},
4:{
accept:{
extensions:"rm,rmvb,wmv,avi,mpg,mpeg,mp4",
mimeTypes:"video/*"
},
fileSingleSizeLimit:20971520
},
5:{
accept:{
extensions:"pdf",
mimeTypes:"application/pdf"
},
fileSingleSizeLimit:10485760
},
6:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif,pdf",
mimeTypes:"image/*,application/pdf"
},
fileSingleSizeLimit:2097152
},
7:{
accept:{
extensions:"bmp,jpeg,jpg,gif",
mimeTypes:"image/*"
},
fileSingleSizeLimit:2097152
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/*"
},
fileSingleSizeLimit:2097152
},
9:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:204800
},
10:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:5242880
},
11:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/*"
},
fileSingleSizeLimit:2097152
}
};
c[15]=c[4];
var p=function(e){
t.show({
type:"warn",
msg:"警告|"+e,
mask:!0,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
},m=function(e){
var i=n.Uploader;
0==i.support("flash")?p("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>"):0==i.support()?p("<p>您的浏览器不支持上传</p>"):e.refresh();
},u=function(e){
e&&wx.jslog({
src:"common/wx/upload.js"
},null,e);
},d={
swf:l,
auto:!0,
pick:{
multiple:!0
},
fileNumLimit:5,
threads:3,
sendAsBinary:!1,
runtimeOrder:"html5,flash",
compress:{
width:1e8,
height:1e8,
quality:90,
compressSize:0,
noCompressIfLarger:!0
},
imageSize:!0,
chunked:!1,
duplicate:!0
},f=new Image,g={},h=function(e){
if(!e.url)throw"missing url";
var t,l,s,p=$('<ul class="upload_file_box" style="display:none"></ul>'),f=$(e.container);
f.on("click",function(){
Math.random()<.1&&u(12),m(t);
}).parent().append(p),function(){
0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),l={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket),
pick:{
id:f,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},s=c[e.type]||c[2],e=$.extend(!0,{},d,l,s,e);
try{
t=n.create(e);
}catch(h){
if(!t)return;
}
return p.on("click",".js_cancel",function(){
var e=$(this).data("id");
t.cancelFile(e),$(this).hide();
}),t.on("beforeFileQueued",function(i){
return Math.random()<.1&&u(13),e.canContinueUpload&&!e.canContinueUpload()?!1:!(e.onSelect&&e.onSelect(null,i.id,i)===!1);
}),t.on("fileQueued",function(e){
var i={
id:e.id,
fileName:e.name,
size:n.formatSize(e.size)
};
p.append(r(o,i)).show();
}),t.on("fileDequeued",function(){
Math.random()<.1&&u(14),e.onCancel&&e.onCancel();
}),t.on("uploadProgress",function(i,n){
var t="#uploadItem%s".sprintf(i.id),a=p.find(t).find(".progress_bar_thumb");
a.width("%s%".sprintf(100*n)),1==n&&p.find(t).find(".js_cancel").remove(),e.onProgress&&e.onProgress(null,i.id,i,{
percentage:n
});
}),t.on("uploadStart",function(e){
g[e.id]=+new Date;
}),t.on("uploadSuccess",function(n,t,o){
if(Math.random()<.1&&u(16),t&&t.base_resp){
var r=+t.base_resp.ret;
if(0==r)Math.random()<.1&&(u(17),g[n.id]&&i(+new Date-g[n.id]));else switch(n.setStatus("invalid"),
r){
case-18:
a.err("页面停留时间过久，请刷新页面后重试！");
break;

case-20:
a.err("无法解释该图片，请使用另一图片或截图另存");
break;

case-13:
a.err("上传文件过于频繁，请稍后再试");
break;

case-10:
a.err("上传文件过大");
break;

case-22:
a.err("上传音频文件不能超过60秒");
break;

case-39:
a.err("上传图片已超过宽度（或者高度）限制，请将图片调整到宽度4000像素以下，高度4000像素以下后重试");
break;

default:
a.err("上传文件发送出错，请刷新页面后重试！");
}
}
e.onComplete&&e.onComplete(null,n.id,n,t,{
fileCount:o.numOfProgress+o.numOfQueue
});
}),t.on("uploadFinished",function(i){
this.reset(),p.fadeOut().html(""),g={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
errors:i.numOfCancel+i.numOfInvalid+i.numOfUploadFailed+i.numofDeleted+i.numofInterrupt,
filesUploaded:i.numOfSuccess
});
}),t.on("uploadError",function(){
Math.random()<.1&&u(15),e.onError&&e.onError();
}),t.on("error",function(i,t,o){
switch("object"==typeof t&&(o=t),i){
case"Q_EXCEED_NUM_LIMIT":
a.err("一次上传最多只能上传%s个文件".sprintf(t));
break;

case"F_EXCEED_SIZE":
a.err("文件大小不能超过%s".sprintf(n.formatSize(t,"0")));
break;

case"Q_TYPE_DENIED":
a.err(e.errTypeMsg||"文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g,", "));
}
}),t;
},b=function(e){
return function(i){
return i.url=e,h(i);
};
},w=function(e){
return function(i){
return wx.url(e+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&id="+i);
};
};
return{
uploadFile:h,
uploadBizFile:b(s+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(s+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(s+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(s+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(s+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(s+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(s+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(s+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(s+"/misc/setlocation?action=upload"),
uploadCdnFileFromAd:function(e){
return b(s+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=s+"/cgi-bin/filetransfer?action=upload_material&f=json",1==e.doublewrite&&(e.url+="&writetype=doublewrite&groupid="+(e.groupid||1)),
h(e);
},
uploadCdnFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));
return b(s+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
},
tmpFileUrl:w(s+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(s+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(s+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/tooltipsManager.js", [ "common/wx/tooltips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/tooltips.js"), s = {
tooltips: [],
init: function(e, t) {
var n = this;
$(e).each(function() {
t.container = this, n.add(new i(t));
});
},
add: function(e) {
this.tooltips.push(e);
},
hideAll: function() {
for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].hide();
},
removeItem: function(e) {
for (var t = 0; t < this.tooltips.length; t++) if (this.tooltips[t] === e) return this.tooltips.splice(t, 1), e.$dom.remove(), !0;
return !1;
},
removeIndex: function(e) {
if (e >= this.tooltips.length || e < 0) return;
var t = this.tooltips[e];
this.tooltips.splice(e, 1), t.$dom.remove();
},
current: function() {},
hide: function() {},
removeAll: function() {
for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].$dom.remove();
this.tooltips = [];
}
};
return s;
} catch (o) {
wx.jslog({
src: "common/wx/tooltipsManager.js"
}, o);
}
});define("common/wx/tooltips.js", [ "tpl/tooltips.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
position: {},
container: "",
type: "hover",
buttons: [],
delay: 300,
disabled: !1,
reposition: !1,
container_close: !1,
parentClass: "",
container_mode: "absolute"
}, s = wx.T, o = e("tpl/tooltips.html.js"), u = "btn_disabled", a = "hover", f = "show", l = function(e) {
this.options = e = $.extend(!0, {}, i, e), this.$container = $(this.options.container);
if (!this.$container || this.$container.length == 0) return;
var t = this.$container.offset(), n = this.$container.height(), r = this.options.position.left || this.$container.data("x") || 0, l = n + (this.options.position.top || this.$container.data("y") || 0);
this.options.offset = {
left: t.left + r,
top: t.top + l,
left_x: r,
top_y: l
}, !e.content && (e.content = this.$container.data("tips") || ""), this.$dom = $(s(o, e)).appendTo("body"), this.options.disabled && this.$container.addClass(u);
var c = this, h = this.options.type === a || this.options.type === "click" ? this.options.type : a;
if (h == a) {
var p = null;
this.$container.hover(function(e) {
c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : !c.options.disabled && c.show();
}, function(e) {
p = window.setTimeout(function() {
c.hide();
}, c.options.delay);
}), this.$dom.hover(function(e) {
p && window.clearTimeout(p);
}, function(e) {
c.hide();
});
} else this.$container.click(function(e) {
if (c.options.disabled) return;
if (c.options.onbeforeclick && typeof c.options.onbeforeclick == "function" && c.options.onbeforeclick.apply(c) === !1) return;
return c.$dom.data(f) ? c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c) : c.hide() : c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : c.show(), !1;
});
$(document).on("click", function(e) {
c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [ e ]) : c.hide();
}), c.$dom.find(".js_popover_close").on("click", function(e) {
return c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [ e ]) : c.hide(), !1;
}), this.$dom.hide(), function() {
$.each(c.$dom.find(".btn"), function(e, t) {
c.options.buttons[e].click && $(t).on("click", function() {
c.options.buttons[e].click.apply(c);
});
});
}();
};
l.prototype = {
constructor: l,
show: function() {
if (this.options.reposition) {
var e = this.$container.offset(), t = e.left + this.options.offset.left_x, n = e.top + this.options.offset.top_y;
this.$dom.css({
left: t,
top: n
}).show();
} else this.$dom.show();
this.$dom.data(f, !0);
},
hide: function() {
this.$dom.hide(), this.$dom.data(f, !1);
},
enable: function() {
return this.options.disabled = !1, this.$container.removeClass(u), this;
},
disable: function() {
return this.options.disabled = !0, this.$container.addClass(u), this;
}
}, n.exports = l;
} catch (c) {
wx.jslog({
src: "common/wx/tooltips.js"
}, c);
}
});define("cardticket/add/member_info_flag.js",[],function(){
"use strict";
function n(n,f){
for(var i=0;i<n.length;i++)if(n[i]===f)return i;
return-1;
}
var f=[1,4096,2,4,8,0,32,64,128,256,512,1024,2048];
return{
sys_info:["手机号","姓名","性别","所在地区","生日","身份证号","邮箱","详细地址","学历","职业","行业","收入","爱好"],
info_flag:f,
flag2info:function(n){
for(var f=[],i=0;i<this.info_flag.length;i++){
var r=this.info_flag[i];
r&n&&f.push(this.sys_info[i]);
}
return f;
},
info2flag:function(f){
for(var i=0,r=0;r<f.length;r++){
var t=n(this.sys_info,f[r]);
t>=0&&(i|=this.info_flag[t]);
}
return i;
}
};
});define("tpl/step.html.js", [], function(e, t, n) {
return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});define("tpl/media/plugin/audioItem.html.js",[],function(){
return'{each list as data i}\n<label class="frm_radio_label audio_item {if data.enable==true}disabled{/if}">\n    <i class="icon_radio"></i>\n    <span class="lbl_content">\n        <span class="audio_meta audio_title">{data.title}</span>\n        <span class="audio_meta audio_date">{data.update_time}</span>\n        <span class="audio_meta audio_length">{data.format_play_length}</span>\n        <span class=\'audio_meta audio_play jsPluginAudioPlay audio_default\' id="pluginAudioPlay_{i}">\n        </span>\n    </span>\n    <input type="radio" {if data.disabled}disabled="disabled"{/if}  data-label="{data.name}" data-value="{data.file_id}" data-index="{i}" class="frm_radio jsPluginAudioRadio" >\n</label>\n{/each}\n';
});define("tpl/media/plugin/audio.html.js",[],function(){
return'<div class="audio_box">\n    <div class="global_mod audio_box_hd float_layout gap_top" id="">\n        <p class="global_info gap_top_item tips_global jsAudioTips" style="display:none;">由于版本兼容的原因,你暂时只可以选择60秒内的语音发送</p>\n        <p class="global_extra">\n            <a class="btn btn_primary btn_add jsPluginAudioNew" href="javascript:;"><i class="icon14_common add_white"></i>新建语音</a>\n        </p>\n    </div>\n    <div class="audio_box_bd audio_list_container" id="">\n\n        <div class="media_list_tips_wrp tips_global" style="display:none;">\n            <span class="tips">暂无素材</span>\n            <span class="vm_box"></span>\n        </div>\n\n\n        <div class="media_list_tips_wrp" style="display:none;">\n            <i class="icon_loading_small white">loading...</i>\n            <span class="vm_box"></span>\n        </div>\n\n\n        <div class="audio_list jsPluginAudioList"></div>\n\n        <div class="pagination_wrp jsPluginAudioPage"></div>\n    </div>\n</div>\n';
});define("tpl/cardticket/send_card.html.js",[],function(){
return'<div>\n	<div class="wrp_processor js_step_container"></div>\n	<div class="first_step js_step_content js_step1">\n	    <!--选择投放方式弹窗-->\n		<div class="js_card_list"></div>\n		<!--选择投放方式弹窗 end-->\n	</div>\n	<div class="second_step js_step_content js_step2">\n	</div>\n</div>';
});define("cardticket/card_quantity.js",["common/wx/Cgi.js","common/wx/Tips.js","biz_web/ui/checkbox.js","tpl/cardticket/card_quantity.html.js","common/wx/tooltips.js","common/wx/tooltipsManager.js"],function(t){
"use strict";
var e=t("common/wx/Cgi.js"),o=t("common/wx/Tips.js"),n=(t("biz_web/ui/checkbox.js"),
template.compile(t("tpl/cardticket/card_quantity.html.js"))),i={
container:"",
quantityChange:$.noop,
setquantity:!0
},a=t("common/wx/tooltips.js"),r=t("common/wx/tooltipsManager.js"),c=function(t){
t=$.extend(!0,{},i,t),this.opt=t;
var c=this;
$(t.container).on("click",function(i){
var s,u=$(this).data("cid");
if(t.before&&t.before(u)===!1)return!1;
var d=new a({
container:this,
content:n({
setquantity:t.setquantity
}),
container_mode:t.mode||"absolute",
type:"click",
onclose:function(t){
if(t){
for(var e=this.$dom.get(0),o=t.target,n=!1;o&&o!==document.body;){
if(o==e){
n=!0;
break;
}
o=o.parentNode;
}
n?this.show():this.hide();
}
},
buttons:[{
text:"确定",
type:"btn_primary",
click:function(){
var n=d.$dom,i=n.find(".js_value"),a=parseInt($.trim(i.val()));
if(isNaN(a)||0>=a)return o.err("库存必须是不能小于1的整数"),!1;
var m=1e9;
return a>=m?(o.err("库存不能大于10亿"),i.focus(),!1):void e.post({
url:"/merchant/electroniccardmgr",
data:{
action:t.setquantity?"modifyquantity":"setquantity",
card_id:u,
value:a,
isadd:s.value()
}
},function(n){
0==n.base_resp.ret?(o.suc("设置库存成功"),r.removeAll(),t.quantityChange&&t.quantityChange.call(c,u,!t.setquantity||s.value()?a:-a)):10037==n.base_resp.ret?o.err("子商户每张券累计只可发放2000份"):1e4==n.base_resp.ret?o.err("库存不能小于0"):e.show(n);
});
}
},{
text:"取消",
type:"btn_default",
click:function(){
r.removeAll();
}
}]
});
d.show(),r.removeAll(),r.add(d),$(".popover").css("z-index","10000"),s=d.$dom.find(".js_quantity_type").checkbox(),
d.$dom.find(".js_value").focus(),i.stopPropagation();
});
};
return c;
});define("tpl/cardticket/card_preview.html.js",[],function(){
return'<div class="pop_card_preview js_pop_card_preview">\n	<span class="hook hook_right_top js_arrow">\n	<!--\n		箭头位置 \n		hook_right_top      右偏上\n		\n	-->\n		<span class="hook_top"></span>\n		<span class="hook_btm"></span>\n	</span>\n	<div class="card_preview">\n		<div class="client_side">\n			<div class="banner">{convert_type card.type}</div>\n			<div class="wrp">\n				<div class="top" style="background-color: {card.color};border-bottom-color: {card.color};">\n					<div class="logo group">\n						<div class="avartar l"><img src="{http2https card.logo_url}"></div>\n						<p>{card.brand_name}</p>\n					</div>\n					<div class="msg">\n						<div class="main_msg">\n							<p>{card.title}</p>\n							<p class="title_sub">{card.sub_title}</p>\n						</div>\n						<p class="time">有效期 {validtime card \'YYYY-MM-DD\'}</p>\n					</div>\n					<div class="deco"></div>\n				</div>\n				<div class="wrp_content">\n					<div class="wrp_section section_dispose">\n						{if card.code_type==0}\n							<div class="main_msg sn">1513-2290-1878</div>\n						{else if card.code_type==1}\n							<div class="bar_code_panel">\n								<div class="main_msg bar_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{else if card.code_type==2}\n							<div class="qr_code_panel">\n								<div class="main_msg qr_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{/if}\n						<p>{card.notice}</p>\n					</div>\n					<div class="wrp_section">\n						<ul class="info_list">\n							<li class="info_li">\n								<p class="info">{convert_type card.type}详情</p>\n								<span class="supply_area"><i class="ic ic_go"></i></span>\n							</li>\n							<li class="info_li">\n								<p class="info">适用门店</p>\n								<span class="supply_area">{card.location_id_list.length}家<i class="ic ic_go"></i></span>\n							</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>';
});