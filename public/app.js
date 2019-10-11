(function(){
  angular.module('app', ['ui.router'])
    .controller('MainController', function($scope){
       $scope.projects = [
       {
        name: "TravelZeeky",
        href: "https://www.travelzeeky.com/allroads",
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
        name: "San Antonio Winery",
        href: "https://sanantoniowinery.com/",
        id: "sanantonio-winery",
        description: "This site was made with Wordpress and php",
        src: "/assets/images/sanantoniowinery-logo.png"
       },
       {
        name: "Pacific Dimensions",
        href: "https://www.pacificdimensions.com/",
        id: "pacific-dimensions",
        description: "Site built in Wordpress",
        src: "/assets/images/pacificdimensions-logo.png"
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