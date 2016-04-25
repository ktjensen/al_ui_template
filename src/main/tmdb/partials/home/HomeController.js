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

define( [ 'angular' ],
    function( angular ) {
        "use strict";

        var ctrl = function($scope) {
            $scope.data = "Something scope-y.";
        };

        ctrl.$inject = ['$scope'];

        return ctrl;
    }
);
