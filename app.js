angular.module('app', ['ui.router'])




.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/')
    $stateProvider

        .state("Home", {
          url: '/',
          templateUrl: 'views/Home.html'
        })
        .state("Subscribe", {
            url: '/Subscribe',
            templateUrl: 'views/Subscribe.html'
        })

        .state("Catagory", {
            url: '/Catagory',
            templateUrl: 'views/Catagory.html'
        })
        .state("Readinglist", {
            url: '/Reading list',
            templateUrl: 'views/Readinglist.html'
        })




}])

var key = 'akVRqrnQWAzidmBfuy3JZQ'
var secret = 'zJdn58ruQkLDkay0qTmZ0RCSq5YnaVOutPODGzSls'
