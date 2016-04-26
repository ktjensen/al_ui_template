/**
 * @module tmdb.partials.search.SearchController
 *
 * @requires angular
 * @requires TMDBAPIService
 *
 * @returns Instance of the Search Controller
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

define( ['angular','tmdb/services/TMDBAPIService'],
    function( angular, TMDBAPIService ) {
        "use strict";

        var SearchController = function ($scope, TMDBAPIService) {
            $scope.searchQuery = "";
            $scope.queryResults = [];
            $scope.focus = { popup: false, input: false };

            $scope.search = function () {
                if ($scope.searchQuery) {
                    TMDBAPIService.Search().search.multi($scope.searchQuery).then( function (res) {
                        $scope.queryResults = res.data.results;
                    });
                } else {
                    $scope.queryResults = [];
                }
            };
        };

        SearchController.$inject = [ '$scope', 'TMDBAPIService' ];

        return SearchController;
    }
);
