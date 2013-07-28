$(window).on('hashchange', function(e){
	if ($(".active").hasClass("toc")){
		var emitter = new particle_emitter({
	        image: ['images/particle.gif'],
	        center: ['50%', '50%'], offset: [0, 0], radius: 0,
	        size: 10, velocity: 500, decay: 500, rate: 500
	    }).start();
	    window.setTimeout(function(){
	    	emitter.stop();
	    },250);
	}
    var url = window.location.href;
	var page = url.substring(url.lastIndexOf('/') + 1);
	if (page === "step-11") {
		$(".active").addClass("slide");	
		$(".active").css("display", "block");
		$('.active').animate({
		    opacity: 1,
		    width: "1000px"
		  }, 1500, function() {
		    $(".parchment-text").css("display", "block");
		});
	} else {
		$(".parchment").css("display", "none");
	}
});