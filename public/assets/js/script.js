$(function(){
	$('body').on('click', 'a[href^="#"]', function(event) {
    	var target = $(this.getAttribute('href'));
		if( target.length ) {
		    event.preventDefault();
		    $('html, body').stop().animate({
		        scrollTop: target.offset().top - 90
		    }, 500);
		}
	});

	$("body").on('click', 'a.navbar-logo', function(clickEvent){
		$(this).css('text-decoration', 'none');
	})

	var date = new Date();
	var fullYear = date.getFullYear();
	$('.footer-wrapper span').append(fullYear);
});