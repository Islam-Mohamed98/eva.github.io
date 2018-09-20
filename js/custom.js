$(function () {

	'use strict';
	// Adjust Slider Height
	var winH = $(window).height(),
		navH = $('.navbar').innerHeight();
	$('.slider, .carousel-item').height( winH - navH);
	$(window).resize(function () {
		var winH = $(window).height(),
		navH = $('.navbar').innerHeight();
		$('.slider, .carousel-item').height( winH - navH);
		});

	// Features-work Shuffle
	$('.features-work ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'all') {
			$('.features-work .col-md').css('opacity','1');
		} else {
			$('.features-work .col-md').css('opacity','.08');
			$($(this).data('class')).parent().css('opacity','1');
		}
	});
});