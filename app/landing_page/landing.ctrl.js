'use strict';
angular.module('wyborySam2014.landingPage')
.controller('wyborySam2014.landing.ctrl', ['$scope', '$state','httpService', 'urls',
function($scope, $state, httpService, urls){
  httpService.getAreasTree().success(function(tree) {
    $scope.tree = tree;
  });
  $scope.data = null;
  $scope.gotoStats = function(url) {
    if(!url) {
      url = 'stats/city_council/circle-1/';
    }
    $state.go('stats-app', {dataUrl: urls.code(url)});
  };
}])