(function(){
	angular
	.module('app')
	.controller("MainNavController", function($scope){
		// Code For MainNavController Here
	})
	.component('navbar', {
	    templateUrl: "components/navbar/navbar.html",
	    controller: "MainNavController"
	})
})()