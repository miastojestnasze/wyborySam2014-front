angular.module('wyborySam2014')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('index', {
    url: '',
    controller: 'wyborySam2014.area.ctrl',
    templateUrl: 'area/area.ctrl.html'
  })
}])