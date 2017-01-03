angular.module('app1').controller('javaController', function($scope, service){

  service.getlanguages()
    .then(function(res){
       $scope.lang = res.data;
       return $scope.lang;
    });

  service.getlanguages()
    .then(function(res){
       $scope.status = res.status;  
       return $scope.status;
    });

})
