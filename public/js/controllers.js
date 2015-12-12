(function(angular, _) {
  'use strict';

  angular.module("cardioTest.controllers").controller("intervalCtrl", function($scope) {
    this.greeting = 'NEW GREETING!';

    $scope.set = {
      x: [ ],
      y: [ ],
    };

    $scope.n = 20;

    $scope.min = 1;

    $scope.max = 10;

    $scope.randomize = function() {
      $scope.set.x = [];
      $scope.set.y = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 2, 2, 2, 2, 2];
      _.times($scope.n, function(n) {
        $scope.set.x.push(n + 1);
        $scope.set.y.push(_.random($scope.min, $scope.max));
      });
    };
  });

}(angular, _));
