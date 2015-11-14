'use strict';
angular.module('wyborySam2014.landingPage')
.directive('selectArea', ['$filter', function($filter){
  return {
    scope: {
      data:'=?',
      model: '=?',
      defaultString: '@?'
    },
    restrict: 'E',
    templateUrl: 'landing_page/areas_dropdown/dropdown.dir.html',
    link: function(scope, iElm, iAttrs, controller) {
      
      scope.openHideDropdown = function(event) {
        event.stopPropagation();
        scope.dropdownActive = !scope.dropdownActive;  
      };
      scope.select = function(area) {
        scope.model = area;
        console.log('test');
      };
    }
  };
}]);