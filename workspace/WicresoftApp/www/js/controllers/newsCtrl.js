(function(){
  'use strict';
  
  angular
    .module('wicresoftApp')
    .controller('newsCtrl', newsCtrl);
  
  newsCtrl.$inject = ['$log'];
  
  function newsCtrl($log){
    var vm = this;
    
    activate();
    
    function activate(){
      
    }
  }
})();