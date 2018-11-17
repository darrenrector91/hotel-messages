var app = angular.module('MyHotelApp', ['ngRoute']);

// Defining routes to URLs
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MessageController as mc'
    }).when('/:id', {
        templateUrl: '/views/productdetail.html',
        controller: 'DetailsController as details'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
