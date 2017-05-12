(function() {

  //This array is to inject your parameters
    // It is needed so when your code is minified, your parameters don't get overwritten and then break your app. For example, they can get overwritten as letters instead of the actual names that they need to be called
    // They must be in the same order that they're going to be injected
  var injectParams = ['$scope', 'ShoesService'];

  function DashboardController($scope, ShoesService) {

    $scope.shoes = ShoesService.getShoes();

  };

  DashboardController.$inject = injectParams;

  demoApp.controller('DashboardController', DashboardController);

}());
