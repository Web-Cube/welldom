import simpleParallax from 'simple-parallax-js';

var defaults = {

	events: () => {
		var image = document.getElementsByClassName('offer__bg-image');
		new simpleParallax(image, {
			delay: 1.6,
			scale: 1.1,
			// overflow: true,
			transition: 'cubic-bezier(0,0,0,1)'
		});
		
		$('*[data-for]').on('click', function() {
			let type = $(this).data('for');

			$('.modals .horizontal-messengers__input').filter('[value='+type+']').closest('.horizontal-messengers__link').click();
		});
		
		$('.horizontal-messengers__demo').on('click', function() {
		
			if($(window).width() <= 580){
				$('.mobile:not(#mobile-messengers)').removeClass('mobile_visible')
				$('.js-toggle-mobile').removeClass('is-active')
				$('#mobile-messengers').toggleClass('mobile_visible')

				if($('#mobile-messengers').hasClass('mobile_visible')){
					$('html, body').addClass('js-lock')
				}else{
					$('html, body').removeClass('js-lock')
				}
			}else{
				$(this).parent().addClass('is-active')
			}
		});
		
		$('.js-messengers-close').on('click', function(e) {
			e.preventDefault()
			$(this).closest('.horizontal-messengers').removeClass('is-active').blur()
		});

		$('a[href*="tel:"]').on('click', function() {
			$("html, body").removeClass('js-lock')
			setTimeout(function() {
				$("html, body").removeClass('js-lock')
			}, 100)
		});
		
		// Scroll menu
		
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			var navTop = $('.nav').offset().top;
			
			if ( $(window).width() > 800 ) {
				
				if ( scrollTop > navTop  ) {
					$('.nav').addClass("is-fixed");
				} else {
					$('.nav').removeClass("is-fixed");
				}
			
			}
			
		});
		
		// Notify
		
		$('.notify__button').click(function(){
			$(this).hide();
			$('.notify__form').addClass('is-active');
			
			return false;
		});
		
		// Scroll to
		$(".js-scroll-to").click(function() {
			let attr_href = $(this).attr("href"),
				data_href = $(this).data("href");
			if ( data_href ) {
				attr_href = data_href;
			}
			$("html, body").animate({
				scrollTop: $(attr_href).offset().top + "px"
			}, {
				duration: 1000
			});
			return false;
		});
		
		//
		
		$('.catalog__link').click(function(){
			let roomName = $(this).data('room-name');
			$("#price input[name='subj']").val('Узнать цену на квартиру: ' + roomName);
		});
		
	},
	
	hamburgers: () => {
		
		$('.js-toggle-mobile').on('click', function() {
			$(this).toggleClass('is-active')
			$('html, body').toggleClass('js-lock')
			$('.mobile:not(#mobile-menu)').removeClass('mobile_visible')
			$('#mobile-menu').toggleClass('mobile_visible')

			if($('#mobile-menu').hasClass('mobile_visible')){
				$('html, body').addClass('js-lock')
			}else{
				$('html, body').removeClass('js-lock')
			}
		});
		
		$('.mobile__link').on('click', function(e){
			e.preventDefault()
			$('.js-toggle-mobile').removeClass('is-active')		
			$('html, body').removeClass('js-lock')
			$('.mobile').removeClass('mobile_visible')
		});
		
	},

	init: () => {

		defaults.events();
		
		defaults.hamburgers();

	}
}

export { defaults }