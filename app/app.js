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
  'wyborySam2014.http',
  'wyborySam2014.landingPage'
  ])
.constant('DEV_API_PREFIX', 'http://wyreczamy-pkw.herokuapp.com/api/')
.constant('HEROKU_API_PREFIX', 'http://wyreczamy-pkw.herokuapp.com/api/');
