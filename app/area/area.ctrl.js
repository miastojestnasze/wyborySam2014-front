angular.module('wyborySam2014.area')
.controller('wyborySam2014.area.ctrl', ['$scope', '$rootScope', '$http', 'httpService', function($scope, $rootScope, $http, httpService){
  var getNavTree = function(tree) {
    var oneTree = tree.filter(function(obj){
      return obj.type === $scope.electionKind.type;
    })[0];
    return oneTree;
  };

  var getData = function (url, name) {
    httpService.getStatsData(url).success(function(stats){
      $scope.stats = stats;
      $scope.siteName = name;
    })
  }

  $scope.chartData = {key: '', values: []}
  $scope.electionKind ={
    name: 'Wybory do Rady Dzielnicy',
    type: 'district'
  }


  httpService.getAreasTree().success(function(tree) {
    $scope.tree = tree;
    $scope.navTree = getNavTree(tree);
    getData($scope.navTree.children[0].url, $scope.navTree.children[0].name);
  });

  

  $scope.$watch('electionKind', function(val, oldVal) {
    if(val !== oldVal) {
      $scope.navTree = getNavTree($scope.tree);
      $rootScope.$broadcast('area::electionTypeChange');
      getData($scope.electionKind.type +'/', 'Warszawa');
    }
  });

  var des = $rootScope.$on('area::areaTypeChange', function(e, url, name){
    getData(url, name)
  });
  $scope.$on('$destroy', des);

  $scope.menuIsVisible = function() {
    return $scope.openMenu === false || $scope.openMenu === true;
  };
  $scope.menuIsOff = function() {
    return $scope.openMenu === false;
  };
  
  $scope.dropdownIsOff = function() {
    return $scope.electionKindsDropwn === false;
  };

  $scope.dropdownIsVisible = function() {
    return $scope.electionKindsDropwn === false || $scope.electionKindsDropwn === true;
  };

  $scope.changeElectionKind = function(kind) {
    $scope.electionKind = {
      name: kind.name,
      type: kind.type
    };
    httpService.getStatsData(kind.url).success(function(data){
      $scope.statsData = data;
    })
    $scope.electionKindsDropwn = false;
  };
  

  
  
}]);