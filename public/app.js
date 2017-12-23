(function(){
  angular.module('app', ['ui.router'])
    .controller('mainCtrl', function($scope){
       $scope.projects = [
       {
        name: "BuzzBar", 
        href: "https://buzzbaricecream.com/",
        id: "buzzbar",
        description: "Wordpress Website"
       },
       {
        name: "TravelZeeky",
        href: "https://travelzeeky.com/allroads",
        id: "travelzeeky",
        description: "Travel site for dicounts made with PHP"
       },
       {
        name: "Start or Sit",
        href: "https://startorsit.com/",
        id: "startorsit",
        description: "This site was made with php and Laravel Framework"
       }
    ]
    var projects = $scope.projects;
       console.log(projects);
       for (var i = 0; i < projects.length; i++) {
            console.log(projects[i].name);
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',      
            controller: 'mainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html'       
        });
    });
})()