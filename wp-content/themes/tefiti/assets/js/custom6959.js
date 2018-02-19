 (function($) {

 	"use strict";
	$(document).ready(function() {
         //mobile menu display
                $('.navbar-toggle').on('click', function(e) {
                $('body').toggleClass('open-mobile-menu')
            });
	    $('.close,ul.onepage.m-menu>li>a').on('click', function(e) {
	      $('body').removeClass('open-mobile-menu')
	    }) 
			 
	    //mobile drodown menu display
	    $('.mobile-menu>ul>li>a,.mobile-menu ul.mobile-submenu>li>a').on('click', function(e) {
	      var element = $(this).parent('li');
	      if (element.hasClass('open')) {
	        element.removeClass('open');
	        element.find('li').removeClass('open');
	        element.find('ul').slideUp(1000,"swing");
	      }
	      else {
	        element.addClass('open');
	        element.children('ul').slideDown(1500,"swing");
	        element.siblings('li').children('ul').slideUp(1000,"swing");
	        element.siblings('li').removeClass('open');
	        element.siblings('li').find('li').removeClass('open');
	        element.siblings('li').find('ul').slideUp(1000,"swing");
	      }
	    }); 
        //disable parent menu link
        $('.mobile-menu>ul>li.menu-item-has-children>a').on('click', function(){
            return false;
        });
	 
		//jQuery for page scrolling feature - requires jQuery Easing plugin
	
			$('a.page-scroll').on('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
	

		
		//LightCase
		
			$('a[data-rel^=lightcase]').lightcase();
		

		//Js code for search box 
		
			$(".first_click").on("click", function(){
				$(".menu-right-option").addClass("search_box");
			});
			$(".second_click").on("click", function(){
				$(".menu-right-option").removeClass("search_box"); 	
			});	
			
		
		//countdown 
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		
		
			
		
		//Sponsors swiper
		
		var swiper = new Swiper('.sponsors-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 4,
			spaceBetween: 20,
			autoplay: 3000,
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			 breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				400: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
		
		
		//testimonial swiper
		
		var swiper = new Swiper('.testimonial-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 3,
			spaceBetween: 20,
			autoplay: 3000,
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			 breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				400: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
		
		
		//people say container swiper
		
		var swiper = new Swiper('.people-say-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 1,
			spaceBetween: 25,
			autoplay: false,
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			 breakpoints: {
				1024: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				400: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
		
		//Pre-Loader	
        jQuery(window).load(function(){
            jQuery('#loading').fadeOut();
        });
		
		
		//Scroll Top Top 
		
		var link,
		toggleScrollToTopLink = function(){
			
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0){
				link.fadeIn(400);
			}else{
				link.fadeOut(400);
			}
			
		};
		
			link = $(".scroll-img");
			
			$(window).scroll(toggleScrollToTopLink);
			
			toggleScrollToTopLink();
			
			link.on("click", function(){
				
				$("body").animate({scrollTop: 0});
				$("html").animate({scrollTop: 0});
				
			});
	
		
		//Menu Fixed Top
		
        var fixed_top = $(".menu-scroll");
        var mobilem_fixed_top = $(".mobile-menu-area");

        $(window).on('scroll', function() {

            if( $(this).scrollTop() > 100 ){	
                fixed_top.addClass("menu-fixed animated fadeInDown");
                mobilem_fixed_top.addClass("menu-fixed");
                $("body").addClass("body-padding");

            }
            else{
                fixed_top.removeClass("menu-fixed");
                mobilem_fixed_top.removeClass("menu-fixed animated fadeInDown");
                $("body").removeClass("body-padding");
            }

        });
			
	
			//Pricing Slider
		
			$('.nstSlider').nstSlider({
				"left_grip_selector": ".leftGrip",
				"right_grip_selector": ".rightGrip",
				"value_bar_selector": ".bar",
				"value_changed_callback": function(cause, leftValue, rightValue) {
					$(this).parent().find('.leftLabel').text(leftValue);
					$(this).parent().find('.rightLabel').text(rightValue);
				}
			});

			
		
		
		
	//Flex Slider
			
		$(window).load(function() {
		  // The slider being synced must be initialized first
		  $('#carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 74,
			itemMargin: 5,
			asNavFor: '#slider'
		  });
		 
		  $('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel"
		  });
		});
		
		

	//nst Slider
	
		$('.nstSlider').nstSlider({
			"left_grip_selector": ".leftGrip",
			"right_grip_selector": ".rightGrip",
			"value_bar_selector": ".bar",
			"value_changed_callback": function(cause, leftValue, rightValue) {
				$(this).parent().find('.leftLabel').text(leftValue);
				$(this).parent().find('.rightLabel').text(rightValue);
			}
		});

		
	});	

})(jQuery);





	


