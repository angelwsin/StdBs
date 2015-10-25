define("homepage/plugins/plugin1.js",["page/homepage/plugins/plugin1.css","tpl/homepage/plugins/plugin1.html.js","tpl/homepage/plugins/plugin1_edit.html.js","homepage/plugins/base.js","common/wx/wxt.js","homepage/importAppmsgList.js","common/wx/Tips.js"],function(t){
"use strict";
t("page/homepage/plugins/plugin1.css");
var i=t("tpl/homepage/plugins/plugin1.html.js"),e=t("tpl/homepage/plugins/plugin1_edit.html.js"),n=t("homepage/plugins/base.js"),p=n.base,s=n.inherit,o=t("common/wx/wxt.js"),g=t("homepage/importAppmsgList.js"),r=t("common/wx/Tips.js"),l={
plugin1:{
appmsg_list:[{
title:"封面示例",
cover:"http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6gnzTDiaOx5oOeMKOibNZ95hsY9aVozutJUSvqUvRmTxY2OqRvsTFeIyQ/640",
aid:"0",
link:"javascript:void(0);",
digest:"摘要示例"
},{
title:"封面示例",
cover:"http://mmbiz.qpic.cn/mmbiz/Q3auHgzwzM5wLlGTou7JL0oFS9yZGIK6gnzTDiaOx5oOeMKOibNZ95hsY9aVozutJUSvqUvRmTxY2OqRvsTFeIyQ/640",
aid:"0",
link:"javascript:void(0);",
digest:"摘要示例"
}]
}
},a=function(t){
var i=this;
i.opt=t,p.apply(this,arguments),this._initEditArea();
};
return s(a,p),a.prototype.tpl=i,a.prototype.edit_tpl=e,a.prototype.default_json=l,
a.prototype._initEditArea=function(){
var t=this.opt,i=this,e=t.idx,n=$("#js_plugin_edit_area_"+e),p=(n.find(".js_appmsg_list"),
[]);
i.renderjson.plugin1&&i.renderjson.plugin1.appmsg_list&&(p=i.renderjson.plugin1.appmsg_list),
i.isSorting=!1,i._importAppmsgList=new g({
container:n.find(".js_import_appmsglist"),
maxNum:3,
title:"封面文章",
list:p,
callback:function(t){
var e=$.extend(!0,{},i.default_json);
t&&t.length>0?(e={
plugin1:{
appmsg_list:t
}
},i.renderjson=e):i.renderjson={
plugin1:{
appmsg_list:[]
}
},i._renderTpl(e);
},
startSort:function(){
i.isSorting=!0;
},
endSort:function(){
i.isSorting=!1;
}
});
},a.prototype._getSelectList=function(){
var t=!!this.renderjson.plugin1&&this.renderjson.plugin1.appmsg_list;
if(t&&t.length>0){
for(var i=[],e=0,n=t.length;n>e;++e)i.push(t[e].aid);
return i;
}
return[];
},a.prototype.getRenderJson=function(t){
return t&&t.plugin1&&t.plugin1.appmsg_list&&t.plugin1.appmsg_list.length>0?t:$.extend(!0,{},this.default_json);
},a.prototype.getEditData=function(){
if(this.isSorting)return r.err("排序完成后才能发布"),!1;
var t=this._getSelectList();
return t.length>0?{
aid_list:t
}:(r.err("请至少选择一篇文章"),!1);
},a.getRenderHTML=function(t){
var e="plugin",n={};
n[e]=t;
var p=i.replace(/<name>/gi,e);
return o.compile(p)(n);
},a;
});define("tpl/advanced/homepage_list.html.js",[],function(){
return'{each list as item}\n<div class="col_tpl js_item" data-name="{item.name}" data-hid="{item.hid}" data-sn="{item.signature}">\n    <div class="msg_card">\n        <div class="msg_card_inner">\n            <div class="msg_card_bd">\n                <h4 class="msg_card_title">{item.name}</h4>\n                <div class="msg_card_info">\n                    <strong class="msg_card_info_meta">更新于{item.update_time}</strong>\n                </div>\n                <div class="msg_card_extra_info">\n                    <div class="simulator">\n                        <div class="simulator_hd">\n                            <h4 class="title">{nick_name}</h4>\n                        </div>\n                        <div class="simulator_bd">\n                            {=item.subhtml}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="homepage_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n</div>\n{/each}\n';
});define("tpl/advanced/appmsg_list.html.js",[],function(){
return'{each data as item}\n<tr data-link="{item.link}" data-title="{item.title}">\n    <td class="table_cell">\n        <label class="frm_radio_label">\n            <i class="icon_radio"></i>\n            <span class="lbl_content">{item.title}</span>\n            <input type="radio" name="hello" class="frm_radio">\n        </label>\n    </td>\n    <td class="table_cell tr date"> {item.date}</td>\n</tr>\n{/each}\n';
});define("tpl/advanced/menu_link_dialog.html.js",[],function(){
return'<div>\n<div class="title_tab js_tab"></div>\n<div class="menu_tab_content">\n    <!--BEGIN 链接\n    <div class="link_insertion" style="display: none;">\n        <div class="frm_control_group">\n            <label class="frm_label" for="">请输入地址：</label>\n        <span class="frm_input_box">\n            <input class="frm_input" type="text"/>\n        </span>\n        </div>\n    </div>\n    END 链接-->\n    <!--BEGIN 素材库-->\n    <div class="media_lib js_content js_appmsg">\n        <div class="search_wrapper">\n            <span class="frm_input_box search append">\n                <a href="javascript:void(0);" class="frm_input_append js_search_btn" onclick="return false;">\n                    <i class="icon16_common search_gray">\n                        搜索\n                    </i>\n                    &nbsp;\n                </a>\n                <input type="text" placeholder="标题/作者/摘要" value="" class="frm_input js_search">\n            </span>\n        </div>\n        <div class="loading js_loading">\n            <i class="icon_loading_small white"></i>\n        </div>\n        <div class="table_wrp js_appmsg_list js_list">\n            <table class="table" cellspacing="0">\n                <thead class="thead">\n                    <tr>\n                        <td class="table_cell">标题</td>\n                        <td class="table_cell">发布日期</td>\n                    </tr>\n                </thead>\n                <tbody class="tbody"></tbody>\n            </table>\n        </div>\n        <div class="pagination_wrp js_pagebar"></div>\n    </div>\n    <!--END 素材库-->\n    <!--BEGIN 历史消息-->\n    <div class="history_msg js_content js_history">\n        <div class="preview_area">\n            <p class="desc">公众帐号历史消息列表示例</p>\n        </div>\n        <div class="form_area">\n            <label class="frm_checkbox_label">\n                <i class="icon_checkbox"></i>\n                <span class="lbl_content">跳转到历史消息列表</span>\n                <input type="checkbox" class="frm_checkbox">\n            </label>\n        </div>\n    </div>\n    <!--END 历史消息-->\n    <!--BEGIN 页面模板-->\n    <div class="homepage js_content js_homepage">\n        <div class="loading js_loading" style="display:none;">\n            <i class="icon_loading_small white"></i>\n        </div>\n        <div class="js_homepage_list js_list"></div>\n    </div>\n    <!--END 页面模板-->\n</div>\n</div>\n';
});define("common/wx/time.js",[],function(){
"use strict";
function e(e){
var t=new Date(1e3*e),r=new Date,g=t.getTime(),a=r.getTime(),u=864e5;
return u>a-g&&r.getDate()==t.getDate()?"%s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):2*u>a-g&&new Date(1*t+u).getDate()==r.getDate()?"昨天 %s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):6*u>=a-g?"%s %s:%s".sprintf(s[t.getDay()],n(t.getHours()),n(t.getMinutes())):t.getFullYear()==r.getFullYear()?"%s月%s日".sprintf(n(t.getMonth()+1),n(t.getDate())):"%s年%s月%s日".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()));
}
function t(e){
var t=new Date(1e3*e);
return"%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()),n(t.getHours()),n(t.getMinutes()),n(t.getSeconds()));
}
function r(e,t){
var r=["日","一","二","三","四","五","六"],n=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,g(e.getFullYear()%100,2)).replace(/mm|MM/,g(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,g(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,g(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,g(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,g(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,r[e.getDay()]);
return n;
}
function g(e,t){
for(var r=0,g=t-(e+"").length;g>r;r++)e="0"+e;
return e+"";
}
var n=function(e){
return e+="",e.length>=2?e:"0"+e;
},s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
return{
timeFormat:e,
getFullTime:t,
formatDate:r
};
});define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage;
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});define("common/wx/top.js",["tpl/top.html.js"],function(t,e,a){
"use strict";
function i(t,e,a){
return this.dom=$(t),this.dom.addClass("title_tab"),e&&"string"==typeof e&&(e=[{
name:"",
url:"javascript:;",
className:"selected"
}]),$.each(e,function(t,e){
e.url=e.url&&[e.url,wx.data.param].join("")||"javascript:;";
}),this.dom.html(template.compile(n)({
data:e
})),a&&a.render&&"function"==typeof a.render?$.each(this.dom.find("li"),function(t,i){
a.render.apply($(i),[e[t],a&&a.data]);
}):this.dom.html(template.compile(n)({
data:e
})),this.dom.on("click",".top_item",function(){
$(this).addClass("selected").siblings().removeClass("selected");
}),this;
}
var n=t("tpl/top.html.js"),s=wx.acl;
i.prototype.selected=function(t){
this.dom.find(".js_top").removeClass("selected"),"number"==typeof t?this.dom.find(".js_top:eq("+t+")").addClass("selected"):this.dom.find(".js_top[data-id="+t+"]").addClass("selected");
},i.DATA={
setting:[{
id:"info",
name:"帐号详情",
url:"/cgi-bin/settingpage?t=setting/index&action=index"
},{
id:"function",
name:"功能设置",
url:"/cgi-bin/settingpage?t=setting/function&action=function"
}],
mass:[{
id:"send",
name:"新建群发消息",
url:"/cgi-bin/masssendpage?t=mass/send"
},{
id:"jurisdiction",
name:"授权申请",
acl:s&&s.msg_acl&&s.msg_acl.can_use_reprintapply_list,
url:"/cgi-bin/copyrightlib?action=reprint_article&begin=0&count=10&auth_status=0&lang=zh_CN"
},{
id:"list",
name:"已发送",
url:"/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"
}],
message:[{
id:"total",
name:"全部消息",
url:"/cgi-bin/message?t=message/list&count=20&day=7"
},{
id:"star",
name:"已收藏的消息",
url:"/cgi-bin/message?t=message/list&count=20&action=star"
},{
id:"search",
name:"搜索结果"
}],
media:[{
id:"media11",
name:"商品消息",
acl:s&&s.msg_acl&&s.msg_acl.can_commodity_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
},{
id:"media10",
name:"图文消息",
acl:s&&s.msg_acl&&s.msg_acl.can_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
},{
id:"media2",
name:"图片库",
acl:s&&s.msg_acl&&s.msg_acl.can_image_msg,
url:"/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
},{
id:"media3",
name:"语音",
acl:s&&s.msg_acl&&s.msg_acl.can_voice_msg,
url:"/cgi-bin/filepage?type=3&begin=0&count=21&t=media/list"
},{
id:"media15",
name:"视频",
acl:s&&s.msg_acl&&s.msg_acl.can_video_msg,
url:"/cgi-bin/appmsg?begin=0&count=9&t=media/appmsg_list&type=15&action=list"
}],
business:[{
id:"overview",
name:"数据概览",
url:"/merchant/business?t=business/overview&action=overview"
},{
id:"order",
name:"订单流水",
url:"/merchant/business?t=business/order&action=order"
},{
id:"info",
name:"商户信息",
url:"/merchant/business?t=business/info&action=info"
},{
id:"test",
name:"支付测试",
url:"/merchant/business?t=business/whitelist&action=whitelist"
},{
id:"rights",
name:"维权仲裁",
url:"/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
},{
id:"course",
name:"使用教程",
url:"/merchant/business?t=business/course&action=course"
}],
user:[{
id:"useradmin",
name:"已关注",
url:"/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
}],
statistics:{
user:[{
id:"summary",
name:"用户增长",
url:"/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
},{
id:"attr",
name:"用户属性",
url:"/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
}],
article:[{
id:"detail",
name:"图文群发",
url:"/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
},{
id:"analyse",
name:"图文统计",
url:"/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
}],
message:[{
id:"message",
name:"消息分析",
url:"/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
},{
id:"key",
name:"消息关键词",
url:"/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
}],
"interface":[{
id:"interface",
name:"接口分析",
url:"/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
}]
},
notification:[{
id:"notification",
name:"通知中心",
url:"/cgi-bin/frame?t=notification/index_frame"
}],
templateMessage:[{
id:"my_template",
name:"我的模板",
url:"/advanced/tmplmsg?action=list&t=tmplmsg/list"
},{
id:"template_message",
name:"模板库",
url:"/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
}],
assistant:[{
id:"mphelper",
name:"公众号助手",
url:"/misc/assistant?t=setting/mphelper&action=mphelper"
},{
id:"warning",
name:"接口告警",
url:"/misc/assistant?t=setting/warning&action=warning"
}],
shop:[{
id:"shopoverview",
name:"小店概况",
url:"/merchant/merchantstat?t=shop/overview&action=getoverview"
},{
id:"addGoods",
name:"添加商品",
url:"/merchant/goods?type=11&t=shop/precreate",
target:"_blank"
},{
id:"goodsManagement",
name:"商品管理",
url:"/merchant/goodsgroup?t=shop/category&type=1"
},{
id:"shelfManagement",
name:"货架管理",
url:"/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
},{
id:"orderManagement",
name:"订单管理",
url:"/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
},{
id:"deliverylist",
name:"运费模板管理",
url:"/merchant/delivery?action=getlist&t=shop/delivery_list"
},{
id:"images",
name:"图片库",
url:"/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
}],
adClient:[{
id:"adclientreport",
name:"报表统计",
url:"/merchant/ad_client_report?t=ad_system/client_report&action=list"
},{
id:"adclientmanage",
name:"广告管理",
url:"/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
},{
id:"materialmanage",
name:"推广页管理",
url:"/merchant/ad_material?t=material/list&action=get_material_list"
},{
id:"adclientpay",
name:"财务管理",
url:"/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
},{
id:"adservice",
name:"广告服务商",
acl:s&&s.ad_system&&s.ad_system.can_use_sp,
url:"/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
}],
adHost:[{
id:"adhostreport",
name:"报表统计",
url:"/merchant/ad_host_report?t=ad_system/host_report"
},{
id:"adhostmanage",
name:"流量管理",
url:"/merchant/ad_host_manage?t=ad_system/host_manage"
},{
id:"adhostpay",
name:"财务管理",
url:"/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
}],
advanced:[{
id:"dev",
name:"配置项",
url:"/advanced/advanced?action=dev&t=advanced/dev"
},{
id:"group-alert",
name:"接口报警",
url:"/advanced/advanced?action=alarm&t=advanced/alarm"
}],
cardticket:[{
id:"cardmgr",
name:"卡券管理",
url:"/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
},{
id:"permission",
name:"卡券核销",
url:"/merchant/carduse?action=listchecker&t=cardticket/permission"
},{
id:"carduse",
name:"核销记录",
url:"/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
},{
id:"cardreport",
name:"数据报表",
url:"/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
}],
infringement:[{
id:"infringement",
name:"我要投诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=1"
},{
id:"antiinfringement",
name:"我要申诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=2"
},{
id:"list",
name:"提交记录",
url:"/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1"
}],
scan:[{
id:"overview",
name:"数据概况",
url:"/merchant/scandataoverview?action=keydata"
},{
id:"product_list",
name:"商品管理",
url:"/merchant/scanproductlist?action=list&page=1&status=1"
},{
id:"barcode_list",
name:"资质管理",
url:"/merchant/scanqualification?action=getbusinesscategorylist&offset=0&limit=16"
}],
rumor:[{
id:"list",
name:"谣言池",
url:"/misc/rumor?action=rumorlist&t=rumor/list"
},{
id:"result",
name:"辟谣结果",
url:"/misc/rumor?action=summarylist&t=rumor/result"
}],
reward:[{
id:"list",
name:"数据概况",
url:"/merchant/rewardstat?action=getoverview&t=reward/overview"
},{
id:"invite",
name:"邀请",
url:"/merchant/invitation?action=info&t=reward/invitation"
},{
id:"setting",
name:"赞赏设置",
url:"/merchant/reward?action=rewardsetting"
}],
discuss:[{
id:"list_latest",
name:"评论列表",
url:"/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7"
},{
id:"index",
name:"文章管理",
url:"/misc/appmsgcomment?action=list_app_msg&begin=0&count=10"
}]
},s&&s.ad_system&&s.ad_system.can_use_new_ad&&(i.DATA.adClient[0].url="/cgi-bin/frame?nav=10026&t=ad_system/client_report_frame",
i.DATA.adClient[1].url="/cgi-bin/frame?nav=10026&t=ad_system/promotion_list_frame"),
s&&s.merchant_acl&&s.merchant_acl.can_use_account_manage&&i.DATA.adClient.push({
id:"adclientaccountmanage",
name:"账户管理",
acl:s&&s.ad_system&&s.ad_system.can_use_account_manage,
url:"/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
}),s&&s.merchant_acl&&s.merchant_acl.can_use_pay_tmpl&&i.DATA.templateMessage.push({
id:"template_pay_list",
name:"支付模板消息",
url:"/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
}),i.RENDER={
setting:function(t,e){
"meeting"==t.id&&15!=e.role&&this.remove();
},
message:function(t,e){
"search"!=t.id||e&&"search"==e.action||this.remove();
},
assistant:function(t,e){
"warning"!=t.id||e&&0!=e.have_service_package||this.remove();
},
reward:function(t,e){
"invite"!=t.id||e&&0!=e.invite_authority||this.remove();
}
},a.exports=i;
});define("biz_web/lib/spin.js", [], function(e, t, n) {
try {
var r = +(new Date), i = function() {
function e(e, t) {
var n = ~~((e[a] - 1) / 2);
for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
}
function t(t) {
var n = document.createElement(t || "div");
return e(arguments, function(e, t) {
n[e] = t;
}), n;
}
function n(e, t, r) {
return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
}
function r(e, t) {
var n = [ p, t, ~~(e * 100) ].join("-"), r = "{" + p + ":" + e + "}", i;
if (!H[n]) {
for (i = 0; i < P[a]; i++) try {
j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
} catch (s) {}
H[n] = 1;
}
return n;
}
function i(e, t) {
var n = e[m], r, i;
if (n[t] !== undefined) return t;
t = t.charAt(0).toUpperCase() + t.slice(1);
for (i = 0; i < P[a]; i++) {
r = P[i] + t;
if (n[r] !== undefined) return r;
}
}
function s(t) {
return e(arguments, function(e, n) {
t[m][i(t, e) || e] = n;
}), t;
}
function o(t) {
return e(arguments, function(e, n) {
t[e] === undefined && (t[e] = n);
}), t;
}
var u = "width", a = "length", f = "radius", l = "lines", c = "trail", h = "color", p = "opacity", d = "speed", v = "shadow", m = "style", g = "height", y = "left", b = "top", w = "px", E = "childNodes", S = "firstChild", x = "parentNode", T = "position", N = "relative", C = "absolute", k = "animation", L = "transform", A = "Origin", O = "Timeout", M = "coord", _ = "#000", D = m + "Sheets", P = "webkit0Moz0ms0O".split(0), H = {}, B;
n(document.getElementsByTagName("head")[0], t(m));
var j = document[D][document[D][a] - 1], F = function(e) {
this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
}, I = F.prototype = {
spin: function(e) {
var t = this, r = t.el = t[l](t.opts);
e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
if (!B) {
var i = t.opts, o = 0, u = 20 / i[d], a = (1 - i[p]) / (u * i[c] / 100), f = u / i[l];
(function h() {
o++;
for (var e = i[l]; e; e--) {
var n = Math.max(1 - (o + e * f) % u * a, i[p]);
t[p](r, i[l] - e, n, i);
}
t[O] = t.el && window["set" + O](h, 50);
})();
}
return t;
},
stop: function() {
var e = this, t = e.el;
return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
}
};
I[l] = function(e) {
function i(n, r) {
return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
}
var o = s(t(), T, N), m = r(e[p], e[c]), E = 0, S;
for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
return o;
}, I[p] = function(e, t, n) {
e[E][t][m][p] = n;
};
var q = "behavior", R = "url(#default#VML)", U = "group0roundrect0fill0stroke".split(0);
return function() {
var e = s(t(U[0]), q, R), r;
if (!i(e, L) && e.adj) {
for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
I[l] = function() {
function e() {
return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
}
function r(r, a, c) {
n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
}
var i = this.opts, o = i[a] + i[u], c = 2 * o, d = e(), m = ~(i[a] + i[f] + i[u]) + w, E;
if (i[v]) for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
for (E = 1; E <= i[l]; E++) r(E);
return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
}, I[p] = function(e, t, n, r) {
r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
};
} else B = i(e, k);
}(), F;
}();
$.fn.spin = function(e, t) {
return this.each(function() {
var n = $(this), r = n.data();
r.spinner && (r.spinner.stop(), delete r.spinner), e !== !1 && (e = $.extend({
color: t || n.css("color")
}, $.fn.spin.presets[e] || e), r.spinner = (new i(e)).spin(this));
});
}, $.fn.spin.presets = {
tiny: {
lines: 8,
length: 2,
width: 2,
radius: 3
},
small: {
lines: 8,
length: 4,
width: 3,
radius: 5
},
large: {
lines: 10,
length: 8,
width: 4,
radius: 8
}
};
} catch (s) {
wx.jslog({
src: "biz_web/lib/spin.js"
}, s);
}
});define("tpl/media/cardmsg.html.js",[],function(){
return'<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
});!function(){
if(!window.define){
var t={};
window.define=function(e,i,n){
t[e]=n;
},window.seajs={
use:function(e){
function i(e){
return t[e]&&t[e](i);
}
return t[e]&&t[e](i);
}
};
}
}(),define("biz_common/utils/norefererimg.js",[],function(){
function t(t){
return window.getComputedStyle?window.getComputedStyle(t):t.currentStyle;
}
function e(t,e,i,n){
if(t&&i){
if(t==window&&"load"==e&&/complete|loaded/.test(document.readyState))return void i({
type:"load"
});
var o=function(t){
var e=i.call(this,t);
e===!1&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault());
};
return i[e+"_handler"]=o,t.addEventListener?void t.addEventListener(e,o,!!n):t.attachEvent?void t.attachEvent("on"+e,o,!!n):void 0;
}
}
return function(i){
var n=i.img,o=i.imgurl,r=i.onload,d=o||n.getAttribute("data-src"),a=/^http:\/\/mmbiz\.qpic\.cn\/|https:\/\/mmbiz\.qlogo\.cn\//;
if(d){
if(n.length&&(n=n[0]),a.test(d))return e(n,"load",r),void n.setAttribute("src",d);
var s=t(n),l=["javascript:\"<html><body style='margin:0;padding:0;'><img style='width:",s.width,";height:",s.height,";' src='",d+"' /></body></html>\""].join(" "),u=document.createElement("iframe");
u.setAttribute("frameBorder","0"),u.setAttribute("scrolling","no"),u.style.width="60px",
u.style.width=s.width+"",u.style.height=s.height,u.style.display=s.display,u.style.borderRadius=s.borderRadius,
u.style.webkitBorderRadius=s.borderRadius,"function"==typeof r&&(u.attachEvent?u.attachEvent("onload",r):u.onload=r),
u.className=n.className;
var c=n.parentNode;
c.insertBefore(u,n),u.src=l,c.removeChild(n);
}
};
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
});define("common/wx/media/video.js",["widget/media/richvideo.css","widget/media.css","biz_web/lib/video.js","common/wx/Cgi.js","common/wx/time.js","common/qq/Class.js","biz_web/lib/swfobject.js","tpl/media/video.html.js","tpl/media/simple_videomsg.html.js","tpl/media/wxvideo.html.js","tpl/media/videomsg.html.js"],function(e){
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
});