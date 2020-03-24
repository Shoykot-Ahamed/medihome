(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});





// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });	
  
  // init Isotope
  var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: false,
	masonry: {
	  // use outer width of grid-sizer for columnWidth
	  columnWidth: 1,
	}
	
  });
  
  //for menu active class
  $('.portfolio-menu button').on('click', function(event) {
	  $(this).siblings('.active').removeClass('active');
	  $(this).addClass('active');
	  event.preventDefault();
  });






// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-hand-point-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();





//active slide
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		nav: false,
		fade: true,
		arrows: true,
		prevArrow: '.slide-prev',
		nextArrow: '.slide-next',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

$(function(){
	$('.datepicker').datepicker()
});

  // brand-active
  $('.client-active').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }

	]
  });

  // testimonial-active
  $('.testimonial-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,
	fade: true,
	dots:true,
  });

  // team - active
  $('.team-active').slick({
	dots: false,
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: true,
	infinite: true,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-next',
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }

	]
  });
  
  $('.team-active-2').slick({
	dots: false,
	autoplay: true,
	autoplaySpeed: 10000,
	arrows: true,
	infinite: true,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-next',
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }

	]
  });

  // pricing-active

var e = document.getElementById("filt-monthly"),
d = document.getElementById("filt-hourly"),
t = document.getElementById("switcher"),
m = document.getElementById("yearly"),
y = document.getElementById("monthly");

e.addEventListener("click", function(){
t.checked = false;
e.classList.add("toggler--is-active");
d.classList.remove("toggler--is-active");
m.classList.remove("hide");
y.classList.add("hide");
});

d.addEventListener("click", function(){
t.checked = true;
d.classList.add("toggler--is-active");
e.classList.remove("toggler--is-active");
m.classList.add("hide");
y.classList.remove("hide");
});

t.addEventListener("click", function(){
d.classList.toggle("toggler--is-active");
e.classList.toggle("toggler--is-active");
m.classList.toggle("hide");
y.classList.toggle("hide");
})


})(jQuery);