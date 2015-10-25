define("biz_common/jquery.ui/jquery.ui.sortable.js",[],function(){
!function(t,e){
function i(e,i){
var n,o,r,h=e.nodeName.toLowerCase();
return"area"===h?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(r=t("img[usemap=#"+o+"]")[0],
!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(h)?!e.disabled:"a"===h?e.href||i:i)&&s(e);
}
function s(e){
return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){
return"hidden"===t.css(this,"visibility");
}).length;
}
var n=0,o=/^ui-id-\d+$/;
t.ui=t.ui||{},t.extend(t.ui,{
version:"1.10.3",
keyCode:{
BACKSPACE:8,
COMMA:188,
DELETE:46,
DOWN:40,
END:35,
ENTER:13,
ESCAPE:27,
HOME:36,
LEFT:37,
NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,
NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,
PAGE_UP:33,
PERIOD:190,
RIGHT:39,
SPACE:32,
TAB:9,
UP:38
}
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
if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){
if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),
!isNaN(n)&&0!==n))return n;
o=o.parent();
}
return 0;
},
uniqueId:function(){
return this.each(function(){
this.id||(this.id="ui-id-"+ ++n);
});
},
removeUniqueId:function(){
return this.each(function(){
o.test(this.id)&&t(this).removeAttr("id");
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
var s=t.attr(e,"tabindex"),n=isNaN(s);
return(n||s>=0)&&i(e,!n);
}
}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){
function n(e,i,s,n){
return t.each(o,function(){
i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),
n&&(i-=parseFloat(t.css(e,"margin"+this))||0);
}),i;
}
var o="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),h={
innerWidth:t.fn.innerWidth,
innerHeight:t.fn.innerHeight,
outerWidth:t.fn.outerWidth,
outerHeight:t.fn.outerHeight
};
t.fn["inner"+s]=function(i){
return i===e?h["inner"+s].call(this):this.each(function(){
t(this).css(r,n(this,i)+"px");
});
},t.fn["outer"+s]=function(e,i){
return"number"!=typeof e?h["outer"+s].call(this,e):this.each(function(){
t(this).css(r,n(this,e,!0,i)+"px");
});
};
}),t.fn.addBack||(t.fn.addBack=function(t){
return this.add(null==t?this.prevObject:this.prevObject.filter(t));
}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){
return function(i){
return arguments.length?e.call(this,t.camelCase(i)):e.call(this);
};
}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({
disableSelection:function(){
return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){
t.preventDefault();
});
},
enableSelection:function(){
return this.unbind(".ui-disableSelection");
}
}),t.extend(t.ui,{
plugin:{
add:function(e,i,s){
var n,o=t.ui[e].prototype;
for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]]);
},
call:function(t,e,i){
var s,n=t.plugins[e];
if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;s<n.length;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i);
}
},
hasScroll:function(e,i){
if("hidden"===t(e).css("overflow"))return!1;
var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;
return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n);
}
});
}(jQuery),function(t,e){
var i=0,s=Array.prototype.slice,n=t.cleanData;
t.cleanData=function(e){
for(var i,s=0;null!=(i=e[s]);s++)try{
t(i).triggerHandler("remove");
}catch(o){}
n(e);
},t.widget=function(e,i,s){
var n,o,r,h,a={},l=e.split(".")[0];
e=e.split(".")[1],n=l+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){
return!!t.data(e,n);
},t[l]=t[l]||{},o=t[l][e],r=t[l][e]=function(t,e){
return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e);
},t.extend(r,o,{
version:s.version,
_proto:t.extend({},s),
_childConstructors:[]
}),h=new i,h.options=t.widget.extend({},h.options),t.each(s,function(e,s){
return t.isFunction(s)?void(a[e]=function(){
var t=function(){
return i.prototype[e].apply(this,arguments);
},n=function(t){
return i.prototype[e].apply(this,t);
};
return function(){
var e,i=this._super,o=this._superApply;
return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,
this._superApply=o,e;
};
}()):void(a[e]=s);
}),r.prototype=t.widget.extend(h,{
widgetEventPrefix:o?h.widgetEventPrefix:e
},a,{
constructor:r,
namespace:l,
widgetName:e,
widgetFullName:n
}),o?(t.each(o._childConstructors,function(e,i){
var s=i.prototype;
t.widget(s.namespace+"."+s.widgetName,r,i._proto);
}),delete o._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r);
},t.widget.extend=function(i){
for(var n,o,r=s.call(arguments,1),h=0,a=r.length;a>h;h++)for(n in r[h])o=r[h][n],
r[h].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);
return i;
},t.widget.bridge=function(i,n){
var o=n.prototype.widgetFullName||i;
t.fn[i]=function(r){
var h="string"==typeof r,a=s.call(arguments,1),l=this;
return r=!h&&a.length?t.widget.extend.apply(null,[r].concat(a)):r,this.each(h?function(){
var s,n=t.data(this,o);
return n?t.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,a),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,
!1):void 0):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'");
}:function(){
var e=t.data(this,o);
e?e.option(r||{})._init():t.data(this,o,new n(r,this));
}),l;
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
var n,o,r,h=i;
if(0===arguments.length)return t.widget.extend({},this.options);
if("string"==typeof i)if(h={},n=i.split("."),i=n.shift(),n.length){
for(o=h[i]=t.widget.extend({},this.options[i]),r=0;r<n.length-1;r++)o[n[r]]=o[n[r]]||{},
o=o[n[r]];
if(i=n.pop(),s===e)return o[i]===e?null:o[i];
o[i]=s;
}else{
if(s===e)return this.options[i]===e?null:this.options[i];
h[i]=s;
}
return this._setOptions(h),this;
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
var n,o=this;
"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,
i=this.element,n=this.widget()),t.each(s,function(s,r){
function h(){
return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):void 0;
}
"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);
var a=s.match(/^(\w+)\s*(.*)$/),l=a[1]+o.eventNamespace,c=a[2];
c?n.delegate(c,l,h):i.bind(l,h);
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
var n,o,r=this.options[e];
if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);
return this.element.trigger(i,s),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented());
}
},t.each({
show:"fadeIn",
hide:"fadeOut"
},function(e,i){
t.Widget.prototype["_"+e]=function(s,n,o){
"string"==typeof n&&(n={
effect:n
});
var r,h=n?n===!0||"number"==typeof n?i:n.effect||i:e;
n=n||{},"number"==typeof n&&(n={
duration:n
}),r=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),r&&t.effects&&t.effects.effect[h]?s[e](n):h!==e&&s[h]?s[h](n.duration,n.easing,o):s.queue(function(i){
t(this)[e](),o&&o.call(s[0]),i();
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
var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;
return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){
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
function e(t,e,i){
return t>e&&e+i>t;
}
function i(t){
return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"));
}
t.widget("ui.sortable",t.ui.mouse,{
version:"1.10.3",
widgetEventPrefix:"sort",
ready:!1,
options:{
appendTo:"parent",
axis:!1,
connectWith:!1,
containment:!1,
cursor:"auto",
cursorAt:!1,
dropOnEmpty:!0,
forcePlaceholderSize:!1,
forceHelperSize:!1,
grid:!1,
handle:!1,
helper:"original",
items:"> *",
opacity:!1,
placeholder:!1,
revert:!1,
scroll:!0,
scrollSensitivity:20,
scrollSpeed:20,
scope:"default",
tolerance:"intersect",
zIndex:1e3,
activate:null,
beforeStop:null,
change:null,
deactivate:null,
out:null,
over:null,
receive:null,
remove:null,
sort:null,
start:null,
stop:null,
update:null
},
_create:function(){
var t=this.options;
this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,
this.offset=this.element.offset(),this._mouseInit(),this.ready=!0;
},
_destroy:function(){
this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();
for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");
return this;
},
_setOption:function(e,i){
"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments);
},
_mouseCapture:function(e,i){
var s=null,n=!1,o=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),
t(e.target).parents().each(function(){
return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0;
}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s&&(!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){
this===e.target&&(n=!0);
}),n))?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1);
},
_mouseStart:function(e,i,s){
var n,o,r=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),
this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),
this.offset=this.currentItem.offset(),this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
},t.extend(this.offset,{
click:{
left:e.pageX-this.offset.left,
top:e.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),
this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,
r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={
prev:this.currentItem.prev()[0],
parent:this.currentItem.parent()[0]
},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),
r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(o=this.document.find("body"),
this.storedCursor=o.css("cursor"),o.css("cursor",r.cursor),this.storedStylesheet=t("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(o)),
r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),
this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),
this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),
this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),
!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));
return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),
this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0;
},
_mouseDrag:function(e){
var i,s,n,o,r=this.options,h=!1;
for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),
this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+r.scrollSpeed:e.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-r.scrollSpeed),
this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+r.scrollSpeed:e.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(e.pageY-t(document).scrollTop()<r.scrollSensitivity?h=t(document).scrollTop(t(document).scrollTop()-r.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<r.scrollSensitivity&&(h=t(document).scrollTop(t(document).scrollTop()+r.scrollSpeed)),
e.pageX-t(document).scrollLeft()<r.scrollSensitivity?h=t(document).scrollLeft(t(document).scrollLeft()-r.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<r.scrollSensitivity&&(h=t(document).scrollLeft(t(document).scrollLeft()+r.scrollSpeed))),
h!==!1&&t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),
this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),
this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),
i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),
o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){
if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());
break;
}
return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),
this.lastPositionAbs=this.positionAbs,!1;
},
_mouseStop:function(e,i){
if(e){
if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){
var s=this,n=this.placeholder.offset(),o=this.options.axis,r={};
o&&"x"!==o||(r.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),
o&&"y"!==o||(r.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),
this.reverting=!0,t(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){
s._clear(e);
});
}else this._clear(e,i);
return!1;
}
},
cancel:function(){
if(this.dragging){
this._mouseUp({
target:null
}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),
this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),
this.containers[e].containerCache.over=0);
}
return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),
t.extend(this,{
helper:null,
dragging:!1,
reverting:!1,
_noFinalSort:null
}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),
this;
},
serialize:function(e){
var i=this._getItemsAsjQuery(e&&e.connected),s=[];
return e=e||{},t(i).each(function(){
var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);
i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]));
}),!s.length&&e.key&&s.push(e.key+"="),s.join("&");
},
toArray:function(e){
var i=this._getItemsAsjQuery(e&&e.connected),s=[];
return e=e||{},i.each(function(){
s.push(t(e.item||this).attr(e.attribute||"id")||"");
}),s;
},
_intersectsWith:function(t){
var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,r=o+t.width,h=t.top,a=h+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>h&&a>s+l,p="y"===this.options.axis||e+c>o&&r>e+c,f=u&&p;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?f:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<r&&h<s+this.helperProportions.height/2&&n-this.helperProportions.height/2<a;
},
_intersectsWithPointer:function(t){
var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();
return n?this.floating?r&&"right"===r||"down"===o?2:1:o&&("down"===o?2:1):!1;
},
_intersectsWithSides:function(t){
var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();
return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i);
},
_getDragVerticalDirection:function(){
var t=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==t&&(t>0?"down":"up");
},
_getDragHorizontalDirection:function(){
var t=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==t&&(t>0?"right":"left");
},
refresh:function(t){
return this._refreshItems(t),this.refreshPositions(),this;
},
_connectWith:function(){
var t=this.options;
return t.connectWith.constructor===String?[t.connectWith]:t.connectWith;
},
_getItemsAsjQuery:function(e){
var i,s,n,o,r=[],h=[],a=this._connectWith();
if(a&&e)for(i=a.length-1;i>=0;i--)for(n=t(a[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),
o&&o!==this&&!o.options.disabled&&h.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);
for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{
options:this.options,
item:this.currentItem
}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),
i=h.length-1;i>=0;i--)h[i][0].each(function(){
r.push(this);
});
return t(r);
},
_removeCurrentsFromItems:function(){
var e=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=t.grep(this.items,function(t){
for(var i=0;i<e.length;i++)if(e[i]===t.item[0])return!1;
return!0;
});
},
_refreshItems:function(e){
this.items=[],this.containers=[this];
var i,s,n,o,r,h,a,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{
item:this.currentItem
}):t(this.options.items,this.element),this]],p=this._connectWith();
if(p&&this.ready)for(i=p.length-1;i>=0;i--)for(n=t(p[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),
o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{
item:this.currentItem
}):t(o.options.items,o.element),o]),this.containers.push(o));
for(i=u.length-1;i>=0;i--)for(r=u[i][1],h=u[i][0],s=0,l=h.length;l>s;s++)a=t(h[s]),
a.data(this.widgetName+"-item",r),c.push({
item:a,
instance:r,
width:0,
height:0,
left:0,
top:0
});
},
refreshPositions:function(e){
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var i,s,n,o;
for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,
e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,
s.top=o.top);
if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),
this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,
this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),
this.containers[i].containerCache.height=this.containers[i].element.outerHeight();
return this;
},
_createPlaceholder:function(e){
e=e||this;
var i,s=e.options;
s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={
element:function(){
var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
return"tr"===s?e.currentItem.children().each(function(){
t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n);
}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),
n;
},
update:function(t,n){
(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),
n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)));
}
}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),
s.placeholder.update(e,e.placeholder);
},
_contactContainers:function(s){
var n,o,r,h,a,l,c,u,p,f,d=null,m=null;
for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){
if(d&&t.contains(this.containers[n].element[0],d.element[0]))continue;
d=this.containers[n],m=n;
}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),
this.containers[n].containerCache.over=0);
if(d)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),
this.containers[m].containerCache.over=1);else{
for(r=1e4,h=null,f=d.floating||i(this.currentItem),a=f?"left":"top",l=f?"width":"height",
c=this.positionAbs[a]+this.offset.click[a],o=this.items.length-1;o>=0;o--)t.contains(this.containers[m].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!f||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[a],
p=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(p=!0,u+=this.items[o][l]),Math.abs(u-c)<r&&(r=Math.abs(u-c),
h=this.items[o],this.direction=p?"up":"down"));
if(!h&&!this.options.dropOnEmpty)return;
if(this.currentContainer===this.containers[m])return;
h?this._rearrange(s,h,null,!0):this._rearrange(s,null,this.containers[m].element,!0),
this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),
this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),
this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1;
}
},
_createHelper:function(e){
var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;
return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),
s[0]===this.currentItem[0]&&(this._storedCSS={
width:this.currentItem[0].style.width,
height:this.currentItem[0].style.height,
position:this.currentItem.css("position"),
top:this.currentItem.css("top"),
left:this.currentItem.css("left")
}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),
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
this.offsetParent=this.helper.offsetParent();
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
var t=this.currentItem.position();
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
left:parseInt(this.currentItem.css("marginLeft"),10)||0,
top:parseInt(this.currentItem.css("marginTop"),10)||0
};
},
_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},
_setContainment:function(){
var e,i,s,n=this.options;
"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),
/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),
s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]);
},
_convertPositionTo:function(e,i){
i||(i=this.position);
var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);
return{
top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,
left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s
};
},
_generatePosition:function(e){
var i,s,n=this.options,o=e.pageX,r=e.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(h[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),
this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),
e.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),
e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),
e.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),
n.grid&&(i=this.originalPageY+Math.round((r-this.originalPageY)/n.grid[1])*n.grid[1],
r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,
s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),
{
top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:h.scrollTop()),
left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:h.scrollLeft())
};
},
_rearrange:function(t,e,i,s){
i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),
this.counter=this.counter?++this.counter:1;
var n=this.counter;
this._delay(function(){
n===this.counter&&this.refreshPositions(!s);
});
},
_clear:function(t,e){
this.reverting=!1;
var i,s=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),
this._noFinalSort=null,this.helper[0]===this.currentItem[0]){
for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
}else this.currentItem.show();
for(this.fromOutside&&!e&&s.push(function(t){
this._trigger("receive",t,this._uiHash(this.fromOutside));
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){
this._trigger("update",t,this._uiHash());
}),this!==this.currentContainer&&(e||(s.push(function(t){
this._trigger("remove",t,this._uiHash());
}),s.push(function(t){
return function(e){
t._trigger("receive",e,this._uiHash(this));
};
}.call(this,this.currentContainer)),s.push(function(t){
return function(e){
t._trigger("update",e,this._uiHash(this));
};
}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){
return function(e){
t._trigger("deactivate",e,this._uiHash(this));
};
}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){
return function(e){
t._trigger("out",e,this._uiHash(this));
};
}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);
if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),
this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),
this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),
this.dragging=!1,this.cancelHelperRemoval){
if(!e){
for(this._trigger("beforeStop",t,this._uiHash()),i=0;i<s.length;i++)s[i].call(this,t);
this._trigger("stop",t,this._uiHash());
}
return this.fromOutside=!1,!1;
}
if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){
for(i=0;i<s.length;i++)s[i].call(this,t);
this._trigger("stop",t,this._uiHash());
}
return this.fromOutside=!1,!0;
},
_trigger:function(){
t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel();
},
_uiHash:function(e){
var i=e||this;
return{
helper:i.helper,
placeholder:i.placeholder||t([]),
position:i.position,
originalPosition:i.originalPosition,
offset:i.positionAbs,
item:i.currentItem,
sender:e?e.element:null
};
}
});
}(jQuery);
});define("biz_web/lib/json.js", [], function(require, exports, module) {
try {
var report_time_begin = +(new Date);
return typeof JSON != "object" && (JSON = {}), function() {
"use strict";
function f(e) {
return e < 10 ? "0" + e : e;
}
function quote(e) {
return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
var t = meta[e];
return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}) + '"' : '"' + e + '"';
}
function str(e, t) {
var n, r, i, s, o = gap, u, a = t[e];
a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
switch (typeof a) {
case "string":
return quote(a);
case "number":
return isFinite(a) ? String(a) : "null";
case "boolean":
case "null":
return String(a);
case "object":
if (!a) return "null";
gap += indent, u = [];
if (Object.prototype.toString.apply(a) === "[object Array]") {
s = a.length;
for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i;
}
if (rep && typeof rep == "object") {
s = rep.length;
for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
} else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i;
}
}
typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
return this.valueOf();
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b": "\\b",
"	": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
'"': '\\"',
"\\": "\\\\"
}, rep;
JSON.stringify2 = function(e, t, n) {
var r;
gap = "", indent = "";
if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " "; else typeof n == "string" && (indent = n);
rep = t;
if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
"": e
});
throw new Error("JSON.stringify");
}, typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
function walk(e, t) {
var n, r, i = e[t];
if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
return reviver.call(e, t, i);
}
var j;
text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}));
if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
"": j
}, "") : j;
throw new SyntaxError("JSON.parse");
});
}(), JSON;
} catch (e) {
wx.jslog({
src: "biz_web/lib/json.js"
}, e);
}
});define("common/qq/emoji.js", [ "widget/emoji.css" ], function(e, t, n) {
try {
var r = +(new Date);
e("widget/emoji.css");
var i = {
"☀": "2600",
"☁": "2601",
"☔": "2614",
"⛄": "26c4",
"⚡": "26a1",
"🌀": "1f300",
"🌁": "1f301",
"🌂": "1f302",
"🌃": "1f303",
"🌄": "1f304",
"🌅": "1f305",
"🌆": "1f306",
"🌇": "1f307",
"🌈": "1f308",
"❄": "2744",
"⛅": "26c5",
"🌉": "1f309",
"🌊": "1f30a",
"🌋": "1f30b",
"🌌": "1f30c",
"🌏": "1f30f",
"🌑": "1f311",
"🌔": "1f314",
"🌓": "1f313",
"🌙": "1f319",
"🌕": "1f315",
"🌛": "1f31b",
"🌟": "1f31f",
"🌠": "1f320",
"🕐": "1f550",
"🕑": "1f551",
"🕒": "1f552",
"🕓": "1f553",
"🕔": "1f554",
"🕕": "1f555",
"🕖": "1f556",
"🕗": "1f557",
"🕘": "1f558",
"🕙": "1f559",
"🕚": "1f55a",
"🕛": "1f55b",
"⌚": "231a",
"⌛": "231b",
"⏰": "23f0",
"⏳": "23f3",
"♈": "2648",
"♉": "2649",
"♊": "264a",
"♋": "264b",
"♌": "264c",
"♍": "264d",
"♎": "264e",
"♏": "264f",
"♐": "2650",
"♑": "2651",
"♒": "2652",
"♓": "2653",
"⛎": "26ce",
"🍀": "1f340",
"🌷": "1f337",
"🌱": "1f331",
"🍁": "1f341",
"🌸": "1f338",
"🌹": "1f339",
"🍂": "1f342",
"🍃": "1f343",
"🌺": "1f33a",
"🌻": "1f33b",
"🌴": "1f334",
"🌵": "1f335",
"🌾": "1f33e",
"🌽": "1f33d",
"🍄": "1f344",
"🌰": "1f330",
"🌼": "1f33c",
"🌿": "1f33f",
"🍒": "1f352",
"🍌": "1f34c",
"🍎": "1f34e",
"🍊": "1f34a",
"🍓": "1f353",
"🍉": "1f349",
"🍅": "1f345",
"🍆": "1f346",
"🍈": "1f348",
"🍍": "1f34d",
"🍇": "1f347",
"🍑": "1f351",
"🍏": "1f34f",
"👀": "1f440",
"👂": "1f442",
"👃": "1f443",
"👄": "1f444",
"👅": "1f445",
"💄": "1f484",
"💅": "1f485",
"💆": "1f486",
"💇": "1f487",
"💈": "1f488",
"👤": "1f464",
"👦": "1f466",
"👧": "1f467",
"👨": "1f468",
"👩": "1f469",
"👪": "1f46a",
"👫": "1f46b",
"👮": "1f46e",
"👯": "1f46f",
"👰": "1f470",
"👱": "1f471",
"👲": "1f472",
"👳": "1f473",
"👴": "1f474",
"👵": "1f475",
"👶": "1f476",
"👷": "1f477",
"👸": "1f478",
"👹": "1f479",
"👺": "1f47a",
"👻": "1f47b",
"👼": "1f47c",
"👽": "1f47d",
"👾": "1f47e",
"👿": "1f47f",
"💀": "1f480",
"💁": "1f481",
"💂": "1f482",
"💃": "1f483",
"🐌": "1f40c",
"🐍": "1f40d",
"🐎": "1f40e",
"🐔": "1f414",
"🐗": "1f417",
"🐫": "1f42b",
"🐘": "1f418",
"🐨": "1f428",
"🐒": "1f412",
"🐑": "1f411",
"🐙": "1f419",
"🐚": "1f41a",
"🐛": "1f41b",
"🐜": "1f41c",
"🐝": "1f41d",
"🐞": "1f41e",
"🐠": "1f420",
"🐡": "1f421",
"🐢": "1f422",
"🐤": "1f424",
"🐥": "1f425",
"🐦": "1f426",
"🐣": "1f423",
"🐧": "1f427",
"🐩": "1f429",
"🐟": "1f41f",
"🐬": "1f42c",
"🐭": "1f42d",
"🐯": "1f42f",
"🐱": "1f431",
"🐳": "1f433",
"🐴": "1f434",
"🐵": "1f435",
"🐶": "1f436",
"🐷": "1f437",
"🐻": "1f43b",
"🐹": "1f439",
"🐺": "1f43a",
"🐮": "1f42e",
"🐰": "1f430",
"🐸": "1f438",
"🐾": "1f43e",
"🐲": "1f432",
"🐼": "1f43c",
"🐽": "1f43d",
"😠": "1f620",
"😩": "1f629",
"😲": "1f632",
"😞": "1f61e",
"😵": "1f635",
"😰": "1f630",
"😒": "1f612",
"😍": "1f60d",
"😤": "1f624",
"😜": "1f61c",
"😝": "1f61d",
"😋": "1f60b",
"😘": "1f618",
"😚": "1f61a",
"😷": "1f637",
"😳": "1f633",
"😃": "1f603",
"😅": "1f605",
"😆": "1f606",
"😁": "1f601",
"😂": "1f602",
"😊": "1f60a",
"☺": "263a",
"😄": "1f604",
"😢": "1f622",
"😭": "1f62d",
"😨": "1f628",
"😣": "1f623",
"😡": "1f621",
"😌": "1f60c",
"😖": "1f616",
"😔": "1f614",
"😱": "1f631",
"😪": "1f62a",
"😏": "1f60f",
"😓": "1f613",
"😥": "1f625",
"😫": "1f62b",
"😉": "1f609",
"😺": "1f63a",
"😸": "1f638",
"😹": "1f639",
"😽": "1f63d",
"😻": "1f63b",
"😿": "1f63f",
"😾": "1f63e",
"😼": "1f63c",
"🙀": "1f640",
"🙅": "1f645",
"🙆": "1f646",
"🙇": "1f647",
"🙈": "1f648",
"🙊": "1f64a",
"🙉": "1f649",
"🙋": "1f64b",
"🙌": "1f64c",
"🙍": "1f64d",
"🙎": "1f64e",
"🙏": "1f64f",
"🏠": "1f3e0",
"🏡": "1f3e1",
"🏢": "1f3e2",
"🏣": "1f3e3",
"🏥": "1f3e5",
"🏦": "1f3e6",
"🏧": "1f3e7",
"🏨": "1f3e8",
"🏩": "1f3e9",
"🏪": "1f3ea",
"🏫": "1f3eb",
"⛪": "26ea",
"⛲": "26f2",
"🏬": "1f3ec",
"🏯": "1f3ef",
"🏰": "1f3f0",
"🏭": "1f3ed",
"⚓": "2693",
"🏮": "1f3ee",
"🗻": "1f5fb",
"🗼": "1f5fc",
"🗽": "1f5fd",
"🗾": "1f5fe",
"🗿": "1f5ff",
"👞": "1f45e",
"👟": "1f45f",
"👠": "1f460",
"👡": "1f461",
"👢": "1f462",
"👣": "1f463",
"👓": "1f453",
"👕": "1f455",
"👖": "1f456",
"👑": "1f451",
"👔": "1f454",
"👒": "1f452",
"👗": "1f457",
"👘": "1f458",
"👙": "1f459",
"👚": "1f45a",
"👛": "1f45b",
"👜": "1f45c",
"👝": "1f45d",
"💰": "1f4b0",
"💱": "1f4b1",
"💹": "1f4b9",
"💲": "1f4b2",
"💳": "1f4b3",
"💴": "1f4b4",
"💵": "1f4b5",
"💸": "1f4b8",
"🇨🇳": "1f1e81f1f3",
"🇩🇪": "1f1e91f1ea",
"🇪🇸": "1f1ea1f1f8",
"🇫🇷": "1f1eb1f1f7",
"🇬🇧": "1f1ec1f1e7",
"🇮🇹": "1f1ee1f1f9",
"🇯🇵": "1f1ef1f1f5",
"🇰🇷": "1f1f01f1f7",
"🇷🇺": "1f1f71f1fa",
"🇺🇸": "1f1fa1f1f8",
"🔥": "1f525",
"🔦": "1f526",
"🔧": "1f527",
"🔨": "1f528",
"🔩": "1f529",
"🔪": "1f52a",
"🔫": "1f52b",
"🔮": "1f52e",
"🔯": "1f52f",
"🔰": "1f530",
"🔱": "1f531",
"💉": "1f489",
"💊": "1f48a",
"🅰": "1f170",
"🅱": "1f171",
"🆎": "1f18e",
"🅾": "1f17e",
"🎀": "1f380",
"🎁": "1f381",
"🎂": "1f382",
"🎄": "1f384",
"🎅": "1f385",
"🎌": "1f38c",
"🎆": "1f386",
"🎈": "1f388",
"🎉": "1f389",
"🎍": "1f38d",
"🎎": "1f38e",
"🎓": "1f393",
"🎒": "1f392",
"🎏": "1f38f",
"🎇": "1f387",
"🎐": "1f390",
"🎃": "1f383",
"🎊": "1f38a",
"🎋": "1f38b",
"🎑": "1f391",
"📟": "1f4df",
"☎": "260e",
"📞": "1f4de",
"📱": "1f4f1",
"📲": "1f4f2",
"📝": "1f4dd",
"📠": "1f4e0",
"✉": "2709",
"📨": "1f4e8",
"📩": "1f4e9",
"📪": "1f4ea",
"📫": "1f4eb",
"📮": "1f4ee",
"📰": "1f4f0",
"📢": "1f4e2",
"📣": "1f4e3",
"📡": "1f4e1",
"📤": "1f4e4",
"📥": "1f4e5",
"📦": "1f4e6",
"📧": "1f4e7",
"🔠": "1f520",
"🔡": "1f521",
"🔢": "1f522",
"🔣": "1f523",
"🔤": "1f524",
"✒": "2712",
"💺": "1f4ba",
"💻": "1f4bb",
"✏": "270f",
"📎": "1f4ce",
"💼": "1f4bc",
"💽": "1f4bd",
"💾": "1f4be",
"💿": "1f4bf",
"📀": "1f4c0",
"✂": "2702",
"📍": "1f4cd",
"📃": "1f4c3",
"📄": "1f4c4",
"📅": "1f4c5",
"📁": "1f4c1",
"📂": "1f4c2",
"📓": "1f4d3",
"📖": "1f4d6",
"📔": "1f4d4",
"📕": "1f4d5",
"📗": "1f4d7",
"📘": "1f4d8",
"📙": "1f4d9",
"📚": "1f4da",
"📛": "1f4db",
"📜": "1f4dc",
"📋": "1f4cb",
"📆": "1f4c6",
"📊": "1f4ca",
"📈": "1f4c8",
"📉": "1f4c9",
"📇": "1f4c7",
"📌": "1f4cc",
"📒": "1f4d2",
"📏": "1f4cf",
"📐": "1f4d0",
"📑": "1f4d1",
"🎽": "1f3bd",
"⚾": "26be",
"⛳": "26f3",
"🎾": "1f3be",
"⚽": "26bd",
"🎿": "1f3bf",
"🏀": "1f3c0",
"🏁": "1f3c1",
"🏂": "1f3c2",
"🏃": "1f3c3",
"🏄": "1f3c4",
"🏆": "1f3c6",
"🏈": "1f3c8",
"🏊": "1f3ca",
"🚃": "1f683",
"🚇": "1f687",
"Ⓜ": "24c2",
"🚄": "1f684",
"🚅": "1f685",
"🚗": "1f697",
"🚙": "1f699",
"🚌": "1f68c",
"🚏": "1f68f",
"🚢": "1f6a2",
"✈": "2708",
"⛵": "26f5",
"🚉": "1f689",
"🚀": "1f680",
"🚤": "1f6a4",
"🚕": "1f695",
"🚚": "1f69a",
"🚒": "1f692",
"🚑": "1f691",
"🚓": "1f693",
"⛽": "26fd",
"🅿": "1f17f",
"🚥": "1f6a5",
"🚧": "1f6a7",
"🚨": "1f6a8",
"♨": "2668",
"⛺": "26fa",
"🎠": "1f3a0",
"🎡": "1f3a1",
"🎢": "1f3a2",
"🎣": "1f3a3",
"🎤": "1f3a4",
"🎥": "1f3a5",
"🎦": "1f3a6",
"🎧": "1f3a7",
"🎨": "1f3a8",
"🎩": "1f3a9",
"🎪": "1f3aa",
"🎫": "1f3ab",
"🎬": "1f3ac",
"🎭": "1f3ad",
"🎮": "1f3ae",
"🀄": "1f004",
"🎯": "1f3af",
"🎰": "1f3b0",
"🎱": "1f3b1",
"🎲": "1f3b2",
"🎳": "1f3b3",
"🎴": "1f3b4",
"🃏": "1f0cf",
"🎵": "1f3b5",
"🎶": "1f3b6",
"🎷": "1f3b7",
"🎸": "1f3b8",
"🎹": "1f3b9",
"🎺": "1f3ba",
"🎻": "1f3bb",
"🎼": "1f3bc",
"〽": "303d",
"📷": "1f4f7",
"📹": "1f4f9",
"📺": "1f4fa",
"📻": "1f4fb",
"📼": "1f4fc",
"💋": "1f48b",
"💌": "1f48c",
"💍": "1f48d",
"💎": "1f48e",
"💏": "1f48f",
"💐": "1f490",
"💑": "1f491",
"💒": "1f492",
"🔞": "1f51e",
"©": "a9",
"®": "ae",
"™": "2122",
"ℹ": "2139",
"#⃣": "2320e3",
"1⃣": "3120e3",
"2⃣": "3220e3",
"3⃣": "3320e3",
"4⃣": "3420e3",
"5⃣": "3520e3",
"6⃣": "3620e3",
"7⃣": "3720e3",
"8⃣": "3820e3",
"9⃣": "3920e3",
"0⃣": "3020e3",
"🔟": "1f51f",
"📶": "1f4f6",
"📳": "1f4f3",
"📴": "1f4f4",
"🍔": "1f354",
"🍙": "1f359",
"🍰": "1f370",
"🍜": "1f35c",
"🍞": "1f35e",
"🍳": "1f373",
"🍦": "1f366",
"🍟": "1f35f",
"🍡": "1f361",
"🍘": "1f358",
"🍚": "1f35a",
"🍝": "1f35d",
"🍛": "1f35b",
"🍢": "1f362",
"🍣": "1f363",
"🍱": "1f371",
"🍲": "1f372",
"🍧": "1f367",
"🍖": "1f356",
"🍥": "1f365",
"🍠": "1f360",
"🍕": "1f355",
"🍗": "1f357",
"🍨": "1f368",
"🍩": "1f369",
"🍪": "1f36a",
"🍫": "1f36b",
"🍬": "1f36c",
"🍭": "1f36d",
"🍮": "1f36e",
"🍯": "1f36f",
"🍤": "1f364",
"🍴": "1f374",
"☕": "2615",
"🍸": "1f378",
"🍺": "1f37a",
"🍵": "1f375",
"🍶": "1f376",
"🍷": "1f377",
"🍻": "1f37b",
"🍹": "1f379",
"↗": "2197",
"↘": "2198",
"↖": "2196",
"↙": "2199",
"⤴": "2934",
"⤵": "2935",
"↔": "2194",
"↕": "2195",
"⬆": "2b06",
"⬇": "2b07",
"➡": "27a1",
"⬅": "2b05",
"▶": "25b6",
"◀": "25c0",
"⏩": "23e9",
"⏪": "23ea",
"⏫": "23eb",
"⏬": "23ec",
"🔺": "1f53a",
"🔻": "1f53b",
"🔼": "1f53c",
"🔽": "1f53d",
"⭕": "2b55",
"❌": "274c",
"❎": "274e",
"❗": "2757",
"⁉": "2049",
"‼": "203c",
"❓": "2753",
"❔": "2754",
"❕": "2755",
"〰": "3030",
"➰": "27b0",
"➿": "27bf",
"❤": "2764",
"💓": "1f493",
"💔": "1f494",
"💕": "1f495",
"💖": "1f496",
"💗": "1f497",
"💘": "1f498",
"💙": "1f499",
"💚": "1f49a",
"💛": "1f49b",
"💜": "1f49c",
"💝": "1f49d",
"💞": "1f49e",
"💟": "1f49f",
"♥": "2665",
"♠": "2660",
"♦": "2666",
"♣": "2663",
"🚬": "1f6ac",
"🚭": "1f6ad",
"♿": "267f",
"🚩": "1f6a9",
"⚠": "26a0",
"⛔": "26d4",
"♻": "267b",
"🚲": "1f6b2",
"🚶": "1f6b6",
"🚹": "1f6b9",
"🚺": "1f6ba",
"🛀": "1f6c0",
"🚻": "1f6bb",
"🚽": "1f6bd",
"🚾": "1f6be",
"🚼": "1f6bc",
"🚪": "1f6aa",
"🚫": "1f6ab",
"✔": "2714",
"🆑": "1f191",
"🆒": "1f192",
"🆓": "1f193",
"🆔": "1f194",
"🆕": "1f195",
"🆖": "1f196",
"🆗": "1f197",
"🆘": "1f198",
"🆙": "1f199",
"🆚": "1f19a",
"🈁": "1f201",
"🈂": "1f202",
"🈲": "1f232",
"🈳": "1f233",
"🈴": "1f234",
"🈵": "1f235",
"🈶": "1f236",
"🈚": "1f21a",
"🈷": "1f237",
"🈸": "1f238",
"🈹": "1f239",
"🈯": "1f22f",
"🈺": "1f23a",
"㊙": "3299",
"㊗": "3297",
"🉐": "1f250",
"🉑": "1f251",
"➕": "2795",
"➖": "2796",
"✖": "2716",
"➗": "2797",
"💠": "1f4a0",
"💡": "1f4a1",
"💢": "1f4a2",
"💣": "1f4a3",
"💤": "1f4a4",
"💥": "1f4a5",
"💦": "1f4a6",
"💧": "1f4a7",
"💨": "1f4a8",
"💩": "1f4a9",
"💪": "1f4aa",
"💫": "1f4ab",
"💬": "1f4ac",
"✨": "2728",
"✴": "2734",
"✳": "2733",
"⚪": "26aa",
"⚫": "26ab",
"🔴": "1f534",
"🔵": "1f535",
"🔲": "1f532",
"🔳": "1f533",
"⭐": "2b50",
"⬜": "2b1c",
"⬛": "2b1b",
"▫": "25ab",
"▪": "25aa",
"◽": "25fd",
"◾": "25fe",
"◻": "25fb",
"◼": "25fc",
"🔶": "1f536",
"🔷": "1f537",
"🔸": "1f538",
"🔹": "1f539",
"❇": "2747",
"💮": "1f4ae",
"💯": "1f4af",
"↩": "21a9",
"↪": "21aa",
"🔃": "1f503",
"🔊": "1f50a",
"🔋": "1f50b",
"🔌": "1f50c",
"🔍": "1f50d",
"🔎": "1f50e",
"🔒": "1f512",
"🔓": "1f513",
"🔏": "1f50f",
"🔐": "1f510",
"🔑": "1f511",
"🔔": "1f514",
"☑": "2611",
"🔘": "1f518",
"🔖": "1f516",
"🔗": "1f517",
"🔙": "1f519",
"🔚": "1f51a",
"🔛": "1f51b",
"🔜": "1f51c",
"🔝": "1f51d",
" ": "2003",
" ": "2002",
" ": "2005",
"✅": "2705",
"✊": "270a",
"✋": "270b",
"✌": "270c",
"👊": "1f44a",
"👍": "1f44d",
"☝": "261d",
"👆": "1f446",
"👇": "1f447",
"👈": "1f448",
"👉": "1f449",
"👋": "1f44b",
"👏": "1f44f",
"👌": "1f44c",
"👎": "1f44e",
"👐": "1f450",
"": "2600",
"": "2601",
"": "2614",
"": "26c4",
"": "26a1",
"": "1f300",
"[霧]": "1f301",
"": "1f302",
"": "1f30c",
"": "1f304",
"": "1f305",
"": "1f306",
"": "1f307",
"": "1f308",
"[雪結晶]": "2744",
"": "26c5",
"": "1f30a",
"[火山]": "1f30b",
"[地球]": "1f30f",
"●": "1f311",
"": "1f31b",
"○": "1f315",
"": "1f31f",
"☆彡": "1f320",
"": "1f550",
"": "1f551",
"": "1f552",
"": "1f553",
"": "1f554",
"": "1f555",
"": "1f556",
"": "1f557",
"": "1f558",
"": "23f0",
"": "1f55a",
"": "1f55b",
"[腕時計]": "231a",
"[砂時計]": "23f3",
"": "2648",
"": "2649",
"": "264a",
"": "264b",
"": "264c",
"": "264d",
"": "264e",
"": "264f",
"": "2650",
"": "2651",
"": "2652",
"": "2653",
"": "26ce",
"": "1f33f",
"": "1f337",
"": "1f341",
"": "1f338",
"": "1f339",
"": "1f342",
"": "1f343",
"": "1f33a",
"": "1f33c",
"": "1f334",
"": "1f335",
"": "1f33e",
"[とうもろこし]": "1f33d",
"[キノコ]": "1f344",
"[栗]": "1f330",
"[さくらんぼ]": "1f352",
"[バナナ]": "1f34c",
"": "1f34f",
"": "1f34a",
"": "1f353",
"": "1f349",
"": "1f345",
"": "1f346",
"[メロン]": "1f348",
"[パイナップル]": "1f34d",
"[ブドウ]": "1f347",
"[モモ]": "1f351",
"": "1f440",
"": "1f442",
"": "1f443",
"": "1f444",
"": "1f61d",
"": "1f484",
"": "1f485",
"": "1f486",
"": "1f487",
"": "1f488",
"〓": "2005",
"": "1f466",
"": "1f467",
"": "1f468",
"": "1f469",
"[家族]": "1f46a",
"": "1f46b",
"": "1f46e",
"": "1f46f",
"[花嫁]": "1f470",
"": "1f471",
"": "1f472",
"": "1f473",
"": "1f474",
"": "1f475",
"": "1f476",
"": "1f477",
"": "1f478",
"[なまはげ]": "1f479",
"[天狗]": "1f47a",
"": "1f47b",
"": "1f47c",
"": "1f47d",
"": "1f47e",
"": "1f47f",
"": "1f480",
"": "1f481",
"": "1f482",
"": "1f483",
"[カタツムリ]": "1f40c",
"": "1f40d",
"": "1f40e",
"": "1f414",
"": "1f417",
"": "1f42b",
"": "1f418",
"": "1f428",
"": "1f412",
"": "1f411",
"": "1f419",
"": "1f41a",
"": "1f41b",
"[アリ]": "1f41c",
"[ミツバチ]": "1f41d",
"[てんとう虫]": "1f41e",
"": "1f420",
"": "1f3a3",
"[カメ]": "1f422",
"": "1f423",
"": "1f426",
"": "1f427",
"": "1f436",
"": "1f42c",
"": "1f42d",
"": "1f42f",
"": "1f431",
"": "1f433",
"": "1f434",
"": "1f435",
"": "1f43d",
"": "1f43b",
"": "1f439",
"": "1f43a",
"": "1f42e",
"": "1f430",
"": "1f438",
"": "1f463",
"[辰]": "1f432",
"[パンダ]": "1f43c",
"": "1f620",
"": "1f64d",
"": "1f632",
"": "1f61e",
"": "1f62b",
"": "1f630",
"": "1f612",
"": "1f63b",
"": "1f63c",
"": "1f61c",
"": "1f60a",
"": "1f63d",
"": "1f61a",
"": "1f637",
"": "1f633",
"": "1f63a",
"": "1f605",
"": "1f60c",
"": "1f639",
"": "263a",
"": "1f604",
"": "1f63f",
"": "1f62d",
"": "1f628",
"": "1f64e",
"": "1f4ab",
"": "1f631",
"": "1f62a",
"": "1f60f",
"": "1f613",
"": "1f625",
"": "1f609",
"": "1f645",
"": "1f646",
"": "1f647",
"(/_＼)": "1f648",
"(・×・)": "1f64a",
"|(・×・)|": "1f649",
"": "270b",
"": "1f64c",
"": "1f64f",
"": "1f3e1",
"": "1f3e2",
"": "1f3e3",
"": "1f3e5",
"": "1f3e6",
"": "1f3e7",
"": "1f3e8",
"": "1f3e9",
"": "1f3ea",
"": "1f3eb",
"": "26ea",
"": "26f2",
"": "1f3ec",
"": "1f3ef",
"": "1f3f0",
"": "1f3ed",
"": "1f6a2",
"": "1f376",
"": "1f5fb",
"": "1f5fc",
"": "1f5fd",
"[日本地図]": "1f5fe",
"[モアイ]": "1f5ff",
"": "1f45f",
"": "1f460",
"": "1f461",
"": "1f462",
"[メガネ]": "1f453",
"": "1f45a",
"[ジーンズ]": "1f456",
"": "1f451",
"": "1f454",
"": "1f452",
"": "1f457",
"": "1f458",
"": "1f459",
"[財布]": "1f45b",
"": "1f45c",
"[ふくろ]": "1f45d",
"": "1f4b5",
"": "1f4b1",
"": "1f4c8",
"[カード]": "1f4b3",
"￥": "1f4b4",
"[飛んでいくお金]": "1f4b8",
"": "1f1e81f1f3",
"": "1f1e91f1ea",
"": "1f1ea1f1f8",
"": "1f1eb1f1f7",
"": "1f1ec1f1e7",
"": "1f1ee1f1f9",
"": "1f1ef1f1f5",
"": "1f1f01f1f7",
"": "1f1f71f1fa",
"": "1f1fa1f1f8",
"": "1f525",
"[懐中電灯]": "1f526",
"[レンチ]": "1f527",
"": "1f528",
"[ネジ]": "1f529",
"[包丁]": "1f52a",
"": "1f52b",
"": "1f52f",
"": "1f530",
"": "1f531",
"": "1f489",
"": "1f48a",
"": "1f170",
"": "1f171",
"": "1f18e",
"": "1f17e",
"": "1f380",
"": "1f4e6",
"": "1f382",
"": "1f384",
"": "1f385",
"": "1f38c",
"": "1f386",
"": "1f388",
"": "1f389",
"": "1f38d",
"": "1f38e",
"": "1f393",
"": "1f392",
"": "1f38f",
"": "1f387",
"": "1f390",
"": "1f383",
"[オメデトウ]": "1f38a",
"[七夕]": "1f38b",
"": "1f391",
"[ポケベル]": "1f4df",
"": "1f4de",
"": "1f4f1",
"": "1f4f2",
"": "1f4d1",
"": "1f4e0",
"": "1f4e7",
"": "1f4eb",
"": "1f4ee",
"[新聞]": "1f4f0",
"": "1f4e2",
"": "1f4e3",
"": "1f4e1",
"[送信BOX]": "1f4e4",
"[受信BOX]": "1f4e5",
"[ABCD]": "1f520",
"[abcd]": "1f521",
"[1234]": "1f522",
"[記号]": "1f523",
"[ABC]": "1f524",
"[ペン]": "2712",
"": "1f4ba",
"": "1f4bb",
"[クリップ]": "1f4ce",
"": "1f4bc",
"": "1f4be",
"": "1f4bf",
"": "1f4c0",
"": "2702",
"[画びょう]": "1f4cc",
"[カレンダー]": "1f4c6",
"[フォルダ]": "1f4c2",
"": "1f4d2",
"[名札]": "1f4db",
"[スクロール]": "1f4dc",
"[グラフ]": "1f4c9",
"[定規]": "1f4cf",
"[三角定規]": "1f4d0",
"": "26be",
"": "26f3",
"": "1f3be",
"": "26bd",
"": "1f3bf",
"": "1f3c0",
"": "1f3c1",
"[スノボ]": "1f3c2",
"": "1f3c3",
"": "1f3c4",
"": "1f3c6",
"": "1f3c8",
"": "1f3ca",
"": "1f683",
"": "24c2",
"": "1f684",
"": "1f685",
"": "1f697",
"": "1f699",
"": "1f68c",
"": "1f68f",
"": "2708",
"": "26f5",
"": "1f689",
"": "1f680",
"": "1f6a4",
"": "1f695",
"": "1f69a",
"": "1f692",
"": "1f691",
"": "1f6a8",
"": "26fd",
"": "1f17f",
"": "1f6a5",
"": "26d4",
"": "2668",
"": "26fa",
"": "1f3a1",
"": "1f3a2",
"": "1f3a4",
"": "1f4f9",
"": "1f3a6",
"": "1f3a7",
"": "1f3a8",
"": "1f3ad",
"[イベント]": "1f3aa",
"": "1f3ab",
"": "1f3ac",
"[ゲーム]": "1f3ae",
"": "1f004",
"": "1f3af",
"": "1f3b0",
"": "1f3b1",
"[サイコロ]": "1f3b2",
"[ボーリング]": "1f3b3",
"[花札]": "1f3b4",
"[ジョーカー]": "1f0cf",
"": "1f3b5",
"": "1f3bc",
"": "1f3b7",
"": "1f3b8",
"[ピアノ]": "1f3b9",
"": "1f3ba",
"[バイオリン]": "1f3bb",
"": "303d",
"": "1f4f7",
"": "1f4fa",
"": "1f4fb",
"": "1f4fc",
"": "1f48b",
"": "1f48c",
"": "1f48d",
"": "1f48e",
"": "1f48f",
"": "1f490",
"": "1f491",
"": "1f492",
"": "1f51e",
"": "a9",
"": "ae",
"": "2122",
"[ｉ]": "2139",
"": "2320e3",
"": "3120e3",
"": "3220e3",
"": "3320e3",
"": "3420e3",
"": "3520e3",
"": "3620e3",
"": "3720e3",
"": "3820e3",
"": "3920e3",
"": "3020e3",
"[10]": "1f51f",
"": "1f4f6",
"": "1f4f3",
"": "1f4f4",
"": "1f354",
"": "1f359",
"": "1f370",
"": "1f35c",
"": "1f35e",
"": "1f373",
"": "1f366",
"": "1f35f",
"": "1f361",
"": "1f358",
"": "1f35a",
"": "1f35d",
"": "1f35b",
"": "1f362",
"": "1f363",
"": "1f371",
"": "1f372",
"": "1f367",
"[肉]": "1f356",
"[なると]": "1f365",
"[やきいも]": "1f360",
"[ピザ]": "1f355",
"[チキン]": "1f357",
"[アイスクリーム]": "1f368",
"[ドーナツ]": "1f369",
"[クッキー]": "1f36a",
"[チョコ]": "1f36b",
"[キャンディ]": "1f36d",
"[プリン]": "1f36e",
"[ハチミツ]": "1f36f",
"[エビフライ]": "1f364",
"": "1f374",
"": "2615",
"": "1f379",
"": "1f37a",
"": "1f375",
"": "1f37b",
"": "2934",
"": "2935",
"": "2196",
"": "2199",
"⇔": "2194",
"↑↓": "1f503",
"": "2b06",
"": "2b07",
"": "27a1",
"": "1f519",
"": "25b6",
"": "25c0",
"": "23e9",
"": "23ea",
"▲": "1f53c",
"▼": "1f53d",
"": "2b55",
"": "2716",
"": "2757",
"！？": "2049",
"！！": "203c",
"": "2753",
"": "2754",
"": "2755",
"～": "27b0",
"": "27bf",
"": "2764",
"": "1f49e",
"": "1f494",
"": "1f497",
"": "1f498",
"": "1f499",
"": "1f49a",
"": "1f49b",
"": "1f49c",
"": "1f49d",
"": "1f49f",
"": "2665",
"": "2660",
"": "2666",
"": "2663",
"": "1f6ac",
"": "1f6ad",
"": "267f",
"[旗]": "1f6a9",
"": "26a0",
"": "1f6b2",
"": "1f6b6",
"": "1f6b9",
"": "1f6ba",
"": "1f6c0",
"": "1f6bb",
"": "1f6bd",
"": "1f6be",
"": "1f6bc",
"[ドア]": "1f6aa",
"[禁止]": "1f6ab",
"[チェックマーク]": "2705",
"[CL]": "1f191",
"": "1f192",
"[FREE]": "1f193",
"": "1f194",
"": "1f195",
"[NG]": "1f196",
"": "1f197",
"[SOS]": "1f198",
"": "1f199",
"": "1f19a",
"": "1f201",
"": "1f202",
"[禁]": "1f232",
"": "1f233",
"[合]": "1f234",
"": "1f235",
"": "1f236",
"": "1f21a",
"": "1f237",
"": "1f238",
"": "1f239",
"": "1f22f",
"": "1f23a",
"": "3299",
"": "3297",
"": "1f250",
"[可]": "1f251",
"[＋]": "2795",
"[－]": "2796",
"[÷]": "2797",
"": "1f4a1",
"": "1f4a2",
"": "1f4a3",
"": "1f4a4",
"[ドンッ]": "1f4a5",
"": "1f4a7",
"": "1f4a8",
"": "1f4a9",
"": "1f4aa",
"[フキダシ]": "1f4ac",
"": "2747",
"": "2734",
"": "2733",
"": "1f534",
"": "25fc",
"": "1f539",
"": "2b50",
"[花丸]": "1f4ae",
"[100点]": "1f4af",
"←┘": "21a9",
"└→": "21aa",
"": "1f50a",
"[電池]": "1f50b",
"[コンセント]": "1f50c",
"": "1f50e",
"": "1f510",
"": "1f513",
"": "1f511",
"": "1f514",
"[ラジオボタン]": "1f518",
"[ブックマーク]": "1f516",
"[リンク]": "1f517",
"[end]": "1f51a",
"[ON]": "1f51b",
"[SOON]": "1f51c",
"": "1f51d",
"": "270a",
"": "270c",
"": "1f44a",
"": "1f44d",
"": "261d",
"": "1f446",
"": "1f447",
"": "1f448",
"": "1f449",
"": "1f44b",
"": "1f44f",
"": "1f44c",
"": "1f44e",
"": "1f450"
}, s = {
"/微笑": "0",
"/撇嘴": "1",
"/色": "2",
"/发呆": "3",
"/得意": "4",
"/流泪": "5",
"/害羞": "6",
"/闭嘴": "7",
"/睡": "8",
"/大哭": "9",
"/尴尬": "10",
"/发怒": "11",
"/调皮": "12",
"/呲牙": "13",
"/惊讶": "14",
"/难过": "15",
"/酷": "16",
"/冷汗": "17",
"/抓狂": "18",
"/吐": "19",
"/偷笑": "20",
"/可爱": "21",
"/白眼": "22",
"/傲慢": "23",
"/饥饿": "24",
"/困": "25",
"/惊恐": "26",
"/流汗": "27",
"/憨笑": "28",
"/大兵": "29",
"/奋斗": "30",
"/咒骂": "31",
"/疑问": "32",
"/嘘": "33",
"/晕": "34",
"/折磨": "35",
"/衰": "36",
"/骷髅": "37",
"/敲打": "38",
"/再见": "39",
"/擦汗": "40",
"/抠鼻": "41",
"/鼓掌": "42",
"/糗大了": "43",
"/坏笑": "44",
"/左哼哼": "45",
"/右哼哼": "46",
"/哈欠": "47",
"/鄙视": "48",
"/委屈": "49",
"/快哭了": "50",
"/阴险": "51",
"/亲亲": "52",
"/吓": "53",
"/可怜": "54",
"/菜刀": "55",
"/西瓜": "56",
"/啤酒": "57",
"/篮球": "58",
"/乒乓": "59",
"/咖啡": "60",
"/饭": "61",
"/猪头": "62",
"/玫瑰": "63",
"/凋谢": "64",
"/示爱": "65",
"/爱心": "66",
"/心碎": "67",
"/蛋糕": "68",
"/闪电": "69",
"/炸弹": "70",
"/刀": "71",
"/足球": "72",
"/瓢虫": "73",
"/便便": "74",
"/月亮": "75",
"/太阳": "76",
"/礼物": "77",
"/拥抱": "78",
"/强": "79",
"/弱": "80",
"/握手": "81",
"/胜利": "82",
"/抱拳": "83",
"/勾引": "84",
"/拳头": "85",
"/差劲": "86",
"/爱你": "87",
"/NO": "88",
"/OK": "89",
"/爱情": "90",
"/飞吻": "91",
"/跳跳": "92",
"/发抖": "93",
"/怄火": "94",
"/转圈": "95",
"/磕头": "96",
"/回头": "97",
"/跳绳": "98",
"/挥手": "99",
"/激动": "100",
"/街舞": "101",
"/献吻": "102",
"/左太极": "103",
"/右太极": "104",
"/::)": "0",
"/::~": "1",
"/::B": "2",
"/::|": "3",
"/:8-)": "4",
"/::<": "5",
"/::$": "6",
"/::X": "7",
"/::Z": "8",
"/::(": "9",
"/::'(": "9",
"/::-|": "10",
"/::@": "11",
"/::P": "12",
"/::D": "13",
"/::O": "14",
"/::(": "15",
"/::+": "16",
"/:--b": "17",
"/::Q": "18",
"/::T": "19",
"/:,@P": "20",
"/:,@-D": "21",
"/::d": "22",
"/:,@o": "23",
"/::g": "24",
"/:|-)": "25",
"/::!": "26",
"/::L": "27",
"/::>": "28",
"/::,@": "29",
"/:,@f": "30",
"/::-S": "31",
"/:?": "32",
"/:,@x": "33",
"/:,@@": "34",
"/::8": "35",
"/:,@!": "36",
"/:!!!": "37",
"/:xx": "38",
"/:bye": "39",
"/:wipe": "40",
"/:dig": "41",
"/:handclap": "42",
"/:&-(": "43",
"/:B-)": "44",
"/:<@": "45",
"/:@>": "46",
"/::-O": "47",
"/:>-|": "48",
"/:P-(": "49",
"/::'|": "50",
"/:X-)": "51",
"/::*": "52",
"/:@x": "53",
"/:8*": "54",
"/:pd": "55",
"/:<W>": "56",
"/:beer": "57",
"/:basketb": "58",
"/:oo": "59",
"/:coffee": "60",
"/:eat": "61",
"/:pig": "62",
"/:rose": "63",
"/:fade": "64",
"/:showlove": "65",
"/:heart": "66",
"/:break": "67",
"/:cake": "68",
"/:li": "69",
"/:bome": "70",
"/:kn": "71",
"/:footb": "72",
"/:ladybug": "73",
"/:shit": "74",
"/:moon": "75",
"/:sun": "76",
"/:gift": "77",
"/:hug": "78",
"/:strong": "79",
"/:weak": "80",
"/:share": "81",
"/:v": "82",
"/:@)": "83",
"/:jj": "84",
"/:@@": "85",
"/:bad": "86",
"/:lvu": "87",
"/:no": "88",
"/:ok": "89",
"/:love": "90",
"/:<L>": "91",
"/:jump": "92",
"/:shake": "93",
"/:<O>": "94",
"/:circle": "95",
"/:kotow": "96",
"/:turn": "97",
"/:skip": "98",
"/:oY": "99",
"/:#-0": "100",
"/:hiphot": "101",
"/:kiss": "102",
"/:<&": "103",
"/:&>": "104"
}, o = '<span class="emoji emoji%s"></span>', u = wx.resPath + "/mpres/htmledition/images/icon/emotion/", a = '<img src="' + u + '%s.gif" width="24" height="24">';
String.prototype.emoji = function() {
var e = this.toString();
for (var t in i) while (-1 != e.indexOf(t)) e = e.replace(t, o.sprintf(i[t]));
for (var t in s) while (-1 != e.indexOf(t)) e = e.replace(t, a.sprintf(s[t]));
return e;
};
} catch (f) {
wx.jslog({
src: "common/qq/emoji.js"
}, f);
}
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
});define("advanced/menu_link_dialog.js",["common/wx/popup.js","common/wx/top.js","common/wx/Tips.js","common/wx/Cgi.js","common/wx/pagebar.js","common/wx/time.js","tpl/advanced/menu_link_dialog.html.js","tpl/advanced/appmsg_list.html.js","tpl/advanced/homepage_list.html.js","homepage/plugins/plugin1.js","homepage/plugins/plugin2.js","homepage/plugins/plugin3.js"],function(e){
"use strict";
function t(e){
this.opt=e,this.biz=e.biz,this.onOK=e.onOK,this.can_use_homepage=e.can_use_homepage,
this.createDialog();
}
e("common/wx/popup.js");
var i=e("common/wx/top.js"),n=e("common/wx/Tips.js"),s=e("common/wx/Cgi.js"),a=e("common/wx/pagebar.js"),o=e("common/wx/time.js"),d=e("tpl/advanced/menu_link_dialog.html.js"),l=e("tpl/advanced/appmsg_list.html.js"),p=e("tpl/advanced/homepage_list.html.js"),m=e("homepage/plugins/plugin1.js"),r=e("homepage/plugins/plugin2.js"),c=e("homepage/plugins/plugin3.js"),g={
1:m,
2:r,
3:c
},h=0,u="http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=%s#wechat_webview_type=1&wechat_redirect",_="http://mp.weixin.qq.com/mp/homepage?__biz=%s&hid=%s&sn=%s#wechat_redirect",f={
createDialog:function(){
var e=this,t=$.parseHTML(wx.T(d,{}));
this.dialog&&this.dialog.popup("remove"),this.dialog=$(t[0]).popup({
title:"选择图文消息",
className:"align_edge",
width:720,
onOK:function(){
if(e.$btn.hasClass("btn_disabled"))return n.err("请选择图文消息"),!0;
var t=e.currentTab,i={
type:t,
name:e.topData[t].name
},s=e.$dom.find(".js_content").eq(t);
i.title=s.data("title")||"",i.link=s.data("link"),e.onOK&&e.onOK(i);
},
onCancel:function(){
this.hide(),e.dialog=null;
},
onHide:function(){
e.$dom.off(),this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$btn=e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init();
},
init:function(){
var e=this;
e.topData=[{
id:"appmsg",
name:"素材库"
},{
id:"history",
name:"历史消息"
}],e.can_use_homepage&&e.topData.push({
id:"homepage",
name:"页面模板"
}),e.tab=new i(e.$dom.find(".js_tab"),e.topData),e.tab.selected(0),e.currentTab=0,
e.initEvent(),e.initAppMsg();
},
initEvent:function(){
var e=this;
e.$dom.on("click",".js_top",function(){
var t=$(this).data("id"),i=$(this).data("index");
if(i!=e.currentTab){
var n=e.$dom.find(".js_content").hide(),s=n.eq(i).show();
switch(s.data("link")?e.$btn.removeClass("btn_disabled"):e.$btn.addClass("btn_disabled"),
t){
case"history":
e.initHistory();
break;

case"homepage":
e.initHomePage();
}
e.tab.selected(e.currentTab=i),e.resetPos();
}
}),e.$dom.on("click","a",function(e){
e.preventDefault();
}),e.$dom.on("mousewheel",".js_appmsg_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll",".js_appmsg_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
}),e.$dom.on("mousewheel",".js_content",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll",".js_content",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initAppMsg:function(){
var e=this;
e.appMsgInited||(e.getAppMsgList(),e.$dom.on("click",".js_search_btn",function(){
e.getAppMsgList({
query:e.$dom.find(".js_search").val()
});
}),e.$dom.on("keyup",".js_search",function(t){
wx.isHotkey(t,"enter")&&e.getAppMsgList({
query:e.$dom.find(".js_search").val()
});
}),e.$dom.find(".js_appmsg_list").on("click","tr",function(){
if(!$(this).find("label").hasClass("selected")){
var t=$(this);
t.siblings().find("label").removeClass("selected"),t.find("label").addClass("selected");
var i=t.data("title"),n=t.data("link");
e.$dom.find(".js_appmsg").data("title",i),e.$dom.find(".js_appmsg").data("link",n),
e.$btn.removeClass("btn_disabled");
}
}),e.appMsgInited=!0);
},
getAppMsgList:function(e){
var t=this,i=$.extend({
action:"list_ex",
begin:0,
count:10,
query:"",
scene:1
},e||{}),a=t.loadingFlag=++h;
t.$dom.find(".js_appmsg_list").hide(),t.$dom.find(".js_appmsg .js_loading").show(),
t.resetPos(),s.post({
url:"/cgi-bin/appmsg",
data:i,
complete:function(){
t.$dom.find(".js_appmsg .js_loading").hide(),t.resetPos();
}
},{
done:function(e){
if(a==t.loadingFlag)if(e&&e.base_resp){
if(0==e.base_resp.ret)return t.renderAppMsg(e.app_msg_list),void t.renderPageBar(i.begin,e.app_msg_cnt);
s.show(e);
}else n.err("系统错误");
},
fail:function(){
n.err("系统错误");
}
});
},
renderAppMsg:function(e){
var t=this;
$.each(e,function(e,t){
t.date=o.formatDate(new Date(1e3*t.update_time),"YYYY年MM月DD日");
}),t.$dom.find(".js_appmsg_list").show().find("tbody").html(e.length?wx.T(l,{
data:e
}):'<tr class="empty_item"><td colspan="10" class="empty_tips">暂无数据</td></tr>'),
t.$dom.find(".js_appmsg").data("title",null),t.$dom.find(".js_appmsg").data("link",null),
t.$btn.addClass("btn_disabled"),t.resetPos();
},
renderPageBar:function(e,t){
var i=this;
e=e||0,new a({
container:i.$dom.find(".js_pagebar"),
perPage:10,
initShowPage:(e/10|0)+1,
totalItemsNum:t,
first:!1,
last:!1,
isSimple:!0,
callback:function(e){
var t=e.currentPage;
i.getAppMsgList({
begin:10*(t-1),
query:i.$dom.find(".js_search").val()
});
}
});
},
initHistory:function(){
var e=this;
e.historyInited||(e.$dom.find(".js_history").on("change","input",function(){
var t="";
$(this).prop("checked")?($(this).closest("label").addClass("selected"),t=u.sprintf(e.biz),
e.$btn.removeClass("btn_disabled")):($(this).closest("label").removeClass("selected"),
t=null,e.$btn.addClass("btn_disabled")),e.$dom.find(".js_history").data("link",t);
}),e.historyInited=!0);
},
initHomePage:function(){
var e=this;
if(!e.homePageInited){
var t=e.$dom.find(".js_homepage");
t.find(".js_homepage_list").hide(),t.find(".js_loading").show(),s.get({
url:"/advanced/homepage?action=list",
complete:function(){
t.find(".js_loading").hide();
}
},{
done:function(t){
0==t.base_resp.ret?e.renderHomePage(JSON.parse(t.data).list):s.show(t);
},
fail:function(){
n.err("网络错误");
}
}),t.on("click",".js_item",function(){
$(this).addClass("selected").siblings().removeClass("selected"),t.data("link",_.sprintf(e.biz,$(this).data("hid"),$(this).data("sn"))),
t.data("title",$(this).data("name")),e.$btn.removeClass("btn_disabled");
}),e.homePageInited=!0;
}
},
renderHomePage:function(e){
var t=this;
$.each(e,function(e,t){
var i=[];
$.each(t.render_json.plugin_data,function(e,t){
i.push(g[t.pid].getRenderHTML(t));
}),t.subhtml=i.join(""),t.update_time=o.formatDate(new Date(1e3*t.update_time),"YYYY-MM-DD HH:mm:ss");
}),e.length?t.$dom.find(".js_homepage_list").html(wx.T(p,{
list:e,
nick_name:wx.cgiData.nick_name
})).show():t.$dom.find(".js_homepage_list").html('<p class="no_homepage">暂无页面模板</p>').show(),
t.resetPos();
},
resetPos:function(){
this.dialog&&this.dialog.popup("resetPosition");
}
};
return $.extend(t.prototype,f),t;
});define("biz_common/moment.js",[],function(t,e,n){
function s(t,e){
return function(n){
return c(t.call(this,n),e);
};
}
function r(t){
return function(e){
return this.lang().ordinal(t.call(this,e));
};
}
function a(){}
function i(t){
u(this,t);
}
function o(t){
var e=this._data={},n=t.years||t.year||t.y||0,s=t.months||t.month||t.M||0,r=t.weeks||t.week||t.w||0,a=t.days||t.day||t.d||0,i=t.hours||t.hour||t.h||0,o=t.minutes||t.minute||t.m||0,u=t.seconds||t.second||t.s||0,c=t.milliseconds||t.millisecond||t.ms||0;
this._milliseconds=c+1e3*u+6e4*o+36e5*i,this._days=a+7*r,this._months=s+12*n,e.milliseconds=c%1e3,
u+=d(c/1e3),e.seconds=u%60,o+=d(u/60),e.minutes=o%60,i+=d(o/60),e.hours=i%24,a+=d(i/24),
a+=7*r,e.days=a%30,s+=d(a/30),e.months=s%12,n+=d(s/12),e.years=n;
}
function u(t,e){
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);
return t;
}
function d(t){
return 0>t?Math.ceil(t):Math.floor(t);
}
function c(t,e){
for(var n=t+"";n.length<e;)n="0"+n;
return n;
}
function h(t,e,n){
var s,r=e._milliseconds,a=e._days,i=e._months;
r&&t._d.setTime(+t+r*n),a&&t.date(t.date()+a*n),i&&(s=t.date(),t.date(1).month(t.month()+i*n).date(Math.min(s,t.daysInMonth())));
}
function f(t){
return"[object Array]"===Object.prototype.toString.call(t);
}
function l(t,e){
var n,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),a=0;
for(n=0;s>n;n++)~~t[n]!==~~e[n]&&a++;
return a+r;
}
function _(t,e){
return e.abbr=t,A[t]||(A[t]=new a),A[t].set(e),A[t];
}
function m(e){
return e?(!A[e]&&Z&&t("./lang/"+e),A[e]):C.fn._lang;
}
function M(t){
return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");
}
function y(t){
var e,n,s=t.match(E);
for(e=0,n=s.length;n>e;e++)s[e]=ie[s[e]]?ie[s[e]]:M(s[e]);
return function(r){
var a="";
for(e=0;n>e;e++)a+="function"==typeof s[e].call?s[e].call(r,t):s[e];
return a;
};
}
function Y(t,e){
function n(e){
return t.lang().longDateFormat(e)||e;
}
for(var s=5;s--&&J.test(e);)e=e.replace(J,n);
return se[e]||(se[e]=y(e)),se[e](t);
}
function D(t){
switch(t){
case"DDDD":
return $;

case"YYYY":
return I;

case"YYYYY":
return X;

case"S":
case"SS":
case"SSS":
case"DDD":
return N;

case"MMM":
case"MMMM":
case"dd":
case"ddd":
case"dddd":
case"a":
case"A":
return j;

case"X":
return G;

case"Z":
case"ZZ":
return R;

case"T":
return B;

case"MM":
case"DD":
case"YY":
case"HH":
case"hh":
case"mm":
case"ss":
case"M":
case"D":
case"d":
case"H":
case"h":
case"m":
case"s":
return V;

default:
return new RegExp(t.replace("\\",""));
}
}
function p(t,e,n){
var s,r=n._a;
switch(t){
case"M":
case"MM":
r[1]=null==e?0:~~e-1;
break;

case"MMM":
case"MMMM":
s=m(n._l).monthsParse(e),null!=s?r[1]=s:n._isValid=!1;
break;

case"D":
case"DD":
case"DDD":
case"DDDD":
null!=e&&(r[2]=~~e);
break;

case"YY":
r[0]=~~e+(~~e>68?1900:2e3);
break;

case"YYYY":
case"YYYYY":
r[0]=~~e;
break;

case"a":
case"A":
n._isPm="pm"===(e+"").toLowerCase();
break;

case"H":
case"HH":
case"h":
case"hh":
r[3]=~~e;
break;

case"m":
case"mm":
r[4]=~~e;
break;

case"s":
case"ss":
r[5]=~~e;
break;

case"S":
case"SS":
case"SSS":
r[6]=~~(1e3*("0."+e));
break;

case"X":
n._d=new Date(1e3*parseFloat(e));
break;

case"Z":
case"ZZ":
n._useUTC=!0,s=(e+"").match(te),s&&s[1]&&(n._tzh=~~s[1]),s&&s[2]&&(n._tzm=~~s[2]),
s&&"+"===s[0]&&(n._tzh=-n._tzh,n._tzm=-n._tzm);
}
null==e&&(n._isValid=!1);
}
function g(t){
var e,n,s=[];
if(!t._d){
for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];
s[3]+=t._tzh||0,s[4]+=t._tzm||0,n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),
n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),
t._d=n;
}
}
function w(t){
var e,n,s=t._f.match(E),r=t._i;
for(t._a=[],e=0;e<s.length;e++)n=(D(s[e]).exec(r)||[])[0],n&&(r=r.slice(r.indexOf(n)+n.length)),
ie[s[e]]&&p(s[e],n,t);
t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),g(t);
}
function T(t){
for(var e,n,s,r,a=99;t._f.length;){
if(e=u({},t),e._f=t._f.pop(),w(e),n=new i(e),n.isValid()){
s=n;
break;
}
r=l(e._a,n.toArray()),a>r&&(a=r,s=n);
}
u(t,s);
}
function k(t){
var e,n=t._i;
if(q.exec(n)){
for(t._f="YYYY-MM-DDT",e=0;4>e;e++)if(Q[e][1].exec(n)){
t._f+=Q[e][0];
break;
}
R.exec(n)&&(t._f+=" Z"),w(t);
}else t._d=new Date(n);
}
function v(t){
var e=t._i,n=P.exec(e);
void 0===e?t._d=new Date:n?t._d=new Date(+n[1]):"string"==typeof e?k(t):f(e)?(t._a=e.slice(0),
g(t)):t._d=new Date(e instanceof Date?+e:e);
}
function S(t,e,n,s,r){
return r.relativeTime(e||1,!!n,t,s);
}
function L(t,e,n){
var s=U(Math.abs(t)/1e3),r=U(s/60),a=U(r/60),i=U(a/24),o=U(i/365),u=45>s&&["s",s]||1===r&&["m"]||45>r&&["mm",r]||1===a&&["h"]||22>a&&["hh",a]||1===i&&["d"]||25>=i&&["dd",i]||45>=i&&["M"]||345>i&&["MM",U(i/30)]||1===o&&["y"]||["yy",o];
return u[2]=e,u[3]=t>0,u[4]=n,S.apply({},u);
}
function b(t,e,n){
var s=n-e,r=n-t.day();
return r>s&&(r-=7),s-7>r&&(r+=7),Math.ceil(C(t).add("d",r).dayOfYear()/7);
}
function F(t){
var e=t._i,n=t._f;
return null===e||""===e?null:("string"==typeof e&&(t._i=e=m().preparse(e)),C.isMoment(e)?(t=u({},e),
t._d=new Date(+e._d)):n?f(n)?T(t):w(t):v(t),new i(t));
}
function H(t,e){
C.fn[t]=C.fn[t+"s"]=function(t){
var n=this._isUTC?"UTC":"";
return null!=t?(this._d["set"+n+e](t),this):this._d["get"+n+e]();
};
}
function O(t){
C.duration.fn[t]=function(){
return this._data[t];
};
}
function z(t,e){
C.duration.fn["as"+t]=function(){
return+this/e;
};
}
for(var C,W,x="2.0.0",U=Math.round,A={},Z="undefined"!=typeof n&&n.exports,P=/^\/?Date\((\-?\d+)/i,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,J=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,V=/\d\d?/,N=/\d{1,3}/,$=/\d{3}/,I=/\d{1,4}/,X=/[+\-]?\d{1,6}/,j=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,R=/Z|[\+\-]\d\d:?\d\d/i,B=/T/i,G=/[\+\-]?\d+(\.\d{1,3})?/,q=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,K="YYYY-MM-DDTHH:mm:ssZ",Q=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],te=/([\+\-]|\d\d)/gi,ee="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),ne={
Milliseconds:1,
Seconds:1e3,
Minutes:6e4,
Hours:36e5,
Days:864e5,
Months:2592e6,
Years:31536e6
},se={},re="DDD w W M D d".split(" "),ae="M D H h m s w W".split(" "),ie={
M:function(){
return this.month()+1;
},
MMM:function(t){
return this.lang().monthsShort(this,t);
},
MMMM:function(t){
return this.lang().months(this,t);
},
D:function(){
return this.date();
},
DDD:function(){
return this.dayOfYear();
},
d:function(){
return this.day();
},
dd:function(t){
return this.lang().weekdaysMin(this,t);
},
ddd:function(t){
return this.lang().weekdaysShort(this,t);
},
dddd:function(t){
return this.lang().weekdays(this,t);
},
w:function(){
return this.week();
},
W:function(){
return this.isoWeek();
},
YY:function(){
return c(this.year()%100,2);
},
YYYY:function(){
return c(this.year(),4);
},
YYYYY:function(){
return c(this.year(),5);
},
a:function(){
return this.lang().meridiem(this.hours(),this.minutes(),!0);
},
A:function(){
return this.lang().meridiem(this.hours(),this.minutes(),!1);
},
H:function(){
return this.hours();
},
h:function(){
return this.hours()%12||12;
},
m:function(){
return this.minutes();
},
s:function(){
return this.seconds();
},
S:function(){
return~~(this.milliseconds()/100);
},
SS:function(){
return c(~~(this.milliseconds()/10),2);
},
SSS:function(){
return c(this.milliseconds(),3);
},
Z:function(){
var t=-this.zone(),e="+";
return 0>t&&(t=-t,e="-"),e+c(~~(t/60),2)+":"+c(~~t%60,2);
},
ZZ:function(){
var t=-this.zone(),e="+";
return 0>t&&(t=-t,e="-"),e+c(~~(10*t/6),4);
},
X:function(){
return this.unix();
}
};re.length;)W=re.pop(),ie[W+"o"]=r(ie[W]);
for(;ae.length;)W=ae.pop(),ie[W+W]=s(ie[W],2);
for(ie.DDDD=s(ie.DDD,3),a.prototype={
set:function(t){
var e,n;
for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e;
},
_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
months:function(t){
return this._months[t.month()];
},
_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
monthsShort:function(t){
return this._monthsShort[t.month()];
},
monthsParse:function(t){
var e,n,s;
for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=C([2e3,e]),
s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),
this._monthsParse[e].test(t))return e;
},
_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdays:function(t){
return this._weekdays[t.day()];
},
_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysShort:function(t){
return this._weekdaysShort[t.day()];
},
_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
weekdaysMin:function(t){
return this._weekdaysMin[t.day()];
},
_longDateFormat:{
LT:"h:mm A",
L:"MM/DD/YYYY",
LL:"MMMM D YYYY",
LLL:"MMMM D YYYY LT",
LLLL:"dddd, MMMM D YYYY LT"
},
longDateFormat:function(t){
var e=this._longDateFormat[t];
return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){
return t.slice(1);
}),this._longDateFormat[t]=e),e;
},
meridiem:function(t,e,n){
return t>11?n?"pm":"PM":n?"am":"AM";
},
_calendar:{
sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",
lastWeek:"[last] dddd [at] LT",
sameElse:"L"
},
calendar:function(t,e){
var n=this._calendar[t];
return"function"==typeof n?n.apply(e):n;
},
_relativeTime:{
future:"in %s",
past:"%s ago",
s:"a few seconds",
m:"a minute",
mm:"%d minutes",
h:"an hour",
hh:"%d hours",
d:"a day",
dd:"%d days",
M:"a month",
MM:"%d months",
y:"a year",
yy:"%d years"
},
relativeTime:function(t,e,n,s){
var r=this._relativeTime[n];
return"function"==typeof r?r(t,e,n,s):r.replace(/%d/i,t);
},
pastFuture:function(t,e){
var n=this._relativeTime[t>0?"future":"past"];
return"function"==typeof n?n(e):n.replace(/%s/i,e);
},
ordinal:function(t){
return this._ordinal.replace("%d",t);
},
_ordinal:"%d",
preparse:function(t){
return t;
},
postformat:function(t){
return t;
},
week:function(t){
return b(t,this._week.dow,this._week.doy);
},
_week:{
dow:0,
doy:6
}
},C=function(t,e,n){
return F({
_i:t,
_f:e,
_l:n,
_isUTC:!1
});
},C.utc=function(t,e,n){
return F({
_useUTC:!0,
_isUTC:!0,
_l:n,
_i:t,
_f:e
});
},C.unix=function(t){
return C(1e3*t);
},C.duration=function(t,e){
var n,s=C.isDuration(t),r="number"==typeof t,a=s?t._data:r?{}:t;
return r&&(e?a[e]=t:a.milliseconds=t),n=new o(a),s&&t.hasOwnProperty("_lang")&&(n._lang=t._lang),
n;
},C.version=x,C.defaultFormat=K,C.lang=function(t,e){
return t?(e?_(t,e):A[t]||m(t),void(C.duration.fn._lang=C.fn._lang=m(t))):C.fn._lang._abbr;
},C.langData=function(t){
return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),m(t);
},C.isMoment=function(t){
return t instanceof i;
},C.isDuration=function(t){
return t instanceof o;
},C.fn=i.prototype={
clone:function(){
return C(this);
},
valueOf:function(){
return+this._d;
},
unix:function(){
return Math.floor(+this._d/1e3);
},
toString:function(){
return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
},
toDate:function(){
return this._d;
},
toJSON:function(){
return C.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
},
toArray:function(){
var t=this;
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()];
},
isValid:function(){
return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?C.utc(this._a):C(this._a)).toArray()):!isNaN(this._d.getTime())),
!!this._isValid;
},
utc:function(){
return this._isUTC=!0,this;
},
local:function(){
return this._isUTC=!1,this;
},
format:function(t){
var e=Y(this,t||C.defaultFormat);
return this.lang().postformat(e);
},
add:function(t,e){
var n;
return n="string"==typeof t?C.duration(+e,t):C.duration(t,e),h(this,n,1),this;
},
subtract:function(t,e){
var n;
return n="string"==typeof t?C.duration(+e,t):C.duration(t,e),h(this,n,-1),this;
},
diff:function(t,e,n){
var s,r,a=this._isUTC?C(t).utc():C(t).local(),i=6e4*(this.zone()-a.zone());
return e&&(e=e.replace(/s$/,"")),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+a.daysInMonth()),
r=12*(this.year()-a.year())+(this.month()-a.month()),r+=(this-C(this).startOf("month")-(a-C(a).startOf("month")))/s,
"year"===e&&(r/=12)):(s=this-a-i,r="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?s/864e5:"week"===e?s/6048e5:s),
n?r:d(r);
},
from:function(t,e){
return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e);
},
fromNow:function(t){
return this.from(C(),t);
},
calendar:function(){
var t=this.diff(C().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";
return this.format(this.lang().calendar(e,this));
},
isLeapYear:function(){
var t=this.year();
return t%4===0&&t%100!==0||t%400===0;
},
isDST:function(){
return this.zone()<C([this.year()]).zone()||this.zone()<C([this.year(),5]).zone();
},
day:function(t){
var e=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null==t?e:this.add({
d:t-e
});
},
startOf:function(t){
switch(t=t.replace(/s$/,"")){
case"year":
this.month(0);

case"month":
this.date(1);

case"week":
case"day":
this.hours(0);

case"hour":
this.minutes(0);

case"minute":
this.seconds(0);

case"second":
this.milliseconds(0);
}
return"week"===t&&this.day(0),this;
},
endOf:function(t){
return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1);
},
isAfter:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+C(t).startOf(e);
},
isBefore:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+C(t).startOf(e);
},
isSame:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+C(t).startOf(e);
},
zone:function(){
return this._isUTC?0:this._d.getTimezoneOffset();
},
daysInMonth:function(){
return C.utc([this.year(),this.month()+1,0]).date();
},
dayOfYear:function(t){
var e=U((C(this).startOf("day")-C(this).startOf("year"))/864e5)+1;
return null==t?e:this.add("d",t-e);
},
isoWeek:function(t){
var e=b(this,1,4);
return null==t?e:this.add("d",7*(t-e));
},
week:function(t){
var e=this.lang().week(this);
return null==t?e:this.add("d",7*(t-e));
},
lang:function(t){
return void 0===t?this._lang:(this._lang=m(t),this);
}
},W=0;W<ee.length;W++)H(ee[W].toLowerCase().replace(/s$/,""),ee[W]);
H("year","FullYear"),C.fn.days=C.fn.day,C.fn.weeks=C.fn.week,C.fn.isoWeeks=C.fn.isoWeek,
C.duration.fn=o.prototype={
weeks:function(){
return d(this.days()/7);
},
valueOf:function(){
return this._milliseconds+864e5*this._days+2592e6*this._months;
},
humanize:function(t){
var e=+this,n=L(e,!t,this.lang());
return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n);
},
lang:C.fn.lang
};
for(W in ne)ne.hasOwnProperty(W)&&(z(W,ne[W]),O(W.toLowerCase()));
return z("Weeks",6048e5),C.lang("zh-cn",{
months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin:"日_一_二_三_四_五_六".split("_"),
longDateFormat:{
LT:"Ah点mm",
L:"YYYY年MMMD日",
LL:"YYYY年MMMD日",
LLL:"YYYY年MMMD日LT",
LLLL:"YYYY年MMMD日ddddLT",
l:"YYYY年MMMD日",
ll:"YYYY年MMMD日",
lll:"YYYY年MMMD日LT",
llll:"YYYY年MMMD日ddddLT"
},
meridiem:function(t,e){
return 9>t?"早上":11>t&&30>e?"上午":13>t&&30>e?"中午":18>t?"下午":"晚上";
},
calendar:{
sameDay:"[今天]LT",
nextDay:"[明天]LT",
nextWeek:"[下]ddddLT",
lastDay:"[昨天]LT",
lastWeek:"[上]ddddLT",
sameElse:"L"
},
ordinal:function(t,e){
switch(e){
case"d":
case"D":
case"DDD":
return t+"日";

case"M":
return t+"月";

case"w":
case"W":
return t+"周";

default:
return t;
}
},
relativeTime:{
future:"%s内",
past:"%s前",
s:"几秒",
m:"1分钟",
mm:"%d分钟",
h:"1小时",
hh:"%d小时",
d:"1天",
dd:"%d天",
M:"1个月",
MM:"%d个月",
y:"1年",
yy:"%d年"
}
}),C;
});define("biz_common/xss.js",[],function(t,e,i){
function s(t,e,i){
if("href"===e||"src"===e){
if(p.lastIndex=0,p.test(i))return"#";
if(v.lastIndex=0,v.test(i))return"#";
}else if("style"===e){
if(m.lastIndex=0,m.test(i))return"#";
if(w.lastIndex=0,w.test(i))return"";
}
}
function r(t,e){
return n(e);
}
function n(t){
return t.replace(f,"&lt;").replace(u,"&gt;");
}
function o(t,e){
return String.fromCharCode(parseInt(e));
}
function a(t){
"use strict";
this.options=t=t||{},this.whiteList=t.whiteList||e.whiteList,this.onTagAttr=t.onTagAttr||e.onTagAttr,
this.onIgnoreTag=t.onIgnoreTag||e.onIgnoreTag;
}
function l(t,e){
var i=new a(e);
return i.process(t);
}
var c={
h1:[],
h2:[],
h3:[],
h4:[],
h5:[],
h6:[],
hr:[],
span:[],
strong:[],
b:[],
i:[],
br:[],
p:[],
pre:[],
code:[],
a:["target","href","title"],
img:["src","alt","title"],
div:[],
table:["width","border"],
tr:[],
td:["width","colspan"],
th:["width","colspan"],
tbody:[],
ul:[],
li:[],
ol:[],
dl:[],
dt:[],
em:[],
cite:[],
section:[],
header:[],
footer:[],
blockquote:[],
audio:["autoplay","controls","loop","preload","src"],
video:["autoplay","controls","loop","preload","src","height","width"]
},f=/</g,u=/>/g,h=/"/g,g=/[^a-zA-Z0-9_:\.\-]/gim,d=/&#([a-zA-Z0-9]*);?/gim,p=/\/\*|\*\//gm,v=/^[\s"'`]*((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,m=/\/\*|\*\//gm,w=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
a.prototype.filterAttributes=function(t,e){
"use strict";
t=t.toLowerCase();
for(var i=this,s=this.whiteList[t],r=0,n="",a=!1,l=!1,c=function(e,r){
if(e=e.trim(),!l&&"/"===e)return void(l=!0);
if(e=e.replace(g,"").toLowerCase(),!(e.length<1)&&-1!==s.indexOf(e)){
if(r){
r=r.trim().replace(h,"&quote;"),r=r.replace(d,o);
for(var a="",c=0,f=r.length;f>c;c++)a+=r.charCodeAt(c)<32?" ":r.charAt(c);
r=a.trim();
var u=i.onTagAttr(t,e,r);
"undefined"!=typeof u&&(r=u);
}
n+=e+(r?'="'+r+'"':"")+" ";
}
},f=0,u=e.length;u>f;f++){
var p=e.charAt(f);
if(a!==!1||"="!==p)if(a===!1||f!==r||'"'!==p&&"'"!==p)if(" "!==p);else{
var v=e.slice(r,f).trim();
a===!1?c(v):c(a,v),a=!1,r=f+1;
}else{
var m=e.indexOf(p,f+1);
if(-1===m)break;
var v=e.slice(r+1,m).trim();
c(a,v),a=!1,f=m,r=f+1;
}else a=e.slice(r,f),r=f+1;
}
return r<e.length&&(a===!1?c(e.slice(r)):c(a,e.slice(r))),l&&(n+="/"),n.trim();
},a.prototype.addNewTag=function(t,e,i){
"use strict";
var s="",r="</"===t.slice(0,2)?2:1,o=t.indexOf(" ");
if(-1===o)var a=t.slice(r,t.length-1).trim();else var a=t.slice(r,o+1).trim();
if(a=a.toLowerCase(),a in this.whiteList)if(-1===o)s+=t.slice(0,r)+a+">";else{
var l=this.filterAttributes(a,t.slice(o+1,t.length-1).trim());
s+=t.slice(0,r)+a+(l.length>0?" "+l:"")+">";
}else{
var c={
isClosing:2===r,
position:i,
originalPosition:e-t.length+1
},f=this.onIgnoreTag(a,t,c);
"undefined"==typeof f&&(f=n(t)),s+=f;
}
return s;
},a.prototype.process=function(t){
"use strict";
for(var e="",i=0,s=!1,r=!1,o=0,o=0,a=t.length;a>o;o++){
var l=t.charAt(o);
if(s===!1){
if("<"===l){
s=o;
continue;
}
}else if(r===!1){
if("<"===l){
e+=n(t.slice(i,o)),s=o,i=o;
continue;
}
if(">"===l){
e+=n(t.slice(i,s)),e+=this.addNewTag(t.slice(s,o+1),o,e.length),i=o+1,s=!1;
continue;
}
if('"'===l||"'"===l){
r=l;
continue;
}
}else if(l===r){
r=!1;
continue;
}
}
return i<t.length&&(e+=n(t.substr(i))),e;
},e=i.exports=l,e.FilterXSS=a,e.whiteList=c,e.onTagAttr=s,e.onIgnoreTag=r,e.utils={
tagFilter:function(t,e){
"function"!=typeof e&&(e=function(){});
var i=[],s=!1;
return{
onIgnoreTag:function(r,n,o){
if(-1!==t.indexOf(r)){
var a="[removed]";
if(s!==!1&&o.isClosing){
var l=o.position+a.length;
i.push([s,l]),s=!1;
}else s=o.position;
return a;
}
return e(r,n,o);
},
filter:function(t){
var e="",s=0;
return i.forEach(function(i){
e+=t.slice(s,i[0]),s=i[1];
}),e+=t.slice(s);
}
};
}
};
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
});define("common/wx/richEditor/msgSender.js",["common/wx/popup.js","widget/msg_sender.css","common/qq/jquery.plugin/tab.js","common/wx/richEditor/emotionEditor.js","media/media_dialog.js","common/wx/media/factory.js","common/qq/Class.js","common/wx/Tips.js","common/wx/media/audio.js","common/wx/media/img.js","common/wx/media/video.js","common/wx/media/cardmsg.js","common/wx/tooltip.js","common/wx/media/appmsg.js","biz_web/utils/upload.js"],function(e){
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
define("common/wx/simplePopup.js",["tpl/simplePopup.html.js","common/wx/popup.js","biz_common/jquery.validate.js"],function(e,t,o){
"use strict";
function i(e){
var t=$.Deferred(),o=this;
o.$dom=$(template.compile(p)(e)).popup({
title:e.title||"输入提示框",
buttons:[{
text:"确认",
click:function(){
var i=this;
if(l.form()){
var p=o.$dom.find("input").val().trim();
if(e.callback){
var r=e.callback.call(i,p);
r!==!1&&this.remove();
}else this.remove();
t.resolve(p);
}
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
},
type:"default"
}],
className:"simple label_block"
}),o.$dom.find("input").val(e.value).focus(),$.validator.addMethod("_popupMethod",function(t,o,i){
return e&&e.rule&&e.rule(t.trim(),o,i);
},e.msg);
var i=e&&"undefined"!=typeof e.inputrequire&&e.inputrequire===!1?!1:!0,l=o.$dom.find("form").validate({
rules:{
popInput:{
required:i,
_popupMethod:!0
}
},
messages:{
popInput:{
required:"输入框内容不能为空"
}
},
onfocusout:!1
});
return t.callback=t.done,t;
}
var p=e("tpl/simplePopup.html.js");
e("common/wx/popup.js"),e("biz_common/jquery.validate.js"),o.exports=i;
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
});define("advanced/menuSetting.js",["common/wx/Tips.js","common/wx/tooltip.js","common/wx/simplePopup.js","common/wx/popover.js","common/wx/dialog.js","common/wx/Cgi.js","common/wx/richEditor/msgSender.js","common/wx/media/factory.js","common/qq/mask.js","biz_common/xss.js","biz_common/moment.js","advanced/menu_link_dialog.js","cardticket/parse_data.js","common/qq/emoji.js","biz_web/lib/json.js","biz_common/jquery.ui/jquery.ui.sortable.js"],function(e){
"use strict";
function t(e){
this.data=e;
}
function i(e,t){
var i=[],n=0,s=0;
$.each(e,function(e,t){
var a=t.url.html(!1);
if(a.match(/^http(s)?:\/\/mp.weixin.qq.com\/s/))n++,l.get({
url:a.replace(/^http:/,"https:")
},{
done:function(e){
s++,e&&e.title&&i.push({
i:t.i,
j:t.j,
name:"素材库",
title:e.title
});
},
fail:function(){
s++;
}
});else if(a.match(/^http(s)?:\/\/mp.weixin.qq.com\/mp\/getmasssendmsg\?__biz=([^&#]+)#wechat_webview_type=1&wechat_redirect$/))i.push({
i:t.i,
j:t.j,
name:"历史消息"
});else if(a.match(/^http(s)?:\/\/mp.weixin.qq.com\/mp\/homepage\?__biz=([^&#]+)&hid=([^&#]+)&sn=([^&#]+)#wechat_redirect/)){
n++;
var r=a.html(!1).match(/[\?&]hid=(\d+)/);
r=r&&r[1],l.get({
url:"/advanced/homepage?t=homepage/edit&action=edit",
data:{
hid:r
},
dataType:"json"
},{
done:function(e){
s++,e&&e.name&&i.push({
i:t.i,
j:t.j,
name:"页面模板",
title:e.name
});
},
fail:function(){
s++;
}
});
}
});
var a=setInterval(function(){
s==n&&(t(i),clearInterval(a));
},500);
}
var n=e("common/wx/Tips.js"),s=e("common/wx/tooltip.js"),a=e("common/wx/simplePopup.js"),r=e("common/wx/popover.js"),o=e("common/wx/dialog.js"),l=e("common/wx/Cgi.js"),d=e("common/wx/richEditor/msgSender.js"),c=e("common/wx/media/factory.js"),u=e("common/qq/mask.js"),h=(e("biz_common/xss.js"),
e("biz_common/moment.js"),e("advanced/menu_link_dialog.js")),f=e("cardticket/parse_data.js");
e("common/qq/emoji.js"),e("biz_web/lib/json.js"),e("biz_common/jquery.ui/jquery.ui.sortable.js");
var m=("1"==wx.cgiData.service_type||"0"==wx.cgiData.service_type)&&"1"!=wx.cgiData.is_wx_verify&&"1"!=wx.cgiData.is_qverify&&"3"!=wx.cgiData.is_wb_verify,p={
menuLocation:0,
menuStyle:1,
menuId:"",
menuPid:""
},v=!1;
t.prototype={
cgi:"/advanced/operselfmenu?op=update&f=json",
get:function(e){
var t;
return this.data.each(function(i){
i.id==e&&(t=i);
}),t;
},
getSub:function(e,t,i){
var n,s;
return i===!0?this.data.each(function(e){
e.subs&&e.subs.each(function(e){
return e.id==t?(s=e,!1):void 0;
});
}):(n=this.get(e),n.subs.each(function(e){
e.id==t&&(s=e);
})),s;
},
add:function(e,t){
var i=(new Date).getTime()+"_menu_"+this.data.length;
this.data.push({
name:e,
id:i,
type:1
}),this.post(t,i);
},
addSub:function(e,t,i){
e.type=0,e.act=null,e.subs||(e.subs=[]);
var n=(new Date).getTime()+"_subMenu_"+e.id+"_"+e.subs.length;
e.subs.push({
name:t,
id:n,
type:1
}),this.post(i,n);
},
del:function(e,t){
var i=this;
$.each(this.data,function(t,n){
return n.id==e?(i.data.splice(t,1),!1):void 0;
}),this.post(t);
},
delSub:function(e,t,i){
var n=this.get(e);
n.subs.each(function(e,i){
return e.id==t?(n.subs.splice(i,1),!1):void 0;
}),0==n.subs.length&&(n.type=1),this.post(i);
},
edit:function(e,t,i){
e.name=t,this.post(i);
},
sort:function(e,t){
var i=this,s=[],a=!1;
e.each(function(e){
var t=[];
e.subs.each(function(n){
t.push(i.getSub(e.id,n,!0));
});
var r=i.get(e.id);
return r=Object.clone(r,!0),r.subs=t,r.subs.length>5?(n.err("同一个一级菜单下最多只能添加五个二级菜单，当前已达设置上限"),
a=!0,!1):void s.push(r);
}),a||(i.data=s,this.post(t));
},
post:function(e,t){
var i=this;
l.post({
url:i.cgi,
data:{
info:i.adapt(i.data)
}
}).success(function(i){
0==i.base_resp.ret?(e(),t&&$("#"+t).find(".inner_menu_link").trigger("click")):1==i.base_resp.ret?n.err("你的帐号尚未通过实名审核或已被警告限制，暂时无法使用该功能;"):11==i.base_resp.ret?n.err("菜单跳转链接URL可能存在安全风险，请检查"):105==i.base_resp.ret?(n.err("保存失败，未认证的订阅号不可添加自定义外链，页面即将重置刷新"),
setTimeout(function(){
location.reload(!0);
},3e3)):(n.err("系统发送异常失败，页面即将重置刷新"),setTimeout(function(){
location.reload(!0);
},3e3));
});
},
adapt:function(e){
function t(e){
if(e){
var t={};
return $.each(e,function(e,i){
e.endsWith("_data")||("value"==e?t.value=(i+"").html(!1):t[e]=i);
}),[t];
}
return[];
}
var i=[];
return $.each(e,function(e,n){
var s={
name:n.name.html(!1),
type:n.type
};
s.act_list=[],n.subs&&n.subs.length>0?(s.sub_button_list=[],$.each(n.subs,function(e,i){
s.sub_button_list.push({
name:i.name.html(!1),
act_list:t(i.act),
type:i.type,
sub_button_list:[]
});
})):s.act_list=t(n.act),i.push(s);
}),JSON.stringify2({
version:wx.cgiData.menu.version,
name:wx.cgiData.menu.name,
button_list:i
});
},
getExtraInfo:function(e){
var t=this,n=[];
$.each(this.data,function(e,t){
return 2==t.type?void n.push({
i:e,
url:t.act.value
}):void(t.subs&&$.each(t.subs,function(t,i){
2==i.type&&n.push({
i:e,
j:t,
url:i.act.value
});
}));
}),i(n,function(i){
$.each(i,function(e,i){
var n=null;
"undefined"!=typeof i.i&&"undefined"!=typeof i.j?n=t.data[i.i].subs[i.j]:"undefined"!=typeof i.i&&(n=t.data[i.i]),
n.act.name=i.name,n.act.title=i.title;
}),i.length&&e();
});
}
};
var _,b=function(){
function e(){
return void 0==wx.cgiData.menu?(g.init(),void k.init()):(i(),j.init(),x.init(),y.init(),
g.init(),void k.init());
}
function i(){
wx.cgiData.menu=wx.cgiData.menu;
var e=[];
$.each(wx.cgiData.menu&&wx.cgiData.menu.button_list,function(t,i){
var n={
name:i.name,
id:"menu_"+t,
type:i.type
};
if(i.sub_button_list.length>0){
var s=[];
$.each(i.sub_button_list,function(e,t){
s.push({
name:t.name,
act:t.act_list[0],
id:"subMenu_"+n.id+"_"+e,
type:t.type
});
}),n.subs=s;
}else n.act=i.act_list[0];
e.push(n);
}),_=new t(e),window.myMenu=_,_.getExtraInfo(function(){
var e,t=$("#menuList .selected");
t.hasClass("jslevel1")?e=_.get(t.id):t.hasClass("jslevel2")&&(e=_.getSub(t.siblings("dt").get(0).id,t.get(0).id)),
$("#view").is(":visible")&&x.refresh(e),$("#url").is(":visible")&&x.ui.url(e.act.value,e);
});
}
return{
init:e
};
}(),g=function(){
function e(){
t(),r();
}
function t(){
var e=MenuData;
e.is.selfMenu?($("#menu_container").show(),$("#div_start").show(),$("#div_stop").hide()):($("#menu_container").hide(),
$("#div_start").hide(),$("#div_stop").show()),e.is.isOpen?$("#div_alertTips").hide():($("#div_alertTips").show(),
$("#btn_start").removeClass("btn_primary").addClass("btn_disabled"),$("#btn_stop").removeClass("btn_warn").addClass("btn_disabled")),
e.is.isOpen&&e.is.selfMenu?i(e):$("#menuStatus").hide();
}
function i(e){
e.selfMenu.hasButton?($("#menuStatus").show(),"1"==e.selfMenu.status?$("#menustatus_1").show():"2"==e.selfMenu.status?$("#menustatus_2").show():"3"==e.selfMenu.status&&$("#menustatus_3").html("<p>已发布："+e.selfMenu.leftTime+"小时后生效</p>").show()):$("#menuStatus").hide();
}
function s(){
$("#menustatus_1").hide(),$("#menustatus_2").show(),$("#menustatus_3").hide();
}
function a(e){
var t,i={
type:"POST",
url:"/misc/skeyform?form=advancedswitchform&lang=zh_CN",
dataType:"json"
},s=e?1:0,a=3,r=["关闭自定义菜单之后， 将在24小时内对所有用户生效。 确认关闭？ ","开启自定义菜单之后， 将在24小时内对所有用户生效。 确认开启？ "];
o.show({
type:"warn",
msg:"操作确认|"+r[s?1:0],
buttons:[{
text:"确定",
click:function(){
t=$.extend(!0,{},i,{
data:{
flag:s,
type:a,
token:wx.data.t
},
success:function(e){
return 0==e.base_resp.ret?(n.suc("操作成功 "),MenuData.is.selfMenu=s,MenuData.is.isOpen||(MenuData.is.isOpen=!0),
void window.location.reload()):void n.err("系统发生错误， 请稍后重试 ");
}
}),$.ajax(t),this.remove();
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
function r(){
$("#div_stop .btn_primary").click(function(){
return!$(this).hasClass("btn_disabled")&&a(!0),!1;
}),$("#div_start .btn_warn").click(function(){
return a(!1),!1;
}),$(".detail_desc").click(function(){
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
return{
init:e,
refreshTips:s
};
}(),w=function(){
function e(e,i){
t[e]&&i&&i(t[e]),l.get("/merchant/electroniccardmgr?action=get&card_id="+e,function(n){
if(0==n.base_resp.ret&&n.card_detail){
var s=$.parseJSON(n.card_detail);
s=f.parse_cardticket(s),t[e]=s,i&&i(s);
}
});
}
var t={};
return{
getCardData:e
};
}(),j=function(){
function e(){
i(),d(),new s({
dom:"#addBt",
content:"添加",
position:{
x:0,
y:20
}
}),new s({
dom:"#orderBt",
content:"排序",
position:{
x:0,
y:20
}
});
}
function i(){
var e="";
if(v){
if(v=!1,$(".selected").hasClass("jslevel1")){
for(var t=0,i=$(".jslevel1");t<i.length;t++)if($(i[t]).hasClass("selected")){
p.menuLocation=t,p.menuId=i[t].id;
break;
}
p.menuStyle=1;
}else if($(".selected").hasClass("jslevel2")){
for(var t=0,i=$(".jsMenu").find(".selected").parent("dl").children(".jslevel2");t<i.length;t++)if($(i[t]).hasClass("selected")){
p.menuLocation=t,p.menuId=i[t].id,p.menuPid=$(i[t]).siblings("dt").attr("id");
break;
}
p.menuStyle=2;
}
var e=p.menuId;
if(1==p.menuStyle){
var n=[];
$(".jslevel1").each(function(e,t){
var i={
id:t.id,
subs:[]
};
$(t).siblings(".jslevel2").each(function(e,t){
i.subs.push(t.id);
}),n.push(i);
});
var i=_.data;
i.splice(p.menuLocation,0,i[i.length-1]),i.splice(i.length-1,1);
for(var t=0;t<i.length;t++)n[t].name=$("#"+n[t].id).find("strong").text(),n[t].id==p.menuId&&(n[t].id=i[t].id);
_.sort(n,function(){});
}
if(2==p.menuStyle){
var n=[];
$(".jslevel1").each(function(e,t){
var i={
id:t.id,
subs:[]
};
$(t).siblings(".jslevel2").each(function(e,t){
i.subs.push(t.id);
}),n.push(i);
});
for(var t=0,i=_.data;t<i.length;t++)i[t].id==p.menuPid&&(i[t].subs.splice(p.menuLocation,0,i[t].subs[i[t].subs.length-1]),
n[t].subs[p.menuLocation]=i[t].subs[p.menuLocation].id,i[t].subs.splice(i[t].subs.length-1,1)),
n[t].name=_.get(n[t].id).name;
_.sort(n,function(){});
}
x.ui.reset(),$(".js_reseting").hide(),x.ui.index();
}
$("#menuList").html(template.render("tpl",_)),e&&($("#"+e).addClass("selected"),
e=""),$(".js_addSecondMenu").on("click",j.addSecondMenu),$(".jsMenu").sortable({
items:".jslevel2",
placeholder:"sub_drag_placeholder",
dropOnEmpty:!0,
start:function(e,t){
t.item.addClass("dragging");
},
stop:function(e,t){
t.item.removeClass("hover").removeClass("dragging");
}
}),$(".jsMenu").sortable("disable"),$("#menuList").sortable({
items:".jsMenu",
placeholder:"drag_placeholder",
dropOnEmpty:!0,
start:function(e,t){
t.item.addClass("dragging");
},
stop:function(e,t){
t.item.removeClass("dragging");
}
}),$("#menuList").sortable("disable"),new s({
dom:".jsAddBt, .js_addSecondMenu",
content:"添加",
position:{
x:0,
y:10
}
}),new s({
dom:".jsEditBt, .jsSubEditBt",
content:"编辑",
position:{
x:0,
y:20
}
}),new s({
dom:".jsDelBt, .jsSubDelBt",
content:"删除",
position:{
x:0,
y:20
}
}),new s({
dom:".jsOrderBt",
content:"排序",
position:{
x:0,
y:20
}
});
}
function r(){
return c;
}
function l(){
$(this).hasClass("js_addSecondMenu")&&($(this).parents("dt").hasClass("selected")||($(".selected").length&&$(".selected").removeClass("selected"),
$($(this).parents("dt")[0]).addClass("selected"),x.autoSaveEdit(),$(".js_second_title_bar").show(),
$("#index .initialCreate").show(),$(".action_setting .js_second_title_bar h4").text("一级菜单："+$(this).parents("dt").find("strong").text()),
$("#index .action_tips").text("请设置“"+$($(this).parents("dt")[0]).find("strong").text()+"”菜单的内容"),
c=_.get($(this).parents("dt")[0].id),x.refresh(c)));
var e=$("#menuList").find(".selected").attr("id"),t=_.get(e),s=$("#"+e).siblings(".jslevel2").length;
return t&&t.subs&&t.subs.length>=5?n.err("同一个一级菜单下最多只能添加五个二级菜单，当前已达设置上限"):t.act?o.show({
type:"warn",
msg:"二级菜单确认|使用二级菜单后，当前编辑的消息将会被清除。确定使用二级菜单？",
buttons:[{
text:"确定",
click:function(){
new a({
title:"添加二级菜单",
label:"还能添加"+(5-s)+"个二级菜单，请输入名称（8个汉字或16个字母以内）",
rule:function(e){
return e.len()<=16;
},
msg:"菜单名称应不多于8个汉字或16个字母",
callback:function(e){
_.addSub(t,e,i),n.suc("成功添加二级菜单“"+e+"”");
}
}),this.remove(),g.refreshTips();
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
}):new a({
title:"添加二级菜单",
label:"还能添加"+(5-s)+"个二级菜单，请输入名称（8个汉字或16个字母以内）",
rule:function(e){
return e.len()<=16;
},
msg:"菜单名称名字不多于8个汉字或16个字母",
callback:function(e){
_.addSub(t,e,i),n.suc("成功添加二级菜单“"+e+"”"),g.refreshTips();
}
}),!1;
}
function d(){
var e;
$("#orderBt").click(function(){
return e=Object.clone(_.data,!0),$("#menuList").addClass("sorting"),$("#addBt").hide(),
$("#orderBt").hide(),$("#finishBt").show(),$("#cancelBt").show(),$(".jsOrderBt").show().siblings().hide(),
$("#menuList").sortable("enable"),$(".jsMenu").sortable("enable"),x.ui.rankTips(1),
$(".jslevel2").mousedown(function(){
$(".menu_mask").show(),$(this).parent("dl").addClass("dragging"),$(this).parent("dl").siblings("dl").length&&$(this).parent("dl").siblings("dl").addClass("undragging");
}),$(".jslevel2").mouseup(function(){
$(".menu_mask").hide(),$(this).parent("dl").removeClass("dragging"),$(this).parent("dl").siblings("dl").hasClass("undragging")&&$(this).parent("dl").siblings("dl").removeClass("undragging");
}),!1;
}),$("#cancelBt").click(function(){
return e&&(_=new t(e),i(),e=null),$("#menuList").removeClass("sorting"),$("#addBt").show(),
$("#orderBt").show(),$("#finishBt").hide(),$("#cancelBt").hide(),$(".jsOrderBt").hide().siblings().show(),
$("#menuList").sortable("disable"),x.ui.rankTips(0),!1;
}),$("#finishBt").click(function(){
var e=[];
return $(".jslevel1").each(function(t,i){
var n={
id:i.id,
subs:[]
};
$(i).siblings(".jslevel2").each(function(e,t){
n.subs.push(t.id);
}),e.push(n);
}),_.sort(e,i),$("#menuList").removeClass("sorting"),$("#addBt").show(),$("#orderBt").show(),
$("#finishBt").hide(),$("#cancelBt").hide(),$(".jsOrderBt").hide().siblings().show(),
$("#menuList").sortable("disable"),g.refreshTips(),x.ui.rankTips(0),!1;
}),$("#menuList").on("click","dt>a",function(){
return $(this).parent().hasClass("selected")?void 0:(x.autoSaveEdit(),$(".js_second_title_bar").show(),
$("#menuList").find("dd,dt").removeClass("selected"),$("#index .initialCreate").show(),
$(this).parent().addClass("selected"),$(".action_setting .js_second_title_bar h4").text("一级菜单："+$(this).find("strong").text()),
$("#index .action_tips").text("请设置“"+$(this).find("strong").text()+"”菜单的内容"),c=_.get($(this).parent()[0].id),
x.refresh(c),!1);
}),$("#menuList").on("click","dd>a",function(){
return $(this).parent().hasClass("selected")?void 0:(x.autoSaveEdit(),$(".js_second_title_bar").show(),
$("#menuList").find("dd,dt").removeClass("selected"),$(this).parent().addClass("selected"),
$("#index .initialCreate").hide(),$(".action_setting .js_second_title_bar h4").text("二级菜单："+$(this).find("strong").text()),
$("#index .action_tips").text("请设置“"+$(this).find("strong").text()+"”菜单的内容"),c=_.getSub($(this).parent().siblings("dt")[0].id,$(this).parent()[0].id),
x.refresh(c),!1);
});
var s=function(){
return _.data.length>=3?void n.err("最多只能添加三个一级菜单，当前已达设置上限"):void new a({
title:"添加一级菜单",
label:"还能添加"+(3-_.data.length)+"个一级菜单，请输入名称（4个汉字或8个字母以内）",
rule:function(e){
return e.len()<=8;
},
msg:"菜单名称应不多于4个汉字或8个字母"
}).callback(function(e){
_.add(e,i),$(".menu_setting_empty_wrp").hide(),$(".menu_setting_area").show(),$(".js_totaltool_bar").show(),
$(".js_second_title_bar").show(),g.refreshTips(),n.suc("成功添加一级菜单“"+e+"”");
});
};
$(".addBt").on("click",function(){
return s(),!1;
}),$("#jsDelBt").on("click",function(){
var e=$("#menuList").find(".selected").attr("id");
if($("#"+e).hasClass("jslevel1"))o.show({
type:"warn",
msg:"删除确认|删除后该菜单下设置的消息将不会被保存",
buttons:[{
text:"确定",
click:function(){
_.del(e,function(){
n.suc("成功删除一级菜单“"+$("#"+e).find("strong").text()+"”"),$(".js_second_title_bar").hide(),
x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"),i(),x.refresh(),g.refreshTips();
}),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});else if($("#"+e).hasClass("jslevel2")){
var t=$("#"+e).siblings("dt")[0].id;
o.show({
type:"warn",
msg:"删除确认|删除后该菜单下设置的消息将不会被保存",
buttons:[{
text:"确定",
click:function(){
_.delSub(t,e,function(){
n.suc("成功删除二级菜单“"+$("#"+e).find("strong").text()+"”"),$(".js_second_title_bar").hide(),
x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"),i(),x.refresh();
}),g.refreshTips(),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});
}
return!1;
}),$("#jsChangeBt").on("click",function(){
var e=$("#menuList").find(".selected").attr("id");
if($("#"+e).hasClass("jslevel1")){
var t=_.get(e);
new a({
title:"修改一级菜单名称",
value:t.name.html(!1),
rule:function(e){
return e.len()<=8;
},
tips:"不多于4个汉字或8个字母",
msg:"菜单名称名字不多于4个汉字或8个字母",
callback:function(e){
_.edit(t,e,i),g.refreshTips(),n.suc("成功将一级菜单重命名为“"+e+"”"),$(".js_second_title_bar").hide(),
$("#initialCreate").hide(),x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
}
});
}else if($("#"+e).hasClass("jslevel2")){
var s=$("#"+e).siblings("dt")[0].id,t=_.getSub(s,e);
new a({
title:"修改二级菜单名称",
value:t.name.html(!1),
rule:function(e){
return e.len()<=16;
},
tips:"不多于8个汉字或16个字母",
msg:"菜单名称名字不多于8个汉字或16个字母",
callback:function(e){
_.edit(t,e,i),g.refreshTips(),n.suc("成功将二级菜单重命名为“"+e+"”"),$(".js_second_title_bar").hide(),
$("#initialCreate").hide(),x.ui.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
}
});
}
return!1;
}),$(".initialCreate").on("click",l);
}
var c;
return{
init:e,
refresh:i,
getData:r,
addSecondMenu:l
};
}(),x=function(){
function e(){
f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"),f.initialView(),$("#none .initialCreate").hide(),
t();
}
function t(){
var e="disabled";
m&&$("#urlText").attr(e,e).parent().addClass(e),$("#sendMsg").click(function(){
return f.edit(),g.refreshTips(),!1;
}),$("#goPage").click(function(){
return f.url(),g.refreshTips(),!1;
}),$("#urlBack").click(function(){
return f.data.act?f.view():f.index(),!1;
}),$(".resetAction").on("click",function(){
return new r({
dom:this,
content:"<p>重设会导致当前菜单内容被清空</p><p>确定重设？</p>",
place:"bottom",
margin:"center",
buttons:[{
text:"确定",
click:function(){
this.hide(),x.ui.reset(),$(".js_reseting").show(),$("#initialCreate").hide(),g.refreshTips();
var e=$("#menuList").find(".selected").attr("id"),t=$("#"+e).find("strong").text();
if($("#"+e).hasClass("jslevel1"))_.del(e,function(){
_.add(t,j.refresh);
});else if($("#"+e).hasClass("jslevel2")){
var i=$("#"+e).siblings("dt")[0].id,n=_.get(i);
_.delSub(i,e,function(){
_.addSub(n,t,j.refresh);
});
}
return v=!0,!1;
},
type:"primary"
},{
text:"取消",
click:function(){
return this.hide(),$.support.appendChecked||(window.onbeforeunload=null),!1;
}
}]
}),!1;
}),$("#changeBt").click(function(){
return 6==f.data.act.type?f.url(f.data.act.value,f.data):f.edit(),g.refreshTips(),
!1;
}),$("#editBack").click(function(){
return i(j.getData()),!1;
}),$("#js_appmsgPop").on("click",function(){
return new h({
can_use_homepage:wx.cgiData.can_use_homepage,
biz:wx.cgiData.biz,
onOK:function(e){
if(e){
var t=e,i=t.title,n=t.link;
n&&($("#urlText").val(n).data("url",n).closest(".frm_control_group").show(),$("#js_urlTitle").show().find(".js_name").text(t.name),
i?$("#js_urlTitle").find(".js_title").text(i).parent().show():$("#js_urlTitle").find(".js_title").text("").parent().hide(),
$("#urlUnSelect").hide(),x.autoSaveEdit());
}
}
}),!1;
}),$("#urlText").on("keyup propertychange",function(){
var e=$(this),t=e.val().trim(),i=e.data("url");
i&&t==i?$("#js_urlTitle").show():($("#js_urlTitle").hide(),$("#js_urlTitle").find(".js_name").text(""),
$("#js_urlTitle").find(".js_title").text(""));
}).on("blur",function(){
x.autoSaveEdit();
});
}
function i(e){
if(!e)return f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"),f.initialView(),void $("#none .initialCreate").hide();
switch(f.data=e,e&&e.type){
case 0:
var t=$("#"+e.id).siblings(".jslevel2").length;
5>t?(f.none("已为“"+$("#"+e.id).find("strong").text().html(!0)+"”添加了二级菜单，无法设置其他内容。<br>你还可以添加"+(5-t)+"个二级菜单"),
$("#none .initialCreate").show()):(f.none("你已添加满5个二级菜单"),$("#none .initialCreate").hide());
break;

case 1:
e.act?f.view():f.index();
break;

case 2:
f.view();
break;

case 3:
e.act.source="file";
break;

case 3:
e.act.source="file",e.act.id=e.act.file_id;
break;

default:
f.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容"),f.initialView();
}
}
function s(e){
if($("#edit").is(":visible")){
for(var t=0,i=$(".tab_content");t<i.length;t++)if($(i[t]).is(":visible")&&($($(i[t]).children(".inner").find(".edit_area")[1]).text()||$(i[t]).children(".inner").children("div").length)){
var s=u.getData(!0);
if(!s.error){
if(10==s.data.type?s.data.type=5:11==s.data.type?s.data.type=8:15==s.data.type?s.data.type=9:16==s.data.type?s.data.type=10:21==s.data.type&&(s.data.type=11),
s=s.data,f.data.act={
type:s.type,
value:s.app_id||s.file_id||s.cardid||s.content.html(!0),
_data:s
},f.data.act._data.content&&(f.data.act._data.content=f.data.act._data.content.html(!0)),
e)return _.adapt(_.data);
_.post(function(){});
}
g.refreshTips();
break;
}
}else if($("#url").is(":visible")){
var a=j.getData(),r=$("#urlText").val().trim();
if(""==r&&m)$("#urlUnSelect").show();else{
if($("#urlUnSelect").hide(),r.startsWith("http://")||r.startsWith("https://")||(r="http://"+r),
0==r.indexOf("http://mp.weixin.qq.com/s")&&(r=r.replace(/#rd$/,"#wechat_redirect")),
!$.validator.rules.url(r))return $("#urlFail").show(),n.err("请输入正确的URL"),!1;
if($("#urlFail").hide(),a.type=2,a.act={
type:6,
value:r,
name:$("#js_urlTitle").find(".js_name").text(),
title:$("#js_urlTitle").find(".js_title").text()
},r=encodeURIComponent(r),l.get("/misc/checkurl?url="+r+"&f=json&action=check").success(function(e){
return"10302"==e.base_resp.ret?void n.err("填写url是黑名单地址"):void 0;
}),e)return _.adapt(_.data);
_.post(function(){
$("#urlFail").hide();
}),g.refreshTips();
}
}
}
function a(e,t){
function i(){
var i;
if(i=o(t.act),e){
$("#editDiv").html(""),$("#edit").show();
var n,s=i?{
data:i,
acl:wx.acl.msg_acl
}:{
acl:wx.acl.msg_acl
};
if(m){
var a=$.extend(!0,{},s);
a.acl.can_text_msg=0,n=a;
}else n=s;
u=new d("#editDiv",n),$(".tab_nav").children(1).attr("onclick","return false;");
}else i&&c.render("#viewDiv",i);
$("a.emotion_switch").on("click",function(){
return!1;
});
}
if(t.act&&10==t.act.type&&!t.act._data){
var n=t.act.value;
w.getCardData(n,function(e){
e._className="",t.act._data=e,i();
});
}else t.act&&10==t.act.type&&(t.act._data._className=""),i();
}
function o(e){
if(!e)return null;
var t=null;
return Object.each(e,function(e,i){
return i.endsWith("_data")?(t=e,!1):void 0;
}),t.type=e.type,5==t.type?t.type=10:8==t.type?t.type=11:9==t.type?t.type=15:10==t.type?t.type=16:11==t.type&&(t.type=21),
t;
}
var u,f={
none:function(e){
this.reset(),e.indexOf("<br>")>=0?$("#none").show().find("p").empty().append(e):$("#none").show().find("p").text(e);
},
index:function(){
this.reset(),$("#index").show();
},
url:function(e,t){
this.reset(),!e&&m?$("#urlText").val("认证后才可手动输入地址"):$("#urlText").val(e&&e.html(!1)).focus(),
t&&t.act.name?($("#js_urlTitle").show().find(".js_name").text(t.act.name),t.act.title?$("#js_urlTitle").find(".js_title").text(t.act.title).parent().show():$("#js_urlTitle").find(".js_title").text("").parent().hide()):$("#js_urlTitle").hide(),
$("#url").show();
},
view:function(){
if(this.reset(),1==this.data.type)switch($("#viewDiv").siblings(".action_tips").text("订阅者点击该子菜单会收到以下消息"),
this.data.act.type){
case 1:
$("#viewDiv").html(this.data.act.value.emoji());
break;

case 7:
$("#viewDiv").text("发送名片");
break;

default:
a(!1,this.data);
}else 2==this.data.type&&($("#viewDiv").html(this.data.act.value),$("#viewDiv").siblings(".action_tips").text("订阅者点击该子菜单会跳到以下链接"),
this.data.act.name?($("#view").find(".frm_tips").show(),$("#view").find(".js_name").text(this.data.act.name),
this.data.act.title?$("#view").find(".js_title").text(this.data.act.title).parent().show():$("#view").find(".js_title").text("").parent().hide()):$("#view").find(".frm_tips").hide());
$("#view").show(),$("#changeBt").show();
},
initialView:function(){
0==$("#menuList").children(".jsMenu").length?($(".menu_setting_empty_wrp").show(),
$(".menu_setting_area").hide(),$(".js_totaltool_bar").hide(),$(".js_second_title_bar").hide()):($(".menu_setting_empty_wrp").hide(),
$(".menu_setting_area").show(),$(".js_totaltool_bar").show(),$("#menuList").find(".selected").length?$(".js_second_title_bar").show():$(".js_second_title_bar").hide());
},
edit:function(){
this.reset(),$("#edit").show(),$(".jsmsgSenderDelBt").each(function(e,t){
$(t).parent().siblings(".jsMsgSendTab").show(),$(t).parent().remove();
}),a(!0,this.data);
},
reset:function(){
$(".jsMain").hide(),$("#changeBt").hide(),$("#urlFail").hide(),$("#urlUnSelect").hide(),
$("#view").find(".frm_tips").hide();
},
rankTips:function(e){
1==e?(this.none("请通过拖拽左边的菜单进行排序"),$(".js_second_title_bar").hide(),$(".initialCreate").hide()):0==e&&this.none("你可以点击左侧菜单或添加一个新菜单，然后设置菜单内容");
}
};
return{
init:e,
refresh:i,
getData:o,
autoSaveEdit:s,
ui:f
};
}(),y=function(){
function e(){
$("#viewBt").click(function(){
return $("#mobileDiv:hidden").length>0&&(u.show({
spin:!1
}),$("#viewList").html(template.render("viewTpl",_)),$("#mobileDiv").show()),!1;
}),$("#viewClose").click(function(){
return u.hide(),$("#mobileDiv").hide(),$("#viewShow").html(""),!1;
}),$("#viewList").on("click",".jsView",function(){
$(this).parent().siblings().find(".jsSubViewDiv").hide();
var e=_.get($(this).parent()[0].id);
return e.act?t(e.act):$(this).parent().find(".jsSubViewDiv").toggle(),!1;
}),$("#viewList").on("click",".jsSubView",function(){
var e=_.getSub($(this).parents(".jsViewLi")[0].id,$(this).parent()[0].id);
return e.act&&t(e.act),$(".jsSubViewDiv").hide(),!1;
});
var e=function(e){
switch(e.base_resp.ret){
case 0:
n.suc("保存并发布成功"),window.onbeforeunload=null,window.location.reload();
break;

case 8:
n.err("空菜单，不能同步");
break;

case 9:
n.err("请设置当前菜单内容");
for(var t,i=$("#menuList").find(".inner_menu_item"),s=1,a=0,r=i.length;r>a;a++)if($(i[a]).hasClass("jslevel1")?(t=_.get(i[a].id),
s=1):$(i[a]).hasClass("jslevel2")&&(t=_.getSub($(i[a]).siblings()[0].id,i[a].id),
s=2),!t||!t.act&&t.type){
x.refresh(t),$(i[a]).hasClass("selected")||($("#menuList").find("dd,dt").removeClass("selected"),
$(i[a]).addClass("selected")),1==s?$(".action_setting .js_second_title_bar h4").text("一级菜单："+$("#"+t.id).find("strong").text()):2==s&&$(".action_setting .js_second_title_bar h4").text("二级菜单："+$("#"+t.id).find("strong").text()),
$("#index .action_tips").text("请设置“"+$("#"+t.id).find("strong").text()+"”菜单的内容");
break;
}
$(".selected").hasClass("jslevel2")?$("#index a#initialCreate").hide():$(".selected").hasClass("jslevel1")&&($("#initialCreate").show(),
$("#index a#initialCreate").css("display","inline-block"));
break;

case 10:
n.err("自定义菜单功能处于关闭状态，无法发布");
break;

case 11:
n.err("菜单跳转链接URL可能存在安全风险，请检查");
break;

default:
n.err("系统错误，请稍后再试");
}
};
$("#pubBt").click(function(){
return $("#edit").is(":visible")&&$(".jsMsgSendTab").is(":visible")?n.err("请添加素材"):$("#edit").is(":visible")&&$(".js_editorTip").is(":visible")&&!$(".js_editorArea").text()?n.err("文字必须为1到600个字"):$("#url").is(":visible")&&!$("#urlText").val()?n.err("请输入页面地址"):$(".js_reseting").is(":visible")?n.err("菜单重置中，请稍候"):$("#index").is(":visible")?n.err("请设置当前菜单内容"):_.data.length>0?o.show({
type:"warn",
msg:"发布确认|本次发布将在24小时内对所有用户生效。确认发布？",
buttons:[{
text:"确定",
click:function(){
var t=x.autoSaveEdit(!0);
t?l.post({
url:"/advanced/operselfmenu?op=update_sync",
data:{
info:t,
Version:wx.cgiData.menu.version
}
},function(t){
e(t);
}):l.post({
url:"/advanced/operselfmenu?op=update_sync",
data:{
info:_.adapt(_.data),
Version:wx.cgiData.menu.version
}
},function(t){
e(t);
}),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
}):n.err("空菜单，不能同步"),!1;
});
}
function t(e){
var t={
src:$(".head .avatar").attr("src"),
id:"_view_"+1*new Date
};
return 6==e.type?void window.open(e.value.html(!1)):($("#viewShow").append(template.compile(i)(t)).parent().scrollTop($("#viewShow")[0].scrollHeight),
1==e.type?void $("#"+t.id).html(e.value.emoji()):void(10==e.type?w.getCardData(e.value,function(i){
i._className="small_card",e._data=i,i&&c.render.defer("#"+t.id,x.getData(e));
}):c.render.defer("#"+t.id,x.getData(e))));
}
var i='<li class="show_item"><img class="avatar" src="{src}"><div class="show_content" id="{id}"></div></li>';
return{
init:e
};
}(),k=function(){
function e(){
if(wx.cgiData.authrized&&"1"==wx.cgiData.authrized){
for(var e=$("#js_authrized"),t="",i=wx.cgiData.auth_info,n=i.length,s=0;n>s;s++){
var a=i[s].component_name||"未知",r=i[s].func_category_list||[];
r.indexOf(1)>-1&&(t=""==t?a:t+"、"+a);
}
e.find(".js_thirdname").text(t),e.show(),$("#btn_start").removeClass("btn_primary").addClass("btn_disabled"),
$("#div_start").remove(),$("#div_stop").show(),$("#btn_stop").removeClass("btn_warn").addClass("btn_disabled").unbind("click"),
$("#menu_container").remove();
}
}
return{
init:e
};
}();
b.init(),window.onbeforeunload=function(e){
e=e||window.event;
var t="";
if(!$("#edit").is(":visible")||$(".dialog_wrp").is(":visible")||$(".popover").is(":visible"))$("#url").is(":visible")&&!$(".popover").is(":visible")&&(t="你正在编辑的菜单“"+$(".selected").find("strong").text()+"”可能还有未保存的内容");else for(var i=0,e=$(".tab_content");i<e.length;i++)if($(e[i]).is(":visible")&&$(e[i]).children(".inner").children("div").length){
t="你正在编辑的菜单“"+$(".selected").find("strong").text()+"”可能还有未保存的内容";
break;
}
return t?(e&&(e.returnValue=t),t):void 0;
};
});