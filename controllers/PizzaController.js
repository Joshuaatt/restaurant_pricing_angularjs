restaurantPricing.controller('PizzaCtrl', function PizzaCtrl($scope, PurchasesFactory) {

  $scope.pieces = 0;
  $scope.pizzaPrice = []
  $scope.addPiece = function() {
    $scope.pieces++;
  };
  $scope.dropPiece = function() {
    $scope.pieces <= 0 ? $scope.pieces = 0 : $scope.pieces--;
  };

  $scope.totalPizzaPrice = function(pieces) {
    $scope.pizzaPrice.push($scope.restaurantPricing.calculatePrice(pieces));
  };

});
