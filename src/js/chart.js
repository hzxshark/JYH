



$("#btn4").click(function(){
	var k=$(".choose_style>li:not([class])").length
	var w=$(".choose_model>li:not([class])").length
	var r=$(".choose_model>li[class='selected3']").attr("a");
	if( k != 4 && w != 3 ){
		$(".alert1").css("display","none");
		//执行数量的判断	
		if($("#text1").val()<=0){
			$(".alert2").html("*数量不能为0")
		}else if($("#text1").val()>20){
			$(".alert2").html("*最多只能购买20件")
		}else{
			
			/*--------------------------执行加入购物车操作------------------------------*/
			
			$(".alert2").html("")
			//设置cookie
			//var _price=
			var _num=$("#text1").val();
				_num=parseInt(_num);
			//var _src=
			var _id=r
			
			var obj={"id":_id,"price":388,"src":"img/Details/Details_l3.jpg","content":_id+"------川久保玲 2018新款女士个性潮人金属多边形偏光墨镜S-2055 C1金框黑眉炫彩水银片 S-2055","num":_num};
			//购物车里的东西显示
			$(".had_goods").addClass("Goods");						
			//获取cookie
			var  gds= getCookie("g"+obj.id);         //判断cookie里面存在
			if( gds ){
				var gnum=parseInt( gds.num);
				_num +=gnum
			}
			obj.num=_num;
			//更新cookie
			setCookie("g"+obj.id , obj , 7)
			
			AddChart();				
		}			
	}else{
		$(".alert1").css("display","block");
		
	}
})

function AddChart(){
	var sum = 0;
	var money = 0;
	$(".my_chart mark").html(0)
	var ul1=document.getElementsByClassName("new_goods")[0];	
	ul1.innerHTML="";
	getCookieAll(/^g\d+$/, function(key, obj){
		//创建节点  在new_goods后面追加要添加的内容
		/*var li = $("<li></li>");
		var img = $("<img/>");		
		var p=$("<p></p>");
		var span=$("<span></span>");
		var b=$("<b></b>");
		var em=$("<em></em>")
		$(".new_goods").append(li);		
		$(".new_goods li").append(img);
		$(".new_goods li img").attr("src",obj.src);
		
		$(".new_goods li").append(p);
		$(".new_goods li p").html(obj.content)
		
		$(".new_goods li").append(span);
		
		$(".new_goods li span").append(b);
		
		$(".new_goods li span").append(em);
		
		$(".new_goods li span b").html(obj.price+"X"+obj.num);
		$(".new_goods li span em").html("删除");*/  		//这个东西总是向里面追加所有东西，不好使
		
		
		//原生JS的写法
		
		var li = document.createElement("li");
		ul1.insertBefore(li,ul1.firstChild);
		
		var img = document.createElement("img");
		img.src=obj.src;
		li.appendChild(img);
		
		var p = document.createElement("p");
		p.innerHTML=obj.content
		li.appendChild(p);
		
		var h6 = document.createElement("h6");
		var b = document.createElement("b");
		b.innerHTML=obj.price+"X"+obj.num;
		h6.appendChild(b);	
		var em = document.createElement("em");		
		em.innerHTML="删除";
		h6.appendChild(em);			//这里的h6标签换成span标签不好使；也不知其原因；
		li.appendChild(h6);
		li.i=obj.id;
		li.n=obj.num;
		li.p=obj.price
		
		sum += li.n*1;		
		money += li.n*li.p;
		$(".chart_bottom strong").html(sum)
		$(".chart_bottom del").html(money)
		$(".my_chart mark").html(sum)
		$(".title_num").html(sum)
		//这里的结构样式为
		/*<ul>
			<li>
				<img/>
				<p></p>
				<h6>
					<b></b>
					<em></em>
				</h6>
			</li>
		</ul>*/
	});	
}

AddChart();
	
	
	
$(".my_chart").mouseenter(function(){
	//这里写嵌套if是因为，如果没有cookie那么他的回调函数就啥玩意也不会执行
	if(
	getCookieAll(/^g\d+$/, function(key, obj){			
		if(obj){
			$(".had_goods").addClass("Goods");
		}		
	})){		
	}else{
			$(".no_goods").addClass("Goods");
		}
})
$(".my_chart").mouseleave(function(){
	$(".had_goods").removeClass("Goods");
	$(".no_goods").removeClass("Goods");
})

$(".new_goods>li>h6>em").click(function(){
	
})



//侧边栏购物车删除操作；
var ul1 = document.getElementsByClassName("new_goods")[0];
var lis = document.getElementsByTagName("li")
ul1.onclick=function(e){
	var el=e.target
	if(el.innerHTML="删除"){
		var pn = el.parentNode.parentNode
		var gid=pn.i;
		if(confirm("您确定要将该商品移除购物车？")){
			ul1.removeChild(pn);
			removeCookie("g"+gid);
			AddChart();
		}
	}
}
module.exports.AddChart = AddChart;


















