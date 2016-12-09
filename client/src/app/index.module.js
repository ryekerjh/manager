/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { CompanyController } from './main/company/company.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('client', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr', 'ngMaterial', 'ngMdIcons'])
  // .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('config', {
    apiUrl: 'http://localhost:3002/api/'
  })
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .controller('MainController', MainController)
  .controller('DashboardController', DashboardController)
  .controller('CompanyController', CompanyController)
  .directive('navbar', NavbarDirective);
