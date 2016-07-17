(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {
            
            $routeProvider
                .when('/', {
                    redirectTo: '/home'
                })
                .when('/home', {
                    templateUrl: '/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/categories', {
                    templateUrl: '/category/categories.html',
                    controller: 'CategoriesController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();