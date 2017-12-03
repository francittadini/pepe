'use strict';

import angular from 'angular';

export default angular.module('pepeApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
