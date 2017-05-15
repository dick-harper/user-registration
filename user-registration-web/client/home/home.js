/* global app :true */
(function () {
  'use strict';
  var home = app.controller('home', function ($scope) {
    var message = 'Welcome to User Manager!';
    $scope.message = message;
  });
})();
