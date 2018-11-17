app.service('RetailService', ['$http', function ($http) {
    console.log('Service loaded!');

    var self = this;

    self.guest = {
        list: []
    };

    self.company = {
        list: []
    };

    // GET - service call to Redsky API
    self.getGuest = function () {

        $http({
            method: 'GET',
            url: '/hotel/guest'
        }).then(function (response) {
            // console.log('response', response);
            self.guest.list = response;
            console.log(response);

        })
    }// End JSON

    // GET - service call to Redsky API
    self.getGuest = function () {

        $http({
            method: 'GET',
            url: '/hotel/company'
        }).then(function (response) {
            s
            // console.log('response', response);
            self.company.list = response;
            console.log(response);

        })
    }// End JSON
}]);
