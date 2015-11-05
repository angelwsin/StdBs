/**
 * 下载文件
 * @param url 文件下载地址
 */
function downloadFile(url,postdata){
    // 获取url和data
    if( url != ""){ 
    	if(postdata != undefined){
	        // data 是 string 或者 array/object
	    	postdata = typeof postdata == 'string' ? postdata : jQuery.param(postdata);
	        // 把参数组装成 form的  input
	        var inputs = '';
	        
	        jQuery.each(postdata.split('&'), function(){ 
	            var pair = this.split('=');
	            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
	        });
	        
	     // request发送请求
	        jQuery('<form action="'+ url +'" method="post">' + inputs + '</form>')
	        .appendTo('body').submit().remove();
    	}else{
	        // request发送请求
	        jQuery('<form action="'+ url +'" method="post"></form>')
	        .appendTo('body').submit().remove();
    	}
    }
}

/**
 * 将数组转换为字符串，用“，”隔开
 * 
 * @param values
 * @returns {String}
 */
function array2Str(values){
	if(values == null){
		return "";
	}
	
	var ids = "";
	for(var i=0;i<values.length;i++){
        if(i< (values.length-1)){
        	ids = ids + values[i] + ","; 
        }else{
        	ids = ids + values[i];
        }
	}
	return ids;
}

/**
 * 判断是否IE
 */
function isIE(){
	 if (window.ActiveXObject){
		 return true;
	 }else{
		 return false;
	 }
	 
}

/**
 * 实数验证
 */
function isFloat(obj) {         
    if (/^(-|\+)?\d+(\.\d+)?$/.test(obj)){  
         return true;  
      }else{  
        return false;  
    }  
}  

/**
 * 整数验证
 * @param value
 * @returns {Boolean}
 */
function isInt(value){
    var pattern = /^-?\d+$/;
    if(value.search(pattern)!=0){
        return false;
    }
    return true;
}

JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj == null) {
        // simple data type
        if (t == "string") obj = '"'+obj+'"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof(v);
            if (t == "string") v = '"'+v+'"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

//数字四舍五入
Number.prototype.toFixed = function(d){
    var s = this + "";
    if(!d)
    	d = 0;
    if(s.indexOf(".")==-1)
    	s += ".";
    
    s += new Array(d+1).join("0");

    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
        var s = "0"+ RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;

        if (a == d+2){
        	a = s.match(/\d/g); 
        	if (parseInt(a[a.length-1])>4){
        		for(var i = a.length-2; i>=0; i--) {
        			a[i] = parseInt(a[i])+1;
        			if(a[i] == 10){
        				a[i]=0; 
        				b = i != 1;
        			} else break;
        		}
        	}

        	s = a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
        }
        
        if(b)
        	s = s.substr(1);
        return (pm + s).replace(/\.$/, "");
    } 
    
    return this + "";
};  

/**
 * 文字转大写
 * @param array
 */
function textToUpper(array){
	for(var i=0;i<array.length;i++){
		var $textObj = array[i];
		$textObj.focus(function(){
			$textObj.bind("keyup", function(){
				$textObj.val($textObj.val().toUpperCase());
			  });
			$textObj.bind("paste", function(){
				$('body').mousemove(function(){
					$textObj.val($textObj.val().toUpperCase());
				});
	          });
		}); 
	}
};

/**
 * 文本去空格
 */
String.prototype.trim = function(){   
    return this.replace(/(^\s*)|(\s*$)/g, "");   
};

/**
 * 判断非空文本
 * @param str
 * @returns {Boolean}
 */
function isNotEmptyStr(str){
	if(str == null || str.trim().length == 0){
		return false;
	}
	
    return true;  
};

/**
 * 判断空文本
 * @param str
 * @returns {Boolean}
 */
function isEmptyStr(str){
	if(str == null || str.trim().length == 0){
		return true;
	}
	
    return false;  
};


function getPageSize() {
    var winW,winH;//当前窗口的有效可视宽度和高度

    if (window.innerHeight) { //所有非IE浏览器
         winW = window.innerWidth;
         winH = $(window).height();
    } else if (document.documentElement && document.documentElement.clientHeight) { //IE 6 Strict Mode
         winW = document.documentElement.clientWidth;
         winH = document.documentElement.clientHeight;
    } else if (document.body) { //其他浏览器
         winW = document.body.clientWidth;
         winH = document.body.clientHeight;
    } 
    return {
         WinW : winW, //真正反馈的宽度
         WinH : winH //真正反馈的高度
    };
};

