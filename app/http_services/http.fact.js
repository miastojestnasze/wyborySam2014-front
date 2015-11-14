angular.module('wyborySam2014.http')
.factory('httpService', ['$http', 'DEV_API_PREFIX', function($http, DEV_API_PREFIX) {
  var self = {};
  
  self.getAreasTree = function() {
    return $http.get(DEV_API_PREFIX + 'stats/areas-tree/');
  };

  self.getStatsData = function(url) {
    return $http.get(DEV_API_PREFIX + url);
  };

  return self;
}])