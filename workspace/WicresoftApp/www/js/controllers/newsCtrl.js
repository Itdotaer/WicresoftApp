(function(){
  'use strict';
  
  angular
    .module('wicresoftApp')
    .controller('newsCtrl', newsCtrl);
  
  newsCtrl.$inject = ['$scope', '$log', '$timeout', '$ionicLoading', 'newsService'];
  
  function newsCtrl($scope, $log, $timeout, $ionicLoading, newsService){ 
    $scope.refresh = function(){
       $timeout(function(){
        $scope.newsList = newsService.getMockNews();
      }, 5000);
      $scope.$broadcast('scroll.refreshComplete');
    }
    
    activate();
    
    function activate(){
      $ionicLoading.show({
        template: 'Loading...'
      });
      
      //Set inerval to see display delay
      $timeout(function(){
        $scope.newsList = newsService.getMockNews();
        $ionicLoading.hide();
      }, 3000);
    }
  }
})();