describe('MainCtrl', function () {
  var $rootScope,
    $scope,
    controller;

  beforeEach(function () {
    module('Jasmine');

    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('MainCtrl', {$scope: $scope});
    });
  });

  describe('Initialization', function () {
    it('should instantiate slices to 8', function () {
      expect($scope.slices).toEqual(8);
    });
  })
});
