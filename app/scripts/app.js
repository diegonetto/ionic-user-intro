'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular.module('<%= appName %>', ['ionic', '<%= appName %>.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('intro', {
      url: '/',
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
    })

    .state('app', {
      url: '/app',
      templateUrl: 'templates/main.html',
      controller: 'AppCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});

