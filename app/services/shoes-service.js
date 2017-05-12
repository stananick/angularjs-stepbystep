(function() {

  demoApp.factory('ShoesService', function() {
    var factory = {};
    var shoes = [
      {
        name: 'Retro 15',
        date: 'May 12, 2017',
        brand: 'Jordan'
      },
      {
        name: 'Retro 16',
        date: 'May 12, 2017',
        brand: 'Jordan'
      },
      {
        name: 'Retro 17',
        date: 'May 12, 2017',
        brand: 'Jordan'
      },
      {
        name: 'Retro 18',
        date: 'May 12, 2017',
        brand: 'Jordan'
      }
    ];

    factory.getShoes = function() {
      return shoes;
    };

    return factory;
  });

}());
