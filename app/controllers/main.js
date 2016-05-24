app.controller('MainCtrl', function ($scope) {
  $scope.slices = 8;

  $scope.eatSlices = function () {
    if($scope.slices) {
      $scope.slices--;
    }
  };
});
