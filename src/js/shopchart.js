
var cookie = require("./cookie.js");
var chart = require("./chart.js");
var index = require("./index.js");
const {AddChart} = require("./chart.js");
//虚拟节点的创建；
var template = ``;      
getCookieAll(/^g\d+$/, function(cookieName, obj){
	template += `<tr">  
		<td><input type="checkbox" name="ckb" data-id="${obj.id}"></td>
		<td><img src='${obj.src}' /></td>
		<td>
			<p onclick="location.href='details.html'">${obj.content}</p>
			<div>
				<h3>颜色:</h3>
				<h4>款式:${obj.id}</h4>
			</div>
			
		</td>
		<td>${obj.price}</td>
		<td data-id="${obj.id}">
		
				<input type="button" value="-" id="btn01"/>
				<input type="text" value="${obj.num}" class="inp"/>
				<input type="button" value="+" id="btn02"/>
		
		</td>
		<td>¥${obj.price*obj.num}</td>
		<td><input type="button" value="删除" id="btn03"/></td>
	</tr>`;	
})



$("td p").click(function(){
	location.href="details.html"
})

tbody1.innerHTML = template;

tbody1.onclick=function(e){
	var el=e.target;
	if(el.nodeName=="INPUT"){
		var td=el.parentNode;//输入框父节点
		var dj=td.previousElementSibling;//单价节点
		var zj=td.nextElementSibling;//总价节点
		var gid = td.dataset.id;// 商品id获取	
	
		var newcookie=getCookie("g"+gid);
		if(el.value=="-"){
			//-节点获取方式和+的节点获取方式不一样，因为是在同一个td的子节点里面，所以一个是在前一个是在后
			var inum=el.nextElementSibling;//输入框内容在-节点之后
			inum.value--;	//内容更新
			zj.innerHTML=dj.innerHTML*inum.value;//总价更新	
			//判断是否到了0					
			if(inum.value<=0){
				removeCookie("g"+gid);		//获取点击元素的目标cookie--这个有点想不到				
				tbody1.removeChild(td.parentNode); //删除tr，删除tbody节点下的td的父节点			
			}else{
				//更新cookie--->首先要获取cookie，然后对获取的cookie进行赋值更新
				//获取
				newcookie.num=inum.value;//更新，赋值
				setCookie("g"+gid,newcookie,7);//重新设置
					AddChart();
					GetMoney();
			}			
		}else if(el.value=="+"){
			var inum=el.previousElementSibling;//输入框内容，在+节点之前
			inum.value++;
			zj.innerHTML=dj.innerHTML*inum.value;//总价更新；
			//之后是更新cookie
			newcookie.num=inum.value;
			setCookie("g"+gid,newcookie,7);
			AddChart();
			GetMoney();
		}else if(el.value=="删除"){
			console.log(1);
			//接下来就是删除cookie和tr			
			removeCookie("g"+gid);		//获取点击元素的目标cookie，之前td中设置的自定义属性点击这个删除的时候娶不到，再给删除的td自定义一个同名的自定义属性即可；也可以不同命然后重新取一下下			
			tbody1.removeChild(td.parentNode); //删除tr，删除tbody节点下的td的父节点	
			AddChart();
			GetMoney();
		}
	}			
}		

$(".nav_left").mouseenter(function(){
	$(".nav_left>ul").stop().fadeIn()
}).mouseleave(function(){
	$(".nav_left>ul").stop().fadeOut()
});

$('#checkall1,#checkall2').click(function(){
    $('[type=checkbox]').prop('checked', this.checked);
});

//money的计算
function GetMoney(){
	$("input[type='checkbox']").map(function(){
		var num=0
		var money=0;
		var cbox = document.getElementsByName("ckb");
		for( let i=0;i<cbox.length;i++){
			if(cbox[i].checked){
				var box1 = cbox[i];
				box1.parentNode.parentNode.style.backgroundColor="#fee2da";
				console.log();
				var gid = box1.dataset.id;				
				var obj = getCookie("g"+gid);
				var num =obj.num*1+num*1;	
				var money=obj.num*1*obj.price+money*1;							
			}else{
				var box2 = cbox[i];
				box2.parentNode.parentNode.style.backgroundColor="#fff";
				console.log(box2)
			}
		}		
		$(".payment strong").html(num)
		$(".payment del").html("¥"+money)		
	})
}

$("input[type='checkbox']").click(function(){
	GetMoney()
})


//通过checkbox的选项来选择删除数据

delall1.onclick=function(){
	if(confirm("确定要删除选中的商品么?")){
		var cbox = document.getElementsByName("ckb");
		for(i=0;i<cbox.length;i++){
			if(cbox[i].checked){
				var box1=cbox[i];
				var tr=box1.parentNode.parentNode
				var gid=box1.dataset.id;
				removeCookie("g"+gid);
				tbody1.removeChild(tr);
				AddChart();
				GetMoney()
			}
		}		
	}
}











