(function(){
  'use strict';
  
   var app = angular.module('wicresoftApp', ['ionic', 'ui.router']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
})
  
  app.config(router);
  router.$inject = ['$stateProvider', '$urlRouterProvider'];
  
  function router($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('');
    
    $stateProvider.state('app', {
      url: '',
      templateUrl: 'templates/menu.html',
      controller: 'appCtrl',
      controllerAs: 'vm'
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent':{
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('app.services', {
      url: '/services',
      views:{
        'menuContent':{
          templateUrl: 'templates/services.html',
          controller: 'aboutCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('app.news', {
      url: '/news',
      views:{
        'menuContent':{
          templateUrl: 'templates/news.html',
          controller: 'newsCtrl',
          controllerAs: 'vm'
        }
      }
    });
  }
})();