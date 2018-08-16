
var cookie = require("./cookie.js");
var index = require("./index.js");
var chart = require("./chart.js");


function ToBig(small,glass,bigbox,bigpic){
	//移入	
	$(small).mouseenter(function(){
		$(glass).stop().fadeIn();
		$(bigbox).stop().fadeIn();
	})
	//移出
	$(small).mouseleave(function(){
		$(glass).stop().fadeOut();
		$(bigbox).fadeOut();
	})
	// 鼠标在小图上移动
	$(small).mousemove(function(e){
		var x = e.pageX-$(small).offset().left-100;
		var y = e.pageY-$(small).offset().top-100;
		// 边界处理
		if(x<0)x=0;
		if(y<0)y=0;
		var maxX =260;				/*$(".small").offsetWidth-$(".glass").offsetWidth;*///js中的写法，这里懒得转化，直接写数值
		if(x>maxX)x=maxX;
		var maxY = 260			/*$(".small").offsetHeight-$(".glass").offsetHeight;*/
		if(y>maxY)y=maxY;
		//更新	
		$(glass).css("left",x);
		$(glass).css("top",y);	
	// 大图片的显示与定位
		var src=$(small).find("img")[0].src
		$(bigpic).attr('src',src);	
		var X=-3.5*x		//这里的3.5是为了修复上下的margin
		var Y=-3.5*(y)
		$(bigpic).css("left",X);
		$(bigpic).css("top",Y);
	})
}
//点击小图显示到大图的位置
function ToShow(littlepic,small){
	$(littlepic).click(function(){	
		var pic=this.src;
		$(small).find("img").attr('src',pic);
	})
}

						//眼镜样式和型号数量的选择				//后续cookie的数据从这里调用和操作
//选择样子和型号
function ChooseStyle(btns){
	$(btns).click(function(){	
		$(this).addClass("selected3").siblings().removeClass("selected3")
	})
}

//数量操作

$("#btn2").click(function(){
	var num=$("#text1").val()
	num++;
	$("#text1").val(num);
})
$("#btn1").click(function(){
	var num=$("#text1").val()
	num--;
	if(num<=0){
		num=0
	}
	$("#text1").val(num);
})

//没有选中样式的时候显示警告框

$(".choose_style").click(function(){
	var k=$(".choose_style>li:not([class])").length
	var w=$(".choose_model>li:not([class])").length
	if(k != 4 && w != 3){
		$(".alert2").html("*限购20件")
	}
})
	
$(".choose_model").click(function(){
	var k=$(".choose_style>li:not([class])").length
	var w=$(".choose_model>li:not([class])").length
	if(k != 4 && w != 3){
		$(".alert2").html("*限购20件")
	}
})

//显示提纲
$(".nav_left").mouseenter(function(){
	$(".nav_left>ul").stop().fadeIn()
}).mouseleave(function(){
	$(".nav_left>ul").stop().fadeOut()
})

	
	

//自调用	
	ToShow(".little>li>img",".small");							//点击显示小图
	
	ToBig(".small",".glass",".big_box",".big");				//点击放大图片
	
	ChooseStyle(".choose_style li");						//选择样式
	
	ChooseStyle(".choose_model li");						//选择型号


