//1. the app will set the routs and the structure of the app. it will define each page, a templetate to tell the code what to put in the ui-view, and a url. ui.router is what
//allows angular to  move the user around to the different page and inject the templates in the ui-view

angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeController'
      })
      .state('php', {
        url: '/php',
        templateUrl: './views/php.html',
        controller: 'phpController'
      })
      .state('java', {
        url: '/java',
        templateUrl: './views/java.html',
        controller: 'javaController'
      })
    

    });
