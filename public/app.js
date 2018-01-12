(function(){
  angular.module('app', ['ui.router'])
    .controller('MainController', function($scope){
       $scope.projects = [
       {
        name: "TravelZeeky",
        href: "https://travelzeeky.com/allroads",
        id: "travelzeeky",
        description: "Travel site for dicounts made with PHP",
        src: "/assets/images/travelzeeky-logo.png"
       },
       {
        name: "BuzzBar", 
        href: "https://buzzbaricecream.com/",
        id: "buzzbar",
        description: "Wordpress Website",
        src: "/assets/images/buzzbar-logo.png"
       },       
       {
        name: "Start or Sit",
        href: "https://startorsit.com/",
        id: "startorsit",
        description: "This site was made with php and Laravel Framework",
        src: "/assets/images/startorsit-logo.png"
       }
    ]
       console.log($scope.projects);
    })
    // .config(function($stateProvider, $urlRouterProvider) {

    // // $urlRouterProvider.otherwise('/home');

    // $stateProvider

    //     // ABOUT PAGE AND MULTIPLE NAMED VIEWS
    //     // .state('about', {
    //     //     url: '/about',
    //     //     templateUrl: '/views/about.html',      
    //     //     controller: 'MainController'
    //     // })
    //     .state('contact', {
    //         url: '/contact',
    //         // templateUrl: '/views/about.html'       
    //     })
        
    // })
    .component('about', {
            templateUrl: '/views/about.html'     
        })
    .component('projects', {
            templateUrl: '/views/projects.html',
            controller: 'MainController'
        })
    .component('contact', {
        templateUrl: '/views/contact.html'
    });
})()