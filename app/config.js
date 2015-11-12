angular.module('wyborySam2014')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('stats-app', {
    url: '/app/',
    controller: 'wyborySam2014.area.ctrl',
    templateUrl: 'area/area.ctrl.html'
  })
}])