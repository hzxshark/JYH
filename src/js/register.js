var cookie = require("./cookie.js");
var chart = require("./chart.js");
var index = require("./index.js");

//第一个input验证

var mark=[0,0,0];
function IsPhone(elem,aler){
	elem.blur(function(){
		console.log(1)
		var str=elem.val();
		if(str==""){
			aler.removeClass("correct").addClass("error").html("请输入您的手机号")
		}else{
			if(isTel(str)){
				 HadTel(str,aler);
			}else{
				aler.removeClass("correct").addClass("error").html("请输入有效的手机号")
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


//第三个input验证**密码
function IsPassword(elem,atr){
	elem.blur(function(){
		var str=elem.val();
		if(str==""){
			atr.removeClass("correct").addClass("error").html("请设置密码")
		}else{
			if(ispass(str)){
				atr.removeClass("error").html("").addClass("correct");
				mark[1]=1;
			}else{
				atr.removeClass("correct").addClass("error").html("请输入6-16位字符且不能包含空格")
			}
		}
	})
}

function ispass(str){
    var myreg=/^\S{6,14}$/;
    if (!myreg.test(str)){
        return false;
    }else{
        return true;
    }
}

//第四个input验证**确认密码

function IsSamePass(elem,atr){
	elem.blur(function(){
		var str=elem.val();
		if(str==""){
			atr.removeClass("correct").addClass("error").html("请输入确认密码")
		}else{	
			if(issame(str)){
				atr.removeClass("error").html("").addClass("correct");
				mark[2]=1;
			}else{
				atr.removeClass("correct").addClass("error").html("两次密码输入不一致")
			}
		}
	})
}

//两次密码是否一样
function issame(str){
    if ($("#input3").val()!=str){
        return false;
    }else{
        return true;
    }
}

//判断数据库中是否已经有该手机号
function HadTel(str,aler){
	console.log(str)
	get("http://127.0.0.1/jiayouhui/src/php/check.php?tel="+str+ "&" + new Date(),function(r){
		if(r==0){
			aler.removeClass("error").html("").addClass("correct");
			mark[0]=1;
		}else{
			aler.removeClass("correct").addClass("error").html("该手机号已被注册，请直接登录")
		}
	})
}


//点击注册
$("#btn2").click(function(){
	let a = 1;
	var b = 1;
	for(let i = 0; i<mark.length; i++){
		a = mark[i];	
		b=b*mark[i];
	}
	console.log(b)
	var k=$("[name=checked]").prop('checked');	//判断复选框的按钮是否选上
	if( b == 1 && k==true){
		ToRegi();
	}	
});

//注册事件
function ToRegi(){
	var str=$("#input1").val();
	var pass=$("#input3").val();
	get("http://127.0.0.1/jiayouhui/src/php/register.php?tel="+str+"&pass="+pass+ "&" + new Date(),function(r){
		if(r==1){
			Buttons()
		}
	})
}


//注册成功后的跳转
function Buttons(){
	$(".regi_s").css("z-index","1");
	var date1=5;
	setInterval(function(){			
		$(".date1").html(date1);
		date1--;
		if(date1<0){
			location.href="index.html";
		}
	},1000);
	
	$(".regi_s>ul").find("li:eq(2)").click(function(){
		location.href="index.html";
	})
	
	
}

//ajax封装，不知道为啥放在外面一直报错；

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

//跳转到登录页面
$(".regi_left>div>u").click(function(){
	location.href="login.html";
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
	IsPhone($("#input1"),$("#input1+span"));		//验证手机号输入框
	IsPassword($("#input3"),$("#input3+span"));		//验证密码输入框
	IsSamePass($("#input4"),$("#input4+span"));		//验证密码确认框