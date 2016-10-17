$('body').imagesLoaded(function(){
	$('#portfolio-carousel').owlCarousel({
		items: 2,
		itemsDesktop: [1200, 2],
		itemsDesktopSmall: [992, 2],
		itemsTablet: [768, 1],
		autoPlay: false,
	});
});

$(document).ready(function() {

	$('#menu').slicknav({
		prependTo: '#mobile-menu',
		label: ''
	});

	$('section').each(function() {
		$(this).scrollex({
			top: '50%',
			bottom: '50%',
			enter: function(){
				$inViewport = $(this).attr('class');
				$('#menu li').each(function(){
					if ($(this).data('active') === $inViewport) {
						$(this).addClass('active-menu-item');
					} else{
						$(this).removeClass('active-menu-item');
					}
				});
			}
		});
	});
});