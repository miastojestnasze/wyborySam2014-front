angular.module('wyborySam2014.area')
.controller('wyborySam2014.area.ctrl', ['$scope', '$rootScope', '$http', '$stateParams', 'httpService', 'urls',
  function($scope, $rootScope, $http, $stateParams, httpService, urls){
  var getNavTree = function(tree) {
    var oneTree = tree.filter(function(obj){
      return obj.type === $scope.electionKind.type;
    })[0];
    return oneTree;
  };

  var changeSiteProperties = function(stats, name, url) {
    $scope.stats = stats;
    $scope.siteName = name;
    urls.changeDataUrl(url, $scope.dataUrl, 'stats');
  };

  var getData = function (url, name) {
    $scope.showSpinner = true;
    httpService.getStatsData(url).success(function(stats){
      changeSiteProperties(stats, name, url);
      $scope.showSpinner = false;
    })
  };

  $scope.chartData = {key: '', values: []};
  $scope.dataUrl = $stateParams.dataUrl;
  $scope.showSpinner = false;

  httpService.getAreasTree().success(function(tree) {
    $scope.tree = tree;
    
    var url = urls.decode($stateParams.dataUrl);
    var name = urls.getSiteName(url);
    $scope.electionKind = urls.getElectionKind(tree, url);
    $scope.tree = tree;
    $scope.navTree = getNavTree(tree);
    if($stateParams.dataUrl.length === 0) {
      return;
    } 
    getData(url, name);
  });


  var des = $rootScope.$on('area::areaTypeChange', function(e, url, name){
    getData(url, name)
  });
  $scope.$on('$destroy', des);

  $scope.showHideNavMenu = function(event) {
    event.stopPropagation();
    if($scope.openMenu || $scope.openMenu === undefined) {
      $scope.openMenu = false;
    }
    else {
      $scope.openMenu = true; 
    }
  }

  $scope.menuIsVisible = function() {
    return $scope.openMenu === false || $scope.openMenu === true;
  };
  $scope.menuIsOff = function() {
    return $scope.openMenu === false;
  };

  $scope.menuDefault = function() {
    return $scope.openMenu === undefined;
  }
  
  $scope.dropdownIsOff = function() {
    return $scope.electionKindsDropwn === false;
  };

  $scope.dropdownIsVisible = function() {
    return $scope.electionKindsDropwn === false || $scope.electionKindsDropwn === true;
  };

  $scope.changeElectionKind = function(kind) {
    $scope.dataUrl = kind.url;
    $scope.showSpinner = true;
    httpService.getStatsData(kind.url).success(function(data){
      $scope.statsData = data;
        $scope.electionKind = {
        name: kind.name,
        type: kind.type,
        url: kind.url
      };
      changeSiteProperties(data, 'Warszawa', kind.url);
      $scope.navTree = getNavTree($scope.tree);
      $rootScope.$broadcast('area::electionTypeChange');
      $scope.electionKindsDropwn = false;
      $scope.showSpinner = false;
    })
    
  };
  
  $scope.scrollTo = function(kind) {
    if(kind === '#charts') {
      $(kind).velocity("scroll", { axis: "y", offset: -140});
      return;
    }
    $(kind).velocity("scroll", { axis: "y", offset: -60});
  };


  
}]);