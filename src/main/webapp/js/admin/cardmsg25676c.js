define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
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
});define("common/qq/events.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
function i(e) {
e === !0 ? this.data = window.wx.events || {} : this.data = {};
}
i.prototype = {
on: function(e, t) {
return this.data[e] = this.data[e] || [], this.data[e].push(t), this;
},
off: function(e, t) {
this.data[e] && this.data[e].length > 0 && (t && typeof t == "function" ? $.each(this.data[e], function(n, r) {
r === t && this.data[e].splice(n, 1);
}) : this.data[e] = []);
},
trigger: function(e) {
var t = arguments;
this.data[e] && this.data[e].length > 0 && $.each(this.data[e], function(e, n) {
var r = n.apply(this, Array.prototype.slice.call(t, 1));
if (r === !1) return !1;
});
}
}, n.exports = function(e) {
return new i(e);
};
} catch (s) {
wx.jslog({
src: "common/qq/events.js"
}, s);
}
});define("common/lib/MockJax.js", [], function(e, t, n) {
try {
var r = +(new Date);
(function(e) {
function t(t) {
window.DOMParser == undefined && window.ActiveXObject && (DOMParser = function() {}, DOMParser.prototype.parseFromString = function(e) {
var t = new ActiveXObject("Microsoft.XMLDOM");
return t.async = "false", t.loadXML(e), t;
});
try {
var n = (new DOMParser).parseFromString(t, "text/xml");
if (!e.isXMLDoc(n)) throw "Unable to parse XML";
var r = e("parsererror", n);
if (r.length == 1) throw "Error: " + e(n).text();
return n;
} catch (i) {
var s = i.name == undefined ? i : i.name + ": " + i.message;
return e(document).trigger("xmlParseError", [ s ]), undefined;
}
}
function n(t, n, r) {
(t.context ? e(t.context) : e.event).trigger(n, r);
}
function r(t, n) {
var i = !0;
return typeof n == "string" ? e.isFunction(t.test) ? t.test(n) : t == n : (e.each(t, function(s) {
if (n[s] === undefined) return i = !1, i;
typeof n[s] == "object" ? i = i && r(t[s], n[s]) : e.isFunction(t[s].test) ? i = i && t[s].test(n[s]) : i = i && t[s] == n[s];
}), i);
}
function i(t, n) {
if (e.isFunction(t)) return t(n);
if (e.isFunction(t.url.test)) {
if (!t.url.test(n.url)) return null;
} else {
var i = t.url.indexOf("*");
if (t.url !== n.url && i === -1 || !(new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".+"))).test(n.url)) return null;
}
return t.data && n.data && !r(t.data, n.data) ? null : t && t.type && t.type.toLowerCase() != n.type.toLowerCase() ? null : t;
}
function s(n, r, i) {
var s = function(s) {
return function() {
return function() {
var s;
this.status = n.status, this.statusText = n.statusText, this.readyState = 4, e.isFunction(n.response) && n.response(i), r.dataType == "json" && typeof n.responseText == "object" ? this.responseText = JSON.stringify(n.responseText) : r.dataType == "xml" ? typeof n.responseXML == "string" ? (this.responseXML = t(n.responseXML), this.responseText = n.responseXML) : this.responseXML = n.responseXML : this.responseText = n.responseText;
if (typeof n.status == "number" || typeof n.status == "string") this.status = n.status;
typeof n.statusText == "string" && (this.statusText = n.statusText), s = this.onreadystatechange || this.onload, e.isFunction(s) ? (n.isTimeout && (this.status = -1), s.call(this, n.isTimeout ? "timeout" : undefined)) : n.isTimeout && (this.status = -1);
}.apply(s);
};
}(this);
n.proxy ? v({
global: !1,
url: n.proxy,
type: n.proxyType,
data: n.data,
dataType: r.dataType === "script" ? "text/plain" : r.dataType,
complete: function(e) {
n.responseXML = e.responseXML, n.responseText = e.responseText, n.status = e.status, n.statusText = e.statusText, this.responseTimer = setTimeout(s, n.responseTime || 0);
}
}) : r.async === !1 ? s() : this.responseTimer = setTimeout(s, n.responseTime || 50);
}
function o(t, n, r, i) {
return t = e.extend(!0, {}, e.mockjaxSettings, t), typeof t.headers == "undefined" && (t.headers = {}), t.contentType && (t.headers["content-type"] = t.contentType), {
status: t.status,
statusText: t.statusText,
readyState: 1,
open: function() {},
send: function() {
i.fired = !0, s.call(this, t, n, r);
},
abort: function() {
clearTimeout(this.responseTimer);
},
setRequestHeader: function(e, n) {
t.headers[e] = n;
},
getResponseHeader: function(e) {
if (t.headers && t.headers[e]) return t.headers[e];
if (e.toLowerCase() == "last-modified") return t.lastModified || (new Date).toString();
if (e.toLowerCase() == "etag") return t.etag || "";
if (e.toLowerCase() == "content-type") return t.contentType || "text/plain";
},
getAllResponseHeaders: function() {
var n = "";
return e.each(t.headers, function(e, t) {
n += e + ": " + t + "\n";
}), n;
}
};
}
function u(e, t, n) {
a(e), e.dataType = "json";
if (e.data && y.test(e.data) || y.test(e.url)) {
l(e, t, n);
var r = /^(\w+:)?\/\/([^\/?#]+)/, i = r.exec(e.url), s = i && (i[1] && i[1] !== location.protocol || i[2] !== location.host);
e.dataType = "script";
if (e.type.toUpperCase() === "GET" && s) {
var o = f(e, t, n);
return o ? o : !0;
}
}
return null;
}
function a(e) {
if (e.type.toUpperCase() === "GET") y.test(e.url) || (e.url += (/\?/.test(e.url) ? "&" : "?") + (e.jsonp || "callback") + "=?"); else if (!e.data || !y.test(e.data)) e.data = (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?";
}
function f(t, n, r) {
var i = r && r.context || t, s = null;
return n.response && e.isFunction(n.response) ? n.response(r) : typeof n.responseText == "object" ? e.globalEval("(" + JSON.stringify(n.responseText) + ")") : e.globalEval("(" + n.responseText + ")"), c(t, i, n), h(t, i, n), e.Deferred && (s = new e.Deferred, typeof n.responseText == "object" ? s.resolveWith(i, [ n.responseText ]) : s.resolveWith(i, [ e.parseJSON(n.responseText) ])), s;
}
function l(e, t, n) {
var r = n && n.context || e, i = e.jsonpCallback || "jsonp" + b++;
e.data && (e.data = (e.data + "").replace(y, "=" + i + "$1")), e.url = e.url.replace(y, "=" + i + "$1"), window[i] = window[i] || function(n) {
data = n, c(e, r, t), h(e, r, t), window[i] = undefined;
try {
delete window[i];
} catch (s) {}
head && head.removeChild(script);
};
}
function c(e, t, r) {
e.success && e.success.call(t, r.responseText || "", status, {}), e.global && n(e, "ajaxSuccess", [ {}, e ]);
}
function h(t, r) {
t.complete && t.complete.call(r, {}, status), t.global && n("ajaxComplete", [ {}, t ]), t.global && !--e.active && e.event.trigger("ajaxStop");
}
function p(t, n) {
var r, s, a;
typeof t == "object" ? (n = t, t = undefined) : n.url = t, s = e.extend(!0, {}, e.ajaxSettings, n);
for (var f = 0; f < m.length; f++) {
if (!m[f]) continue;
a = i(m[f], s);
if (!a) continue;
g.push(s), e.mockjaxSettings.log(a, s);
if (s.dataType === "jsonp") if (r = u(s, a, n)) return r;
return a.cache = s.cache, a.timeout = s.timeout, a.global = s.global, d(a, n), function(t, n, i, s) {
r = v.call(e, e.extend(!0, {}, i, {
xhr: function() {
return o(t, n, i, s);
}
}));
}(a, s, n, m[f]), r;
}
return v.apply(e, [ n ]);
}
function d(e, t) {
if (!(e.url instanceof RegExp)) return;
if (!e.hasOwnProperty("urlParams")) return;
var n = e.url.exec(t.url);
if (n.length === 1) return;
n.shift();
var r = 0, i = n.length, s = e.urlParams.length, o = Math.min(i, s), u = {};
for (r; r < o; r++) {
var a = e.urlParams[r];
u[a] = n[r];
}
t.urlParams = u;
}
var v = e.ajax, m = [], g = [], y = /=\?(&|$)/, b = (new Date).getTime();
e.extend({
ajax: p
}), e.mockjaxSettings = {
log: function(t, n) {
if (t.logging === !1 || typeof t.logging == "undefined" && e.mockjaxSettings.logging === !1) return;
if (window.console && console.log) {
var r = "MOCK " + n.type.toUpperCase() + ": " + n.url, i = e.extend({}, n);
if (typeof console.log == "function") console.log(r, i); else try {
console.log(r + " " + JSON.stringify(i));
} catch (s) {
console.log(r);
}
}
},
logging: !0,
status: 200,
statusText: "OK",
responseTime: 500,
isTimeout: !1,
contentType: "text/plain",
response: "",
responseText: "",
responseXML: "",
proxy: "",
proxyType: "GET",
lastModified: null,
etag: "",
headers: {
etag: "IJF@H#@923uf8023hFO@I#H#",
"content-type": "text/plain"
}
}, e.mockjax = function(e) {
var t = m.length;
return m[t] = e, t;
}, e.mockjaxClear = function(e) {
arguments.length == 1 ? m[e] = null : m = [], g = [];
}, e.mockjax.handler = function(e) {
if (arguments.length == 1) return m[e];
}, e.mockjax.mockedAjaxCalls = function() {
return g;
};
})(jQuery);
} catch (i) {
wx.jslog({
src: "common/lib/MockJax.js"
}, i);
}
});define("common/wx/cgiReport.js", [ "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js");
t.error = function(e, t) {
var n = 11;
switch (e) {
case "timeout":
n = 7;
break;
case "error":
n = 8;
break;
case "notmodified":
n = 9;
break;
case "parsererror":
n = 10;
}
t.data.lang && delete t.data.lang, t.data.random && delete t.data.random, t.data.f && delete t.data.f, t.data.ajax && delete t.data.ajax, t.data.token && delete t.data.token, $.ajax({
url: "/misc/jslog?1=1",
data: {
content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
uin: wx.data.uin,
useragent: window.navigator.userAgent,
page: location.href,
url: t.url,
param: $.param(t.data).substr(0, 50),
info: e
}),
id: n,
level: "error"
},
type: "POST"
}), $.ajax({
url: "/misc/jslog?1=1",
data: {
content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
uin: wx.data.uin,
useragent: window.navigator.userAgent,
page: location.href,
url: t.url,
param: $.param(t.data).substr(0, 50),
info: e
}),
id: 6,
level: "error"
},
type: "POST"
}), e == "timeout" && i.err("你的网络环境较差，请稍后重试");
};
} catch (s) {
wx.jslog({
src: "common/wx/cgiReport.js"
}, s);
}
});define("common/qq/mask.js", [ "biz_web/lib/spin.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("biz_web/lib/spin.js");
var i = 0, s = '<div class="mask"></div>';
function o(e) {
if (this.mask) this.mask.show(); else {
var t = "body";
e && !!e.parent && (t = $(e.parent)), this.mask = $(s).appendTo(t), this.mask.id = "wxMask_" + ++i, this.mask.spin("flower");
}
if (e) {
if (e.spin === !1) return this;
this.mask.spin(e.spin || "flower");
}
return this;
}
o.prototype = {
show: function() {
this.mask.show();
},
hide: function() {
this.mask.hide();
},
remove: function() {
this.mask.remove();
}
}, t.show = function(e) {
return new o(e);
}, t.hide = function() {
$(".mask").hide();
}, t.remove = function() {
$(".mask").remove();
};
} catch (u) {
wx.jslog({
src: "common/qq/mask.js"
}, u);
}
});define("tpl/popover.html.js",[],function(){
return'<div class="popover {className}">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n		<!--#0001#-->\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n        <!--%0001%-->\n\n        <div class="popover_bar">{each buttons as bt index}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>{if index < buttons.length-1}&nbsp;{/if}{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i> \n</div>\n';
});define("biz_web/utils/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
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
fileSingleSizeLimit:5242880
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
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,jpeg,jpg,gif",
mimeTypes:"image/*"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/*"
},
fileSingleSizeLimit:5242880
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
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/*"
},
fileSingleSizeLimit:31457280
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
width:1280,
height:1e8,
quality:90,
afterCompressSizeLimit:2097152,
compressSize:0,
resizeSize:2097152,
maxResolution:6e6,
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
},s=c[e.type]||c[2],e=$.extend(!0,{},d,l,s,e),0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
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
a.err("上传图片高度（像素）与宽度（像素）的乘积不能超过600万");
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

case"F_EXCEED_COMPRESS_SIZE":
a.err("图片压缩后过大，请缩小图片尺寸再试"),u(42);
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
mediaFile:b(s+"/cgi-bin/filetransfer?action=bizmedia"),
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
uploadTmpFileWithCheck:function(e){
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
return b(s+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(s+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(s+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(s+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/media/appmsg.js", [ "widget/media.css", "common/wx/time.js", "tpl/media/appmsg.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/media.css");
var i = wx.T, s = e("common/wx/time.js"), o = e("tpl/media/appmsg.html.js"), u = e("common/qq/Class.js"), a = u.declare({
init: function(e) {
if (!e || !e.container) return;
e.data = e.data || $.extend({}, e);
var t = e.data, n = t.multi_item || [], r = n.length, i = null, u = [];
if (r <= 0) return;
i = n[0];
for (var a = 1; a < r; ++a) u.push(n[a]);
var f = {
id: t.app_id,
type: e.type,
file_id: t.file_id,
time: t.create_time ? s.timeFormat(t.create_time) : "",
isMul: r > 1,
first: i,
list: u,
token: wx.data.t,
showEdit: e.showEdit || !1,
showMask: e.showMask || !1
};
$(e.container).html(wx.T(o, f)).data("opt", e), this.renderData = f;
},
getData: function() {
return this.renderData;
}
});
return a;
} catch (f) {
wx.jslog({
src: "common/wx/media/appmsg.js"
}, f);
}
});define("common/wx/tooltip.js", [ "tpl/tooltip.html.js", "widget/tooltip.css" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("tpl/tooltip.html.js");
e("widget/tooltip.css");
var s = {
dom: "",
content: "",
position: {
x: 0,
y: 0
}
}, o = function(e) {
this.options = e = $.extend(!0, {}, s, e), this.$dom = $(this.options.dom), this.init();
};
o.prototype = {
constructor: o,
init: function() {
var e = this;
e.pops = [], e.$dom.each(function() {
var t = $(this), n = t.data("tooltip"), r = $(template.compile(i)(n ? $.extend(!0, {}, e.options, {
content: n
}) : e.options));
e.pops.push(r), $("body").append(r), r.css("display", "none"), t.on("mouseenter", function() {
var n = t.offset();
r.css({
top: n.top - (e.options.position.y || 0) - r.height(),
left: n.left + t.width() / 2 - r.width() / 2 + (e.options.position.x || 0)
}), r.show();
}).on("mouseleave", function() {
r.hide();
}), t.data("tooltip_pop", r);
});
},
show: function() {
var e = this, t = 0, n = e.pops.length;
for (var t = 0; t < n; t++) e.pops[t].show();
},
hide: function() {
var e = this, t = 0, n = e.pops.length;
for (var t = 0; t < n; t++) e.pops[t].hide();
}
}, n.exports = o;
} catch (u) {
wx.jslog({
src: "common/wx/tooltip.js"
}, u);
}
});define("common/wx/media/cardmsg.js",["widget/media.css","common/wx/time.js","tpl/media/cardmsg.html.js","biz_common/utils/norefererimg.js","common/qq/Class.js","cardticket/send_card.js","common/wx/Tips.js"],function(t){
"use strict";
t("widget/media.css");
var e=wx.T,i=(t("common/wx/time.js"),t("tpl/media/cardmsg.html.js")),s=t("biz_common/utils/norefererimg.js"),n=t("common/qq/Class.js"),a=t("cardticket/send_card.js"),d=t("common/wx/Tips.js"),r=n.declare({
type:16,
init:function(t){
this.opt=t.opt,this.info=t.infos[this.type],this.index=this.info&&this.info.index,
this.data=this.opt.data,this.msgSender=t;
},
getData:function(){
var t=$.extend(!0,{
cardid:this.data.id,
cardnum:this.data.cardnum
},this.data);
return t.cardtype=t.type,t.type=this.type,t;
},
click:function(){
var t=this;
return this.send_card=new a({
multi:!1,
param:{
need_member_card:1
},
selectComplete:function(e,i){
return e?(e.cardnum=i,t.fillData(e),void t.msgSender.select(t.index)):void d.err("请选择卡券");
},
source:"直接群发卡券"
}),this.send_card.show(),!1;
},
fillData:function(t){
this.data=t,this.msgSender.type=this.type;
var n=e(i,t),a=$("."+this.info.selector).html(n),d=a.find(".js_logourl");
d.length&&s({
img:d[0]
}),this.msgSender.select(this.index),a.wrapInner("<div/>").children().append('<a href="javascript:;" class="link_dele" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">删除</a>');
},
isValidate:function(){
return this.data.id?!0:(d.err("请选择卡券"),!1);
}
});
return r;
});