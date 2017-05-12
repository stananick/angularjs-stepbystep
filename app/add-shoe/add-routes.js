(function() {

  demoApp.config(function($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/add-shoe/add.html',
        controller: 'AddController'
      })
  });

}());
