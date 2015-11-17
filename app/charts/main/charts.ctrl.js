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

  $scope.optionsMobileChart = {
    chart: {
      type: 'pieChart',
      height: 400,
      donut: true,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: false,
      pie: {
      startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
      endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
      },
      transitionDuration: 500,
      legendPosition: 'down' // idk why works, but it hides legend :P
    }
  };


}])