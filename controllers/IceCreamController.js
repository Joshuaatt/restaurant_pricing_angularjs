restaurantPricing.controller('IceCreamCtrl', function IceCreamCtrl($scope, PurchasesFactory) {
  $scope.cones = 0;
  $scope.addCone = function() {
    $scope.cones++;
  };
  $scope.dropCone = function() {
    $scope.cones <= 0 ? $scope.cones = 0 : $scope.cones--;
  };
});
