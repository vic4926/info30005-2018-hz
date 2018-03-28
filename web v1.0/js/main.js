
// ---------- Preloader ----------
(function($) {
	"use strict";
	$(window).load(function() {
		$("#loader").fadeOut();
		$("#preloader").delay(900).fadeOut("slow");
	});
	// ---------- Flexslider Script ----------
	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider){
		  $('body').removeClass('loading');
		}
	});
})(jQuery);

	// ---------- Header Slideshow ----------

(function() {
		"use strict";
		$.vegas('slideshow', {
			backgrounds:[
				{ src:'img/slide1.jpg', fade:900 },
				{ src:'img/slide2.jpg', fade:900 }
			]
		})
})(jQuery);
