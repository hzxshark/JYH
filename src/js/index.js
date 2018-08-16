

var cookie = require("./cookie.js");
var index = require("./index.js");
var chart = require("./chart.js");

 
//判断用户是否登录
var tel=getCookie("user");
if(tel){
    var tel1 = tel.substr(0,3)+"****"+tel.substr(7);

	$(".Login").html('hi！'+tel1).css("color","#DC0F50")
	$(".Register").html("<a>退出</a>");
	$(".user_info").addClass("user_change")
					.siblings()
					.removeClass("user_change")
	$(".user_info h2 b").html('hi！'+tel1);			
	
}else{
	$(".user_login").addClass("user_change").siblings().removeClass("user_change")
}

//退出的时候删除cookie
$(".Register").click(function(){
	if($(this).find("a").html()=="退出"){
		removeCookie("user");
		location.href="http://127.0.0.1/jiayouhui/src/index.html";
	}else if($(this).find("a").html()=="免费注册"){
		location.href="../register.html";
	}
})


//楼层效果

class Floor{
	constructor(lc, floor){
		this.lc = lc;
		this.floor = floor;		
		this.init();
		this.ul_li_click();
		this.ol_li_click();
		this.window_scroll();
	}
	init(){
		// 求每一层top值
		this.arr = this.lc.map(function(ind, el){
			return $(el).offset().top;
		});
		// 把最后一层的结束值加进来
		this.arr.push( this.arr[this.arr.length-1] + this.lc.eq(this.lc.length-1).height() );
	}
	ul_li_click(){
		this.floor.find("ul>li").click(function(){
			//$(window).scrollTop(0);
			$("html,body").animate({"scrollTop":0}, 1000)
		});		
	}
	ol_li_click(){
		var that = this;
		this.floor.find("ol>li").click(function(){
			$("html,body").animate({"scrollTop":that.arr[$(this).index()]}, 1000);
		});
	}
	window_scroll(){		
		var that = this;
		$(window).scroll(function(){
			var st = $(window).scrollTop();
			st = st + $(window).height()/2;
			var ind = -1;
			
			for( var i=0; i<that.arr.length-1; i++){
				var min = that.arr[i];
				var max = that.arr[i+1];
				if( min<st && st<max ){
					ind = i;
				}
			}			
			that.floor.find("ol>li").removeClass("selected");
			if( ind == -1 ){			
			}else{
				that.floor.find("ol>li").eq(ind).addClass("selected");
			}			
			if( st > $(window).height()/2 ){
				that.floor.fadeIn();
			}else{
				that.floor.fadeOut();
			}			
		})				
	}
}

//大轮播图效果

function Banner(){
	var timer = setInterval(IndexRaise,10000)
	var index = 0;
	function IndexRaise(){
		index++;
		if(index >=$(".banner_banner>ul li").size()){
			index=0;
		}
		autoPlay(index);
	}
	function autoPlay(index){	
		$(".banner_banner>ol li").eq(index)
					.addClass("on")
					.siblings()
					.removeClass("on")
					
		$(".banner_banner>ul li").eq(index)
					.fadeIn(500)
					.siblings()
					.fadeOut(500)
	}
	$(".banner_banner").mouseenter(function(){
		clearInterval(timer);
		$(".banner_banner>ol li").click(function(){
			index=$(this).index();
			autoPlay(index)
		})
		
	})
	$(".banner_banner").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(IndexRaise,10000);
	})		
	$(".banner_banner").find("p:eq(0)").click(function(){
		index--;
		if(index <0){
			index=$(".banner_banner>ul li").size()-1;
		}
		autoPlay(index);
		console.log(index);
	})
	$(".banner_banner").find("p:eq(1)").click(function(){
		index++;
		if(index >=$(".banner_banner>ul li").size()){
			index=0
		}
		autoPlay(index);
	})
}


//小轮播图的效果

function Slide5(prev,next,elem){	
	var k=15;
	prev.click(function(){				
		k=k+1166								
		$(elem).find("dl:gt(7)").prependTo(elem);//这里的gt7是指后五个元素，懒得去遍历所以写个7
		$(elem).css("margin-left",-k+15)		
		$(elem).stop().animate({
			left:k
		},500);		
	})
	next.click(function(){		
		k=k-1166;
		$(elem).stop().animate({
			left:k
		},500,function(){
			$(elem).find("dl:lt(5)").appendTo(elem);
			$(elem).css(
			"margin-left",-k+15
			)
		})
	})
}

//鼠标滑过图片模糊效果//使用on事件委托
function Blurry(a){
	$(a).on("mouseenter","img",function(){
		console.log(1)
		$(this).stop().fadeTo(500,0.8,function(){
			$(this).stop().fadeTo(500,1)
		})
	})
}

//抢购定时器效果

function TimeCount(end_date){
 	setInterval(countTime,1000);
	function countTime() {  
        //获取当前时间  
      	var date = new Date();  
        var now = date.getTime();  
        //设置截止时间  
        var endDate = new Date(end_date); 
        var end = endDate.getTime();   
         //时间差  
        var leftTime = end-now; 
         //定义变量 d,h,m,s保存倒计时的时间  
        var d,h,m,s;  
        if (leftTime>=0) {  
            h = Math.floor(leftTime/1000/60/60%24);  
            m = Math.floor(leftTime/1000/60%60);  
            s = Math.floor(leftTime/1000%60);                              
         	//将倒计时赋值
     		$("i[name='h']").html(h);
        	$("i[name='m']").html(m);
        	$("i[name='s']").html(s);
        }else{
        	$(".mask").css("display","block") //显示抢购结束
        	$("i[name='h']").html(0);
        	$("i[name='m']").html(0);
        	$("i[name='s']").html(0);
        }       
 	} 
} 	

//小图片模糊变清晰的效果

function Brightness(a){
	$(a).animate({
		"opacity":0.8
	});
	$(a).mouseover(function(){
		$(this).stop().animate({"opacity":1},1000,function(){
			$(this).stop().animate({"opacity":0.8})
		});
	})	
};

//右侧边选项卡
function TabChange(btn,content){
	$(btn).click(function(){
		var ind = $(this).index();
		$(btn).removeClass("checked").eq(ind).addClass("checked");
		$(content).removeClass("selected1").eq(ind).addClass("selected1");
	})	
}


//回到顶部
function BackToTop(btn){
	$(window).scroll(function(btn){
		var st = $(window).scrollTop();		
		if( st > $(window).height()/2 ){
				$(".back_top").fadeIn();
			}else{
				$(".back_top").fadeOut();
			}			
	})
	
	btn.click(function(){		
			$("html,body").animate({"scrollTop":0}, 1000);
	})

}

//自调用
	new Floor($(".lc"), $(".floor"));		//楼层	
	
	Banner();								//大的轮播图
	
	Blurry($(".f_left>div"));			//图片模糊效果
	
	TimeCount("2018/8/17 00:00:00");			//抢购倒计时
	
	Brightness($(".f_left").find("ul>li>img"));		//左边的图标
	
	Brightness($(".f_right").find("ul img"));		//右边的热销商品
	
	TabChange($(".F1_box").find(".f_right p"),$(".F1_box").find(".f_right ul"));	//右边选项卡
	
	Slide5($(".R_prev"),$(".R_next"),(".slide5"))

	Slide5($(".L_prev"),$(".L_next"),(".slideL"));//喜欢5张轮播
	
	BackToTop($(".back_top"));  //返回顶部
	
	TabChange($(".Det_main ol li"),$(".Det_main ul li"));			//详情页选项卡
