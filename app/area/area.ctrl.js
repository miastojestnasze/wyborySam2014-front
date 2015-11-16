angular.module('wyborySam2014.area')
.controller('wyborySam2014.area.ctrl', ['$scope', '$rootScope', '$http', '$stateParams', 'httpService', 'urls',
  function($scope, $rootScope, $http, $stateParams, httpService, urls){
  var getNavTree = function(tree) {
    var oneTree = tree.filter(function(obj){
      return obj.type === $scope.electionKind.type;
    })[0];
    return oneTree;
  };

  var getData = function (url, name) {
    $scope.showSpinner = true;
    httpService.getStatsData(url).success(function(stats){
      $scope.stats = stats;
      $scope.siteName = name;
      urls.changeDataUrl(url, $scope.dataUrl, 'stats');
      $scope.showSpinner = false;
    })
  };

  $scope.chartData = {key: '', values: []};
  $scope.dataUrl = $stateParams.dataUrl;
  $scope.showSpinner = false;
  $scope.openMenu = true;

  httpService.getAreasTree().success(function(tree) {
    $scope.tree = tree;
    
    var url = urls.decode($stateParams.dataUrl);
    var name = urls.getSiteName(url);
    // console.log();
    $scope.electionKind = urls.getElectionKind(tree, url);
    $scope.navTree = getNavTree(tree);
    getData(url, name);
  });

  $scope.$watch('electionKind', function(val, oldVal) {
    if(val !== oldVal && oldVal !== undefined) {
      $scope.navTree = getNavTree($scope.tree);
      $rootScope.$broadcast('area::electionTypeChange');
      getData($scope.electionKind.url, 'Warszawa');
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
    $scope.dataUrl = kind.url;
    $scope.electionKind = {
      name: kind.name,
      type: kind.type,
      url: kind.url
    };
    httpService.getStatsData(kind.url).success(function(data){
      $scope.statsData = data;
    })
    urls.changeDataUrl(kind.url, 'stats');
    $scope.electionKindsDropwn = false;
  };
  
  $scope.scrollTo = function(kind) {
    if(kind === '#charts') {
      $(kind).velocity("scroll", { axis: "y", offset: -140})
      return;
    }
    $(kind).velocity("scroll", { axis: "y", offset: -60})


  }

  
  
}]);