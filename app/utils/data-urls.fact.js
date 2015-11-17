'use strict';
angular.module('wyborySam2014.utils')
.factory('urls', ['$state', function($state){
  var self = {};
  
  self.code = function(url) {
    return url.replace(/\//g, '.');
  };
  
  self.decode = function(url) {
    return url.replace(/\./g, '/');
  };

  self.getSiteName = function(url, splitUrlParam) {
    if(url) {
      var urlsArr = url.split(splitUrlParam || '/');
      var dataType = urlsArr[urlsArr.length - 2].split('-');  
    }

    if(url && dataType[0] === 'circle') {
      return 'Okręg nr ' + dataType[1];
    }
    else if(url && dataType[0] === 'circuit') {
      return 'Obwód nr ' +  dataType[1];
    }
    else if(url && dataType[0] === 'district') {
      return dataType[1];
    }
    else {
      return 'Warszawa';
    }
  };

  self.getElectionKind = function(tree, url, splitUrlParam) {
    if(!url || !tree) {
      return { //default data
        name: 'Wybierz',
        type: '',
        url: ''
      }
    }

    var type = url.split(splitUrlParam || '/')[1];
    var node = tree.filter(function(obj){
      return obj.type === type;
    })[0];
    return {
      name: node.name,
      type: node.type,
      url: node.url
    };
  }

  self.changeDataUrl = function(url, StateParamDataUrl, siteType) {
    $state.go('stats-app', { dataUrl: self.code(url) }, { notify: false });
  }

  return self;
}])