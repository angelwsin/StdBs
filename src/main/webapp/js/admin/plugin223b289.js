define("cardticket/send_card.js",["common/wx/popup.js","common/wx/Step.js","cardticket/send_card_table.js","tpl/cardticket/send_card.html.js"],function(e){
"use strict";
var t=(e("common/wx/popup.js"),e("common/wx/Step.js"),function(e){
this.opt=e,this.init();
}),p=e("cardticket/send_card_table.js");
return t.prototype={
_html:e("tpl/cardticket/send_card.html.js"),
init:function(){
var e=this.opt,t=this,n=$(template.compile(this._html)()).popup({
title:"选择卡券",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
t.sendCardTable.select();
}
},{
text:"取消",
type:"default",
click:function(){
t.sendCardTable.isLoading()||this.hide();
}
}],
onHide:function(){
e.onHide&&e.onHide.call(t),e.removeOnHide&&this.remove();
},
className:"send_card align_edge",
width:960
});
if(this.$send_popup=n,e.container=this.$send_popup,e.pageChanged=function(){
t.$send_popup.popup("resetPosition");
},e.getDataComplete=function(){
t.$send_popup.popup("resetPosition");
},e.selectComplete){
var o=e.selectComplete;
e.selectComplete=function(){
o.call(t,arguments[0],arguments[1],arguments[2]),t.hide();
};
}else e.selectComplete=function(){
t.hide();
};
this.sendCardTable=new p(e);
},
show:function(){
this.$send_popup.popup("show"),this.$send_popup.popup("resetPosition");
},
hide:function(){
this.$send_popup.popup("hide");
},
destroy:function(){
this.$send_popup.popup("remove");
}
},t;
});define("common/wx/media/videoDialog.js",["common/wx/popup.js","page/smallvideo/dialog_select_video.css","widget/media/media_dialog.css","common/wx/top.js","common/wx/Tips.js","common/wx/media/video.js","common/wx/pagebar.js","common/wx/time.js","media/media_cgi.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/videocard.html.js"],function(e){
"use strict";
function i(e,i,t){
e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/^http:/,"https:"),e=e.replace(/^v\.qq\.com/,"https://v.qq.com"),
(-1!=e.indexOf("http://v.qq.com")||-1!=e.indexOf("https://v.qq.com"))&&d(e,i,t);
}
function t(e,i){
var i=i||document.location.toString(),t=e+"=",o=i.indexOf(t);
if(-1!=o){
var d=i.indexOf("&",o),n=i.indexOf("?",o);
return-1!=n&&(-1==d||d>n)&&(d=n),n=i.indexOf("#",o),-1!=n&&(-1==d||d>n)&&(d=n),-1==d?i.substring(o+t.length):i.substring(o+t.length,d);
}
return"";
}
function o(e){
e=e||window.location.toString();
var i,o=t("vid",e);
return o||(i=e.match(/\/\w{15}\/(\w+)\.html/))&&(o=i[1]),o||((i=e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/))?o=i[1]:(i=e.match(/\/(page|play)\/+(\w{11})\.html/))&&(o=i[2])),
o||(i=e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/))&&(o=i[1]),encodeURIComponent(o);
}
function d(e,i,t){
var d,n,s="",a=t.width,m=t.height;
if(d=e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)")))s=encodeURIComponent(d[2]),
t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);else if((d=e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html")))||(d=e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))){
var r=encodeURIComponent(d[2]),c="https://sec.video.qq.com/p/sns.video/fcgi-bin/dlib/dataout_ex?auto_id=137&cid="+r+"&otype=json",l=document.getElementsByTagName("head")[0],p=document.createElement("script");
p.type="text/javascript",p.src=c,p.async=!0,void 0!==p.onreadystatechange?p.onreadystatechange=function(){
if("loaded"==p.readyState)try{
s=QZOutputJson.videos[0].vid,t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);
}catch(e){}
}:p.onload=function(){
try{
s=QZOutputJson.videos[0].vid,t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);
}catch(e){}
},l.appendChild(p);
}else s=o(e),""!=s&&(t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t));
}
e("common/wx/popup.js"),e("page/smallvideo/dialog_select_video.css"),e("widget/media/media_dialog.css");
var n=e("common/wx/top.js"),s=e("common/wx/Tips.js"),a=e("common/wx/media/video.js"),m=e("common/wx/pagebar.js"),r=e("common/wx/time.js"),c=e("media/media_cgi.js"),l=e("tpl/media/dialog/videomsg_layout.html.js"),p=e("tpl/media/videocard.html.js"),v=15,_=21,f=0,h={};
h[v]="video_msg_cnt",h[_]="short_video_cnt";
var u=function(e,i){
var t=$.extend({},i.multi_item?i.multi_item[0]:i);
t.selector=e,t.id=i.app_id,t.app_id=i.app_id,t.tpl="videomsg",t.for_selection=1!=t.is_new_video?!0:3==t.status,
t.for_transfer=!!t.content,t.hide_transfer=!!t.content,t.video_id=t.content,t.source="file",
1==t.is_new_video?(t.time=i.create_time?r.timeFormat(i.create_time):"",e.html(wx.T(p,t))):(t.create_time=i.create_time,
new a(t)),$("#wxVideoBox"+t.id).data("opt",t);
},g=548,w=280,j=function(e){
console.log(e),this.scene=e.scene||"default",this.onOK=e.onOK,this.can_use_shortvideo=e.can_use_shortvideo,
this.can_use_txvideo=e.can_use_txvideo,this.create();
},b={
create:function(){
var e=this,t=$.parseHTML(wx.T(l,{
scene:e.scene,
token:wx.data.t
}));
e.dialog&&e.dialog.popup("remove"),e.dialog=$(t[0]).popup({
title:"选择视频",
className:"dialog_select_video",
width:960,
onOK:function(){
var t=this,o=e.$dom.find(".js_top.selected").data("id"),d=e.$dom.find(".Js_videomsg.selected").data("opt")||e.$dom.find(".Js_videomsg.selected").parent().data("opt"),n=e.$dom.find(".js_video_txurl").val();
if(o&&d&&1==d.is_new_video&&3!=d.status)return s.err("该视频目前无法被选择，请选择其它视频"),!0;
if(o&&d&&0==d.is_new_video&&(0!=d.is_new_video||!d.content_url))return s.err("该视频转码未完成，请选择其它视频"),
!0;
if(o){
if(!d)return s.err("请选择视频"),!0;
if(e.onOK&&!e.onOK(o,d))return!0;
t.remove(),e.dialog=null;
}else{
if(!n)return s.err("请输入视频网址"),!0;
if(-1==n.indexOf("v.qq.com/"))return s.err("请输入腾讯视频网址"),!0;
var a=!1;
if(i(n,function(i,d){
if(0==i.indexOf("http://v.qq.com/")||0==i.indexOf("https://v.qq.com/")){
var n=i.match(/[\?&]vid\=([^&]*)/);
if(null!=n&&n[1]){
var m=n[1],r=e.$dom.find(".js_btn");
m?(r.attr("disabled",!0),$.ajax({
url:wx.url("/cgi-bin/registertopic?id="+m+"&type=2"),
type:"post",
dataType:"json",
success:function(n){
n&&n.base_resp&&0==n.base_resp.ret?(d=$.extend({
url:i
},d),e.onOK&&e.onOK(o,d),t.remove(),e.dialog=null):s.err("系统繁忙，请稍后再试");
},
error:function(){
s.err("系统繁忙，请稍后再试");
},
complete:function(){
r.attr("disabled",!1);
}
})):s.err("无效视频地址");
}else s.err("无效视频地址");
a=!0;
}
return a?!0:(d=$.extend({
url:i
},d),e.onOK&&e.onOK(o,d),t.remove(),void(e.dialog=null));
},{
width:500,
height:375,
align:"none"
}),a)return!0;
}
},
onCancel:function(){
this.remove(),e.dialog=null;
},
onHide:function(){
this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init(),e.dialog.popup("resetPosition");
},
init:function(){
var e=this,i=e.can_use_shortvideo?[{
name:"小视频",
id:_
}]:[];
"ueditor"==e.scene?(f=1,i.unshift({
name:"视频网址"
}),e.initTencentVideo()):(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10)),"ueditor"==e.scene&&1==e.can_use_txvideo?(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10),e.$dom.find(".js_video_tencent").hide()):$(".js_video_status").find(".frm_tips").html("支持腾讯视频"),
e.tab=new n(e.$dom.find(".js_videotab"),i),e.tab.selected(0),e.tab.dom.find("a").on("click",function(e){
e.preventDefault();
}),e.$dom.on("click",".js_top",function(){
var i=$(this).data("id");
e.$dom.find(".js_video_status").hide(),e.$dom.find(".js_video_create").hide(),e.$dom.find(".js_pagebar").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),i?(i==v&&e.$dom.find(".js_video_create").show(),
e.getList(i,0,10)):e.$dom.find(".js_video_tencent").show(),e.tab.selected($(this).data("index"));
}),e.$dom.on("click",".Js_videomsg",function(){
e.$dom.find(".Js_videomsg.selected").removeClass("selected"),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
$(this).addClass("selected");
}),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),e.$dom.on("mousewheel","#js_videomsg_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll","#js_videomsg_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initTencentVideo:function(){
var e=this;
e.$dom.find(".js_video_loading").hide(),e.$dom.find(".js_video_tencent").show(),
e.$dom.find(".js_video_txurl").on("input propertychange",function(){
var t=$(this).val();
t?(e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),i(t,function(i){
var t="<iframe height="+w+" width="+g+' frameborder=0 src="'+i+'" allowfullscreen></iframe>';
e.$dom.find(".js_video_preview").html(t),e.dialog.popup("resetPosition");
},{
width:g,
height:w
})):e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled");
});
},
initPagebar:function(e,i,t){
var o=this,d=e/i+1;
return i>=t?void o.$dom.find(".js_pagebar").hide():void new m({
container:o.$dom.find(".js_pagebar").show(),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:d,
totalItemsNum:t,
callback:function(t){
var n=t.currentPage,s=o.$dom.find(".js_top.selected").data("id");
n!=d&&s&&(e=i*--n,o.getList(s,e,i));
}
});
},
getList:function(e,i,t){
var o=this,d=e==v?c.appmsg:c;
o.$dom.find(".js_video_content").hide(),o.$dom.find(".js_video_loading").show(),
d.getList(e,i,t,function(d){
if(o.dialog&&e==o.$dom.find(".js_top.selected").data("id")){
var n=d.file_item||d.item,s=o.$dom.find("#js_videomsg_list").find(".inner").empty();
n.length?(n.each(function(e,i){
var t=s.eq(i%2),o=$('<div id="appmsg%s"></div>'.sprintf(e.app_id||e.file_id),t).appendTo(t);
u(o,e);
}),o.$dom.find(".js_video_content").show(),o.dialog.popup("resetPosition")):o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e==_?"暂无素材<br />（素材来源：通过微信用户上传给公众帐号）":"暂无素材"),
o.$dom.find(".js_video_loading").hide(),o.initPagebar(i,t,d.file_cnt[h[e]]||d.file_cnt.video_cnt);
}
},"",f);
}
};
return $.extend(j.prototype,b),j;
});define("common/wx/media/imageDialog.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/pagebar.js","biz_web/utils/upload.js","tpl/media/dialog/image_layout.html.js","tpl/media/dialog/image_list.html.js","tpl/media/dialog/image_group.html.js","page/media/dialog_img_pick.css"],function(e){
"use strict";
var i=e("common/wx/Cgi.js"),t=e("common/wx/Tips.js"),n=(e("common/wx/popup.js"),
e("common/wx/pagebar.js")),o=e("biz_web/utils/upload.js"),a=e("tpl/media/dialog/image_layout.html.js"),r=e("tpl/media/dialog/image_list.html.js"),l=e("tpl/media/dialog/image_group.html.js"),s=(template.render,
template.compile(l)),d=template.compile(r);
e("page/media/dialog_img_pick.css");
var g=function(e){
return new p(e);
},p=function(e){
this.options=e,this.events=[],this.imgArr=[],this.converting=0,this.fromUpload=[],
c.init.call(this);
},c={
init:function(){
var e=this,i=e.options=$.extend(!0,{
tpl:a,
title:"选择图片",
scene:"cdn",
maxSelect:1,
perPage:10,
group:1,
onOK:null,
onCancel:null
},e.options);
i.tpl=template.compile(i.tpl)(i),e.on("ok",i.onOK),e.on("cancel",i.onCancel),e.on("hide",i.onHide),
e.dialog=$(i.tpl.trim()).popup({
title:i.title,
className:"img_dialog_wrp",
width:846,
buttons:[{
text:"确定",
type:"disabled",
click:function(){
var n=this.get().find(".js_btn").eq(0).parent();
return n.hasClass("btn_disabled")?void t.err("请选择图片"):(e.popup=this,$.each(e.imgArr,function(i,t){
t.source=-1!=e.fromUpload.indexOf(t.file_id+"")?"upload":"lib";
}),void("cdn"==i.scene&&e.converting>0?(n.btn(!1),e.on("converted",function(){
0==e.converting&&(e.trigger("ok",e.imgArr||[]),n.btn(!0));
})):e.trigger("ok",e.imgArr||[])));
}
},{
text:"取消",
click:function(){
e.trigger("cancel"),this.hide();
}
}],
onHide:function(){
e.trigger("hide");
}
}),e.dialog.popup("get").find(".js_loading").show(),u.getImagesByGroupId({
group_id:i.group,
count:i.perPage
},function(t){
if(e.dialog){
var n=t.page_info;
n.scene=i.scene,n.group=i.group;
var o=e.dialog.popup("get"),a=s(n);
o.find(".js_loading").hide(),o.find(".js_group").append(a).find(".js_total").text("(%s)".sprintf(n.file_cnt.img_cnt)),
c.renderImageList(o.find(".js_list"),n,e.imgArr),c.initEvent.call(e,t),c.initPageBar.call(e,n,i.group),
e.dialog.popup("resetPosition");
}
}),c.initUpload.call(e,i.group);
},
initEvent:function(){
var e=this,i=e.dialog.popup("get"),n=e.options;
i.on("click",".js_imageitem",function(){
var o,a=$(this),r=a.find("label"),l=i.find(".js_btn_p").eq(0),s=a.data("url"),d=a.data("id"),g=a.data("format");
r.hasClass("selected")?(s||e.converting--,r.removeClass("selected"),o=m.indexOf(e.imgArr,d),
o>=0&&e.imgArr.splice(o,1),i.find(".js_selected").text(e.imgArr.length)):1==n.maxSelect?(s||(e.converting=1),
r.addClass("selected"),a.siblings().find("label").removeClass("selected"),e.imgArr=[{
url:s,
file_id:d,
format:g
}],i.find(".js_selected").text(e.imgArr.length)):n.maxSelect>e.imgArr.length?(s||e.converting++,
r.addClass("selected"),e.imgArr.push({
url:s,
file_id:d,
format:g
}),i.find(".js_selected").text(e.imgArr.length)):t.err("最多可选%s张".sprintf(n.maxSelect)),
e.imgArr.length>0?l.enable().addClass("btn_primary"):l.disable(),"cdn"==n.scene&&r.hasClass("selected")&&!s&&u.getCdnUrlByFileId({
file_id:d,
group_id:i.find(".js_groupitem.selected").data("groupid")
},function(i){
0==i.errcode?(e.converting--,a.data("url",i.url),o=m.indexOf(e.imgArr,d),o>=0&&(e.imgArr[o].url=i.url),
e.trigger("converted")):(t.err("转存失败"),a.click());
});
}),i.on("click",".js_groupitem",function(t,o){
var a=$(this),r=i.find(".js_list"),l=i.find(".js_loading"),s=i.find(".js_pagebar"),d=a.data("groupid");
a.hasClass("selected")||(a.addClass("selected").siblings(".selected").removeClass("selected"),
$("#js_imageupload").data("groupid",d),r.hide(),s.hide(),l.show(),u.getImagesByGroupId({
group_id:d,
count:n.perPage
},function(t){
if(e.dialog&&d==i.find(".js_groupitem.selected").data("groupid")){
t=t.page_info,t.scene=n.scene,l.hide(),s.show(),c.renderImageList(r,t,e.imgArr),
c.initPageBar.call(e,t,d),c.initUpload.call(e);
for(var a=0;o&&"upload"==o.source&&a<o.count;++a)r.children().eq(a).click();
}
}));
});
},
initPageBar:function(e,i){
var t=this,o=t.dialog.popup("get"),a=t.options;
c.pagebar&&c.pagebar.destroy();
var r=0;
return 0==i?r=e.file_cnt.img_cnt:e.file_group_list.file_group.each(function(e){
e.id==i&&(r=e.count);
}),a.perPage>=r?void o.find(".js_pagebar").empty():void(c.pagebar=new n({
container:o.find(".js_pagebar"),
perPage:a.perPage,
initShowPage:1,
totalItemsNum:r,
first:!1,
last:!1,
isSimple:!0,
callback:function(e){
var i=o.find(".js_groupitem.selected").data("groupid"),n=o.find(".js_list"),r=o.find(".js_loading"),l=o.find(".js_pagebar");
n.hide(),l.hide(),r.show(),u.getImagesByGroupId({
group_id:i,
begin:e.perPage*(e.currentPage-1),
count:a.perPage
},function(e){
e=e.page_info,e.scene=a.scene,r.hide(),l.show(),c.renderImageList(n,e,t.imgArr);
});
}
}));
},
initUpload:function(e){
var i=this,n=i.dialog.popup("get"),a=n.find(".js_imageupload"),r="js_imageupload"+Math.random().toString().substr(2),l=n.find(".js_groupitem.selected").data("groupid")||e||1,s=i.options;
a.attr("id",r).off().children().remove(),o.uploadImageLibFile({
container:"#"+r,
multi:!0,
type:2,
doublewrite:!0,
groupid:l,
onComplete:function(e,n,o,a){
0==a.base_resp.ret&&t.suc("上传成功"),i.fromUpload.push(a.content);
},
onAllComplete:function(e,i){
var t,o=n.find(".js_groupitem.selected");
i.filesUploaded>0&&(t=+o.find("span").text(),!s.doselected||s.doselected&&i.filesUploaded<=1*s.completeUploadMinSelectNum?o.removeClass("selected").trigger("click",{
source:"upload",
count:i.filesUploaded
}):o.removeClass("selected").trigger("click",{
source:"upload",
count:0
}),o.find("span").text(t+i.filesUploaded));
},
showError:!0
});
},
renderImageList:function(e,i,t){
i.file_item.each(function(e){
e.img_url=wx.url("/cgi-bin/getimgdata?mode=small&source=file&fileId=%s".sprintf(e.file_id)),
-1!=m.indexOf(t,e.file_id)&&(e.selected=1);
}),e.html(d(i)).show();
}
},u={
getImagesByGroupId:function(e,t){
e=$.extend({
group_id:1,
begin:0,
count:8,
type:2
},e),i.get({
url:wx.url("/cgi-bin/filepage"),
data:e,
mask:!1
},function(e){
0!=e.base_resp.ret?i.show(e):t(e);
});
},
getCdnUrlByFileId:function(e,t){
e.group_id=e.group_id||1,i.post({
url:wx.url("/cgi-bin/uploadimg2cdn?action=duplicate"),
data:e,
mask:!1
},function(e){
t(e);
});
}
},m={
indexOf:function(e,i){
for(var t=0,n=e.length;n>t;++t)if(e[t].file_id==i)return t;
return-1;
}
},f={
on:function(e,i){
if(i){
var t=this.events;
return t[e]=t[e]||[],t[e].push(i),this;
}
},
trigger:function(e){
var i=this,t=arguments,n=i.events[e];
return n?($.each(n,function(e,n){
n.apply(i,Array.prototype.slice.call(t,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
this.dialog.popup("remove"),this.dialog=null;
}
};
return $.extend(p.prototype,f),g;
});define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
"use strict";
function e(t){
var e=$(t);
e.each(function(){
var t=$(this),e=t.prop("checked"),n=t.parent();
e?n.addClass("selected"):n.removeClass("selected");
});
}
function n(t){
var e=$(t);
e.each(function(){
var t=$(this).prop("disabled"),e=$(this).parent();
t?e.addClass("disabled"):e.removeClass("disabled");
});
}
function i(){
return"checkbox"+s++;
}
var a={
container:null,
label:"",
name:"",
type:"checkbox"
},c=t("tpl/biz_web/ui/checkbox.html.js"),r=wx.T,s=1,o=1,p=function(t){
this.options=$.extend(!0,{},a,t),this.options.index=o++,this.$container=$(this.options.container),
this.$dom=$(r(c,this.options)).appendTo(this.$container),this.$input=this.$dom.find("input"),
this.$input.checkbox();
};
return p.prototype={
checked:function(t){
return"undefined"!=typeof t&&(this.$input.prop("checked",t),e(this.$input)),this.$input.prop("checked");
},
disabled:function(t){
return"undefined"!=typeof t&&(this.$input.prop("disabled",t),n(this.$input)),this.$input.prop("disabled");
}
},$.fn.checkbox=function(t){
var a,c,r,s,o=!1;
"boolean"==typeof t?a=t:$.isPlainObject(t)?(a=t.multi,c=t.onChanged):"string"==typeof t?(o=!0,
r=t,s=[].slice.call(arguments,1)):"undefined"==typeof t&&(t={}),"undefined"==typeof a&&(a=this.is("input[type=checkbox]"));
var p=this,d=a?"checkbox":"radio",h={
checked:function(t){
return p.attr("checked",t),p.prop("checked",t),e(p),p;
},
disabled:function(t){
return p.attr("disabled",t),p.prop("disabled",t),n(p),p;
},
value:function(){
var t=p.eq(0);
return t.prop("checked")?t.val():"";
},
values:function(){
var t=[];
return p.each(function(){
$(this).prop("checked")&&t.push($(this).val());
}),t;
},
adjust:function(t){
var n;
return n="string"==typeof t?t.split(","):t,n&&n.length>0&&p.each(function(){
var t=$(this);
n.indexOf(t.val())>=0&&(t.attr("checked",!0),e(t));
}),this;
},
disable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!0),n(t));
}),this;
},
setall:function(t){
p.each(function(){
var e=$(this);
e.attr("disabled",t?!1:!0),n(e);
});
},
enable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!1),n(t));
}),this;
},
label:function(t){
return t&&(p.parent().find(".lbl_content").text(t),p.attr("data-label",t)),p;
}
};
return o&&"function"==typeof h[r]?h[r].apply(h,s):(this.addClass("frm_"+d).each(function(){
var t=$(this),e=t.parent();
if(!e.is("label")){
var n=t.attr("data-label")||"";
e=$('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type:d
})).append("<span class='lbl_content'>{content}</span>".format({
content:n.html(!0)
})),e.insertBefore(t).prepend(t);
}
if(!this.id){
var a=i();
this.id=a;
}
e.attr("for",this.id);
}),e(this),n(this),t&&t.initOnChanged&&"function"==typeof c&&p.parent().find("input[type=checkbox],input[type=radio]").each(function(){
c.call(h,$(this));
}),this.parent().delegate("input[type=checkbox],input[type=radio]","click",function(){
var t=$(this),n=t.prop("checked");
a?(t.attr("checked",n),e(t)):(p.attr("checked",!1),t.attr("checked",!0).prop("checked",!0),
e(p)),"function"==typeof c&&c.call(h,t);
}).addClass("frm_"+d+"_label"),h);
},p;
});define("media/media_cgi.js",["common/wx/Tips.js","common/wx/Cgi.js"],function(e){
"use strict";
var r=e("common/wx/Tips.js"),s=e("common/wx/Cgi.js"),a={
del:function(e,a){
s.post({
mask:!1,
url:wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data:{
AppMsgId:e
},
error:function(){
r.err("删除失败");
}
},function(e){
"0"==e.ret?(r.suc("删除成功"),a&&a(e)):r.err("删除失败");
});
},
del_sv:function(e,a){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
error:function(){
r.err("删除失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(r.suc("删除成功"),a.suc&&a.suc(e)):(r.err("删除失败"),
a.fail&&a.fail(e));
});
},
edit_sv:function(e,a){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e.id,
filename:e.name
},
error:function(){
r.err("编辑失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(r.suc("编辑成功"),a.suc&&a.suc(e)):(r.err("编辑失败"),
a.fail&&a.fail(e));
});
},
save:function(e,a,i,t,n,o){
var c=wx.url(i.AppMsgId?"/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(a):"/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(a));
i.ajax=1,s.post({
url:c,
data:i,
dataType:"html",
error:function(e,s){
"timeout"!=s&&r.err("保存失败"),n&&n(!1,-1);
},
complete:o
},function(s){
if(s=$.parseJSON(s),"0"==s.ret)r.suc("保存成功"),t&&t(s);else{
var a=!1;
switch(s.ret){
case"64506":
r.err("保存失败,链接不合法");
break;

case"64507":
r.err("内容不能包含链接，请调整");
break;

case"64510":
r.err("内容不能包含语音，请调整");
break;

case"64511":
r.err("内容不能包多个语音，请调整");
break;

case"64512":
r.err("文章中语音错误,请使用语音添加按钮重新添加。");
break;

case"64508":
r.err("查看原文链接可能具备安全风险，请检查");
break;

case"-99":
r.err("内容超出字数，请调整");
break;

case"10801":
r.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),a=s.msg;
break;

case"10802":
r.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),a=s.msg;
break;

case"10803":
r.err("敏感链接，请重新添加。"),a=s.msg;
break;

case"10804":
r.err(e?"正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。":"摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),
a=s.msg;
break;

case"10806":
r.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),a=s.msg;
break;

case"-20000":
r.err("登录态超时，请重新登录。");
break;

case"15801":
case"15802":
case"15803":
case"15804":
case"15805":
case"15806":
break;

default:
r.err("保存失败");
}
n&&n(a,s.ret);
}
});
},
preview:function(e,a,i,t,n){
s.post({
url:wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(a)),
data:i,
dataType:"html",
error:function(){
r.err("发送失败，请稍后重试"),n&&n();
}
},function(s){
if(s=$.parseJSON(s),"0"==s.ret)r.suc("发送预览成功，请留意你的手机微信"),t&&t(s);else{
switch(s.ret){
case"64501":
s.word="你输入的帐号不存在，请重新输入";
break;

case"64502":
s.word="你输入的微信号不存在，请重新输入";
break;

case"10700":
case"64503":
s.word="你尚未关注公众号，请先关注";
break;

case"64510":
s.word="内容不能包含语音,请调整";
break;

case"64511":
s.word="内容不能包含多个语音,请调整";
break;

case"64512":
s.word="文章中语音错误,请使用语音添加按钮重新添加。";
break;

case"10703":
s.word="对方关闭了接收消息";
break;

case"10701":
s.word="用户已被加入黑名单，无法向其发送消息";
break;

case"10704":
case"10705":
s.word="该素材已被删除";
break;

case"64504":
s.word="保存图文消息发送错误，请稍后再试";
break;

case"64505":
s.word="发送预览失败，请稍后再试";
break;

case"64507":
s.word="内容不能包含链接，请调整";
break;

case"-99":
s.word="内容超出字数，请调整";
break;

case"62752":
s.word="可能含有具备安全风险的链接，请检查";
break;

case"10801":
s.word="标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",s.antispam=!0;
break;

case"10802":
s.word="作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",s.antispam=!0;
break;

case"10803":
s.word="敏感链接，请重新添加。",s.antispam=!0;
break;

case"10804":
s.word=e?"正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。":"摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",
s.antispam=!0;
break;

case"10806":
s.word="正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",s.antispam=!0;
break;

case"-8":
case"-6":
s.ret="-6",s.word="请输入验证码";
break;

case"15801":
case"15802":
case"15803":
case"15804":
case"15805":
case"15806":
break;

default:
s.word="系统繁忙，请稍后重试";
}
15==a&&r.err(s.word),n&&n(s);
}
});
},
getList:function(e,a,i,t,n,o){
var c="";
c=wx.url(n?"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&query=%s&f=json".sprintf(e,a,i,n):"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,a,i)),
0==o?c=wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,a,i)):1==o&&(c=wx.url("/cgi-bin/video_mgr?type=%s&action=get_video_list&begin=%s&offset=%s&f=json".sprintf(e,a,i))),
s.get({
mask:!1,
url:c,
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?t&&t(e.app_msg_info):r.err("获取列表失败");
});
},
getSingleList:function(e,a,i,t){
s.get({
mask:!1,
url:wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e,a,i)),
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?t&&t(e.app_msg_info):r.err("获取列表失败");
});
}
},i={
save:function(e,a,i){
var t=wx.url("/cgi-bin/operate_vote");
e.ajax=1,s.post({
url:t,
data:e,
error:function(){
r.err("保存失败"),i&&i();
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?(r.suc("保存成功"),a&&a(e)):(r.err("保存失败"),i&&i(e));
});
}
};
return{
rename:function(e,a,i){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e,
fileName:a
},
error:function(){
r.err("重命名失败");
}
},function(e){
if(!e||!e.base_resp)return void r.err("重命名失败");
var s=e.base_resp.ret;
if("0"==s)r.suc("重命名成功"),i&&i(e);else switch(s){
case"-2":
r.err("素材名不能包含空格");
break;

default:
r.err("重命名失败");
}
});
},
del:function(e,a){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
error:function(){
r.err("删除失败");
}
},function(e){
return e&&e.base_resp?void("0"==e.base_resp.ret?(r.suc("删除成功"),a&&a(e)):r.err("删除失败")):void r.err("删除失败");
});
},
getList:function(e,a,i,t){
s.get({
mask:!1,
url:wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e,a,i)),
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?t&&t(e.page_info):r.err("获取列表失败");
});
},
appmsg:a,
vote:i
};
});define("common/wx/richEditor/emotion.js", [ "tpl/richEditor/emotion.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = {
url: wx.resPath + "/mpres/htmledition/images/icon/emotion/",
data: {
"0": "微笑",
"1": "撇嘴",
"2": "色",
"3": "发呆",
"4": "得意",
"5": "流泪",
"6": "害羞",
"7": "闭嘴",
"8": "睡",
"9": "大哭",
"10": "尴尬",
"11": "发怒",
"12": "调皮",
"13": "呲牙",
"14": "惊讶",
"15": "难过",
"16": "酷",
"17": "冷汗",
"18": "抓狂",
"19": "吐",
"20": "偷笑",
"21": "可爱",
"22": "白眼",
"23": "傲慢",
"24": "饥饿",
"25": "困",
"26": "惊恐",
"27": "流汗",
"28": "憨笑",
"29": "大兵",
"30": "奋斗",
"31": "咒骂",
"32": "疑问",
"33": "嘘",
"34": "晕",
"35": "折磨",
"36": "衰",
"37": "骷髅",
"38": "敲打",
"39": "再见",
"40": "擦汗",
"41": "抠鼻",
"42": "鼓掌",
"43": "糗大了",
"44": "坏笑",
"45": "左哼哼",
"46": "右哼哼",
"47": "哈欠",
"48": "鄙视",
"49": "委屈",
"50": "快哭了",
"51": "阴险",
"52": "亲亲",
"53": "吓",
"54": "可怜",
"55": "菜刀",
"56": "西瓜",
"57": "啤酒",
"58": "篮球",
"59": "乒乓",
"60": "咖啡",
"61": "饭",
"62": "猪头",
"63": "玫瑰",
"64": "凋谢",
"65": "示爱",
"66": "爱心",
"67": "心碎",
"68": "蛋糕",
"69": "闪电",
"70": "炸弹",
"71": "刀",
"72": "足球",
"73": "瓢虫",
"74": "便便",
"75": "月亮",
"76": "太阳",
"77": "礼物",
"78": "拥抱",
"79": "强",
"80": "弱",
"81": "握手",
"82": "胜利",
"83": "抱拳",
"84": "勾引",
"85": "拳头",
"86": "差劲",
"87": "爱你",
"88": "NO",
"89": "OK",
"90": "爱情",
"91": "飞吻",
"92": "跳跳",
"93": "发抖",
"94": "怄火",
"95": "转圈",
"96": "磕头",
"97": "回头",
"98": "跳绳",
"99": "挥手",
"100": "激动",
"101": "街舞",
"102": "献吻",
"103": "左太极",
"104": "右太极"
},
ext: ".gif",
replaceEmoji: function(e) {
var t, n, r = s.url, i = s.ext, o = s.data;
for (t in o) n = new RegExp("/" + o[t], "g"), e = e.replace(n, '<img src="{src}" alt="mo-{alt}"/>'.format({
src: r + t + i,
alt: o[t]
}));
return e;
}
}, o = e("tpl/richEditor/emotion.html.js"), u = e("common/qq/Class.js"), a = 24, f = 24, l = 15, c = 7, h = u.declare({
init: function(e) {
this.selector$ = e;
var t = [], n = s.url + "{k}" + s.ext, r = a, u = f, h = l, p = c;
for (var d = 0; d < p; ++d) for (var v = 0; v < h; ++v) {
var m = d * h + v;
t.push({
gifurl: n.format({
k: m
}),
title: s.data[m + ""],
bp: "background-position:" + -m * r + "px 0;"
});
}
this.selector$.html(i(o, {
edata: t
})), this._previewArea$ = this.selector$.find(".js_emotionPreviewArea"), this._initEvent();
},
getEmotionText: function(e) {
return e.replace(/<img.*?alt=["]{0,1}mo-([^"\s]*).*?>/ig, "/$1");
},
getEmotionHTML: function(e) {
var t = e.title;
return '<img src="{src}" alt="{alt}"/>'.format({
src: e.gifurl,
alt: t ? "mo-" + t : ""
});
},
_getData: function(e) {
return {
title: e.data("title"),
gifurl: e.data("gifurl")
};
},
_initEvent: function() {
var e = this;
e.selector$.click(function(t) {
var n = e._getData($(t.target));
!n.gifurl || e.clickCB && e.clickCB(n);
}).mouseover(function(t) {
var n = e._getData($(t.target));
!n.gifurl || e._previewArea$.html(e.getEmotionHTML({
title: "",
gifurl: n.gifurl
})), e.mouseoverCB && e.mouseoverCB();
}).mouseleave(function(t) {
e._previewArea$.html(""), e.mouseleaveCB && e.mouseleaveCB();
});
},
click: function(e) {
this.clickCB = e;
},
mouseleave: function(e) {
return this.mouseleaveCB = e, this;
},
mouseover: function(e) {
return this.mouseoverCB = e, this;
},
show: function() {
this.selector$.fadeIn();
},
hide: function() {
this.selector$.fadeOut();
}
});
h.emoji = s.replaceEmoji, n.exports = h;
} catch (p) {
wx.jslog({
src: "common/wx/richEditor/emotion.js"
}, p);
}
});define("common/wx/richEditor/wysiwyg.js",["common/wx/richEditor/editorRange.js","common/qq/Class.js"],function(e,t,n){
"use strict";
var i=/msie/.test(navigator.userAgent.toLowerCase()),a="Wysiwyg",r=e("common/wx/richEditor/editorRange.js"),s=e("common/qq/Class.js"),o=s.declare({
init:function(e,t){
var n=e,i=$('<div class="edit_area"></div>');
this._dom$=n,this._val="",this._lastRange=null,this._editArea$=i,$.extend(this,t),
this._initEditArea(),this._initEvent();
},
_initEvent:function(){
var e=this,t=function(){
e.__tid&&clearTimeout(e.__tid),e.__tid=setTimeout(function(){
e._filterNode();
},10);
};
e._editArea$.bind({
keydown:function(t){
e._keydown(t);
},
keyup:function(t){
e._keyup(t);
},
mouseup:function(t){
e._mouseup(t);
},
drop:t,
paste:t
});
},
_keydown:function(e){
var t=this,n=wx.isHotkey;
if(n(e,"backspace")){
var i=r.getSelection();
i.type&&"control"===i.type.toLowerCase()&&(e.preventDefault(),i.clear());
}
(n(e,"ctrlenter")||n(e,"altenter")||n(e,"enter"))&&(e.preventDefault(),t.insertHTML("<br/>")._saveRang()),
t.keydown&&t.keydown(e);
},
_keyup:function(e){
var t=this;
t._saveRang(),t.keyup&&t.keyup(e),t.save();
},
_mouseup:function(e){
var t=this;
t._saveRang(),t.mouseup&&t.mouseup(e);
},
focus:function(){
this._editArea$.focus(),this._resotreRange();
},
_setCursorToEnd:function(e){
if(i&&e){
var t=r.getSelection();
t.extend&&(t.extend(e,e.length),t.collapseToEnd&&t.collapseToEnd());
}
},
insertHTML:function(e){
var t=this;
t.focus();
var n=r.getRange();
if(!n)return t;
if(n.createContextualFragment){
e+='<img style="width:1px;height:1px;">';
var a=n.createContextualFragment(e),s=a.lastChild;
n.deleteContents(),n.insertNode(a),n.setEndAfter(s),n.setStartAfter(s);
var o=r.getSelection();
o.removeAllRanges(),o.addRange(n),document.execCommand("Delete",!1,null);
}else i&&/>$/.test(e),n.pasteHTML&&n.pasteHTML(e),n.collapse&&n.collapse(!1),n.select();
return t._saveRang().save(),t;
},
save:function(e){
var t=this,e=e||this.textFilter,n=t._editArea$.html();
return t.val="function"==typeof e?e(n):n,t.change&&t.change(),t;
},
_filterNode:function(e){
for(var t,n=this,e=e||this.nodeFilter,i=n._editArea$.get(0),a=i.childNodes,r=a.length-1;r>=0;r--){
var s=a[r];
switch(s.nodeType){
case 1:
if("BR"!==s.nodeName.toUpperCase()){
var o,d=!1;
if((o=e&&e(s))||(o=s.textContent||s.innerText||"",d=!0),o){
var c=d?document.createTextNode(o):o;
!t&&(t=c),i.replaceChild(c,s);
}else i.removeChild(s);
}
break;

case 3:
break;

default:
i.removeChild(s);
}
}
return n._setCursorToEnd(t),n._saveRang().save();
},
getHTML:function(){
return this._editArea$.html();
},
getText:function(){
return this.getHTML().text();
},
getContent:function(){
return this.val;
},
setContent:function(e,t){
this.clear(),this._editArea$.html(e),this.val=t||e,this.change&&this.change();
},
clear:function(){
this.val="",this._editArea$.html("");
},
_initEditArea:function(){
var e=this;
e._editArea$.attr("class",e._dom$.attr("class")).attr("contentEditable",!0).css({
"overflow-y":"auto",
"overflow-x":"hidden"
}),e._dom$.after(e._editArea$).hide().data(a,e),e.init&&e.init();
},
_saveRang:function(){
return this._lastRange=r.getRange(),this;
},
_resotreRange:function(){
var e=this._lastRange;
if(e){
var t=r.getSelection();
if(t.addRange)t.removeAllRanges(),t.addRange(e);else{
var n=r.getRange();
n.setEndPoint&&(n.setEndPoint("EndToEnd",e),n.setEndPoint("StartToStart",e)),n.select();
}
}
return this;
}
}),d=function(e,t){
return e.data(a)||new o(e,t);
};
n.exports=d;
});define("tpl/richEditor/emotionEditor.html.js",[],function(){
return'<div class="emotion_editor">\n    <div class="edit_area js_editorArea"></div>\n    <div class="editor_toolbar">\n        {if !hideEmotion}\n        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>\n        {/if}\n        {if !hideUpload}\n        <div class="upload_box">\n            <div class="upload_area">\n                <a id="emotionEditor_{gid}_" href="javascript:void(0);" class="js_upload upload_access">\n                    <i class="icon18_common upload_gray"></i>\n                    上传图片                </a>\n            </div>\n        </div>\n        {/if}\n        <p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>\n        <p class="editor_tip js_editorTip"></p>\n        <div class="emotion_wrp js_emotionArea">\n			\n		</div>\n    </div>\n</div>\n\n';
});define("tpl/tab.html.js",[],function(){
return'<div class="msg_tab">\n	<ul class="tab_navs">\n	    {each tabs as tab}\n        <li class="tab_nav {tab.className}" data-type="{tab.type}" data-tab=".{tab.selector}" data-tooltip="{tab.text}">\n		    <a href="javascript:void(0);" onclick="return false;">&nbsp;<i class="icon_msg_sender"></i><span class="msg_tab_title">{tab.text}</span></a>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="tab_panel">\n	    {each tabs as tab i}\n	    <div class="tab_content">\n	    	<div class="{tab.selector} inner {tab.innerClassName}">\n	    		<!--type 10图文 2图片  3语音 15视频 11商品消息-->\n	    		{if tab.type==10}\n			    <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"  href="javascript:;" data-type="10" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n			        <div class="media_cover" >\n			            <span class="create_access">\n                            <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&isNew=1&lang=zh_CN&token={token}">\n			                    <i class="icon36_common add_gray"></i>\n			                    <strong>新建图文消息</strong>\n			                </a>\n                            <!--\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=0&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create"></i><strong>单图文消息</strong></a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create multi"></i><strong>多图文消息</strong></a>\n                            -->\n			            </span>\n			        </div>\n			    </div>	    		\n	    		{else if tab.type==2}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}" data-type="{tab.type}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"   href="javascript:;" data-type="{tab.type}"   data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access" >\n			                <a class="add_gray_wrp" id="msgSendImgUploadBt" data-type="2" href="javascript:;">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>上传图片</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==3}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}" data-type="{tab.type}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;"  data-type="{tab.type}" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access" >\n			                <a class="add_gray_wrp " id="msgSendAudioUploadBt" href="javascript:;">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>新建语音</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==15}\n                <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt" href="javascript:;"  data-type="15" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a target="_blank" class="add_gray_wrp" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>新建视频</strong>\n                            </a>\n			            </span>\n                    </div>\n                </div>\n	    		{else if tab.type==11}\n			    <div class="tab_cont_cover jsMsgSendTab" data-index="{i}">\n                    <div class="media_cover">\n			            <span class="create_access">\n			                <a class="add_gray_wrp jsMsgSenderPopBt"  href="javascript:;" data-type="11" data-index="{i}">\n                                <i class="icon36_common add_gray"></i>\n                                <strong>从素材库中选择</strong>\n                            </a>\n			            </span>\n                    </div>\n			        <div class="appmsg_cover" >\n			            <span class="create_access">\n			                <a class="add_gray_wrp" href="javascript:;">\n			                    <i class="icon36_common add_gray"></i>\n			                    <strong>新建商品消息</strong>\n			                </a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=0&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create"></i><strong>单商品消息</strong></a>\n			                <a target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=1&isNew=1&lang=zh_CN&token={token}"><i class="icon_shopmsg_create multi"></i><strong>多商品消息</strong></a>\n			            </span>\n			        </div>\n			    </div>		    		\n	    		{/if}\n	    	</div>\n	    </div>\n	    {/each}\n	</div>\n</div>\n';
});define("tpl/popup.html.js",[],function(){
return'<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<!--#0001#-->\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n			<!--%0001%-->\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});define("common/wx/widgetBridge.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict", $.widgetBridge || ($.widgetBridge = function(e, t) {
var n = e, r = n.split("."), e = r.length > 1 ? r[1] : r[0];
$.fn[e] = function(r) {
var i = typeof r == "string", s = [].slice.call(arguments, 1), o = this;
r = r || {};
if (i) {
var u;
return r.indexOf("_") !== 0 && this.each(function() {
var t = $.data(this, n);
if (!t) return $.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + r + "'");
if (r === "instance") return u = t, !1;
if (r === "option") return u = t.options, !1;
u || (u = (t[r] || jQuery.noop).apply(t, s)), r === "destroy" && (t.elements = null);
}), u;
}
var a = this;
return this.each(function() {
var e = this, i = $.data(this, n);
if (!i) {
i = $.extend(!0, {}, t), i.destroy || (i.destroy = function() {
$.removeData(e, n);
}), i.options = $.extend(!0, i.options || {}, r), i.element = $(this), i.elements = a, i._create && (o = i._create.call(i, r));
var s = o && o.length && o.get(0) || this;
$.data(s, n, i);
}
}), o;
};
});
} catch (i) {
wx.jslog({
src: "common/wx/widgetBridge.js"
}, i);
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
});define("homepage/plugins/plugin3.js",["page/homepage/plugins/plugin3.css","tpl/homepage/plugins/plugin3.html.js","tpl/homepage/plugins/plugin3_edit.html.js","homepage/plugins/base.js","common/wx/wxt.js","homepage/importAppmsgList.js","common/wx/Tips.js"],function(i){
"use strict";
i("page/homepage/plugins/plugin3.css");
var t=i("tpl/homepage/plugins/plugin3.html.js"),p=i("tpl/homepage/plugins/plugin3_edit.html.js"),e=i("homepage/plugins/base.js"),n=i("common/wx/wxt.js"),s=e.base,o=e.inherit,l=i("homepage/importAppmsgList.js"),r=i("common/wx/Tips.js"),g={
plugin3:{
appmsg_list:[{
title:"封面示例",
cover:"http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
aid:"0",
link:"javascript:void(0);",
digest:"摘要示例"
},{
title:"封面示例",
cover:"http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6vDmpWKn1M8Sk9tNGOiaGPPmxxPoXR7GM16AFk2lsfiaL2iapIm0RFicCvA/300",
aid:"0",
link:"javascript:void(0);",
digest:"摘要示例"
}]
}
},a=function(i){
var t=this;
t.opt=i,s.apply(this,arguments),this._initEditArea();
};
return o(a,s),a.prototype.tpl=t,a.prototype.edit_tpl=p,a.prototype.default_json=g,
a.prototype._initEditArea=function(){
var i=this.opt,t=this,p=i.idx,e=$("#js_plugin_edit_area_"+p),n=(e.find(".js_appmsg_list"),
[]);
t.renderjson.plugin3&&t.renderjson.plugin3.appmsg_list&&(n=t.renderjson.plugin3.appmsg_list),
t.isSorting=!1,t._importAppmsgList=new l({
container:e.find(".js_import_appmsglist"),
maxNum:30,
title:"内容列表",
list:n,
callback:function(i){
var p=$.extend(!0,{},t.default_json);
i&&i.length>0?(p={
plugin3:{
appmsg_list:i
}
},t.renderjson=p):t.renderjson={
plugin3:{
appmsg_list:[]
}
},t._renderTpl(p);
},
startSort:function(){
t.isSorting=!0;
},
endSort:function(){
t.isSorting=!1;
}
});
},a.prototype._getSelectList=function(){
var i=!!this.renderjson.plugin3&&this.renderjson.plugin3.appmsg_list;
if(i&&i.length>0){
for(var t=[],p=0,e=i.length;e>p;++p)t.push(i[p].aid);
return t;
}
return[];
},a.prototype.getRenderJson=function(i){
return i&&i.plugin3&&i.plugin3.appmsg_list&&i.plugin3.appmsg_list.length>0?i:$.extend(!0,{},this.default_json);
},a.prototype.getEditData=function(){
if(this.isSorting)return r.err("排序完成后才能发布"),!1;
var i=this._getSelectList();
return i.length>0?{
aid_list:i
}:(r.err("请至少选择一篇文章"),!1);
},a.getRenderHTML=function(i){
var p="plugin",e={};
e[p]=i;
var s=t.replace(/<name>/gi,p);
return n.compile(s)(e);
},a;
});define("homepage/plugins/plugin2.js",["page/homepage/plugins/plugin2.css","tpl/homepage/plugins/plugin2.html.js","tpl/homepage/plugins/plugin2_edit.html.js","homepage/plugins/base.js","common/wx/wxt.js","common/wx/Tips.js","homepage/cateList.js"],function(t){
"use strict";
t("page/homepage/plugins/plugin2.css");
var e=t("tpl/homepage/plugins/plugin2.html.js"),n=t("tpl/homepage/plugins/plugin2_edit.html.js"),i=t("homepage/plugins/base.js"),s=t("common/wx/wxt.js"),a=i.base,r=i.inherit,o=t("common/wx/Tips.js"),p=t("homepage/cateList.js"),l={
plugin2:{
cate_list:[]
}
},c=function(t){
var e=this;
e.opt=t,a.apply(this,arguments),this._initEditArea();
};
return r(c,a),c.prototype.tpl=e,c.prototype.edit_tpl=n,c.prototype.default_json=l,
c.prototype._createCateList=function(t,e){
var n=this.opt,i=this,s=n.idx,a=$("#js_plugin_edit_area_"+s),r=n.container,o=a.find(".js_tab_nav");
e=e||{},i.json[t]=e;
var l=new p({
container:a.find(".js_catelist_area"),
idx:t,
tab_container:o,
data:e,
setOuterJson:function(t){
i.json[this.idx]=t;
},
canRemove:function(){
var t=i._getRenderJson();
return t.plugin2.cate_list.length>1;
},
renderCallback:function(t){
var e=this.idx;
i.json[e]=t,i.selectTab=e,i._renderTpl(i._getRenderJson());
},
renderCnameCallback:function(t){
var e=this.idx;
i.json[e].cname=t;
var n=i._getRealShowIdx(e);
r.find(".js_cname_item").eq(n).text(t);
},
afterShow:function(){
var t=i._getRealShowIdx(this.idx);
r.find(".js_cname_item").eq(t).click(),r.find(".js_article_list").hide().eq(t).show();
},
afterRemove:function(){
i.json[this.idx]=!1,i.selectTab=0,i._renderTpl(i._getRenderJson()),o.find(".js_tab_nav_item").eq(0).click();
}
});
return l;
},c.prototype._initEditArea=function(){
{
var t=this.opt,e=this,n=t.idx,i=$("#js_plugin_edit_area_"+n),s=t.container;
i.find(".js_tab_nav");
}
this.json=[],this.selectTab=0,this.cateList=[];
var a=[];
e.renderjson.plugin2&&e.renderjson.plugin2.cate_list&&(a=e.renderjson.plugin2.cate_list);
var r=a.length;
r=r||2;
for(var p=0;r>p;++p){
var l=a[p];
this.cateList.push(this._createCateList(p,l));
}
this._renderTpl(this._getRenderJson()),s.on("click",".js_cname_item",function(){
s.find(".js_cname_item").removeClass("active"),$(this).addClass("active");
}),i.on("click",".js_add_nav",function(){
if(e.getCateLen()>=5)return o.err("最多只能添加5个分类"),!1;
var t=e.cateList.length,n={
cname:"",
appmsg_list:[]
},i=e._createCateList(t,n);
e.cateList.push(i),i.initShow();
}),r>0&&this.cateList[0].show();
},c.prototype._getRealCateIdx=function(t){
for(var e=this.json,n=0,i=e.length;i>n;++n)if(e[n]){
if(0>=t)return n;
t--;
}
return-1;
},c.prototype._getRealShowIdx=function(t){
for(var e=this.json,n=0,i=0;t>i;++i)e[i]&&n++;
return n;
},c.prototype._getRenderJson=function(){
for(var t=this.json,e=[],n=0,i=t.length;i>n;++n){
var s=t[n];
s&&e.push(s);
}
return{
plugin2:{
cate_list:e
}
};
},c.prototype._afterRenderTpl=function(){
var t=this.opt,e=t.container,n=this.selectTab||0,i=e.find(".js_cname_item"),s=i.length;
if(s>0&&(i.css({
width:100/s+"%"
}).removeClass("active").eq(n).addClass("active"),this.cateList)){
var a=this._getRealCateIdx(n);
a>=0&&a<this.cateList.length&&this.cateList[a].show();
}
},c.prototype.getRenderJson=function(t){
return t&&t.plugin2&&t.plugin2.cate_list&&t.plugin2.cate_list.length>0?t:$.extend(!0,{},this.default_json);
},c.prototype.getCateLen=function(){
for(var t=this.cateList,e=this.json,n=0,i=0,s=t.length;s>i;++i)e[i]&&t[i]&&n++;
return n;
},c.prototype.getEditData=function(){
for(var t=this.cateList,e=this.json,n=[],i=0,s=t.length;s>i;++i)if(e[i]&&t[i]){
var a=t[i],r=a.getEditData();
if(0==r)return a.show(),!1;
n.push(r);
}
return{
cate_list:n
};
},c.getRenderHTML=function(t){
var n="plugin",i={};
i[n]=t;
var a=e.replace(/<name>/gi,n);
return s.compile(a)(i);
},c;
});