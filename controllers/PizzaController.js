restaurantPricing.controller('PizzaCtrl', function PizzaCtrl($scope, PurchasesFactory) {
  $scope.price = PurchasesFactory.price;
  $scope.PurchasesFactory = PurchasesFactory;

  $scope.pizza = [{ name: cheese, price: 3}, { name: pepperoni, price: 4 }];
  
});
