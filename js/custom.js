$(document).ready(function() {
	$(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { 
            $('.warp-header').addClass('active');
        }
        else {
            $('.warp-header').removeClass('active');
        }
    });
	$('.menu li a').click(function (e) {
		//e.preventDefault();
		var target = $(this).attr('data-id');
		if (target !== '')
		{	
			$('.menu .active').removeClass('active');
			$(this).parent().addClass('active');
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top - 120
			}, 1000, function () {
				location.hash = target;
			});
			return false;
		}
	});
	$('.click-menu').click(function(){
		$('.click-menu').toggleClass('active');
		$('.menu').toggleClass('active');
		$('.text-right').addClass('active');
		$('body').toggleClass('active');
	});

	$('.menu-close').click(function(){
		$('.click-menu').removeClass('active');
		$('.menu').removeClass('active');
		$('.text-right').removeClass('active');
		$('body').removeClass('active');
	});
	$(".faqs-title").click(function(){
		if($(this).next().is(':visible'))
		{
			$(this).next().slideUp(500);
		}
		else
		{
			$(".faqs-des").slideUp(500);
			$(this).next().slideDown(500);	
		}
	});
	$('.faqs-title').click( function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.faqs-title.active').removeClass('active');
			$(this).addClass('active');    
		}
	});

	$('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
	
	new WOW().init({
		offset:100,
	});
	//begin canvas
	if($('canvas').length > 0){
		particlesJS('particles-js',
		  {
			"particles": {
			  "number": {
				"value": 80,
				"density": {
				  "enable": true,
				  "value_area": 800
				}
			  },
			  "color": {
				"value": "#16a4fd"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 5
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				  "enable": false,
				  "speed": 1,
				  "opacity_min": 0.1,
				  "sync": false
				}
			  },
			  "size": {
				"value": 5,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 40,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 400,
				  "size": 40,
				  "duration": 2,
				  "opacity": 8,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true,
			"config_demo": {
			  "hide_card": false,
			  "background_color": "#b61924",
			  "background_image": "",
			  "background_position": "50% 50%",
			  "background_repeat": "no-repeat",
			  "background_size": "cover"
			}
		  }
		);
		
	}
	
	//end canvas
});