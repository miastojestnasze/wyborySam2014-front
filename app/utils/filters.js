'use strict';
angular.module('wyborySam2014.utils')
.filter('shortenCommittee', [function () {
  return function(name) {
    if (!name) {
      return;
    }
    return name.replace('Komitet Wyborczy Stowarzyszenie', 'KWS')
               .replace('Komitet Wyborczy Wyborców', 'KWW')
               .replace('Koalicyjny Komitet Wyborczy', 'KKW')
               .replace('Komitet Wyborczy', 'KW');
  };
}]);
