$(function(){
	$(".wrapper").on('mouseenter', '.navbar-toggler', function(e){
		console.log(e);
		$(".fa-bars").addClass("hamburger-hover");
	});
	$(".wrapper").on('mouseleave', '.navbar-toggler', function(e){
		console.log(e);
		$(".fa-bars").removeClass("hamburger-hover");
	});

	$(".wrapper").on("click", '.navbar-toggler', function(e){
		$(".fa-bars").toggleClass("hamburger-blue");
	});
	
	$(".wrapper").on("click", '.navbar-nav li a', function(e){
		console.log(e);
		$(".navbar-toggler").click();
	});
});

$.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', function (data) {
  console.log(data);
  for(var i = 0; i < data.length; i++) {
     	console.log(data[i].punchline);
   }
})