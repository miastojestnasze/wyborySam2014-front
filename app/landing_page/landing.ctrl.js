'use strict';
angular.module('wyborySam2014.landingPage')
.controller('wyborySam2014.landing.ctrl', ['$scope', '$state','httpService', 'urls',
function($scope, $state, httpService, urls){
  $state.go('stats-app');
}])