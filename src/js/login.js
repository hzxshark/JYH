
var cookie = require("./cookie.js");
var chart = require("./chart.js");
var index = require("./index.js");

function HasPhone(elem,aler,errshow){
//失去焦点触发的事件	
	elem.blur(function(){
		console.log(1)
		console.log(errshow)
		var str=elem.val();
		if(str==""){
			aler.removeClass("correct")
			errshow.addClass("error").html("请输入您的手机号")
		}else{
			if(isTel(str)){
				 HadTel(str,aler,errshow);
				//errshow.removeClass("error");
				//aler.addClass("correct");
			}else{
				aler.removeClass("correct")
				errshow.addClass("error").html("请输入有效的手机号")
			}
		}	
	})
}

//验证有效的手机号
function isTel(str) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}

//判断数据库中是否已经有该手机号
function HadTel(str,aler,errshow){
	console.log(errshow)
	console.log(str)
	get("http://127.0.0.1/jiayouhui/src/php/check.php?tel="+str+ "&" + new Date(),function(r){
		if(r==0){
			console.log(r);
			aler.removeClass("correct");
			errshow.addClass("error").html("该手机号未被注册，请先注册")
		}else{
			errshow.removeClass("error");
			aler.addClass("correct");
		}
	})
}


//登录选项卡
function TabChange(btn,content){
	$(btn).click(function(){
		var ind = $(this).index();
		$(btn).removeClass("checked").eq(ind).addClass("checked");
		$(content).removeClass("selected1").eq(ind).addClass("selected1");
	})	
}


//登录事件
function Login(){
	//验证输入的密码
	var pass=$(".txt2").val();
	var tel=$(".txt1").val();
	get("http://127.0.0.1/jiayouhui/src/php/login.php?tel="+tel+"&pass="+pass,function(r){
		if(r!=0){
			var values=tel
			setCookie("user",values,7);
			location.href="index.html";
			
		}else{
			alert("用户名密码不匹配")
		}
	})
}
$(".btn1").click(function(){
		Login();
})
$(document).keyup(function(e){
	if(e.keyCode==13){
		Login();
	}
})




//ajax封装
//get方法
function get(url,fn){
	var xhr=new XMLHttpRequest();
	xhr.open ("GET",url,true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}

//post方法
function post(url,data,fn){
	var xhr=new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded');
	xhr.send(data);
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}

//自调用
	TabChange($(".login_right>ol>li"),$(".login_right>ul>li"));	//选择登录选项卡
	
	HasPhone($(".txt1"),$(".txt1+s"),$(".main1>h3"));
	
