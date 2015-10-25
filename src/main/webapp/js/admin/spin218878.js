define("tpl/cardticket/card_table.html.js",[],function(){
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
});define("cardticket/parse_data.js",["cardticket/add/member_info_flag.js"],function(e){
"use strict";
function t(e){
var t=l[e.card_type]||e.card_type;
switch(t+=""){
case"2":
e=e.discount;
break;

case"1":
e=e.groupon;
break;

case"3":
e=e.gift;
break;

case"4":
e=e.cash;
break;

case"0":
e=e.general_coupon;
break;

case"10":
e=e.member_card;
break;

case"21":
e=e.scenic_ticket;
break;

case"22":
e=e.movie_ticket;
break;

default:
e=e.general_coupon||e.coupon;
}
return e?(e.type=t,e):null;
}
function _(e,t){
return"number"!=typeof e&&(e=praseFloat(e),isNaN(e))?0:(t||(t=2),parseFloat(e.toFixed(t)));
}
function i(e){
var t=/^https?:\/\/mp.weixin.qq.com\/s/,_=/^http:\/\/mp.weixin.qq.com\/bizmall\/cardshelf/,i=/^http:\/\/mp.weixin.qq.com\/bizmall\/mallshelf/;
return t.test(e)?1:_.test(e)?2:i.test(e)?3:4;
}
function o(e){
var t=e.url,_=e.url_type;
return 4==_?t.replace("http://",""):t;
}
function s(e){
var s={},e=t(e);
if(!e)return null;
n(s,e),n(s,e.base_info);
var a=e.base_info.date_info||{};
s.time_type=m[a.type]||a.type,1==s.time_type&&(s.begin_time=a.begin_timestamp,s.end_time=a.end_timestamp),
s.from_day=a.fixed_begin_term||0,s.fixed_term=a.fixed_term||30,s.quantity=e.base_info.sku.quantity,
s.shop_id_list=e.base_info.shop_id_list,s.location_id_list=e.base_info.location_id_list;
var l=c[s.code_type];
if(s.code_type="undefined"!=typeof l?l:s.code_type,"undefined"==typeof s.code_type&&(s.code_type=1),
s.least_cost=e.least_cost&&e.least_cost/100,s.reduce_cost=e.reduce_cost&&e.reduce_cost/100,
"0"==s.least_cost&&(s.least_cost=""),s.discount=s.discount&&(100-s.discount)/10,
s.detail=1==s.type?s.deal_detail:s.default_detail,/^http/.test(s.logo_url)||(s.logo_url=""),
s.shop_type||(s.shop_type=s.location_id_list&&s.location_id_list.length?2:3),s.auto_update_new_location&&(s.shop_type=1),
s.isnew=s.func_flag?16&s.func_flag:!1,s.ispay=s.func_flag?64&s.func_flag:!1,s.func_flag&&(s.show_in_nearby=!1),
s.ispay&&(s.can_share=!0),s.ispay&&(s.detail=s.detail?s.detail.replace(/\n微信价：.*?元$/gm,""):""),
s.price=_(e.base_info.sku.price/100),s.original_price=_(e.base_info.sku.original_price/100),
1==s.create_source&&(s.isnew=!0),1==s.time_type&&s.end_time<new Date/1e3&&(s.is_expire=!0),
s.is_intercomm=16384&s.func_flag,"undefined"!=typeof e.base_info.task_info&&(s.is_from_intercomm=!0,
s.task_info=e.base_info.task_info),s.is_from_intercomm&&(s.isnew=!0),s.isnew||(s.quantity="--"),
s.status=u[s.status]||s.status,s.discount&&(s.supply_discount=!0),s.can_edit_quantity=10!=s.type,
10==s.type){
var p=[];
if(s.promotion_url_name){
var f={
name:s.promotion_url_name,
tips:s.promotion_url_sub_title,
url:s.promotion_url
};
f.url_type=i(f.url),f.url=o(f),p=[f];
}
e.custom_cell1&&(e.custom_cell1.url_type=i(e.custom_cell1.url),e.custom_cell1.url=o(e.custom_cell1),
p.push(e.custom_cell1)),e.custom_cell2&&(e.custom_cell2.url_type=i(e.custom_cell2.url),
e.custom_cell2.url=o(e.custom_cell2),p.push(e.custom_cell2)),s.config_url=p;
var d=e.required_info||{
info_flag:0
},y=e.optional_info||{
info_flag:0
};
s.require_keywords=r.flag2info(d.info_flag),s.option_keywords=r.flag2info(y.info_flag),
s.require_self_keywords=d.field_list,s.option_self_keywords=y.field_list,s.must_activate=!s.auto_activate,
s.supply_discount&&(s.prerogative=s.prerogative.replace(/^用卡可享受.*?折优惠\n/,"")),s.quantity="--";
}else{
var p=[];
if(s.custom_url_name){
var f={
name:s.custom_url_name,
tips:s.custom_url_sub_title,
url:s.custom_url
};
f.url_type=i(f.url),f.url=o(f),p=[f];
}
s.config_url=p;
}
var b=e.base_info;
if(10==s.type)var g=e.modify_msg_operation||{
_notexist:!0
};else var g=b.consume_msg_operation||{
_notexist:!0
};
s.msg_operation=g.url_cell||g.card_cell||{
_notexist:!0
},s.msg_operation._notexist||(s.msg_operation._type=s.msg_operation.card_id?5:i(s.msg_operation.url)),
s.msg_operation.endtime=s.msg_operation.end_time,s.bonus_rule=e.bonus_rule||{},s.bonus_rule.init_bonus=s.bonus_rule.init_increase_bonus,
s.bonus_rule.cost_money_unit=s.bonus_rule.cost_money_unit&&s.bonus_rule.cost_money_unit/100,
b.sub_merchant_info&&(s.sub_merchant_id=b.sub_merchant_info.merchant_id);
var T=e.advanced_info;
if(T){
s.is_sns_card=1==T.gen_type,s.time_limit=T.time_limit||[],s.text_image_list=T.text_image_list||[],
s.consume_share_self_num=T.consume_share_self_num,s.business_service=T.business_service;
var E=T.abstract;
E&&(s.abstract=E.abstract,s.cover_logo=E.icon_url_list?E.icon_url_list[0]:"");
}
return s;
}
function n(e,t){
for(var _ in t)t.hasOwnProperty(_)&&"object"!=typeof t[_]&&(e[_]=t[_]);
return e;
}
function a(e){
for(var t={},_=[],i=0;i<e.length;i++){
var o=s(e[i]);
o&&(t[o.id]=o,_.push(o));
}
return{
card_cache:t,
card_list:_
};
}
var r=e("cardticket/add/member_info_flag.js"),l={
DISCOUNT:"2",
MEMBER_CARD:"10",
GROUPON:"1",
GIFT:"3",
CASH:"4",
GENERAL_COUPON:"0",
SCENIC_TICKET:"21",
MOVIE_TICKET:"22"
},c={
CODE_TYPE_TEXT:0,
CODE_TYPE_BARCODE:1,
CODE_TYPE_QRCODE:2
},u={
CARD_STATUS_INIT:0,
CARD_STATUS_NOT_VERIFY:1,
CARD_STATUS_VERIFY_FAIL:2,
CARD_STATUS_VERIFY_OK:3,
CARD_STATUS_DELETE:4,
CARD_STATUS_SYS_DELETE:5,
CARD_STATUS_DISPATCH:6,
CARD_STATUS_SYS_OFF_SHELF:7,
CARD_STATUS_EXPIRED:8
},m={
DATE_TYPE_FIX_TIME_RANGE:1,
DATE_TYPE_FIX_TERM:2,
DATE_TYPE_PERMANENT:100
};
return{
parse_cardticket:s,
parse_cardlist:a,
url_type:i
};
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
});define("tpl/media/dialog/image_group.html.js",[],function(){
return'{each file_group_list.file_group as item}\n<dd id="js_group{item.id}" class="inner_menu_item js_groupitem{if item.id == group} selected{/if}" data-groupid="{item.id}">\n    <a href="javascript:;" class="inner_menu_link" title="{item.name}" onclick="return false">\n        <strong>{item.name}</strong><em class="num">(<span>{item.count}</span>)</em>\n    </a>\n</dd>\n{/each}\n';
});define("tpl/media/dialog/image_list.html.js",[],function(){
return'{if file_item.length == 0}\n<div class="empty_tips">该分组暂时没有图片素材</div>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <img src="{item.cdn_url}" alt="{item.name}" class="pic">\n        {else}\n        <img src="{item.img_url}" alt="{item.name}" class="pic">\n        {/if}\n        <span class="lbl_content">{item.name}</span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});define("tpl/media/dialog/image_layout.html.js",[],function(){
return'<div class="img_pick_panel inner_container_box side_l cell_layout">\n    <div class="inner_side">\n        <div class="group_list">\n            <div class="inner_menu_box">\n                <dl class="inner_menu js_group"></dl>\n            </div>                    \n        </div>\n    </div>\n    <div class="inner_main">\n        <div class="img_pick_area">\n            <div class="sub_title_bar in_dialog">\n                <div class="upload_box r align_right">\n                    <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                </div>\n                {if desc}\n                <div class="bubble_tips bubble_right warn r">\n                    <div class="bubble_tips_inner">{desc}</div> \n                    <i class="bubble_tips_arrow out"></i>\n                    <i class="bubble_tips_arrow in"></i>\n                </div>\n                {/if}\n            </div>\n            <div>\n                <div class="img_pick">\n                    <i class="icon_loading_small white js_loading"></i>\n                    <ul class="group js_list img_list"></ul>\n                </div>\n                <div class="js_pagebar"></div>\n            </div>\n        </div>\n    </div>\n    <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n</div>\n';
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
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
});