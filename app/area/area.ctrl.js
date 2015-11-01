angular.module('wyborySam2014.area')
.controller('wyborySam2014.area.ctrl', ['$scope', function($scope){
  $scope.menuIsVisible = function() {
    return $scope.openMenu === false || $scope.openMenu === true;
  };
  $scope.menuIsOff = function() {
    return $scope.openMenu === false;
  };

  $scope.electionKind = 'Wybory do Rady Miasta';
  
  $scope.dropdownIsOff = function() {
    return $scope.electionKindsDropwn === false;
  };

  $scope.dropdownIsVisible = function() {
    return $scope.electionKindsDropwn === false || $scope.electionKindsDropwn === true;
  };

  $scope.changeElectionKind = function(kind) {
    $scope.electionKind = kind.name;
    $scope.electionKindsDropwn = false;
  };

  
  
  $scope.districts = [
    {name: 'Srodmiescie', id: 0},
    {name: 'Ochota', id: 0},
    {name: 'Wola', id: 0},
    {name: 'Zoliborz', id: 0},
    {name: 'Mokotow', id: 0},
    {name: 'Ursus', id: 0},
    {name: 'Ursynow', id: 0},
    {name: 'Wilanow', id: 0},
    {name: 'Bielany', id: 0},
  ];

  $scope.electionKinds = [
    {name: 'Wybory do Rady Miasta', id:0},
    {name: 'Wybory do Rady Dzielnicy', id:0},
    {name: 'Wybory Prezydenta Miasta', id:0},
    {name: 'Wybory Do Sejmiku', id:0}
  ];

  
  
}]);