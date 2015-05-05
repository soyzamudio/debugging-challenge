angular.module('MyApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', { url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('user', { url: '/{user}', templateUrl: '/views/user/user.html', controller: 'UserCtrl'})

}]);
