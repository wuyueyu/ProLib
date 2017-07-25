jQuery(document).ready(function($) {

	/*
		banner轮播图
	*/

	var banner = (function() {

		var currentIndex = 0;
		var slider = $(".banner > .slider > ul");
		var sliCtrl = $(".banner > .sliCtrl > ul > li");
		var dirBtn = $(".banner > .dirBtn > span");
		var time = null;

		function trans() {
			
			slider.stop(true, false).animate({
				"marginLeft": "-" + currentIndex * 624 + "px"
			}, 1000,function(){
				if(currentIndex == 3) {
					currentIndex = 0;
					$(this).css("marginLeft", 0);
				}

				sliCtrl.removeClass("current").eq(currentIndex).addClass("current");
			})
			
		}

		function auto() {
			
			currentIndex++;
			trans();

		}
		function init() {
			time = window.setInterval(auto, 5000);
		}

		return function () {
			init();

			sliCtrl.bind({
				"click": function() {
				
					currentIndex = $(this).index();
					trans();

				}
			});
			$(".banner").bind({
				"mouseleave": function(){
				
				if(!time) {
					time = window.setInterval(auto, 5000);
				}				
			
			}, "mouseenter": function() {
				
				if(time) {
					window.clearInterval(time);
					time = null;

				}

			}});

			dirBtn.bind({
				"click": function() {
				//	console.log($(this).index());
					
					if($(this).index() == 0) {

						if(currentIndex == 0) return;

						currentIndex--;

					}else if($(this).index() == 1) {

						currentIndex++;

					}

					trans();

				}
			})

		}
	})()

	var docScro = (function() {
		
		var top = $(".top > span");
		return function () {
			top.click(function() {
				
				$("html,body").animate({"scrollTop":0}, 1000);

			});
		}
	})()

	/*
		tab选项卡
	*/
	var kindTab = (function() {

		var tabPoint = $(".kindTab > ul > li");
		var tabCon = $(".kindCon > ul > li");

		var tabCtrl = $(".kindCon > .kindCtrl");
		var currentIndex,mainCon,moveLen;

		function blockMove(para) {

			mainCon.css("transform", "translateX(-" + 150 * para +"px)");

		}
		function init() {
			currentIndex = 0;
			mainCon = $(".kindCon .now > ul");
			moveLen = mainCon.find("li").length - 6 > 0 ? mainCon.find("li").length - 6 : 0;
			blockMove(0);
		}
		return function() {	
			init();

			tabPoint.bind("mouseover", function() {
				
				$(this).addClass("now").siblings().removeClass("now");
				tabCon.eq($(this).index()).addClass("now").siblings().removeClass("now");
				
				init();

			})

			tabCtrl.bind("click", function() {

				var ctrlIndex = $(this).index();

				if(ctrlIndex == 1) {
				
					if(currentIndex == 0) return;
					currentIndex--;

					blockMove(currentIndex);

				}else if(ctrlIndex == 2) {
				
					if(currentIndex == moveLen) return;
					currentIndex++;

					blockMove(currentIndex);	

				}

			})
		}

	})()

	docScro();
	banner();
	kindTab();
});