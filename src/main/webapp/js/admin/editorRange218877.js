define("tpl/cardticket/send_card.html.js",[],function(){
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
});define("tpl/cardticket/card_table.html.js",[],function(){
return'<div class="release_method js_card_container">\n	{if loading}\n	<i class="icon_loading_small white">loading...</i>\n	{else}\n	<div class="sub_title_bar group">\n		<!-- <span class="frm_input_box search append">\n			<a href="javascript:void(0);" class="js_search frm_input_append">\n				<i class="icon16_common search_gray">搜索</i>\n				&nbsp;\n			</a>\n			<input type="text" placeholder="请输入卡券名称" class="frm_input js_keyword">\n		</span> -->\n	</div>\n	<div class="table_wrp release_method_select_table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell release_method_select_box">&nbsp;</th>\n					<th class="table_cell release_method_kind"><div class="td_panel">卡券类型</div></th>\n					<th class="table_cell release_method_name"><div class="td_panel">卡券名称</div></th>\n					<th class="table_cell release_method_time"><div class="td_panel">卡券有效期</div></th>\n					<th class="table_cell release_method_stock"><div class="td_panel">库存</div></th>\n					{if payflag==1||payflag==2}<th class="table_cell release_method_price"><div class="td_panel">微信价(元)</div></th>{/if}\n					<!-- <th class="table_cell release_method_preview"><div class="td_panel">预览</div></th> -->\n					<th class="table_cell release_method_state"><div class="td_panel">卡券状态</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.length}\n				<tr>\n					<td class="empty_tips" colspan="6">暂无卡券</td>\n				</tr>\n			{else}\n			{each data as card i}\n            <tr  {if hasdata && (i<pageInfo.begin||i>=pageInfo.begin+pageInfo.count)}class="dn"{/if} id="js_ct_tr_{card.id}">\n					<td class="table_cell release_method_select_box"><div class="td_panel">\n						{if !multi}\n						<label class="frm_radio_label">\n							<i class="icon_radio"></i>\n							<input type="radio" data-id="{card.id}" value="{card.id}" class="frm_radio js_select{if sns_card_type}{if card.is_sns_card} js_select_disabled_1{else} js_select_disabled_2{/if}{/if}">\n						</label>\n						{else}\n						<label class="frm_checkbox_label">\n							<i class="icon_checkbox"></i>\n							<input type="checkbox" data-id="{card.id}" value="{card.id}" class="frm_checkbox js_select{if sns_card_type}{if card.is_sns_card} js_select_disabled_1{else} js_select_disabled_2{/if}{/if}">\n						</label>\n						{/if}\n					</div></td>\n					<td class="table_cell release_method_kind"><div class="td_panel">{convert_type card.type}</div></td>\n					<td class="table_cell release_method_name"><div class="td_panel">{card.title}{if card.is_sns_card}<i class="icon18 ic_social"></i>{/if}</div></td>\n					<td class="table_cell release_method_time"><div class="td_panel">{validtime card \'YYYY-MM-DD\'}</div></td>\n					<td class="table_cell release_method_stock"><div class="td_panel"><span class="js_sendcard_quantity">{card.quantity}</span>\n						{if editquantity && !card.is_from_intercomm && card.can_edit_quantity}<a class="icon14_common edit_gray js_modify_quantity" href="javascript:;" data-new="{if card.isnew}1{/if}" data-cid="{card.id}" data-x="-126"></a>{/if}</div>\n					</td>\n					{if payflag==1||payflag==2}<td class="table_cell release_method_price"><div class="td_panel">{if card.ispay}{card.price}{else}--{/if}</div></td>{/if}\n					<!-- <td class="table_cell release_method_preview"><div class="td_panel"><a data-cid="{card.id}" data-x="-125" class="js_card_preview" href="javascript:void(0);">预览</a></div></td> -->\n					<td class="table_cell release_method_state"><div class="td_panel"><span class="fail pass"><i></i>{convert_state card.status}</span></div></td></td>\n				</tr>\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n		{if sns_card_type==1}<div class="mini_tips"><i class="icon_msg_mini info"></i>只能投放普通券</div>{else if sns_card_type==2}<div class="mini_tips"><i class="icon_msg_mini info"></i>只能投放朋友共享功能的券</div>{/if}\n        <div class="js_pager"></div>\n        {if multi}\n        <p class="dialog_bt_tip">已选<span class="js_selectcount">{defaultValues.length||0}</span>个</p>\n        {/if}\n	</div>\n	{/if}\n</div>\n';
});define("cardticket/common_template_helper.js",["common/wx/upload.js","biz_common/moment.js","cardticket/add/msg_operate_type_html.js","common/wx/Cgi.js"],function(e){
"use strict";
function t(e){
return e.replace(/\\n/g,"<br/>");
}
function r(e){
var t="YYYY-MM-DD HH:mm:ss",r=p(e,t);
return r?r.format("YYYY-MM-DD"):"";
}
var n=e("common/wx/upload.js"),p=e("biz_common/moment.js"),a={
10:"会员卡",
21:"门票",
22:"电影票",
4:"代金券",
1:"团购券",
2:"折扣券",
3:"礼品券",
0:"优惠券"
},i={
1:"审核中",
2:"未通过",
3:"待投放",
4:"已删除",
5:"待投放",
6:"已投放",
8:"已过期",
7:"违规下架"
},m={
MONDAY:"1",
TUESDAY:"2",
WEDNESDAY:"3",
THURSDAY:"4",
FRIDAY:"5",
SATURDAY:"6",
SUNDAY:"7"
};
template.helper("$has_day",function(e,t){
if(!e)return"";
for(var r=0;r<e.length;r++){
var n=m[e[r].type];
if(n||(n=8),n==t)return"checked";
}
return"";
});
var o={
1:"周一",
2:"周二",
3:"周三",
4:"周四",
5:"周五",
6:"周六",
7:"周日",
8:"节假日"
};
template.helper("convert_time_limit",function(e){
for(var t=[],r=0;r<e.length;r++){
var n=m[e[r].type];
n||(n=8),t.push(o[n]);
}
return t.join("&nbsp;&nbsp;");
});
var u={
1:"免费WIFI",
2:"可带宠物",
4:"免费停车",
8:"可外卖"
};
template.helper("convert_business_service",function(e){
var t=[];
for(var r in u){
var n=parseInt(r);
(e&n)>0&&t.push(u[r]);
}
return t.join("&nbsp;&nbsp;");
});
var p=e("biz_common/moment.js");
template.helper("convert_state",function(e){
return i[e]||e;
}),template.helper("convert_type",function(e){
return a[e]||e;
}),template.helper("card_type_map",function(e){
return e;
}),template.helper("unixFormat",function(e,t){
return t&&(t=t.replace(","," ")),p.unix(e).format(t);
}),template.helper("validtime",function(e,t){
if(1==e.time_type){
var r=p.unix(e.begin_time).format(t)+"至"+p.unix(e.end_time).format(t);
return e.end_time<p().unix()&&(r+="(已过期)"),r;
}
return 2==e.time_type?(e.from_day=0==e.from_day?"当":e.from_day,"领取后{from_day}天生效{fixed_term}天有效".format(e)):"";
}),template.helper("addtoken",function(e){
return wx.url(e);
}),template.helper("nl2br",function(e){
return t(e);
});
var l={
1:"50万以下",
2:"50-100万",
3:"100-500万",
4:"500-1000万",
5:"1000万以上"
};
template.helper("convert_business_volume_type",function(e){
return l[e]||e;
});
var _={
0:"未审核",
2:"审核中",
3:"生效",
4:"审核失败"
};
template.helper("convert_store_state",function(e){
return _[e]||e;
}),template.helper("$preview",function(e){
if(!e)return"无";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=n.tmpFileUrl(e)):t=n.multimediaFileUrl(e),
"<a href='%s' target='_blank'><img src='%s' /></a>".sprintf(t,t);
}),template.helper("$upload_preview",function(e){
if(!e)return"";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=n.tmpFileUrl(e)):t=n.multimediaFileUrl(e),
"<img src='%s' style='width:260px;' />".sprintf(t);
}),template.helper("$preview_stuffs",function(e){
for(var t=[],r=e.stuffs,n=0;n<r.length;n++){
var p=r[n]+"_preview_tpl";
$("#"+p).length&&t.push(template.render(p,e));
}
return t.join("");
});
var c={
2:"女",
1:"男"
};
template.helper("convert_gender",function(e){
return c[e]||"未知";
}),template.helper("percentage",function(e,t,r,n){
var r=e/t*100;
return n&&r>n&&(r=n),r.toFixed(2);
});
var s={
"":"全部",
0:"API渠道",
1:"嵌入图文消息",
2:"直接群发卡券",
3:"下载二维码"
};
template.helper("convert_channel",function(e){
return s[e]||e;
}),template.helper("convert_provide_time",r),template.helper("http2https",function(e){
return e?(e+"").http2https():"";
}),template.helper("https2http",function(e){
return e?(e+"").https2http():"";
}),template.helper("codepad",function(e){
var t=new RegExp("([^s]{4})(?=([^s])+$)","ig");
return e.replace(t,"$1-");
}),template.helper("yuan",function(e){
if(!e)return"--";
var e=e/100;
return e.toFixed(2);
}),template.helper("is_paycard",function(){
return window.wx_is_paycard;
});
var f={
0:"等待接收",
1:"已接收",
3:"过期退回",
2:"已拒绝"
},h={
0:"等待接收",
2:"已拒绝",
1:"已接收",
3:"过期退回"
};
template.helper("convert_intercard_status",function(e){
return f[e]||e;
}),template.helper("convert_intercard_rec_status",function(e){
return h[e]||e;
});
var v={
0:"无",
1:"图文消息",
2:"卡券货架",
3:"小店货架",
4:"网页链接",
5:"卡券"
};
template.helper("convert_msg_operate_type",function(e){
return v[e]||"无";
});
{
var d=e("cardticket/add/msg_operate_type_html.js");
e("common/wx/Cgi.js");
}
template.helper("msg_operate_content",function(e){
return 5===e._type?"":e._notexist?"无":template.compile(d[e._type])({
msg_operation:e
})||"";
});
var x={
CHECKING:"审核中",
APPROVED:"已通过",
REJECTED:"未通过",
EXPIRED:"已过期"
};
template.helper("convert_sub_merchant_status",function(e){
return x[e]||e;
}),template.helper("$is_can_use_help_make_and_send",function(){
return 1==window.wx_is_can_use_help_make_and_send;
}),template.helper("wx_url",function(e){
return wx.url(e);
});
var y={
".*?_4":"激活"
};
return template.helper("convert_use_source",function(e,t){
var r=e+"_"+t;
return 4==t?"激活":3==e?"手机核销":1==e?"网页核销":2==e?"API核销":1==t?"微信买单":y[r]||"";
}),{
type_map:a,
status_map:i,
store_status:_,
gender_map:c,
source_map:s,
convert_provide_time:r,
nl2br:t,
sub_merchant_status_map:x
};
});define("cardticket/store_cgi.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/tooltips.js","common/wx/tooltipsManager.js","common/wx/dialog.js"],function(t){
"use strict";
var e=t("common/wx/Cgi.js"),s=t("common/wx/Tips.js"),o=t("common/wx/tooltips.js"),n=t("common/wx/tooltipsManager.js"),c=(t("common/wx/dialog.js"),
{
deleteStore:function(t){
e.post({
url:"/merchant/entityshop?action=delete",
data:{
id:t.store_id
},
btn:t.btn
},function(o){
0==o.base_resp.ret?(s.suc("删除门店成功"),t.success&&t.success()):e.show(o);
});
},
deleteWithConfirm:function(t){
if(3==t.state||4==t.state){
var e=new o({
container:t.container,
content:"删除将影响在用此门店的相关业务。<br />你确定要删除吗？",
type:"click",
buttons:[{
text:"确定",
type:"btn_primary",
click:function(){
if(t.success){
var e=t.success;
t.success=function(){
e&&e(),n.removeAll();
};
}
c.deleteStore(t);
}
},{
text:"取消",
type:"btn_default",
click:function(){
n.removeAll();
}
}]
});
e.show(),n.removeAll(),n.add(e);
}
},
listStore:function(t){
var s=$.extend({},{
action:"list",
begin:0,
count:9999999,
keyword:t.keyword,
task_id:t.task_id,
audit_state:t.audit_state||3
},t.getDataExtra);
e.get({
url:"/merchant/entityshop",
data:s
},function(s){
if(0==s.base_resp.ret){
var o=$.parseJSON(s.data),n=o.store_location;
t.success&&t.success({
shop_list:n,
total_num:s.total_count
});
}else e.show(s);
});
},
canSendCard:function(t){
t.success&&t.success(!0);
}
});
return c;
});define("common/wx/Step.js", [ "widget/processor_bar.css", "tpl/step.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/processor_bar.css"), o = e("tpl/step.html.js"), u = {
selected: 1
}, a = function() {
var e = navigator.userAgent.toLowerCase(), t = /(msie) ([\w.]+)/.exec(e) || [], n = t[1] || "";
return n == "msie";
};
function f(e) {
this.opts = $.extend(!0, {}, u, e), this.init();
}
f.prototype.init = function() {
var e = this.opts, t = e.names.length, n = parseInt(e.selected, 10), r = [], s, u;
n = n < 0 ? 0 : n > t ? t : n;
for (s = 0; s < t; s++) u = f.getClass(s + 1, n), r.push({
name: e.names[s],
cls: u
});
this.$dom = $(i(o, {
stepArr: r,
length: t
})).appendTo(e.container), a() && this.$dom.addClass("ie");
}, f.prototype.setStep = f.prototype.go = function(e) {
var t = this.$dom.find("li.step"), n = t.length;
return e = e < 0 ? 0 : e > n ? n : e, t.each(function(t, r) {
var i = f.getClass(t + 1, e);
t + 1 == n ? r.className = "no_extra " + "step grid_item size1of%s %s".sprintf(n, i) : r.className = "step grid_item size1of%s %s".sprintf(n, i);
}), this;
}, f.getClass = function(e, t) {
var n;
return e < t - 1 ? n = "pprev" : e === t - 1 ? n = "prev" : e === t ? n = "current" : e === t + 1 ? n = "next" : e > t + 1 && (n = "nnext"), n;
}, n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/Step.js"
}, l);
}
});define("tpl/media/dialog/image_group.html.js",[],function(){
return'{each file_group_list.file_group as item}\n<dd id="js_group{item.id}" class="inner_menu_item js_groupitem{if item.id == group} selected{/if}" data-groupid="{item.id}">\n    <a href="javascript:;" class="inner_menu_link" title="{item.name}" onclick="return false">\n        <strong>{item.name}</strong><em class="num">(<span>{item.count}</span>)</em>\n    </a>\n</dd>\n{/each}\n';
});define("tpl/media/dialog/image_list.html.js",[],function(){
return'{if file_item.length == 0}\n<div class="empty_tips">该分组暂时没有图片素材</div>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <img src="{item.cdn_url}" alt="{item.name}" class="pic">\n        {else}\n        <img src="{item.img_url}" alt="{item.name}" class="pic">\n        {/if}\n        <span class="lbl_content">{item.name}</span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});define("tpl/media/dialog/image_layout.html.js",[],function(){
return'<div class="img_pick_panel inner_container_box side_l cell_layout">\n    <div class="inner_side">\n        <div class="group_list">\n            <div class="inner_menu_box">\n                <dl class="inner_menu js_group"></dl>\n            </div>                    \n        </div>\n    </div>\n    <div class="inner_main">\n        <div class="img_pick_area">\n            <div class="sub_title_bar in_dialog">\n                <div class="upload_box r align_right">\n                    <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                </div>\n                {if desc}\n                <div class="bubble_tips bubble_right warn r">\n                    <div class="bubble_tips_inner">{desc}</div> \n                    <i class="bubble_tips_arrow out"></i>\n                    <i class="bubble_tips_arrow in"></i>\n                </div>\n                {/if}\n            </div>\n            <div>\n                <div class="img_pick">\n                    <i class="icon_loading_small white js_loading"></i>\n                    <ul class="group js_list img_list"></ul>\n                </div>\n                <div class="js_pagebar"></div>\n            </div>\n        </div>\n    </div>\n    <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n</div>\n';
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/richEditor/emotion.html.js",[],function(){
return'<span class="hook">\n	<span class="hook_dec hook_top"></span>\n	<span class="hook_dec hook_btm"></span>\n</span>\n<ul class="emotions" onselectstart="return false;"> \n    {each edata as e index}\n        <li class="emotions_item">\n            <i\n                class="js_emotion_i" \n                data-gifurl=\'{e.gifurl}\' \n                data-title=\'{e.title}\' \n                style=\'{e.bp}\'>\n            </i>\n        </li>\n    {/each}\n</ul>\n<span class="emotions_preview js_emotionPreviewArea"></span>\n';
});define("common/wx/richEditor/editorRange.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = function() {
return document.selection ? document.selection : (window.getSelection || document.getSelection)();
}, s = function(e, t, n) {
if (!n && e === t) return !1;
if (e.compareDocumentPosition) {
var r = e.compareDocumentPosition(t);
if (r == 20 || r == 0) return !0;
} else if (e.contains(t)) return !0;
return !1;
}, o = function(e, t) {
var n = t.commonAncestorContainer || t.parentElement && t.parentElement() || null;
return n ? s(e, n, !0) : !1;
}, u = function(e) {
var t = i();
if (!t) return null;
var n = t.getRangeAt ? t.rangeCount ? t.getRangeAt(0) : null : t.createRange();
return n ? e ? o(e, n) ? n : null : n : null;
}, a = function(e) {
return e.parentElement ? e.parentElement() : e.commonAncestorContainer;
};
n.exports = {
getSelection: i,
getRange: u,
containsRange: o,
parentContainer: a
};
} catch (f) {
wx.jslog({
src: "common/wx/richEditor/editorRange.js"
}, f);
}
});