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
    //force charts to refresh, workaround for https://github.com/krispo/angular-nvd3/issues/259
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));   
    });
    $rootScope.$broadcast('site::changed');
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
  $scope.showSpinner = true;

  httpService.getAreasTree().success(function(tree) {
    $scope.tree = tree;
    $scope.showSpinner = false;
    var url = urls.decode($stateParams.dataUrl);
    var name = urls.getSiteName(url);
    $scope.tree = tree;

    if(url) {
      $scope.electionKind = urls.getElectionKind(tree, url);
      getData(url, name);
    }
    
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
      $scope.electionKind = kind;
      changeSiteProperties(data, 'Warszawa', kind.url);
      $scope.navTree = getNavTree($scope.tree);
      $rootScope.$broadcast('area::electionTypeChange');
      $scope.electionKindsDropwn = false;
      $scope.showSpinner = false;
    })

  };

  $scope.scrollTo = function(kind) {
    $(kind).velocity("scroll", { axis: "y"});
  };

  $scope.changeArea = function(element) {
    if (!element) {
      return;
    }
    $rootScope.$broadcast('area::areaTypeChange', element.url, element.name);
  };
  
  $scope.showStats = function () {
    var currentArea = $scope.areaLevel3 || $scope.areaLevel2 || $scope.areaLevel1 || $scope.electionKind;
    $rootScope.$broadcast('area::areaTypeChange', currentArea.url, currentArea.name);
    var off = $rootScope.$on('site::changed', function () {
      $scope.scrollTo('#searchbox');
      off();
    });
  }
  
  $scope.resetStats = function () {
    $scope.stats = null;
    $scope.electionKind = null;
    $scope.areaLevel3 = null;
    $scope.areaLevel2 = null;
    $scope.areaLevel1 = null;
  };
  
  $scope.electionNames = {
    "city_council": 'do rady miasta',
    "district": 'do rad dzielnic',
    "president_first_turn": 'na prezydenta miasta (I tura)',
    "president_second_turn": 'na prezydenta miasta (II tura)',
    "voivodeship": 'do sejmiku wojewódzkiego'
  }
  
  
}]);
