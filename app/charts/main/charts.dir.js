'use strict';
angular.module('wyborySam2014.charts')
.directive('chartsView', [function(){
  // Runs during compile
  return {
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    controller: 'wyborySam2014.charts.mainCtrl',
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'charts/main/charts.dir.html',
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
}]);