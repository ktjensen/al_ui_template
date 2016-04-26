/**
 * PersonController is the controller for the Movie Details view
 *
 * @module tmdb.partials.movie.PersonController
 *
 * @requires Angular
 * @requires TMDBAPIService
 * @requires ngRoute
 * @requires config
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

        var PersonController = function ($scope, TMDBAPIService, $routeParams) {
            $scope.personDetails = {};
            $scope.imgPath = config.apiImg;
            $scope.noPosterImage = "https://assets.tmdb.org/assets/f996aa2014d2ffddfda8463c479898a3/images/no-poster-w185.jpg";

            TMDBAPIService.Person().person.person($routeParams.id).then( function (res) {
                $scope.personDetails = res.data;
            });

        };

        PersonController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return PersonController;
    }
);
