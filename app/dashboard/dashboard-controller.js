(function() {

  //This array is to inject your parameters
    // It is needed so when your code is minified, your parameters don't get overwritten and then break your app. For example, they can get overwritten as letters instead of the actual names that they need to be called
    // They must be in the same order that they're going to be injected
  var injectParams = ['$scope', '$rootScope', 'ShoesService'];

  function DashboardController($scope, $rootScope, ShoesService) {

    $scope.shoes = ShoesService.getShoes();

    //This is solely to show that rootscope is available everywhere in the app, even if defined in a different controller
    $rootScope.rsTest = 'This is a root scope example';

  };

  DashboardController.$inject = injectParams;

  demoApp.controller('DashboardController', DashboardController);

}());
