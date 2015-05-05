angular.module('MyApp')
.controller('HomeCtrl', ['$scope', 'Profile', function($scope, Profile) {

  $scope.users = [];
  Profile.getAll()
  .then(function(response) {
    console.log(response.data);
    $scope.users = response.data;
  });

  
}]);
