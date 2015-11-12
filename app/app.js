'use strict';
angular.module('wyborySam2014', [
  'nvd3',
  'smart-table',
  'ui.router',
  'ui.bootstrap',
  'wyborySam2014.area',
  'wyborySam2014.charts',
  'wyborySam2014.tables',
  'wyborySam2014.utils',
  'wyborySam2014.http'
  ])
.constant('DEV_API_PREFIX', 'http://localhost:8081/api/');