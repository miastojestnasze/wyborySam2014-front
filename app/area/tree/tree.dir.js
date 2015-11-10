'use strict';
angular.module('wyborySam2014.area')
.directive('areasTree', ['$rootScope', function($rootScope){
  return {
    scope: {
      tree:"="
    }, // {} = isolate, true = child, false/undefined = no change
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'area/tree/tree.dir.html',
    link: function(scope, iElm, iAttrs, controller) {
      scope.active = -1;
      scope.activateDeactivate = function(event, index) {
        event.stopPropagation();
        if(scope.active === -1) {
          scope.active = index;
          return;
        }
        scope.active = -1;
      };

      var des = $rootScope.$on('area::electionTypeChange', function(){
        scope.active = -1;
      });
      scope.$on('$destroy', des);
      
      var des1 = $rootScope.$on('tree.city::deactivateAllBranches', function(){
        scope.active = -1;
      });
      scope.$on('$destroy', des1);

      scope.changeArea = function(event, element) {
        event.stopPropagation();
        $rootScope.$broadcast('area::areaTypeChange', element.url, element.name);
      };

      
    }
  };
}]);