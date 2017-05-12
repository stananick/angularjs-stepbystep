(function() {

  var injectParams = ['$scope', 'ShoesService'];

  function AddController($scope, ShoesService) {

    $scope.shoes = ShoesService.getShoes();

    $scope.addShoe = function() {
      $scope.shoes.push({ name: $scope.newshoe.name, date: $scope.newshoe.date, brand: $scope.newshoe.brand});
    }

  };

  AddController.$inject = injectParams;

  demoApp.controller('AddController', AddController);

}());
