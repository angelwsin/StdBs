//错误信息提示
var stack_topleft = {"dir1": "down", "dir2": "right", "push": "top"};
var stack_bottomleft = {"dir1": "right", "dir2": "up", "push": "top"};
var stack_custom = {"dir1": "right", "dir2": "down"};
var stack_custom2 = {"dir1": "left", "dir2": "up", "push": "top"};
var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};
var stack_bar_bottom = {"dir1": "up", "dir2": "right", "spacing1": 0, "spacing2": 0};
var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

function showMsg(msg,type){
	var opts = {
	        text : msg,
	        history: false,
	        addclass: "stack-bottomright",
			stack: stack_bottomright,
			
			title : "通知",
			type  : "success",
			icon  : "cus-icon-email"
	    };
	
	switch (type) {
		case 'error':
			opts.title = "错误";
			opts.type  = "error";
			opts.icon  = "cus-icon-error";
			break;
		case 'info':
			opts.title = "信息";
			opts.type = "info";
			opts.icon = "cus-icon-information";
			break;
		case 'success':
			opts.title = "通知";
			opts.type  = "success";
			opts.icon  = "cus-icon-email";
			break;
	}
	
	$.pnotify(opts);
}
