(function() {

  demoApp.config(function($stateProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/addshoe/add.html',
        controller: 'AddController'
      })
  });

}());
