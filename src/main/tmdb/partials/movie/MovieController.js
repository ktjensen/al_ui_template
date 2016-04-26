/**
 * MovieController is the controller for the Movie Details view
 *
 * @module tmdb.partials.movie.MovieController
 *
 * @requires Angular
 * @requires TMDBAPIService
 *
 * @returns instance of the controller
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

define( [ 'angular', 'tmdb/services/TMDBAPIService', 'ngRoute', 'config/config' ],
    function( angular, TMDBAPIService, $routeParams, config ) {
        "use strict";

        var MovieController = function ($scope, TMDBAPIService, $routeParams) {
            $scope.movieDetails = {};
            $scope.imgPath = config.apiImg;
            $scope.noProfileImage = "http://assets.tmdb.org/assets/91c0541cff7ec4947514edd379f0ffd1/images/no-profile-w185.jpg";

            TMDBAPIService.Movie().movie.movie($routeParams.id).then( function (res) {
                $scope.movieDetails = res.data;
            });
        };

        MovieController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return MovieController;
    }
);