/**
 * 判断是否是日期
 * @param str
 * @returns {Boolean}
 */
function isDate(str){  
	var reg=/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;  
	if (reg.test(str)) return true;  
	return false;  
} 

/** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423      
* (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04      
* (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
* (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
* (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
*/        
Date.prototype.pattern=function(fmt) {         
	var o = {         
		"M+" : this.getMonth()+1, //月份         
		"d+" : this.getDate(), //日         
		"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
		"H+" : this.getHours(), //小时         
		"m+" : this.getMinutes(), //分         
		"s+" : this.getSeconds(), //秒         
		"q+" : Math.floor((this.getMonth()+3)/3), //季度         
		"S" : this.getMilliseconds() //毫秒         
	};         
	var week = {         
		"0" : "/u65e5",         
		"1" : "/u4e00",         
		"2" : "/u4e8c",         
		"3" : "/u4e09",         
		"4" : "/u56db",         
		"5" : "/u4e94",         
		"6" : "/u516d"        
	}; 
	
	if(/(y+)/.test(fmt)){         
	    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
	}   
	
	if(/(E+)/.test(fmt)){         
	    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
	}    
	
	for(var k in o){         
	    if(new RegExp("("+ k +")").test(fmt)){         
	        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
	    }         
	}     
	
	return fmt;         
}      



/**
 * 判断是否是undefined，如果是返回defValue，否返回自身
 * @param data
 * @param defValue
 * @returns
 */
function getDefineUndefinedValue(data,defValue){
	if(typeof(data)== "undefined"){
		return defValue;
	}else{
		return data;
	}
}


/**
 * 获取完整的请求地址
 * @param locate
 * @returns {String}
 */
function getContextPath(locate) {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = (pathName.substr(0,index+1)).replace("/page", "");

    return  document.location.protocol+"//"+document.location.hostname+":"+document.location.port+result+"/"+locate;
}

/**
 * 根据输入的elementID，清除所有的input值
 * @param eId
 */
function clean(eId){
        		$("#"+ eId).find("input").each(function(){
        			$(this).val('');
        		});
        	}

/**
 * 根据输入的data和elementId，设置input值
 * @param eId
 * @param rowData
 */
function fillElementData(eId,rowData){
	$("#" + eId).find("input").each(function(){
		//包含了对应属性的才设值，否则不设置
		if(rowData[$(this).attr("name")] != null){
			$(this).val(rowData[$(this).attr("name")]);
			if($(this).attr("real-value") != null){
				$(this).attr("real-value",rowData[$(this).attr("name")]);
			}
		}
	});
}

/**
 * 根据输入的data和elementId(大写)，设置input值
 * @param eId
 * @param rowData
 */
function fillElementUpperCaseData(eId, rowData){
    $("#" + eId).find("input").each(function(){
        //包含了对应属性的才设值，否则不设置
        if (rowData[$(this).attr("name").toLowerCase()] != null) {
            $(this).val(rowData[$(this).attr("name").toLowerCase()]);
            if($(this).attr("real-value") != null){
                $(this).attr("real-value", rowData[$(this).attr("name").toLowerCase()]);
            }
        }
    });
}

/**
 * 根据输入的elementID，获取所有input的值
 * @param eId
 * @returns inData
 */
function getData(eId){
	var inData = {};
	//遍历form，获取所有相关值
	$("#"+eId).find("input").each(function(){
		if($(this).attr("real-value") != null){
			inData[$(this).attr("name")]=$(this).attr("real-value").trim();
		}else{
			inData[$(this).attr("name")]=$(this).val().trim();
		}
	});
	
	return inData;
}

/**
 * ajax提交(进行业务操作)，传入成功的处理函数
 * @param inData
 * @param url
 * @param sucFunc 
 */
function ajaxSubmitOnSuccess(inData,url,sucFunc){
	$.ajax({
		url : getContextPath(url),
		data : inData,
		type : 'POST',
		dataType : 'json',
		async : false,
		timeout : 100000,
		error : function() {
			showMsg(url+"通讯错误，请等待","error");
		},
		success : function(data) {
			if(data.result){				
				 if(typeof(sucFunc)=="function"){
					 sucFunc(data);
				  }
			}else{
				showMsg(data.message,"error");
			}
		}
	});
}

