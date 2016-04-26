/**
 * @module tmdb.partials.search.SearchController
 *
 * @requires angular
 * @requires TMDBAPIService
 * @requires config
 *
 * @returns Instance of the Search Controller
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

define( [ 'angular', 'tmdb/services/TMDBAPIService', 'config/config' ],
    function( angular, TMDBAPIService, config ) {
        "use strict";

        var SearchController = function ($scope, TMDBAPIService) {
            $scope.searchQuery = "";
            $scope.queryResults = [];
            $scope.focus = { popup: false, input: false };
            $scope.imgPath = config.apiImg;

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
