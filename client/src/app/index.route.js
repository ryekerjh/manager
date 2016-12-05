export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('dashboard', {
      url: '/dash',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    })
    .state('company', {
      url: '/company',
      templateUrl: 'app/main/company/company.html',
      controller: 'CompanyController',
      controllerAs: 'company'
    })
    .state('job', {
      url: '/job/:id',
      templateUrl: 'app/main/job/job.html',
      controller: 'JobController',
      controllerAs: 'job',
      parent: 'company'
    });

  $urlRouterProvider.otherwise('/');
}
