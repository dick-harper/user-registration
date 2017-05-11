(function () {
  'use strict';
  var home = app.controller('home', function ($scope) {
    var message = 'from home controller';
    $scope.message = message;
  });
})();
