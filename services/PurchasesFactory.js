restaurantPricing.factory('PurchasesFactory', function PurchasesFactory() {
  var factory = {};
  factory.finalPrice = [];

  factory.calculatePrice = function(total) {
    // var pizzaTotal = { total: factory.pieces };
    //var iceCreamTotal = { total$scope.cones };
    factory.finalPrice.push(parseInt(total));

  };
  return factory;

});
// + parseInt(iceCreamTotal)
