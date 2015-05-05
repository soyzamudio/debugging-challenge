angular.module('MyApp')
.controller('UserCtrl', ['$scope', '$state', 'Profile', function($scope, $state, Profile) {

  $scope.user;

  Profile.getOneUser($state.params.user)
  .then(function(response) {
    $scope.user = response.data;

    Profile.getEvents($scope.user.login)
    .then(function(response) {
      $scope.user.events = response.data;
    });

  });

}]);
