'use strict';

angular.module('MyApp')
.factory('Profile', ['$http', function($http) {

  function Profile() {}

  Profile.getAll = function() {
    return $http.get('https://api.github.com/orgs/coding-house-apr2015/members');
  }

  Profile.getOneUser = function(user) {
    return $http.get('https://api.github.com/users/' + user)
  }

  Profile.getEvents = function(user) {
    return $http.get('https://api.github.com/users/' + user + '/events')
  }

  return Profile;

}])
