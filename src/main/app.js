/**
 * Creates the angular application root.
 *
 * @module app
 *
 * @param angular RequireJS inclusion of AngularJS
 *
 * @returns Angular instance of app
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

define([
    'angular', 'config/config', 'ngRoute', 'ngResource',
    'tmdb/services/TMDBAPIService',
    'tmdb/partials/home/HomeController',
    'tmdb/partials/search/SearchController',
    'tmdb/directives/search.js'
], function( angular, config, $resource, $location, TMDBAPIService,
    HomeController, SearchController,
    tmdbSearch) {
        "use strict";

        var app = angular.module("app", config.standardAngularModules );

        // Configure $locationProvider to forgo HTML5 content.
        app.config(['$locationProvider', function ($locationProvider) { $locationProvider.html5Mode(false); }]);

        app.service('TMDBAPIService', TMDBAPIService);
        app.controller('HomeController', HomeController);
        app.controller('SearchController', SearchController);
        app.directive('tmdbSearch', tmdbSearch);

        // Configure $routeProvider to serve Angular content.
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/home.html', controller: 'HomeController' } );
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);

        return app;
    }
);
