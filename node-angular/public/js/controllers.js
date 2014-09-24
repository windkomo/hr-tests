/*jshint loopfunc: true */
/*jshint devel: true */


angular.module('RunningHeroes.controllers', [])
.controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
  
  var disposableDomains = [];
  
  //Get disposable domains from disposable.json
  $http.get('js/disposable.json').success (function(data){
     disposableDomains = data.disposableDomains;
  });
  
  $scope.checkEmail = function(newMail) {
      
         //Check if input is defined
         if(!newMail)
         {
            return;
         }
         
        //Domain of email input
        var domain = newMail.substring(newMail.indexOf("@")+ 1);
        
        //Check if the domain is among the blacklisted domains and print message
        if(disposableDomains.indexOf(domain) !== -1)
        {
          $scope.disposableMessage = "Pas d'email jetable !";
        }
        else
        {
          $scope.disposableMessage = "";
        }
        
     };
    

}]);