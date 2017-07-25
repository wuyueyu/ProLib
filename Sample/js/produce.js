jQuery(document).ready(function($) {
	var proNav = (function() {

		var nav = $('.proCent nav li');
		

		return function(){
			
			nav.bind("click", function() {
				$(this).addClass("now").siblings().removeClass("now");
			});

		}

	})();

	proNav();
});