/**
 * ajax提交(进行数据获取)，传入成功的处理函数
 * @param inData
 * @param url
 * @param sucFunc
 */
function ajaxDataOnSuccess(inData,url,sucFunc){
	$.ajax({
		url : getContextPath(url),
		data : inData,
		type : 'POST',
		dataType : 'json',
		async : false,
		timeout : 100000,
		error : function() {
			showMsg(url+"通讯错误，请等待","error");
		},
		success : function(data) {
			 if(typeof(sucFunc)=="function"){
				 sucFunc(data);
			  }
		}
	});
}


/**
 * 绑定日期输入插件
 * @param elementId
 */
function bindDatePicker(elementId){
	$("#"+elementId).datepicker({
		changeMonth : true,
        changeYear : true,
        dateFormat : 'yy-mm-dd'
	});
}


/**
 * 自动填充
 * @param elementId
 * @param url
 * @param queryAppend
 * @param num
 * @param afterSelect
 * @param fillQueryParams
 */
function autoComplete(elementId,url,queryAppend,num,afterSelect,fillQueryParams){
	if(afterSelect == null || !$.isFunction(afterSelect)){
		afterSelect = function(){};
	}
	
	if(num == null){
		num = 10;
	}
	
	$('#'+elementId).autocomplete({
		items : num,
		source:function(query,process){
			var matchCount = this.options.items;//返回结果集最大数量
			var params = {};
			params["amount"] = matchCount;
			params["query"] = query+queryAppend;	
			
			if(fillQueryParams != null && typeof(fillQueryParams)=="function"){
				params = fillQueryParams(params);
			}
			
			$.post(getContextPath(url),params,function(respData){
				return process(respData);
			},"json");
		},
		formatItem:function(item){
			return item["optionValue"] ;
		},
		setValue:function(item){
			return {'data-value':item["showValue"],'real-value':item["realValue"],'ext-value':item["extValue"]};
		},
		afterSelct: afterSelect
	});
}


/**
 * 下载文件
 * @param url 文件下载地址
 */
function downloadFile(url,postdata){
    // 获取url和data
    if( url != ""){ 
    	if(postdata != undefined){
	        // data 是 string 或者 array/object
	    	postdata = typeof postdata == 'string' ? postdata : jQuery.param(postdata);
	        // 把参数组装成 form的  input
	        var inputs = '';
	        
	        jQuery.each(postdata.split('&'), function(){ 
	            var pair = this.split('=');
	            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
	        });
	        
	     // request发送请求
	        jQuery('<form action="'+ url +'" method="post">' + inputs + '</form>')
	        .appendTo('body').submit().remove();
    	}else{
	        // request发送请求
	        jQuery('<form action="'+ url +'" method="post"></form>')
	        .appendTo('body').submit().remove();
    	}
    }
}

/**
 * 文件下载
 * 
 * @param url
 * @returns {download_file}
 */
function download_file(url){
	if(typeof(download_file.iframe)== "undefined")
	{
	   var iframe = document.createElement("iframe");
	   download_file.iframe = iframe;
	   document.body.appendChild(download_file.iframe); 
	}
	
	download_file.iframe.src = url;
	download_file.iframe.style.display = "none";

}

/**
 * 将数组转换为字符串，用“，”隔开
 * 
 * @param values
 * @returns {String}
 */
function array2Str(values){
	if(values == null){
		return "";
	}
	
	var ids = "";
	for(var i=0;i<values.length;i++){
        if(i< (values.length-1)){
        	ids = ids + values[i] + ","; 
        }else{
        	ids = ids + values[i];
        }
	}
	return ids;
}

/**
 * 判断是否IE
 */
function isIE(){
	 if (window.ActiveXObject){
		 return true;
	 }else{
		 return false;
	 }
	 
}

/**
 * 实数验证
 */
function isFloat(obj) {         
    if (/^(-|\+)?\d+(\.\d+)?$/.test(obj)){  
         return true;  
      }else{  
        return false;  
    }  
}  

/**
 * 整数验证
 * @param value
 * @returns {Boolean}
 */
function isInt(value){
    var pattern = /^-?\d+$/;
    if(value.search(pattern)!=0){
        return false;
    }
    return true;
}

JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj == null) {
        // simple data type
        if (t == "string") obj = '"'+obj+'"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof(v);
            if (t == "string") v = '"'+v+'"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


//数字四舍五入
Number.prototype.toFixed = function(d){
    var s = this + "";
    if(!d)
    	d = 0;
    if(s.indexOf(".")==-1)
    	s += ".";
    
    s += new Array(d+1).join("0");

    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
        var s = "0"+ RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;

        if (a == d+2){
        	a = s.match(/\d/g); 
        	if (parseInt(a[a.length-1])>4){
        		for(var i = a.length-2; i>=0; i--) {
        			a[i] = parseInt(a[i])+1;
        			if(a[i] == 10){
        				a[i]=0; 
        				b = i != 1;
        			} else break;
        		}
        	}

        	s = a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
        }
        
        if(b)
        	s = s.substr(1);
        return (pm + s).replace(/\.$/, "");
    } 
    
    return this + "";
};  

/**
 * 文字转大写
 * @param array
 */
function textToUpper(array){
	for(var i=0;i<array.length;i++){
		var $textObj = array[i];
		$textObj.focus(function(){
			$textObj.bind("keyup", function(){
				$textObj.val($textObj.val().toUpperCase());
			  });
			$textObj.bind("paste", function(){
				$('body').mousemove(function(){
					$textObj.val($textObj.val().toUpperCase());
				});
	          });
		}); 
	}
};

/**
 * 文本去空格
 */
String.prototype.trim = function(){   
    return this.replace(/(^\s*)|(\s*$)/g, "");   
};

/**
 * 判断非空文本
 * @param str
 * @returns {Boolean}
 */
function isNotEmptyStr(str){
	if(str == null || str.trim().length == 0){
		return false;
	}
	
    return true;  
};

/**
 * 判断空文本
 * @param str
 * @returns {Boolean}
 */
function isEmptyStr(str){
	if(str == null || str.trim().length == 0){
		return true;
	}
	
    return false;  
};

//提示操作返回的信息
function opertaionPrompt(response) {
	var result = response.responseText;
	var jsonreslt = eval('(' + result + ')');
	showMsg(jsonreslt.message,jsonreslt.result == false?'error':jsonreslt.result == true?'success':jsonreslt.result);
}

function currDictionaryFormatter(cellvalue, options, rowObject){
	// 获取字典的信息
	var temp = dictionary;
	var formattext = '';
	var obj = dictionary[options.colModel.dictionary];
	$(obj).each(function(){ 
		if(this.OPTVALUE == cellvalue){
			formattext = this.OPTNAME;
		}
	}); 
	
	return formattext;
}

/**
 * 日期选择
 * @param elem
 */
function datePick(elem){
	$(elem).datepicker({
		changeMonth : true,
        changeYear : true,
        dateFormat : 'yy-mm-dd'
	});
}

/**
 * 返回当前时间
 * @param num
 * @returns {String}
 */
function CurrentTime(num){
	var Year = 0;
	var Month = 0;
	var Day = 0;
	var Hour = 0;
	var Minute = 0;
	var Second = 0;
	
	var format = "";
	
	var currentDate = new Date();
	
	Year = currentDate.getFullYear();
	Month = currentDate.getMonth() + 1;
	Day = currentDate.getDate();
	Hour = currentDate.getHours();
	Minute = currentDate.getMinutes();
	Second = currentDate.getSeconds();
	
	format = Year + "-";
	

	
	if(Month >= 10){
		format = format + Month + "-";
	}else{
		format = format + "0" + Month + "-";
	}
	
	if(Day >= 10){
		format = format + Day;
	}else{
		format = format + "0" + Day ;
	}
	
	
	if(num == 6){
		
		if(Hour >= 10){
			format = format + " " + Hour;
		}else{
			format = format + " 0" + Day ;
		}
		
		if(Minute >= 10){
			format = format + ":" + Minute;
		}else{
			format = format + ":0" + Minute ;
		}
		
		if(Second >= 10){
			format = format + ":" + Second;
		}else{
			format = format + ":0" + Second ;
		}
	}
	
	return format;
}

/**
 * 表单重置
 * @param formId 表单的id
 */
function resetForm(formId){
	$("#"+formId)[0].reset();
}

/**
 * 对表单赋值
 * 注意:表单中的赋值处的id要和返回值中的key要匹配
 * @param rowData
 */
function setFormVal(formId,rowData){
	$.map(rowData,function(val,key){
		$("#" + formId + " #" + key).val(val);
	});
}







