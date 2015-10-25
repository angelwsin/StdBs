define("common/wx/media/video.js",["widget/media/richvideo.css","widget/media.css","biz_web/lib/video.js","common/wx/Cgi.js","common/wx/time.js","common/qq/Class.js","biz_web/lib/swfobject.js","tpl/media/video.html.js","tpl/media/simple_videomsg.html.js","tpl/media/wxvideo.html.js","tpl/media/videomsg.html.js"],function(e){
"use strict";
e("widget/media/richvideo.css"),e("widget/media.css");
var i,t=e("biz_web/lib/video.js"),o=e("common/wx/Cgi.js"),d=e("common/wx/time.js"),s=e("common/qq/Class.js"),n=e("biz_web/lib/swfobject.js"),a=e("tpl/media/video.html.js"),r=wx.T,l=wx.data.t,m=document,c=!!n.ua.pv[0],f=m.createElement("video"),u=navigator.userAgent.toLowerCase(),v=/msie/.test(u),p=/firefox/.test(u);
t.options.flash.swf=wx.path.video;
var h={
id:"",
source:"",
type:"",
file_id:""
},w=5e3,g=function(e){
if(e.video_url){
{
var i="tmp"+(1e5*Math.random()|0);
$('<video id="%s"></video>'.sprintf(i)).appendTo("body");
}
t("#"+i).ready(function(){
$("#"+i).hide();
var t=this;
this.on("error",function(){
t.dispose(),e.dom.find(".loading_tips").show(),e.video_url="",setTimeout(function(){
g(e);
},w);
}),this.on("loadedmetadata",function(){
t.dispose(),$(e.selector).children().remove(),e.for_transfer=!1,e.digest=e.digest?e.digest.html(!1):"",
new _(e);
});
var o=e.video_url;
t.src(f.canPlayType?o:[{
type:"video/x-flv",
src:o+"&trans=1"
}]),t.play();
});
}else o.get({
url:wx.url("/cgi-bin/appmsg?action=get_video_url&videoid=%s".sprintf(e.video_id)),
error:function(){
setTimeout(function(){
g(e);
},w);
}
},function(i){
e.video_url=i.video_url||"",e.video_download_url=i.video_download_url||"",setTimeout(function(){
g(e);
},w);
});
},_=s.declare({
init:function(t){
var o=this;
$(t.selector).data("opt",t),t=$.extend(!0,{},h,t),o.id=t.id,o.source=t.source,o.file_id=t.file_id,
o.type=t.type,o.video_url=t.video_url,o.tpl=t.tpl,o.ff_must_flash=t.ff_must_flash,
t.src=o.getVideoURL(),t.token=l||wx.data.t,t.time=t.create_time?d.timeFormat(t.create_time):"",
t.digest=t.digest?t.digest.replace(/<br.*>/g,"\n").html():"",t.for_network="string"==typeof t.video_url?!t.video_url:!t.content,
i=e(t.sent?"tpl/media/simple_videomsg.html.js":21==+t.type||9==+t.type||11==+t.type?"tpl/media/wxvideo.html.js":"tpl/media/videomsg.html.js");
var s=$("videomsg"==t.tpl?r(i,t):r(a,t));
o.dom=t.dom=$(t.selector).append(s),"videomsg"==t.tpl&&t.for_transfer&&g(t,o.dom),
o.dom.find(".video_desc").length&&o.dom.find(".video_desc").html(o.dom.find(".video_desc").attr("data-digest").replace(/\n/g,"<br>")),
o.dom.find(".wxVideoScreenshot").on("click",function(){
o.dom.find(".mediaContent").css({
height:"auto"
}),o.play(t.play);
}),o.dom.find(".wxNetworkVideo").on("click",function(){
window.open($(this).attr("data-contenturl"));
}),o.dom.find(".video_switch").click(function(){
o.dom.find(".mediaContent").css({
height:"104px"
}),o.pause(t.pause);
});
},
getVideoURL:function(){
var e=this.source,i=this.id,t=(this.msg_id||"",this.file_id);
return e&&(e="&source="+e),this.video_url||"/cgi-bin/getvideodata?msgid={msgid}&fileid={fileid}&token={token}{source}".format({
msgid:i,
fileid:t,
source:e,
token:wx.data.t
});
},
canPlayType:function(){
this.type;
return!f.canPlayType&&!c;
},
play:function(e){
var i=this;
if(i.canPlayType())return void alert("您当前浏览器无法播放视频，请安装Flash插件/更换Chrome浏览器");
var o=this.id,d=this.player;
if(d)return $("#wxVideoBox"+o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show(),
d.play(),e&&e(this);
var s=i.getVideoURL();
$("#wxVideoBox"+o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show();
var n="videomsg"==i.tpl?{
width:"100%",
height:"100%"
}:{};
t("#wxVideo"+o,n).ready(function(){
d=this;
var t=0;
return d.on("fullscreenchange",function(){
t?($("#wxVideoPlayer"+o).css({
overflow:"hidden",
zoom:"1"
}),$("#wxVideoBox"+o).css({
"z-index":"0"
})):($("#wxVideoPlayer"+o).css({
overflow:"visible",
zoom:"normal"
}),$("#wxVideoBox"+o).css({
"z-index":"1"
})),t=~t;
}),d.on("ended",function(){
this.currentTime(0);
}),d.src(v||!f.canPlayType||i.ff_must_flash&&p?[{
type:"video/x-flv",
src:s+"&trans=1"
}]:s),d.play(),i.player=d,e&&e(this);
});
},
pause:function(e){
var i=this.player;
i&&i.pause(),$("#wxVideoBox"+this.id).removeClass("wxVideoPlaying").find(".wxVideoPlayContent").hide(),
e&&e(this);
}
});
return _;
});define("common/wx/media/img.js", [ "widget/media.css", "tpl/media/img.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/media.css"), o = e("tpl/media/img.html.js"), u = e("common/qq/Class.js"), a = u.declare({
init: function(e) {
if (!e || !e.container) return;
var t = e;
$(e.container).html(o.format({
token: wx.data.t,
id: e.file_id,
msgid: e.msgid || "",
source: e.source,
ow: ~e.fakeid
})).data("opt", e), this.data = t;
},
getData: function() {
return this.data;
}
});
return a;
} catch (f) {
wx.jslog({
src: "common/wx/media/img.js"
}, f);
}
});define("common/wx/media/audio.js",["biz_web/lib/soundmanager2.js","tpl/media/audio.html.js","tpl/media/qqmusicaudio.html.js","widget/media.css","common/qq/Class.js","biz_common/moment.js"],function(i,s,t){
"use strict";
var e=wx.T,o=i("biz_web/lib/soundmanager2.js"),n=i("tpl/media/audio.html.js"),d=i("tpl/media/qqmusicaudio.html.js"),l=(i("widget/media.css"),
i("common/qq/Class.js")),u=i("biz_common/moment.js"),a=null,m=null,h="wxAudioPlaying",c=function(){
m=o,m.setup({
url:"/mpres/zh_CN/htmledition/plprecorder/biz_web/",
preferFlash:!1,
debugMode:!1
});
};
$(window).load(function(){
c();
});
var r={
id:"",
source:"",
file_id:""
},f=l.declare({
init:function(i){
var s=this;
$.extend(!0,s,r,i),this.soundId=this.id||this.file_id,this.title=this.title||this.name,
this.play_length="undefined"==typeof this.play_length||0==this.play_length?"未知时长":u.unix(this.play_length/1e3).format("mm:ss");
var t;
t=$(this.qqmusictpl?e(d,s):e(n,s)),s.dom=$(i.selector).append(t).data("opt",i),t.click(function(){
s.toggle();
});
},
getAudioURL:function(){
if(this.qqmusicurl)return this.qqmusicurl;
var i=this.source,s=this.id,t=this.file_id;
return i&&(i="&source="+i),wx.url(this.voice_encode_fileid?"https://res.wx.qq.com/voice/getvoice?mediaid="+this.voice_encode_fileid:"/cgi-bin/getvoicedata?msgid={id}&fileid={fileid}{source}".format({
id:s,
fileid:t,
source:i
}));
},
isPlaying:function(){
return null!=a&&this==a;
},
toggle:function(){
this.isPlaying()?this.stop():(a&&a.stop(),this.play());
},
play:function(i){
var s=this;
this.isPlaying()||(this.dom.addClass(h),!!a&&a.dom.removeClass(h),a=this,this.sound||(!m&&c(),
this.sound=m.createSound({
id:s.soundId,
url:s.getAudioURL(),
onfinish:function(){
a&&(a.dom.removeClass(h),a=null);
},
onload:function(i){
i||m.unload(s.soundId),!i&&a&&(a.dom.removeClass(h),a.sound=null,a=null);
}
})),m.play(this.soundId),i&&i(this));
},
stop:function(i){
this.isPlaying()&&(a=null,this.dom.removeClass(h),m.stop(this.soundId),i&&i(this));
}
});
t.exports=f;
});define("common/wx/media/factory.js",["common/wx/media/img.js","common/wx/media/audio.js","common/wx/media/video.js","common/wx/media/appmsg.js","tpl/media/videocard.html.js","biz_common/utils/norefererimg.js","common/qq/emoji.js","tpl/media/cardmsg.html.js"],function(e,i,m){
"use strict";
var o=e("common/wx/media/img.js"),t=e("common/wx/media/audio.js"),n=e("common/wx/media/video.js"),r=e("common/wx/media/appmsg.js"),s=e("tpl/media/videocard.html.js"),c=e("biz_common/utils/norefererimg.js");
e("common/qq/emoji.js");
var d=e("tpl/media/cardmsg.html.js"),l={
1:function(e,i){
return $(e).html(i.content.emoji());
},
2:function(e,i){
return i.container=$(e),new o(i);
},
3:function(e,i){
return i.selector=$(e),i.source="file",new t(i);
},
4:function(e,i){
return i.selector=$(e),i.id=i.file_id,i.source="file",new n(i);
},
10:function(e,i){
return i.container=$(e),i.showMask=!1,new r(i);
},
11:function(e,i){
return i.container=$(e),i.showMask=!1,new r(i);
},
15:function(e,i){
return i.multi_item&&i.multi_item[0]&&(i.title=i.multi_item[0].title,i.digest=i.multi_item[0].digest),
i.selector=$(e),i.id=1e6*Math.random()|0,i.tpl="videomsg",i.for_selection=!1,i.for_operation=!1,
{
dom:$(e).html(wx.T(s,i)),
file_id:i.file_id,
id:i.id,
source:"file",
tpl:"videomsg",
type:"",
video_url:""
};
},
16:function(e,i){
$(e).html(template.compile(d)(i));
var m=$(e).find(".js_logourl");
m.length&&c({
img:m[0]
});
}
};
l[21]=l[15];
var a={
render:function(e,i){
l[i.type]&&$(e).length>0&&l[i.type]($(e).html(""),i);
},
itemRender:l
};
m.exports=a;
});define("media/media_dialog.js",["widget/media/media_dialog.css","widget/media/richvideo.css","common/wx/popup.js","common/wx/Tips.js","media/media_cgi.js","biz_web/utils/upload.js","biz_web/ui/checkbox.js","common/wx/pagebar.js","common/wx/media/imageDialog.js","common/wx/media/videoDialog.js","common/wx/media/audio.js","common/wx/media/img.js","common/wx/media/video.js","common/wx/media/appmsg.js","cardticket/send_card.js","common/wx/time.js","tpl/media/dialog/file_layout.html.js","tpl/media/dialog/appmsg_layout.html.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/dialog/file.html.js","media/plugin/audio.js"],function(e){
"use strict";
function i(e,i,t,o,n){
{
var a=e/i+1;
new h({
container:$(".pageNavigator",p.popup("get")),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:a,
totalItemsNum:t,
callback:function(e){
var t=e.currentPage;
t!=a&&(t--,n.begin=i*t,K.key&&(n.key=K.key),o(n));
}
});
}
}
function t(e,i,t,n,a,s){
p&&p.popup("remove"),15==t&&(e="videomsg");
var l=B++;
if(p=$(r(F[e],{
tpl:i,
upload_id:l,
type:t,
token:wx.data.t
}).trim()).popup({
title:"选择素材",
className:g,
width:960,
onOK:function(){
return a&&!a()?!0:(this.remove(),p=null,void(document.body.style.overflow=document.documentElement.style.overflow="auto"));
},
onCancel:function(){
this.remove(),p=null,document.body.style.overflow=document.documentElement.style.overflow="auto";
}
}),document.body.style.overflow=document.documentElement.style.overflow="hidden",
u=p.popup("get"),y({
container:"#js_media_dialog_upload"+l,
type:t,
onAllComplete:function(){
f.suc("上传成功"),s.begin=0,d(s);
}
}),n){
if("file"==e&&($(".js_media_list",u).html(r(T,{
list:n
})),$(".frm_radio[type=radio]",u).checkbox(!1),$(".media_content",u).each(function(){
var e=$(this),i=e.data("id"),t=e.data("type"),o=E[i];
o&&t&&A[t]&&A[t](e,o);
})),"appmsg"==e){
for(var m=n.length,c=$(".js_appmsg_list .inner",u),v=0;m>v;++v){
var _=n[v],h=c.eq(v%2),w=_.app_id,j=$('<div id="appmsg%s"></div>'.sprintf(w),h).appendTo(h);
new S({
container:j,
data:_,
showMask:!0
});
}
K.key&&($("#msgSearchInput").val(K.key),$(".appmsg_title>a").each(function(e,i){
$(i).html($(i).text().replace(new RegExp(K.key,"g"),'<span class="highlight">'+K.key+"</span>"));
}));
}
if("videomsg"==e){
var x=u.find("#js_videomsg_list").find(".inner");
n.each(function(e,i){
var o=x.eq(i%2),n=$('<div id="appmsg%s"></div>'.sprintf(e.app_id),o).appendTo(o);
A[t]&&A[t](n,e);
});
}
p.popup("resetPosition"),o();
}
}
function o(){
(10==K.type||11==K.type)&&($("#searchCloseBt").click(function(){
$("#msgSearchInput").val("");
}),$("#msgSearchBtn").click(function(){
return $("#msgSearchInput").val().length>0?(K.key=$("#msgSearchInput").val(),void l(K)):void f.err("请输入搜索关键词");
}),$("#msgSearchInput").keydown(function(e){
var i="which"in e?e.which:e.keyCode;
13==i&&$("#msgSearchBtn").trigger("click");
}));
}
function n(e){
w({
scene:"biz",
maxSelect:1,
desc:"大小不超过5M",
onOK:function(i){
var t={
file_id:i[0].file_id,
source:"file"
};
e.onSelect&&e.onSelect(e.type,t),this.destroy();
},
onHide:function(){
this.destroy();
}
});
}
function a(e){
new j({
onOK:function(i,t){
var o=$.extend({},t);
return o?(e.onSelect&&e.onSelect(i,o),!0):!1;
}
});
}
function d(e){
var o=e.type,s=e.onSelect,l=e.count||10,m=e.begin||0;
return 2==o?void n(e):21==o?void a(e):(t("file","loading",o),void v.getList(o,m,l,function(n){
if(p){
var a={
2:"img_cnt",
3:"voice_cnt",
4:"video_cnt"
},c=n.file_item,r=n.file_cnt[a[o]];
c.length<=0?t("file","no-media",o,c,null,e):(t("file","files",o,c,function(){
var e=u.find('[name="media"]:checked').val(),i=$("#fileItem"+e).data("opt");
return i?(s(o,i),!0):!1;
},e),i(m,l,r,d,e));
}
}));
}
function s(e){
return e.find(".appmsg.selected,.Js_videomsg.selected");
}
function l(e){
var o=e.type,n=e.onSelect,d=e.count||10,m=e.key||"",c=e.begin||0;
return K=$.extend(!0,{},e),15==o?void a(e):(t("appmsg","loading",o),void v.appmsg.getList(o,c,d,function(a){
if(p){
var m={
10:"app_msg_cnt",
11:"commondity_msg_cnt",
15:"video_msg_cnt"
},r=a.item,g=a.file_cnt[m[o]];
K.key&&(g=a.search_cnt),r.length<=0?t("appmsg","no-media",o,r,null,e):(t("appmsg","files",o,r,function(){
var e=s(u).parent().data("opt");
return e?(n(o,e),!0):!1;
}),i(c,d,g,l,e),15==o?(u.on("click",".Js_videomsg",function(){
$(this).find(".loading_tips").length?f.err("视频在转码中，不能选择"):""!=$(this).find(".title").text().trim()&&(u.find(".Js_videomsg").removeClass("selected"),
$(this).addClass("selected"));
}),u.on("mouseenter",".Js_videomsg",function(){
""==$(this).find(".title").text().trim()&&$(this).addClass("no_title");
}),u.on("mouseleave",".Js_videomsg",function(){
$(this).removeClass("no_title");
})):u.on("click",".appmsg",function(){
s(u).removeClass("selected"),$(this).addClass("selected");
}));
}
},m));
}
function m(e){
var i=e.onSelect,t=e.type,o=new C({
multi:!1,
selectComplete:function(e){
return e?(i(t,e),void(o=null)):void f.err("请选择卡券");
},
param:{
need_member_card:1
},
source:"直接群发卡券"
});
o.show();
}
function c(i){
var t=e("media/plugin/audio.js");
window.openAudioPopup(!0),t.registerCb(function(e){
i.onSelect(3,e);
});
}
e("widget/media/media_dialog.css"),e("widget/media/richvideo.css"),e("common/wx/popup.js");
var r=wx.T,p=null,u=null,g="media align_edge",f=e("common/wx/Tips.js"),v=e("media/media_cgi.js"),_=e("biz_web/utils/upload.js"),h=(e("biz_web/ui/checkbox.js"),
e("common/wx/pagebar.js")),w=e("common/wx/media/imageDialog.js"),j=e("common/wx/media/videoDialog.js"),y=_.uploadBizFile,x=(template.render,
e("common/wx/media/audio.js")),k=e("common/wx/media/img.js"),b=e("common/wx/media/video.js"),S=e("common/wx/media/appmsg.js"),C=e("cardticket/send_card.js"),I=e("common/wx/time.js"),z=I.timeFormat,D=e("tpl/media/dialog/file_layout.html.js"),J=e("tpl/media/dialog/appmsg_layout.html.js"),P=e("tpl/media/dialog/videomsg_layout.html.js"),T=e("tpl/media/dialog/file.html.js"),B=1,E={},F={
appmsg:J,
videomsg:P,
file:D
};
template.helper("mediaDialogtimeFormat",function(e){
return z(e);
}),template.helper("mediaDialogInit",function(e){
return e.file_id?(E[e.file_id]=e,""):"";
});
var A={
2:function(e,i){
return new k({
container:$("#"+e.attr("id")),
file_id:i.file_id,
source:"file",
fakeid:i.fakeid
});
},
3:function(e,i){
var t=i;
return t.selector="#"+e.attr("id"),t.source="file",new x(t);
},
4:function(e,i){
var t=i;
return t.selector="#"+e.attr("id"),t.id=t.file_id,t.source="file",new b(t);
},
15:function(e,i){
var t=i;
return t.selector=e,t.id=t.app_id,t.tpl="videomsg",t.for_selection=!0,t.for_transfer=!!t.content,
t.hide_transfer=!!t.content,t.video_id=t.content,new b(t);
}
},K={};
return{
getFile:d,
getVoice:c,
getAppmsg:l,
getCardList:m
};
});define("common/wx/richEditor/emotionEditor.js",["widget/emotion_editor.css","tpl/richEditor/emotionEditor.html.js","common/wx/richEditor/wysiwyg.js","common/wx/richEditor/emotion.js","biz_web/utils/upload.js","common/wx/Tips.js","common/qq/Class.js"],function(t,i,e){
"use strict";
var o=wx.T,n=(t("widget/emotion_editor.css"),t("tpl/richEditor/emotionEditor.html.js")),r=t("common/wx/richEditor/wysiwyg.js"),s=t("common/wx/richEditor/emotion.js"),c=t("biz_web/utils/upload.js"),m=t("common/wx/Tips.js"),l=c.uploadCdnFile,d=t("common/qq/Class.js"),a={
isHTML:!0,
wordlimit:500,
hideUpload:!0
},w=1,h=d.declare({
init:function(t,i){
var e=this;
i=this.opt=$.extend(!0,{},a,i),e.selector$=t,i.gid=w++,e.selector$.html(o(n,i)),
e.emotion=new s(t.find(".js_emotionArea")),e.wysiwyg=new r(t.find(".js_editorArea"),{
init:function(){
t.find(".js_editorTip").html("还可以输入<em>{l}</em>字".format({
l:i.wordlimit
}));
},
textFilter:function(t){
return t=e.emotion.getEmotionText(t).replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,""),
t=t.html(!1),i.isHTML?t:t.replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,"");
},
nodeFilter:function(t){
var i="";
return"IMG"===t.nodeName.toUpperCase()&&(i=t),i;
},
change:function(){
var o=e.getContent(),n=i.wordlimit-o.length,r=t.find(".js_editorTip");
r.html(0>n?"已超出<em{cls}>{l}</em>字".format({
l:-n,
cls:' class="warn"'
}):"还可以输入<em>{l}</em>字".format({
l:n
}));
}
}),e.upload=l({
container:t.find(".js_upload"),
type:2,
multi:!1,
onComplete:function(t,i,o,n){
if(n&&n.base_resp&&0==n.base_resp.ret){
var r=n.content;
m.suc("上传成功"),e.wysiwyg.insertHTML(r);
}
}
}),e._initEvent(),e.insertHTML(i.text);
},
_initEvent:function(){
var t=$(".js_switch",this.selector$),i=this.emotion,e=this.wysiwyg;
i.click(function(t){
return e.insertHTML(i.getEmotionHTML(t)),!1;
}),i.hide(),t.click(function(){
i.show();
}),$(document).on("click","*",function(t){
var e=$(t.target),o=e.filter(".js_switch"),n=e.filter(".js_emotion_i"),r=e.filter(".emotions_item");
o.length||n.length||r.length||i.hide();
});
},
setContent:function(t){
var i=t||"";
i=this.opt.linebreak?i.replace(/\n/g,"<br>"):i,t=s.emoji(i),this.wysiwyg.setContent(t,i.html(!1));
},
insertHTML:function(t){
t=t||"",this.wysiwyg.insertHTML(t);
},
getContent:function(){
var t=this.wysiwyg.getContent();
return t="string"==typeof t?t.trim():"",this.opt.linebreak?t.replace(/<br[^>]*>/gi,"\n"):t;
},
getHTML:function(){
var t=this.wysiwyg.getHTML().html(!1);
return"string"==typeof t?t.trim():"";
},
focus:function(){
this.wysiwyg.focus();
}
});
e.exports=h;
});define("common/qq/jquery.plugin/tab.js",["tpl/tab.html.js","widget/msg_tab.css"],function(t){
"use strict";
{
var a={
index:0
},n=t("tpl/tab.html.js");
t("widget/msg_tab.css");
}
$.fn.tab=function(t){
if(t&&t.tabs){
this.html(wx.T(n,{
tabs:t.tabs,
token:wx.data.t
}));
var e=this,s=e.find(".tab_navs"),i=s.find(".tab_nav"),d=i.length,c=null,r=null,l=function(a){
var n=a.data("tab"),s=a.data("type");
n&&(c!=a&&(c&&c.removeClass("selected"),r&&r.hide(),c=a,r=e.find(n).parent(),r.show(),
c.addClass("selected")),!!t.select&&t.select(a,r,n,s));
},u=function(a){
var n=a.data("tab"),s=a.data("type");
return t.click?t.click(a,e.find(n),n,s):!0;
};
return t=$.extend(!0,{},a,t),i.each(function(a){
var n=t.index,s=$(this).addClass("width"+d),i=s.data("tab");
a==n?l(s):e.find(i).parent().hide(),a==d-1&&s.addClass("no_extra");
}),s.on("click",".tab_nav",function(){
var t=u($(this));
return 0!=t&&l($(this));
}),{
getLen:function(){
return d;
},
getTabs:function(){
return i;
},
select:function(t){
return l(i.eq(t));
}
};
}
};
});define("tpl/dialog.html.js",[],function(){
return'<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      {if !hideClose}\n      <!--#0001#-->\n      <a href="javascript:;" class="pop_closed" onclick="return false;">关闭</a>\n      <!--%0001%-->\n      {/if}\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n  	{if !hideClose}\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn" onclick="return false;">{bt.text}</a>\n      {/each}\n  	{/if}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});define("tpl/popup.html.js",[],function(){
return'<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<!--#0001#-->\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n			<!--%0001%-->\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});define("biz_common/jquery.ui/jquery.ui.draggable.js",[],function(){
!function(t,e){
function i(e,i){
var o,n,r,a=e.nodeName.toLowerCase();
return"area"===a?(o=e.parentNode,n=o.name,e.href&&n&&"map"===o.nodeName.toLowerCase()?(r=t("img[usemap=#"+n+"]")[0],
!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&s(e);
}
function s(e){
return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){
return"hidden"===t.css(this,"visibility");
}).length;
}
var o=0,n=/^ui-id-\d+$/;
t.ui=t.ui||{},t.extend(t.ui,{
version:"1.10.3"
}),t.fn.extend({
focus:function(e){
return function(i,s){
return"number"==typeof i?this.each(function(){
var e=this;
setTimeout(function(){
t(e).focus(),s&&s.call(e);
},i);
}):e.apply(this,arguments);
};
}(t.fn.focus),
scrollParent:function(){
var e;
return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){
return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"));
}).eq(0):this.parents().filter(function(){
return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"));
}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e;
},
zIndex:function(i){
if(i!==e)return this.css("zIndex",i);
if(this.length)for(var s,o,n=t(this[0]);n.length&&n[0]!==document;){
if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(o=parseInt(n.css("zIndex"),10),
!isNaN(o)&&0!==o))return o;
n=n.parent();
}
return 0;
},
uniqueId:function(){
return this.each(function(){
this.id||(this.id="ui-id-"+ ++o);
});
},
removeUniqueId:function(){
return this.each(function(){
n.test(this.id)&&t(this).removeAttr("id");
});
}
}),t.extend(t.expr[":"],{
data:t.expr.createPseudo?t.expr.createPseudo(function(e){
return function(i){
return!!t.data(i,e);
};
}):function(e,i,s){
return!!t.data(e,s[3]);
},
focusable:function(e){
return i(e,!isNaN(t.attr(e,"tabindex")));
},
tabbable:function(e){
var s=t.attr(e,"tabindex"),o=isNaN(s);
return(o||s>=0)&&i(e,!o);
}
}),t.extend(t.ui,{
plugin:{
add:function(e,i,s){
var o,n=t.ui[e].prototype;
for(o in s)n.plugins[o]=n.plugins[o]||[],n.plugins[o].push([i,s[o]]);
},
call:function(t,e,i){
var s,o=t.plugins[e];
if(o&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i);
}
},
hasScroll:function(e,i){
if("hidden"===t(e).css("overflow"))return!1;
var s=i&&"left"===i?"scrollLeft":"scrollTop",o=!1;
return e[s]>0?!0:(e[s]=1,o=e[s]>0,e[s]=0,o);
}
});
}(jQuery),function(t,e){
var i=0,s=Array.prototype.slice,o=t.cleanData;
t.cleanData=function(e){
for(var i,s=0;null!=(i=e[s]);s++)try{
t(i).triggerHandler("remove");
}catch(n){}
o(e);
},t.widget=function(e,i,s){
var o,n,r,a,l={},h=e.split(".")[0];
e=e.split(".")[1],o=h+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){
return!!t.data(e,o);
},t[h]=t[h]||{},n=t[h][e],r=t[h][e]=function(t,e){
return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e);
},t.extend(r,n,{
version:s.version,
_proto:t.extend({},s),
_childConstructors:[]
}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){
return t.isFunction(s)?void(l[e]=function(){
var t=function(){
return i.prototype[e].apply(this,arguments);
},o=function(t){
return i.prototype[e].apply(this,t);
};
return function(){
var e,i=this._super,n=this._superApply;
return this._super=t,this._superApply=o,e=s.apply(this,arguments),this._super=i,
this._superApply=n,e;
};
}()):void(l[e]=s);
}),r.prototype=t.widget.extend(a,{
widgetEventPrefix:n?a.widgetEventPrefix:e
},l,{
constructor:r,
namespace:h,
widgetName:e,
widgetFullName:o
}),n?(t.each(n._childConstructors,function(e,i){
var s=i.prototype;
t.widget(s.namespace+"."+s.widgetName,r,i._proto);
}),delete n._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r);
},t.widget.extend=function(i){
for(var o,n,r=s.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])n=r[a][o],
r[a].hasOwnProperty(o)&&n!==e&&(i[o]=t.isPlainObject(n)?t.isPlainObject(i[o])?t.widget.extend({},i[o],n):t.widget.extend({},n):n);
return i;
},t.widget.bridge=function(i,o){
var n=o.prototype.widgetFullName||i;
t.fn[i]=function(r){
var a="string"==typeof r,l=s.call(arguments,1),h=this;
return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){
var s,o=t.data(this,n);
return o?t.isFunction(o[r])&&"_"!==r.charAt(0)?(s=o[r].apply(o,l),s!==o&&s!==e?(h=s&&s.jquery?h.pushStack(s.get()):s,
!1):void 0):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'");
}:function(){
var e=t.data(this,n);
e?e.option(r||{})._init():t.data(this,n,new o(r,this));
}),h;
};
},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={
widgetName:"widget",
widgetEventPrefix:"",
defaultElement:"<div>",
options:{
disabled:!1,
create:null
},
_createWidget:function(e,s){
s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,
this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),
this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),
this._on(!0,this.element,{
remove:function(t){
t.target===s&&this.destroy();
}
}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),
this._create(),this._trigger("create",null,this._getCreateEventData()),this._init();
},
_getCreateOptions:t.noop,
_getCreateEventData:t.noop,
_create:t.noop,
_init:t.noop,
destroy:function(){
this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),
this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),
this.focusable.removeClass("ui-state-focus");
},
_destroy:t.noop,
widget:function(){
return this.element;
},
option:function(i,s){
var o,n,r,a=i;
if(0===arguments.length)return t.widget.extend({},this.options);
if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){
for(n=a[i]=t.widget.extend({},this.options[i]),r=0;r<o.length-1;r++)n[o[r]]=n[o[r]]||{},
n=n[o[r]];
if(i=o.pop(),s===e)return n[i]===e?null:n[i];
n[i]=s;
}else{
if(s===e)return this.options[i]===e?null:this.options[i];
a[i]=s;
}
return this._setOptions(a),this;
},
_setOptions:function(t){
var e;
for(e in t)this._setOption(e,t[e]);
return this;
},
_setOption:function(t,e){
return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),
this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),
this;
},
enable:function(){
return this._setOption("disabled",!1);
},
disable:function(){
return this._setOption("disabled",!0);
},
_on:function(e,i,s){
var o,n=this;
"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=o=t(i),this.bindings=this.bindings.add(i)):(s=i,
i=this.element,o=this.widget()),t.each(s,function(s,r){
function a(){
return e||n.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?n[r]:r).apply(n,arguments):void 0;
}
"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);
var l=s.match(/^(\w+)\s*(.*)$/),h=l[1]+n.eventNamespace,c=l[2];
c?o.delegate(c,h,a):i.bind(h,a);
});
},
_off:function(t,e){
e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e);
},
_delay:function(t,e){
function i(){
return("string"==typeof t?s[t]:t).apply(s,arguments);
}
var s=this;
return setTimeout(i,e||0);
},
_hoverable:function(e){
this.hoverable=this.hoverable.add(e),this._on(e,{
mouseenter:function(e){
t(e.currentTarget).addClass("ui-state-hover");
},
mouseleave:function(e){
t(e.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable:function(e){
this.focusable=this.focusable.add(e),this._on(e,{
focusin:function(e){
t(e.currentTarget).addClass("ui-state-focus");
},
focusout:function(e){
t(e.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger:function(e,i,s){
var o,n,r=this.options[e];
if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
i.target=this.element[0],n=i.originalEvent)for(o in n)o in i||(i[o]=n[o]);
return this.element.trigger(i,s),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented());
}
},t.each({
show:"fadeIn",
hide:"fadeOut"
},function(e,i){
t.Widget.prototype["_"+e]=function(s,o,n){
"string"==typeof o&&(o={
effect:o
});
var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;
o=o||{},"number"==typeof o&&(o={
duration:o
}),r=!t.isEmptyObject(o),o.complete=n,o.delay&&s.delay(o.delay),r&&t.effects&&t.effects.effect[a]?s[e](o):a!==e&&s[a]?s[a](o.duration,o.easing,n):s.queue(function(i){
t(this)[e](),n&&n.call(s[0]),i();
});
};
});
}(jQuery),function(t){
var e=!1;
t(document).mouseup(function(){
e=!1;
}),t.widget("ui.mouse",{
version:"1.10.3",
options:{
cancel:"input,textarea,button,select,option",
distance:1,
delay:0
},
_mouseInit:function(){
var e=this;
this.element.bind("mousedown."+this.widgetName,function(t){
return e._mouseDown(t);
}).bind("click."+this.widgetName,function(i){
return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),
i.stopImmediatePropagation(),!1):void 0;
}),this.started=!1;
},
_mouseDestroy:function(){
this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
},
_mouseDown:function(i){
if(!e){
this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;
var s=this,o=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;
return o&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){
s.mouseDelayMet=!0;
},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,
!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),
this._mouseMoveDelegate=function(t){
return s._mouseMove(t);
},this._mouseUpDelegate=function(t){
return s._mouseUp(t);
},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),
i.preventDefault(),e=!0,!0)):!0;
}
},
_mouseMove:function(e){
return t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),
e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,
this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted);
},
_mouseUp:function(e){
return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),
this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),
this._mouseStop(e)),!1;
},
_mouseDistanceMet:function(t){
return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance;
},
_mouseDelayMet:function(){
return this.mouseDelayMet;
},
_mouseStart:function(){},
_mouseDrag:function(){},
_mouseStop:function(){},
_mouseCapture:function(){
return!0;
}
});
}(jQuery),function(t){
t.widget("ui.draggable",t.ui.mouse,{
version:"1.10.3",
widgetEventPrefix:"drag",
options:{
addClasses:!0,
appendTo:"parent",
axis:!1,
connectToSortable:!1,
containment:!1,
cursor:"auto",
cursorAt:!1,
grid:!1,
handle:!1,
helper:"original",
iframeFix:!1,
opacity:!1,
refreshPositions:!1,
revert:!1,
revertDuration:500,
scope:"default",
scroll:!0,
scrollSensitivity:20,
scrollSpeed:20,
snap:!1,
snapMode:"both",
snapTolerance:20,
stack:!1,
zIndex:!1,
drag:null,
start:null,
stop:null
},
_create:function(){
"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),
this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),
this._mouseInit();
},
_destroy:function(){
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
this._mouseDestroy();
},
_mouseCapture:function(e){
var i=this.options;
return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),
this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){
t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width:this.offsetWidth+"px",
height:this.offsetHeight+"px",
position:"absolute",
opacity:"0.001",
zIndex:1e3
}).css(t(this).offset()).appendTo("body");
}),!0):!1);
},
_mouseStart:function(e){
var i=this.options;
return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),
this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),
this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),
this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),
this.offset=this.positionAbs=this.element.offset(),this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
},this.offset.scroll=!1,t.extend(this.offset,{
click:{
left:e.pageX-this.offset.left,
top:e.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,
this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),
this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),
t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),
t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0);
},
_mouseDrag:function(e,i){
if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),
this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),
!i){
var s=this._uiHash();
if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;
this.position=s.position;
}
return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),
this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),
t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1;
},
_mouseStop:function(e){
var i=this,s=!1;
return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),
this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
i._trigger("stop",e)!==!1&&i._clear();
}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1;
},
_mouseUp:function(e){
return t("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this);
}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e);
},
cancel:function(){
return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),
this;
},
_getHandle:function(e){
return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0;
},
_createHelper:function(e){
var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;
return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),
s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),
s;
},
_adjustOffsetFromHelper:function(e){
"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={
left:+e[0],
top:+e[1]||0
}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),
"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top);
},
_getParentOffset:function(){
var e=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),
e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={
top:0,
left:0
}),{
top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};
},
_getRelativeOffset:function(){
if("relative"===this.cssPosition){
var t=this.element.position();
return{
top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
};
}
return{
top:0,
left:0
};
},
_cacheMargins:function(){
this.margins={
left:parseInt(this.element.css("marginLeft"),10)||0,
top:parseInt(this.element.css("marginTop"),10)||0,
right:parseInt(this.element.css("marginRight"),10)||0,
bottom:parseInt(this.element.css("marginBottom"),10)||0
};
},
_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},
_setContainment:function(){
var e,i,s,o=this.options;
return o.containment?"window"===o.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===o.containment?void(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):o.containment.constructor===Array?void(this.containment=o.containment):("parent"===o.containment&&(o.containment=this.helper[0].parentNode),
i=t(o.containment),s=i[0],void(s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],
this.relative_container=i))):void(this.containment=null);
},
_convertPositionTo:function(e,i){
i||(i=this.position);
var s="absolute"===e?1:-1,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
return this.offset.scroll||(this.offset.scroll={
top:o.scrollTop(),
left:o.scrollLeft()
}),{
top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,
left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s
};
},
_generatePosition:function(e){
var i,s,o,n,r=this.options,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;
return this.offset.scroll||(this.offset.scroll={
top:a.scrollTop(),
left:a.scrollLeft()
}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),
i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,
e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),
e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),
r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,
h=i?o-this.offset.click.top>=i[1]||o-this.offset.click.top>i[3]?o:o-this.offset.click.top>=i[1]?o-r.grid[1]:o+r.grid[1]:o,
n=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,
l=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n)),
{
top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),
left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)
};
},
_clear:function(){
this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),
this.helper=null,this.cancelHelperRemoval=!1;
},
_trigger:function(e,i,s){
return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),
t.Widget.prototype._trigger.call(this,e,i,s);
},
plugins:{},
_uiHash:function(){
return{
helper:this.helper,
position:this.position,
originalPosition:this.originalPosition,
offset:this.positionAbs
};
}
}),t.ui.plugin.add("draggable","connectToSortable",{
start:function(e,i){
var s=t(this).data("ui-draggable"),o=s.options,n=t.extend({},i,{
item:s.element
});
s.sortables=[],t(o.connectToSortable).each(function(){
var i=t.data(this,"ui-sortable");
i&&!i.options.disabled&&(s.sortables.push({
instance:i,
shouldRevert:i.options.revert
}),i.refreshPositions(),i._trigger("activate",e,n));
});
},
stop:function(e,i){
var s=t(this).data("ui-draggable"),o=t.extend({},i,{
item:s.element
});
t.each(s.sortables,function(){
this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,
this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),
this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({
top:"auto",
left:"auto"
})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,o));
});
},
drag:function(e,i){
var s=t(this).data("ui-draggable"),o=this;
t.each(s.sortables,function(){
var n=!1,r=this;
this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,
this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,
t.each(s.sortables,function(){
return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,
this.instance.offset.click=s.offset.click,this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),
n;
})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),
this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){
return i.helper[0];
},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),
this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,
this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,
this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,
s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,
this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,
this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),
this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,
this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),
s._trigger("fromSortable",e),s.dropped=!1);
});
}
}),t.ui.plugin.add("draggable","cursor",{
start:function(){
var e=t("body"),i=t(this).data("ui-draggable").options;
e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor);
},
stop:function(){
var e=t(this).data("ui-draggable").options;
e._cursor&&t("body").css("cursor",e._cursor);
}
}),t.ui.plugin.add("draggable","opacity",{
start:function(e,i){
var s=t(i.helper),o=t(this).data("ui-draggable").options;
s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity);
},
stop:function(e,i){
var s=t(this).data("ui-draggable").options;
s._opacity&&t(i.helper).css("opacity",s._opacity);
}
}),t.ui.plugin.add("draggable","scroll",{
start:function(){
var e=t(this).data("ui-draggable");
e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset());
},
drag:function(e){
var i=t(this).data("ui-draggable"),s=i.options,o=!1;
i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop-s.scrollSpeed)),
s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?o=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(o=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),
s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?o=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(o=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),
o!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e);
}
}),t.ui.plugin.add("draggable","snap",{
start:function(){
var e=t(this).data("ui-draggable"),i=e.options;
e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){
var i=t(this),s=i.offset();
this!==e.element[0]&&e.snapElements.push({
item:this,
width:i.outerWidth(),
height:i.outerHeight(),
top:s.top,
left:s.left
});
});
},
drag:function(e,i){
var s,o,n,r,a,l,h,c,p,u,f=t(this).data("ui-draggable"),d=f.options,g=d.snapTolerance,m=i.offset.left,v=m+f.helperProportions.width,_=i.offset.top,b=_+f.helperProportions.height;
for(p=f.snapElements.length-1;p>=0;p--)a=f.snapElements[p].left,l=a+f.snapElements[p].width,
h=f.snapElements[p].top,c=h+f.snapElements[p].height,a-g>v||m>l+g||h-g>b||_>c+g||!t.contains(f.snapElements[p].item.ownerDocument,f.snapElements[p].item)?(f.snapElements[p].snapping&&f.options.snap.release&&f.options.snap.release.call(f.element,e,t.extend(f._uiHash(),{
snapItem:f.snapElements[p].item
})),f.snapElements[p].snapping=!1):("inner"!==d.snapMode&&(s=Math.abs(h-b)<=g,o=Math.abs(c-_)<=g,
n=Math.abs(a-v)<=g,r=Math.abs(l-m)<=g,s&&(i.position.top=f._convertPositionTo("relative",{
top:h-f.helperProportions.height,
left:0
}).top-f.margins.top),o&&(i.position.top=f._convertPositionTo("relative",{
top:c,
left:0
}).top-f.margins.top),n&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:a-f.helperProportions.width
}).left-f.margins.left),r&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:l
}).left-f.margins.left)),u=s||o||n||r,"outer"!==d.snapMode&&(s=Math.abs(h-_)<=g,
o=Math.abs(c-b)<=g,n=Math.abs(a-m)<=g,r=Math.abs(l-v)<=g,s&&(i.position.top=f._convertPositionTo("relative",{
top:h,
left:0
}).top-f.margins.top),o&&(i.position.top=f._convertPositionTo("relative",{
top:c-f.helperProportions.height,
left:0
}).top-f.margins.top),n&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:a
}).left-f.margins.left),r&&(i.position.left=f._convertPositionTo("relative",{
top:0,
left:l-f.helperProportions.width
}).left-f.margins.left)),!f.snapElements[p].snapping&&(s||o||n||r||u)&&f.options.snap.snap&&f.options.snap.snap.call(f.element,e,t.extend(f._uiHash(),{
snapItem:f.snapElements[p].item
})),f.snapElements[p].snapping=s||o||n||r||u);
}
}),t.ui.plugin.add("draggable","stack",{
start:function(){
var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){
return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0);
});
s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){
t(this).css("zIndex",e+i);
}),this.css("zIndex",e+s.length));
}
}),t.ui.plugin.add("draggable","zIndex",{
start:function(e,i){
var s=t(i.helper),o=t(this).data("ui-draggable").options;
s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex);
},
stop:function(e,i){
var s=t(this).data("ui-draggable").options;
s._zIndex&&t(i.helper).css("zIndex",s._zIndex);
}
});
}(jQuery);
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
});
;define('common/wx/popover.js', ['tpl/popover.html.js'], function(require, exports, module){
	'use strict';

	var html = require('tpl/popover.html.js');
	var _opt = {
		dom: "", 
		content: "", 
		place: "bottom", 
		margin: "center", 
        hideIfBlur: false, 
		hover: false, 
		addCls:""  
		
		
	};

	function Popover(opt) {
		opt = $.extend(true, {}, _opt, opt);
		this.opt = opt;
		this.$dom = $(opt.dom);
		
		if (this.$dom.data("popover")) {
			
			var that = this.$dom.data("popover");
		    initPosition(opt, that);
			that.$pop.show();
			return that;
		};
		if (opt.buttons && opt.buttons) {
			opt.buttons.each(function(b) {
				b.type = b.type || "default";
			});
		}
		this.$pop = $(template.compile(html)(opt));
		if(opt.addCls){
			this.$pop.addClass(opt.addCls);
		}
		$("body").append(this.$pop);
		initEvent(this, opt);
		initPosition(opt, this);
		this.$pop.show();
		
		this.$dom.data("popover", this);
        this.clickIn = true;
		return this;
	};

	Popover.prototype = {
		remove: function() {
			this.$pop.remove();
			this.$dom.removeData('popover');
            this._onBlur && $(document).off('click', this._onBlur);
            $(window).off('resize', this._onResize);
		},
		hide: function() {
			this.$pop.hide();
		},
		show: function() {
			this.$pop.show();
		},
		resetPosition: function() {
			return initPosition(this.opt, this);
        }
		
		
	}

	function initEvent(self, opt) {
		if (opt.buttons && opt.buttons.length > 0) {
			self.$pop.find(".jsPopoverBt").each(function(i, bt) {
				if (opt.buttons[i] && typeof opt.buttons[i].click == "function") {
					$(bt).click(function(event) {
						opt.buttons[i].click.call(self, event);
					});
				}
			});
		}

		self.$pop.find(".jsPopoverClose").click(function(event) {
			if (opt.close === true) {
				self.hide();
			} else if (typeof opt.close == "function") {
				opt.close.call(self);
			}
		});  

		if (opt.hover) {
			self.$dom.hover(function() {
				self.hoverTime&&clearTimeout(self.hoverTime);
			}, function() {
				self.hoverTime=self.hide.delay(1,self);
			});

			self.$pop.hover(function() {
				self.hoverTime&&clearTimeout(self.hoverTime);
			}, function() {
				self.hoverTime&&clearTimeout(self.hoverTime);
				self.hoverTime=self.hide.delay(1,self);
			});
		}

        if (opt.hideIfBlur) {
            self._onBlur = function(e){
                var context = e.data.context;
                var target = e.target;
                var dom = context.$dom.get(0);
                var pop = context.$pop.get(0);

                if (context.clickIn) {
                    context.clickIn = false;
                } else if (!$.contains(dom, target) && dom !== target && !$.contains(pop, target) && pop !== target) {
                    e.data.context.hide();
                }
            }
            $(document).on('click', {context: self}, self._onBlur);
        }

        self._onResize = function(ev){ ev.data.context.resetPosition() };

        $(window).on('resize', {context: self}, self._onResize);

	}



	function initPosition(opt, self) {
		var offset = self.$dom.offset();
		
		if (opt.margin == "left") {
			console.log(offset.top);
			console.log(self.$dom.height());
			self.$pop.css({
				top: offset.top + self.$dom.height(),
				left: offset.left
			}).addClass('pos_left');
		} else if (opt.margin == "right") {
			self.$pop.css({
				top: offset.top + self.$dom.height(),
				left: offset.left + self.$dom.width() - self.$pop.width()
			}).addClass('pos_right');
		} else {
			self.$pop.css({
				top: offset.top + self.$dom.height(),
				left: offset.left + self.$dom.outerWidth() / 2 - self.$pop.width() / 2
			}).addClass('pos_center');
		}
	}

	module.exports = Popover;
});
define("common/wx/richEditor/msgSender.js",["common/wx/popup.js","widget/msg_sender.css","common/qq/jquery.plugin/tab.js","common/wx/richEditor/emotionEditor.js","media/media_dialog.js","common/wx/media/factory.js","common/qq/Class.js","common/wx/Tips.js","common/wx/media/audio.js","common/wx/media/img.js","common/wx/media/video.js","common/wx/media/cardmsg.js","common/wx/tooltip.js","common/wx/media/appmsg.js","biz_web/utils/upload.js"],function(e){
"use strict";
function t(e,t){
for(var i=[],n=0;n<e.length;++n){
var s=e[n];
t&&t[s.acl]&&i.push(s);
}
return i;
}
function i(e){
var t={},i=e.slice();
i.push({
acl:"can_video_msg",
className:"tab_video",
selector:"js_videoArea",
text:"视频",
type:4,
index:3
},{
acl:"can_use_shortvideo",
className:"tab_video",
selector:"js_videoArea",
text:"视频",
type:21,
index:3
});
for(var n=0;n<i.length;++n){
var s=i[n];
s.index=s.index||n,t[s.type]=s;
}
return t;
}
e("common/wx/popup.js"),e("widget/msg_sender.css");
var n=(e("common/qq/jquery.plugin/tab.js"),e("common/wx/richEditor/emotionEditor.js")),s=e("media/media_dialog.js"),a=e("common/wx/media/factory.js"),o=e("common/qq/Class.js"),r=e("common/wx/Tips.js"),d=(e("common/wx/media/audio.js"),
e("common/wx/media/img.js"),e("common/wx/media/video.js"),e("common/wx/media/cardmsg.js")),c=(e("common/wx/tooltip.js"),
e("common/wx/media/appmsg.js"),e("biz_web/utils/upload.js")),p=1,l=[{
text:"图文消息",
acl:"can_app_msg",
className:"tab_appmsg",
selector:"js_appmsgArea",
type:10
},{
text:"文字",
acl:"can_text_msg",
className:"tab_text",
selector:"js_textArea",
innerClassName:"no_extra",
type:1
},{
text:"图片",
acl:"can_image_msg",
className:"tab_img",
selector:"js_imgArea",
type:2
},{
text:"语音",
acl:"can_voice_msg",
className:"tab_audio",
selector:"js_audioArea",
type:3
},{
text:"视频",
acl:"can_video_msg",
className:"tab_video",
selector:"js_videoArea",
type:15
},{
text:"商品消息",
acl:"can_commodity_app_msg",
className:"tab_commondity_appmsg",
selector:"js_commondityAppmsgArea",
type:11
},{
text:"卡券",
acl:"can_card_msg",
className:"tab_cardmsg",
selector:"js_cardmsgArea",
type:16
}],m=a.itemRender,g=o.declare({
select:function(){
this.msgSender.type=this.type;
},
fillData:function(){},
getData:function(){},
click:function(){
this.msgSender.type=this.type;
}
}),f=g.Inherit({
init:function(e){
this.msgSender=e,this.type=1,this.info=e.infos[this.type],this.wordlimit=e.opt.wordlimit,
this.index=this.info&&this.info.index;
},
fillData:function(e){
var t=this.msgSender;
t.type=this.type,t.select(this.index),t.emotionEditor.setContent(e.content);
},
getData:function(){
var e=this.msgSender.emotionEditor.getContent();
return{
type:this.type,
content:e
};
},
clear:function(){
return this.fillData({
content:""
});
},
isValidate:function(e){
var t=e&&1==e.type&&!!(""!=e.content&&e.content.length<=this.wordlimit);
return t||r.err("文字必须为1到%s个字".sprintf(this.wordlimit)),t;
},
click:function(){
var e=this;
this.msgSender.type=this.type,setTimeout(function(){
e.msgSender.emotionEditor.insertHTML();
});
}
}),u=g.Inherit({
init:function(e,t){
this.type=t,this.msgSender=e,this.info=e.infos[t],this.index=this.info&&this.info.index;
},
click:function(){
var e=this,t=this.type;
if(this.msgSender.type=t,3==t&&$("#msgSendAudioUploadBt").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
}),2==t){
var i="msgSendImgUploadBt";
c.uploadImageLibFile({
container:"#"+i,
type:t,
doublewrite:!0,
groupid:1,
pick:{
multiple:!1
},
onComplete:function(i,n,s,a){
if(0==a.base_resp.ret){
var o,r="msgSender_media_%s_%s".sprintf(e.msgSender.gid,t);
o=2==t?{
file_id:a.content,
source:"file"
}:{
file_id:a.content,
source:"file",
name:s.name,
play_length:s.size
},$("."+e.info.selector).find(".jsMsgSendTab").hide().after('<div id="%s"></div>'.sprintf(r)),
m[t]&&m[t]("#"+r,o),$("#"+r).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
e.msgSender.opt.onSelect&&e.msgSender.opt.onSelect(t,o);
}
},
onAllComplete:function(){
r.suc("上传成功");
}
}),function(){
$("#"+i).trigger("click");
}.delay(.1);
}
if(10!=this.type&&2!=this.type&&3!=this.type&&11!=this.type&&15!=this.type){
var n=null,e=this;
return n=10==e.type||11==e.type||15==e.type?s.getAppmsg:3==e.type?s.getVoice:s.getFile,
n({
type:e.type,
begin:0,
count:10,
onSelect:function(t,i){
var n=e.msgSender;
e.msgSender.type=t,n.select(e.index);
var s="msgSender_media_%s_%s".sprintf(n.gid,t);
$("."+e.info.selector).html('<div id="%s"></div>'.sprintf(s)),m[t]&&m[t]("#"+s,i),
$("#"+s).append('<a href="javascript:;" class="link_dele jsmsgSenderDelBt" onclick="return false;">删除</a>'),
e.msgSender.opt.onSelect&&e.msgSender.opt.onSelect(t,i);
}
}),!1;
}
},
fillData:function(e){
var t=this.msgSender,i=this.type,n="msgSender_media_%s_%s".sprintf(t.gid,i);
$("."+this.info.selector).find(".jsMsgSendTab").hide().after('<div id="%s"></div>'.sprintf(n)),
t.select(this.index),this.msgSender.type=i,m[i]&&m[i]("#"+n,e),$("#"+n).append('<a href="javascript:;" class="link_dele jsmsgSenderDelBt" onclick="return false;">删除</a>');
},
clear:function(){
this.type;
return $("."+this.info.selector).html("");
},
getData:function(e){
var t=this.type,i="msgSender_media_%s_%s".sprintf(this.msgSender.gid,t),n=$("#"+i).data("opt");
if(n){
if(e){
n.type=t;
var s=n.data||{};
return $.extend(n,s);
}
return 10==t||11==t?{
type:t,
app_id:n.data.app_id
}:15==t?{
type:t,
app_id:n.app_id,
vid:n.content
}:{
type:t,
file_id:n.file_id
};
}
return!1;
},
isValidate:function(e){
var t=!!e;
if(e){
var i=e.type;
t=10==i||11==i||15==i?!(!e.type||!e.app_id):!(!e.type||!e.file_id);
}
return t||r.err("请添加素材"),t;
}
}),h={
wordlimit:600
},_=o.declare({
init:function(e,n){
var s=this,a=0;
e=$(e).show(),s.dom=e,s.gid=p++,s.opt=$.extend(!0,{},h,n);
var o=l,r=n&&n.acl||{};
o=t(o,r),s.infos=i(o),s.op={
1:new f(s),
2:new u(s,2),
3:new u(s,3),
4:new u(s,4),
6:new u(s,6),
7:new u(s,15),
9:new u(s,21),
10:new u(s,10),
11:new u(s,11),
15:new u(s,15),
16:new d(s),
21:new u(s,21)
},s.tab=e.tab({
index:a,
tabs:o,
select:function(){},
click:function(e,t,i,a){
return n.onClick&&n.onClick(e,t,i,a),s.op[a]&&s.op[a].click();
}
}),s._init(e,n),s.initEvent();
var c=n.data;
c?10==this.opt.data.type?c.data&&s.setData(c):s.setData(c):s.type=o[0]&&o[0].type?o[0].type:10;
},
initEvent:function(){
var e=this;
$(".jsMsgSenderPopBt").click(function(){
var t,i=$(this).data("type"),n=$(this).data("index"),a=$(".jsMsgSendTab[data-index="+n+"]");
(t=10==i||11==i||15==i?s.getAppmsg:3==i?s.getVoice:s.getFile)({
type:i,
begin:0,
count:10,
onSelect:function(t,i){
e.type=t,e.select(n);
var s="msgSender_media_%s_%s".sprintf(e.gid,t),o=2==t?' class="msgSender_media_classFixImg"':"";
a.hide().after('<div id="%s"%s></div>'.sprintf(s,o)),m[t]&&m[t]("#"+s,i),$("#"+s).data("opt",i),
$("#"+s).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
e.opt.onSelect&&e.opt.onSelect(t,i);
}
});
}),this.dom.on("click",".jsmsgSenderDelBt",function(){
$(this).parent().siblings(".jsMsgSendTab").show(),$(this).parent().remove();
var t;
$("#msgSendImgUploadBt").is(":visible")&&0==$("#msgSendImgUploadBt").parent().find("input[type=file]").length?t=2:$("#msgSendAudioUploadBt").is(":visible")&&0==$("#msgSendAudioUploadBt").parent().find("input[type=file]").length&&(t=3),
3==t&&$("#msgSendAudioUploadBt").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
}),2==t&&(c.uploadImageLibFile({
container:2==t?"#msgSendImgUploadBt":"#msgSendAudioUploadBt",
type:t,
doublewrite:!0,
groupid:1,
pick:{
multiple:!1
},
onComplete:function(i,n,s,a){
if(0==a.base_resp.ret){
var o,r="msgSender_media_%s_%s".sprintf(e.gid,t);
o=2==t?{
file_id:a.content,
source:"file"
}:{
file_id:a.content,
source:"file",
name:s.name,
play_length:s.size
},$(".jsMsgSendTab[data-type="+t+"]").hide().after('<div id="%s"></div>'.sprintf(r)),
m[t]&&m[t]("#"+r,o),$("#"+r).append('<a href="javascript:;" class="jsmsgSenderDelBt link_dele" data-type="%s" onclick="return false;">删除</a>'.sprintf(t)),
e.opt.onSelect&&e.opt.onSelect(t,o);
}
},
onAllComplete:function(){
r.suc("上传成功");
}
}),function(){
$("#msgSendImgUploadBt").trigger("click");
}.delay(.1));
});
},
setData:function(e){
if(e){
var t=this,i=null,n=e.type||10;
t.type=n,(i=t.op[n])&&i.fillData(e);
}
},
_init:function(e){
this.dom=e,this.emotionEditor=new n($(".js_textArea",e),{
wordlimit:this.opt.wordlimit,
linebreak:!0
});
},
getData:function(e){
if(this.type){
var t=this.op[this.type].getData(e);
return{
error:!this.isValidate(),
data:t
};
}
return{
error:!0
};
},
getArea:function(e){
return this.dom.find("."+this.infos[e].selector);
},
getTabs:function(){
return this.tab.getTabs();
},
isValidate:function(){
var e=this.type&&this.op[this.type].getData();
return this.type&&this.op[this.type].isValidate(e);
},
clear:function(){
return this.type&&this.op[this.type].clear();
},
select:function(e){
return this.tab.select(e);
}
});
return _;
});define("ivr/ivr_cgi.js", [ "common/wx/Cgi.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
replySave: "/advanced/setreplyrule?cgi=setreplyrule&fun=save&t=ajax-response",
replyDel: "/advanced/setreplyrule?cgi=setreplyrule&fun=del&t=ajax-response",
replyList: "/advanced/replyrulepage?t=ajax-ivrsetting-detail&replytype=smartreply&sec=reply&s=smartreply&lang=zh_CN&action=showrule"
}, s = e("common/wx/Cgi.js"), o = e("common/wx/Tips.js");
return {
replySave: function(e, t, n) {
s.post({
url: wx.url(i.replySave),
data: e,
mask: !1,
error: function() {
o.err("保存失败");
},
complete: function() {
n && n();
}
}, function(e) {
switch (+e.base_resp.ret) {
case 0:
o.suc("保存成功"), t && t(e);
break;
case -1103:
o.err("关键字不能为空");
break;
case -1110:
o.err("规则数超过限制");
break;
case -1111:
o.err("消息中可能含有具备安全风险的链接，请检查");
break;
default:
o.err("保存失败");
}
});
},
replyDel: function(e, t, n) {
s.post({
url: wx.url(i.replyDel),
data: {
ruleid: e,
replytype: t
},
mask: !1,
error: function() {
o.err("删除失败");
}
}, function(e) {
o.suc("删除成功"), n && n(e);
});
},
getReplyList: function(e, t, n) {
s.post({
url: wx.url(i.replyList),
data: {
ruleid: e
},
error: function() {
n && n();
}
}, function(e) {
t && t(e);
});
}
};
} catch (u) {
wx.jslog({
src: "ivr/ivr_cgi.js"
}, u);
}
});