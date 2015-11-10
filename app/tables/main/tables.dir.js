'use strict';
angular.module('wyborySam2014.tables')
.directive('tablesView', [function(){
  return {
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    controller: 'wyborySam2014.tables.mainCtrl',
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment,
    templateUrl: 'tables/main/tables.dir.html',
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
}]);