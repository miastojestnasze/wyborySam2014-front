'use strict';
angular.module('wyborySam2014.charts')
.controller('wyborySam2014.charts.mainCtrl', ['$scope', function($scope) {
  
  $scope.options = {
    chart: {
      type: 'discreteBarChart',
      height: 400,
      margin : {
        top: 20,
        right: 40,
        bottom: 50,
        left: 55
      },
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showValues: false,
      valueFormat: function(d){
        return d3.format(',.2f%')(d);
      },
      duration: 500,
      xAxis: {
        // axisLabel: 'X Axis'
      },
      yAxis: {
        // axisLabel: 'Y Axis',
        axisLabelDistance: 0
      },
    }
  };
}])