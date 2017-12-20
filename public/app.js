// (function(){
  angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html'       
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html'       
        });

});

