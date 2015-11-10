'use strict';
angular.module('wyborySam2014.area')
.directive('mainCity', ['$rootScope', function($rootScope){
  return {
    scope: {
      election:"="
    }, // {} = isolate, true = child, false/undefined = no change
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'area/tree/main-city.dir.html',
    link: function(scope, iElm, iAttrs, controller) {
      scope.deactivateAllBranches = function(event, element) {
        event.stopPropagation();
        $rootScope.$broadcast('tree.city::deactivateAllBranches') 
      }

      scope.changeArea = function(event, element) {
        event.stopPropagation();
        $rootScope.$broadcast('area::areaTypeChange', element.url, element.name);
      };  
    }
  };
}]);