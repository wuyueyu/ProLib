jQuery(document).ready(function($) {

	var $banner = (function() {

		var $slider, $sliCtrl, $sliWid, $sliLen;
		var currentIndex = 0;

		var startX = 0;
		var endX = 0;
		var threshold = 50;

		function init() {
			$slider = $(".jd_banner > .slider > ul");
			$sliCtrl = $(".jd_banner > .sliCtrl > li");
			$sliWid = $slider.find("li").width();
			$sliLen = $sliCtrl.length;
		}
		function move(distance) {
					
			$slider.stop(true, false).animate({
			
				"marginLeft": "-" + currentIndex * $sliWid + "px"
			
			}, 500);

			$sliCtrl.removeClass("active").eq(currentIndex).addClass("active");
			
		}

		return function() {
			init();
			$sliCtrl.bind("click", function() {
			
				currentIndex = $(this).index();

				move();
			});

			/*滑动手势*/
			$slider.bind({

				"touchstart": function(e) {

					startX = e.originalEvent.changedTouches[0].clientX;
					endX = e.originalEvent.changedTouches[0].clientX;

				},"touchmove": function(e) {

					endX = e.originalEvent.changedTouches[0].clientX;

				},"touchend": function(e) {

					var difference = startX - endX;

					if(Math.abs(difference) >= threshold) {

						if(difference > 0) {

							// console.log("←");
							currentIndex == $sliLen - 1 ? false : currentIndex++;
							
						}else {

							currentIndex == 0 ? false : currentIndex--;
							// console.log("→");

						}
						move();

					}
				}
			});
			$(window).bind("resize", function() {
				init();
				$slider.css("marginLeft", "-" + currentIndex * $sliWid + "px");
			})

		}

	})();

	var $fix_head = (function () {
		
		var $head_box = $(".jd_header_box");

		return function() {
			$(document).bind("scroll", function() {
				// console.log(document.body.scrollTop);
				if(document.body.scrollTop >= 140) {
					$head_box.addClass("jd_head_move");
				}else {
					$head_box.removeClass("jd_head_move");
				}
			})
		}

	})();

	var $second_kill = (function() {

		var startTime = new Date();
		var endTime = new Date(startTime.getTime() + 3600000);
		var time = (endTime - startTime) / 1000;

		var $sk_box = $(".jd_secondkill");
		var $hour = $("span.hor");
		var $min = $("span.min");	
		var $sec = $("span.sec");
		
		var hours, minutes, second, t;
		


		function init() {
			hours = compare(time / 3600),
			minutes = compare(time % 3600 / 60),
			second = compare(time % 60);
		}
		function compare(num) {
			num = parseInt(num);
			if(num < 10) {
				num = "0" + num;
			}else{
				num += "";
			}
			return num;	
		}
		function countDown() {
			init();
			$hour.eq(0).text(hours[0]).end().eq(1).text(hours[1]);
			
			$min.eq(0).text(minutes[0]).end().eq(1).text(minutes[1]);

			$sec.eq(0).text(second[0]).end().eq(1).text(second[1]);
		
			time--;
			if(time < 0) {
				if(t) {
					clearInterval(t);
					t = null;
				}

				$sk_box.fadeOut(2000);
			}
		}
		return function() {
			countDown();
			t = setInterval(countDown, 1000);
		}

	})();

	$banner();
	$fix_head();
	$second_kill();
})