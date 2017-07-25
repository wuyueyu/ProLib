var module1 = (function(){
	var m1 = function(){
		var time = new Date(),
		year = time.getFullYear(),
		mon = time.getMonth(),
		date = time.getDate(),
		day = time.getDay();
		
		switch(day){
			case 1 :
				day = "星期一";
			break;
			case 2 :
				day = "星期二";
			break;
			case 3 : 
				day = "星期三";
			break;
			case 4 :
				day = "星期四";
			break;
			case 5 :
				day = "星期五";
			break;
			case 6 :
				day = "星期六";
			break;
			case 0 :
				day = "星期日";
			break;
			
			default :
				false;
		}
	time = null;
	var timer = document.getElementById("timer");
	timer.innerHTML = " " + year + " 年 " + (mon + 1) + " 月 " + date + " 日\t " + day;
	}
	return {
		m1 : m1
	}
})()
var module2 = (function(){
	var m1 = function(){
		var ban_con = $("#ban_con"),
			ban_wid = ban_con.find("div").first().width(),
			ban_li = $("#ban_btn").find("li"),
			btn_len = ban_li.length,
			currentIndex = 0,
			timer = setInterval(autoPlay,4000);

		ban_li.bind({
			"mouseover": function(){
				if(timer){
					clearInterval(timer);
					timer = null;
				}				
				currentIndex = $(this).index()
				;
				ban_li.removeClass("current");
				ban_li.eq(currentIndex).addClass("current");
				ban_con.stop(false,true).animate({
					"left": "-" + 367 * currentIndex + "px"
				},500)
			},
			"mouseout": function(){
				timer = setInterval(autoPlay,4000)
			}
		})
			function autoPlay(){
				currentIndex++;
			
				ban_con.stop(false,true).animate({
					"left": "-" + 367 * currentIndex + "px"
				},2500,function(){
					var ban_left = ban_con.css("left");
					if(ban_left == "-" + 367 * 5 + "px"){
						ban_con.css("left",0);
					}
				})
			if(currentIndex == btn_len) currentIndex = 0;	
			
			for(var i = 0; i < btn_len; i++){
				
				ban_li.eq(i).removeClass("current");
				
				if(i == currentIndex){
					
					ban_li.eq(i).addClass("current");
		
				}
				
			}
			
		}
		
	}
	return {
		scro: m1
	}
})()
module1.m1()
module2.scro()