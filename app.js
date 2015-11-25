'use strict';

angular.module('emailsApp', [])
.controller('emailsCtrl', function($scope) {
  $scope.extractEmails = function(str) {
    var arr = str ? str.match(/[A-Z\d._%+\-]+@[A-Z\d.\-]+\.[A-Z]{2,}/gi) : [];
    return arr.reduce(function(obj, email) {
      obj[email] = obj[email] ? obj[email] + 1 : 1;
      return obj;
    }, {});
  }
});
