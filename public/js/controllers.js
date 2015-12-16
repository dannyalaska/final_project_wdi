(function(angular, _) {
  'use strict';

  angular.module("cardioTest.controllers").controller("intervalCtrl", function($scope) {

    $scope.set = {
      x: [1 ],
      y: [1 ],
    };

    $scope.n = 20;
    $scope.min = 1;
    $scope.max = 10;
    $scope.months = 1;
    $scope.days = 3;
    $scope.minutes = 300;

    $scope.zoneFour = function() {
      $scope.set.x = [];
      $scope.set.y = [];
      _.times($scope.hiit * 2, function(n) {
        $scope.set.x.push(n + 1);
        $scope.set.y.push(_.random($scope.min, $scope.max));
      });
    };

    $scope.zoneThree = function() {
      $scope.max = 7;
      $scope.set.x = [];
      $scope.set.y = [];
      _.times($scope.mid * 1.5, function(n) {
        $scope.set.x.push(n + 1);
        $scope.set.y.push(_.random($scope.min, $scope.max));
      });
    };

    $scope.zoneOne = function() {
      $scope.max = 5;
      $scope.set.x = [];
      $scope.set.y = [];
      var longSlow = $scope.lsd();
      _.times(longSlow, function(n) {
        $scope.set.x.push(n + 1);
        $scope.set.y.push(_.random($scope.min, $scope.max));
      });
    };

    $scope.getPlan = function() {
      var mins = $scope.minutes;
      var days =  $scope.days;
      var months = $scope.months;
      switch (months) {
        case 1:
          $scope.total = Math.floor(mins * 0.7);
          $scope.low =  Math.floor($scope.total * 0.8);
          $scope.mid =  Math.floor($scope.total * 0.12);
          $scope.high = Math.floor($scope.total * 0.08);
          $scope.hiit = Math.floor($scope.high);
          $scope.miit = Math.floor($scope.mid * 0.33);
          $scope.lsd = function() {
            if ($scope.days == 1) {
              return $scope.total;
            } else if ($scope.days == 2) {
              return Math.floor($scope.total * 0.5);
            } else if ($scope.days == 3) {
              return Math.floor($scope.total * 0.4);
            } else if ($scope.days == 4) {
              return Math.floor($scope.total * 0.33);
            } Math.floor($scope.total * 0.25);
          };

          break;
        case 2:
          console.log('8 week plan');
          $scope.total = Math.floor(mins * 0.8);
          $scope.low =  Math.floor($scope.total * 0.8);
          $scope.mid =  Math.floor($scope.total * 0.12);
          $scope.high = Math.floor($scope.total * 0.08);
          $scope.hiit = Math.floor($scope.high);
          $scope.miit = Math.floor($scope.mid * 0.33);
          $scope.lsd = function() {
            if ($scope.days == 1) {
              return $scope.total;
            } else if ($scope.days == 2) {
              return Math.floor($scope.total * 0.5);
            } else if ($scope.days == 3) {
              return Math.floor($scope.total * 0.4);
            } else if ($scope.days == 4) {
              return Math.floor($scope.total * 0.33);
            } Math.floor($scope.total * 0.25);
          };

          break;
        case 3:
          console.log('12 week plan');
          $scope.total = Math.floor(mins * 0.9);
          $scope.low =  Math.floor($scope.total * 0.8);
          $scope.mid =  Math.floor($scope.total * 0.12);
          $scope.high = Math.floor($scope.total * 0.08);
          $scope.hiit = Math.floor($scope.high);
          $scope.miit = Math.floor($scope.mid * 0.33);
          $scope.lsd = function() {
            if ($scope.days == 1) {
              return $scope.total;
            } else if ($scope.days == 2) {
              return Math.floor($scope.total * 0.5);
            } else if ($scope.days == 3) {
              return Math.floor($scope.total * 0.4);
            } else if ($scope.days == 4) {
              return Math.floor($scope.total * 0.33);
            } Math.floor($scope.total * 0.25);
          };

          break;
        default:
          console.log('default');
      }
    };
  });

}(angular, _));
