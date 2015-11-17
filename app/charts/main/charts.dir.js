'use strict';
angular.module('wyborySam2014.charts')
.directive('chartsView', [function(){
  // Runs during compile
  return {
    scope: {
      data: '='
    }, // {} = isolate, true = child, false/undefined = no change
    controller: 'wyborySam2014.charts.mainCtrl',
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'charts/main/charts.dir.html',
    link: function(scope, iElm, iAttrs, controller) {
      scope.chartData = [{key: "Cumulative Return", values: []}]
      scope.$watch('data', function(val, oldVal) {
        if(val !== oldVal) {
          
          scope.chartData[0].values = _.map(val.votes,function(v){
            return {
              value: v.percentage,
              label: v.political_party
          }});
          scope.chartData[0].values.sort(function(a, b){
            return b.value - a.value;
          });


          scope.chartMobileData = _.map(val.votes,function(v){
            return {
              y: v.percentage,
              key: v.political_party
          }});

        }
      });
    }
  };
}]);