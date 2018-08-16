
var cookie = require("./cookie.js");
var chart = require("./chart.js");
var index = require("./index.js");


//顶部点击更多效果
$("._top>ol>span").click(function(){	
	if($(this).find("b").html()=="更多"){
		$("._top>ol").css("height",116);
		$(this).find("b").html("收起");
		$(this).find("i").css("background","url(img/List/more.png) no-repeat center 3px");
	}else{
		$("._top>ol").css("height",58);
		$(this).find("b").html("更多");
		$(this).find("i").css("background","url(img/List/more.png) no-repeat center -29px");
	}	
})

$("._top>ul>span").click(function(){	
	if($(this).find("b").html()=="更多"){
		$("._top>ul").css("height",174);
		$(this).find("b").html("收起");
		$(this).find("i").css("background","url(img/List/more.png) no-repeat center 3px");
	}else{
		$("._top>ul").css("height",58);
		$(this).find("b").html("更多");
		$(this).find("i").css("background","url(img/List/more.png) no-repeat center -29px");
	}	
})


//获取数据库中的数据，并且创建li

//get("http://127.0.0.1/jiayouhui/src/php/list.php",function(str){
	//这些办法都能够实现json对象的转化；前提是传回来的是标准的json字符串；
	//var obj = eval('('+decodeURI(str)+')');	
	//var obj = eval('(' + str + ')'); 
	//var obj = $.parseJSON(str);
	//var obj = JSON.parse(str)
	//console.log(obj)
	//执行创建内容
	//CreatList(obj)
	
	//这个方法可以检测传过来的数据是否为标准的json字符串
	/*function isJsonString(str) {
        try {
            if (typeof JSON.parse(str) == "object") {
                return true;
            }
        } catch(e) {
        }
        return false;
	}
	console.log(isJsonString(str));*/		
//})


//创建列表页的内容
function CreatList(obj){
	var tmp = document.createDocumentFragment();
	for(var i=0; i<20 ;i++){
		var dl=document.createElement("dl");
		var dt=document.createElement("dt");
		var dd=document.createElement("dd");
		var img=document.createElement("img");
		var p=document.createElement("p");
		var h3=document.createElement("h3");
		var h4=document.createElement("h4");
		var span=document.createElement("span");		
		var url=obj[i].src;
		img.src="img/List/data"+url+".jpg"
		dt.appendChild(img);
		
		p.innerHTML=obj[i].title;
		dt.appendChild(p);
		
		h3.innerHTML="¥"+obj[i].price;
		dd.appendChild(h3);
		
		h4.innerHTML="月销"+obj[i].sales+"件";		
		dd.appendChild(h4);
		
		span.innerHTML="¥"+obj[i].oldprice;
		dd.appendChild(span);
				
		dl.appendChild(dt);
		dl.appendChild(dd)
		tmp.appendChild(dl);
	}
	list_page.appendChild(tmp);	
	Blurry($("#list_page dt"));			//图片模糊效果	
}

//开局执行一次函数creat
window.onload=function(){
	get("http://127.0.0.1/jiayouhui/src/php/list.php",function(str){
		var obj = JSON.parse(str);
		//执行创建内容
		CreatList(obj);
	})
}



//选项卡

$("._bottom ol li").click(function(){
	$(this).addClass("selected4").siblings().removeClass("selected4");	
	if($(this).html()=="综合"){
		//$("._bottom ol li:eq(3) i").removeClass("up down")
		list_page.innerHTML="";
		get("http://127.0.0.1/jiayouhui/src/php/list.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});
	}
})



$("._bottom ol li").click(function(){
	$(this).addClass("selected4").siblings().removeClass("selected4");
	if($(this).html()=="销量<i></i>"){
		//$("._bottom ol li:eq(3) i").removeClass("up down")
		list_page.innerHTML="";
		get("http://127.0.0.1/jiayouhui/src/php/listbysales.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});
	}
})

$("._bottom ol li").click(function(){
	$(this).addClass("selected4").siblings().removeClass("selected4");
	if($(this).html()=='价格<i></i>'){
		list_page.innerHTML="";
		$(this).find("i").addClass("down");
		get("http://127.0.0.1/jiayouhui/src/php/listbypricedesc.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});
	}else if($(this).html()=='价格<i class="up"></i>'){
		list_page.innerHTML="";
		$(this).find("i").addClass("down").removeClass("up");
		get("http://127.0.0.1/jiayouhui/src/php/listbypricedesc.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});		
	}else if($(this).html()=='价格<i class="down"></i>'){	
		list_page.innerHTML="";
		$(this).find("i").addClass("up").removeClass("down");
		get("http://127.0.0.1/jiayouhui/src/php/listbyprice.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});			
	}

})


$("._bottom ol li").click(function(){
	$(this).addClass("selected4").siblings().removeClass("selected4");	
	if($(this).html()=="人气<i></i>"){
		//$("._bottom ol li:eq(3) i").removeClass("up down")
		list_page.innerHTML="";
		get("http://127.0.0.1/jiayouhui/src/php/listbyiddesc.php",function(str){
			var obj = JSON.parse(str);
			//执行创建内容
			CreatList(obj);
		});
	}
})

//提纲淡入淡出
$(".nav_left").mouseenter(function(){
	$(".nav_left>ul").stop().fadeIn()
}).mouseleave(function(){
	$(".nav_left>ul").stop().fadeOut()
})


//鼠标滑过图片模糊效果//事件委托
function Blurry(a){
	$(a).on("mouseenter","img",function(){
		console.log(1)
		$(this).stop().fadeTo(500,0.8,function(){
			$(this).stop().fadeTo(500,1)
		})
	})
}


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























