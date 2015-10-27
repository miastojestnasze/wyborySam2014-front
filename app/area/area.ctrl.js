angular.module('wyborySam2014.area')
.controller('wyborySam2014.area.ctrl', ['$scope', function($scope){
  var siteView = 'charts';
  $scope.test = 21412;  
  $scope.arr=[1,2,23,4]
  $scope.switchView = function() {
    if(siteView === 'charts') {
      $('.tables-view').velocity("scroll", { axis: "x" });
      siteView = 'tables';  
    }
    else if(siteView === 'tables') {
      $('.charts-view').velocity("scroll", { axis: "x" });
      siteView = 'charts'; 
    }
  }

  
}]);