'use strict';
angular.module('wyborySam2014.utils')
.factory('urls', ['$location', function($location){
  var self = {};
  
  self.code = function(url) {
    return url.replace(/\//g, '.');
  };
  
  self.decode = function(url) {
    return url.replace(/\./g, '/');
  };

  self.getSiteName = function(url, splitUrlParam) {
    var urlsArr = url.split(splitUrlParam || '/');
    var dataType = urlsArr[urlsArr.length - 2].split('-');

    if(dataType[0] === 'circle') {
      return 'Okręg nr ' + dataType[1];
    }
    else if(dataType[0] === 'circuit') {
      return 'Obwód nr ' +  dataType[1];
    }
    else if(dataType[0] === 'district') {
      return dataType[1];
    }
    else {
      return 'Warszawa';
    }
  };

  self.getElectionKind = function(tree, url, splitUrlParam) {
    if(!url || !tree) {
      return;
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

  self.changeDataUrl = function(url, siteType) {
    // console.log($location.path());
    var dataUrl = $location.path().split('/');
    if(_.last(dataUrl).indexOf('.') > -1) {
      dataUrl.pop();
    }
    dataUrl.push(self.code(url));
    $location.path(dataUrl.join('/'));
  }

  return self;
}])