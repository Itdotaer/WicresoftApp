(function(){
  'use strict';
  
  angular
    .module('wicresoftApp')
    .controller('servicesCtrl', servicesCtrl);
  
  servicesCtrl.$inject = ['$log'];
  
  function servicesCtrl($log){
    var vm = this;
    
    activate();
    
    function activate(){
      
    }
  }
})();