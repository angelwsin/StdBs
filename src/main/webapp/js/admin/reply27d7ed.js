define("ivr/reply.js",["common/wx/popup.js","ivr/ivr_cgi.js","common/wx/dialog.js","common/wx/richEditor/msgSender.js","common/wx/popover.js","common/wx/Tips.js"],function(t){
"use strict";
function e(){
var t=new p($("#js_msgSender"),{
data:h,
acl:{
can_text_msg:1,
can_image_msg:1,
can_voice_msg:1,
can_video_msg:1
}
});
$("#js_save").click(function(){
var e=$(this);
if(!e.hasClass("btn_disabled")){
var i=t.getData(),n={};
i.error||(i=i.data,n.type=f[i.type]||i.type,n.appmsgid=i.app_id,n.fileid=i.file_id,
n.content=i.content,n.ruleid=u,n.iswork=b,n.replytype=v,/*e.disable("btn_disabled").removeClass("btn_primary"),*/
c.replySave(n,function(){
e.enable("btn_disabled").addClass("btn_primary"),$("#js_del").enable("btn_disabled").addClass("btn_default");
}));
}
}),$("#js_del").click(function(){
var e=$(this);
$(this).hasClass("btn_disabled")||new _({
dom:e,
content:"删除后，关注该公众号的用户将不再接收该回复，确定删除？",
place:"bottom",
margin:"right",
hover:!0,
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
c.replyDel(u,v,function(){
t.clear(),u=b="",$("#js_del").disable("btn_disabled");
}),this.hide();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
},
type:"default"
}]
});
}),$("#div_stop .btn_primary").click(function(){
s(!0);
}),$("#div_start .btn_warn").click(function(){
s(!1);
}),$("#icon_temp").mouseover(function(){
new _({
dom:$("#icon_temp"),
content:$("#pop_desc").html(),
hover:!0
});
}),i();
}
function i(){
$(".detail_desc").click(function(){
$("#detail_pop").popup({
buttons:[{
text:"我知道了",
click:function(){
this.hide();
},
type:"primary"
}],
title:"提示"
});
});
}
function n(){
u||/*$("#js_del").disable("btn_disabled"),*/r.is.autoReply?($("#div_start").show(),$("#div_stop").hide(),
$("#div_replyContent").show()):($("#div_start").hide(),$("#div_stop").show(),$("#div_replyContent").hide()),
r.is.isOpen||($("#div_replyContent").hide(),$("#div_alertTips").show(),$("#btn_start").removeClass("btn_primary").addClass("btn_disabled"),
$("#btn_stop").removeClass("btn_warn").addClass("btn_disabled"));
}
function s(t){
var e,i={
type:"POST",
url:"/misc/skeyform?form=advancedswitchform&lang=zh_CN",
dataType:"json"
},s=t?1:0,a=4,o=["关闭自动回复之后，将立即对所有用户生效。确认关闭？","开启自动回复之后，将立即对所有用户生效。确认开启？"];
l.show({
type:"warn",
msg:"操作确认|"+o[s?1:0],
buttons:[{
text:"确定",
click:function(){
e=$.extend(!0,{},i,{
data:{
flag:s,
type:a,
token:wx.data.t
},
success:function(t){
0==t.base_resp.ret?(m.suc("操作成功"),replyData.is.autoReply=s,n()):m.err("系统发生错误，请稍后重试");
}
}),$.ajax(e),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
}
function a(){
$("#div_stop").show(),$("#btn_start").disable("btn_disabled");
for(var t=$("#js_authrized"),e="",i=d.auth_info,n=i.length,s=0;n>s;s++){
var a=i[s].component_name||"未知",o=i[s].func_category_list||[];
o.indexOf(1)>-1&&(e=""==e?a:e+"、"+a);
}
t.find(".js_thirdname").text(e),t.show();
}
function o(){
"1"==d.authrized?(a(),i()):(n(),e());
}
t("common/wx/popup.js");
var d=wx.cgiData,r=replyData||{},c=(template.render,t("ivr/ivr_cgi.js")),l=t("common/wx/dialog.js"),p=t("common/wx/richEditor/msgSender.js"),_=t("common/wx/popover.js"),m=t("common/wx/Tips.js"),u=d.rule_id,b=d.iswork,v=d.replytype,h=d.data,f={
15:7,
21:9
};
o();
});