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
        src: "/assets/images/SOS-full-logo-white.png"
       },
       {
        name: "LittyTrend",
        href: "https://littytrend.com/",
        id: "littytrend",
        description: "Site built in Shopify",
        src: "/assets/images/litty-logo.png"
       }
    ],
    $scope.projectstwo = [
        {
            name: "find-waldo-game",
            href: "https://find-waldo-game.bitballoon.com/",
            id: "waldogame",
            description: "find waldo",
            src: "/assets/images/zwaldo-logo.png",
        },
        {
            name: "Fantasy Club House",
            href: "https://www.fantasyclubhouse.com/",
            id: "fantasyclubhouse",
            src: "/assets/images/fantasyclubhouse-logo.png"

        },
        {
            name: "Pegasus Investments",
            href: "https://www.pegasusinvestments.com/",
            id: "pegasusinvestments",
            src: "/assets/images/pegasusinvestments-logo-black.png"

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