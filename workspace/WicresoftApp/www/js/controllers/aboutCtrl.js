(function(){
  'use strict';
  
  angular
    .module('wicresoftApp')
    .controller('aboutCtrl', aboutCtrl);
  
  aboutCtrl.$inject = ['$log'];
  
  function aboutCtrl($log){
    var vm = this;
    
    activate();
    
    function activate(){
      
    }
  }
})();