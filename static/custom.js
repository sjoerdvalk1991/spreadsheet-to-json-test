$( document ).ready(function() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider',
		infinite: false,
		centerMode: true,
		focusOnSelect: true
	});

});