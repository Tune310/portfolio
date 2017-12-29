angular
.module('app')
.controller('ResponsiveNavController', function($scope){
	$("navbar-responsive").on('mouseenter', '.navbar-toggler', function(e){
	console.log(e);
	$(".fa-bars").addClass("hamburger-hover");
	});
	$("navbar-responsive").on('mouseleave', '.navbar-toggler', function(e){
		console.log(e);
		$(".fa-bars").removeClass("hamburger-hover");
	});

	$("navbar-responsive").on("click", '.navbar-toggler', function(e){
		$(".fa-bars").toggleClass("hamburger-blue");
	});
	
	$("navbar-responsive").on("click", '.navbar-nav li a', function(e){
		console.log(e);
		$(".navbar-toggler").click();
	});
})
.component('navbarResponsive', {
    templateUrl: "components/navbar-responsive/navbar-responsive.html",
    controller: "ResponsiveNavController"
})
 