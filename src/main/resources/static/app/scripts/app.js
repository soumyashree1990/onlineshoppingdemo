'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
    .module('demoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
                resolve: {
                    products: function ($http) {
                        return $http.get("http://localhost:8080/shoppingcart/products").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .when('/cart', {
                templateUrl: 'app/views/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'cart',
                resolve: {
                    shoppingCart: function ($http) { //  data assign to shoppingCart list
                        return $http.get("http://localhost:8080/onlineshoppingdemo/shoppingCart").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .when('/history', {
                templateUrl: 'app/views/history.html',
                controller: 'HistoryCtrl',
                controllerAs: 'history',
                resolve: {
                    history: function ($http) {
                        return $http.get("http://localhost:8080/onlineshoppingdemo/history").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })
            .when('/about', {
                templateUrl: 'app/views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
                resolve: {
                    history: function ($http) {
                        return $http.get("http://localhost:8080/onlineshoppingdemo/about").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })
            .when('/login', {
                templateUrl: 'app/views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'Login',
                resolve: {
                    history: function ($http) {
                        return $http.get("http://localhost:8080/onlineshoppingdemo/login").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .when('/account', {
                templateUrl: 'app/views/account.html',
                controller: 'accountCtrl',
                controllerAs: 'account',
                resolve: {
                    history: function ($http) {
                        return $http.get("http://localhost:8080/onlineshoppingdemo/account").then(function (response) {
                            return response.data;
                        })
                    }
                }
            })

            .otherwise({
                redirectTo: '/'
            });
    });
