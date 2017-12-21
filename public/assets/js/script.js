$(function(){
	$(".navbar-toggler").hover(function(e){
		console.log(e);
		$(".fa-bars").toggleClass("hamburger-hover");
	}); 

	$(".navbar-toggler").on("click", function(e){
		$(".fa-bars").toggleClass("hamburger-blue");
	});
	
	$("#responsive-header li a").on("click", function(e){
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