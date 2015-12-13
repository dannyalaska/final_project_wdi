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

    // $scope.lsd = switch ($scope.total) {
    //   case 1:
    //     return $scope.lsd = $scope.total;
    //     console.log($scope.lsd);
    //     break;
    //   case 2:
    //     return $scope.lsd = Math.floor($scope.total * 0.5);
    //     break;
    //   case 3:
    //     return $scope.lsd = Math.floor($scope.total * 0.4);
    //     break;
    //   case 4:
    //     return $scope.lsd = Math.floor($scope.total * 0.33);
    //     break;
    //   case 5:
    //     return $scope.lsd = Math.floor($scope.total * 0.25);
    //     break;
    // };
    //
    // function getLsd(days) {
    //   var options = {
    //     1: function() {
    //       return $scope.lsd = $scope.total;
    //       return $scope.lsd;
    //     },
    //
    //     2: function() {
    //       return $scope.lsd = Math.floor($scope.total * 0.5);
    //     },
    //
    //     3: function() {
    //       return $scope.lsd = Math.floor($scope.total * 0.4);
    //     },
    //
    //     4: function() {
    //       return $scope.lsd = Math.floor($scope.total * 0.33);
    //     },
    //
    //     5: function() {
    //       return $scope.lsd = Math.floor($scope.total * 0.25);
    //     },
    //   };
    // };

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
          break;
        case 2:
          console.log('8 week plan');
          $scope.total = Math.floor(mins * 0.8);
          $scope.low =  Math.floor($scope.total * 0.8);
          $scope.mid =  Math.floor($scope.total * 0.12);
          $scope.high = Math.floor($scope.total * 0.08);
          break;
        case 3:
          console.log('12 week plan');
          $scope.total = Math.floor(mins * 0.9);
          $scope.low =  Math.floor($scope.total * 0.8);
          $scope.mid =  Math.floor($scope.total * 0.12);
          $scope.high = Math.floor($scope.total * 0.08);
          break;
        default:
          console.log('default');
      }
    };

    // function getLsd(days) {
    //       var options = {
    //         1: function() {
    //           return $scope.lsd = $scope.total;
    //           return $scope.lsd;
    //         },
    //
    //         2: function() {
    //           return $scope.lsd = Math.floor($scope.total * 0.5);
    //         },
    //
    //         3: function() {
    //           return $scope.lsd = Math.floor($scope.total * 0.4);
    //         },
    //
    //         4: function() {
    //           return $scope.lsd = Math.floor($scope.total * 0.33);
    //         },
    //
    //         5: function() {
    //           return $scope.lsd = Math.floor($scope.total * 0.25);
    //         },
    //       };
    //     };
    //
    // var days = $scope.days;
    // getLsd(days);

  });

}(angular, _));
