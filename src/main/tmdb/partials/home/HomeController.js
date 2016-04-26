/**
 * HomeController is the controller for the main (home) page, which contains popular movies.
 *
 * @module tmdb.partials.home.HomeController
 *
 * @requires angular
 * @requires TMDBAPIService
 *
 * @returns an instance of the controller
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, 2016
 */

define( [ 'angular', 'config/config', 'tmdb/services/TMDBAPIService' ],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var ctrl = function($scope, TMDBAPIService) {
            $scope.imgPath = config.apiImg;
            TMDBAPIService.Discover().discover.movies().then(function (res) {
                $scope.popMovieList = res.data.results;
            });
        };

        ctrl.$inject = ['$scope', 'TMDBAPIService'];

        return ctrl;
    }
);
