angular.module('wyborySam2014')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('stats-app', {
    url: '/app/{dataUrl}',
    controller: 'wyborySam2014.area.ctrl',
    templateUrl: 'area/area.ctrl.html'
  })
  .state('landing', {
    url: '',
    controller: 'wyborySam2014.landing.ctrl',
    templateUrl: 'landing_page/landing.ctrl.html'
  })
}])