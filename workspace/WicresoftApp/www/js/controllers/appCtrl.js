(function(){
  'use strict';
  
  angular
    .module('wicresoftApp')
    .controller('appCtrl', appCtrl);
  
  appCtrl.$inject = ['$log'];
  
  function appCtrl($log){
    var vm = this;
    
    activate();
    
    function activate(){
      
    }
  }
})();