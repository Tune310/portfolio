$(function(){
	$.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', function (data) {
	  console.log(data);
	  for(var i = 0; i < data.length; i++) {
	     	console.log(data[i].punchline);
	   }
	})
});