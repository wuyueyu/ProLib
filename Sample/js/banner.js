jQuery(document).ready(function($) {
	var slideM = (function() {
		var sliCtro = $(".container .controls li");
		var sliImg = $(".slider .img");
		var sliCap = $(".slider .captions div");
		var ctroSize = sliCtro.size();
		var currentIndex = -1;
		var time;

		function change(index) {

			sliCtro.removeClass("current").eq(index).addClass("current");
			sliImg.removeClass("current").eq(index).addClass("current");
			sliCap.removeClass("current").eq(index).addClass("current");

			currentIndex = index;
		}
		function autoPlay() {
			
			currentIndex + 1 >= ctroSize ? currentIndex = -1 : false;
			change(currentIndex + 1);
			
			time = window.setTimeout(autoPlay, 4500);
		}

		return function() {

			autoPlay();

			sliCtro.bind({click: function() {

				change($(this).index());
				
			}, mouseover: function() {
				time ? clearTimeout(time) : false;
			}, mouseout: function() {
				time = setTimeout(autoPlay, 4500);
			}});
		}
	})();

	var imgPo = (function() {

		var slider = $(".slider");
		var sliImg = $(".slider .img");
		var sliFrag = $(".slider .img .frag");
		var fragWid = sliImg.width() / 6;

		return function() {

			$(window).bind("resize", function() {
				console.log(1);
				sliFrag.width(fragWid).css("background-size", sliImg.width()+"px 100%").filter(".frag2").css("background-position", "-" + fragWid + "px 0").end().filter(".frag3").css("background-position", "-" + 2*fragWid + "px 0").end().filter(".frag4").css("background-position", "-" + 3*fragWid + "px 0").end().filter(".frag5").css("background-position", "-" + 4*fragWid + "px 0").end().filter(".frag6").css("background-position", "-" + 5*fragWid + "px 0");
			}).trigger("resize");

		}
	})();

	var scroNav = (function() {

		var headNav = $("header>div.head");
		var reTop = $("span.reTop");


		return function() {
			$(document).scroll(function() {
				
				if($(document).scrollTop() > 200) {
					
					headNav.removeClass("headWrap").addClass("headMove");

				}else {
					
					headNav.removeClass("headMove").addClass("headWrap");

				}
			});

			reTop.click(function() {
				$(document).scrollTop(0);
			})
		}
	})()

	imgPo();
	slideM();

	scroNav();
	
})