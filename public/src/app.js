"use strict";

let app = angular.module("ContactsApp", ["ngRoute", "ngResource"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when("/contacts", {
    controller: "ListController",
    templateUrl: "views/list.html"
  });
  $locationProvider.html5Mode(true);
});

app.run(function($rootScope) {
  $rootScope.message = "Hello AngularJS!";
});