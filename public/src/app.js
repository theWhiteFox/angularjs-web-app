"use strict";

let app = angular.module("ContactsApp", []);

app.run(function($rootScope) {
  $rootScope.message = "Hello AngularJS!";
});
