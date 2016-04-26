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
    'tmdb/partials/movie/MovieController',
    'tmdb/partials/person/PersonController',
    'tmdb/directives/search.js'
], function( angular, config, $resource, $location, TMDBAPIService,
    HomeController, SearchController, MovieController, PersonController,
    tmdbSearch) {
        "use strict";

        var app = angular.module("app", config.standardAngularModules );

        // Configure $locationProvider to forgo HTML5 content.
        app.config(['$locationProvider', function ($locationProvider) { $locationProvider.html5Mode(false); }]);

        app.service('TMDBAPIService', TMDBAPIService);
        app.controller('HomeController', HomeController);
        app.controller('SearchController', SearchController);
        app.controller('MovieController', MovieController);
        app.controller('PersonController', PersonController);
        app.directive('tmdbSearch', tmdbSearch);

        // Configure $routeProvider to serve Angular content.
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/home.html', controller: 'HomeController' } );
            $routeProvider.when( '/movie/:id', { templateUrl: '/tmdb/partials/movie/movie.html', controller: 'MovieController' } );
            $routeProvider.when( '/person/:id', { templateUrl: '/tmdb/partials/person/person.html', controller: 'PersonController' } );
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);

        return app;
    }
);
