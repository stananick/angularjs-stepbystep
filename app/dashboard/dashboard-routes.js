(function() {

  demoApp.config(function($stateProvider) {
    $stateProvider
      .state('default', {
        url:'/',
        templateUrl: '/dashboard/dashboard.html',
        controller: 'DashboardController'
      })
  });

}());
