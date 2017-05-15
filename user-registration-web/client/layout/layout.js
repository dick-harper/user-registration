/* global angular :true */
'use strict';
var app = angular.module('userReg', ['ngRoute'])
// .directive('umNavigator', function () {
//   return {
//     templateUrl: 'um-navagator.html'
//   };
// })

;

(function () {
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../home/home.html',
        controller: 'home'
      });
  });
})();
