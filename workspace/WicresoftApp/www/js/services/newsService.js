(function(){
  'use strict';
  
  angular
    .module('services')
    .factory('newsService', newsService);
  
  newsService.$inject = ['$log'];
  
  function newsService($log){
    var service = {
      getMockNews: getMockNews
    };
    
    return service;
    
    function getMockNews(){
      var news = [
        {id: 0, title: 'Test 1', description: 'this is description'},
        {id: 1, title: 'Test 2', description: 'this is description'},
        {id: 2, title: 'Test 3', description: 'this is description'}
      ];
      
      return news;
    }
  }
})();