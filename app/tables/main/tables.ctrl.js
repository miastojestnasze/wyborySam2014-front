'use strict';
angular.module('wyborySam2014.tables')
.controller('wyborySam2014.tables.mainCtrl', ['$scope', function($scope){
  
  $scope.$watch('stats', function (newVal, oldVal) {
    if (!newVal || !newVal.candidates) {
      $scope.rawCandidates = [];
      return;
    }
    $scope.rawCandidates = newVal.candidates;
  });
  
}])
