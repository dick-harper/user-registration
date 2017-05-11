'use strict';
var app = angular.module('userReg', ['ngRoute']);

(function () {
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../home/home.html',
        controller: 'home'
      });
  });
})();
