/**
 * Main configuration module for the application.
 *
 * @returns configuration Object
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

define(['angular'], function(angular) {
    "use strict";

    // Initalize the configuration module.
    var config = angular.module('config', []);

    config.standardAngularModules = [
        'ngRoute', 'ngResource', 'LocalStorageModule'
    ];

    config.standardRequireModules = [
        'angular', 'ngRoute', 'app', 'LocalStorageModule'
    ];

    /**
     * TMDB API
     */
    config.apiUrl = '//api.themoviedb.org/';
    config.apiKey = '802cd9bec58e75474a66bfa717fd1106';
    config.apiImg = '//image.tmdb.org/t/p/w500';

    config.requireConfiguration = {
        baseUrl: "/",
        paths: {
            'angular': 'vendor/angular/angular.min',
            'ngAnimate': 'vendor/angular-animate/angular-animate.min',
            'ui.bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls.min',
            'ui.select': 'vendor/angular-ui-select/dist/select',
            'LocalStorageModule': 'vendor/angular-local-storage/dist/angular-local-storage.min',
            'gettext': 'vendor/angular-gettext/dist/angular-gettext.min',
            'angular-mocks': 'vendor/angular-mocks/angular-mocks',
            'ngResource': 'vendor/angular-resource/angular-resource.min',
            'ngRoute': 'vendor/angular-route/angular-route.min',
            'ngSanitize': 'vendor/angular-sanitize/angular-sanitize.min'
        },
        shim: {
            'angular': { deps: [], exports: 'angular' },
            'ngAnimate': {deps: ['angular']},
            'ui.bootstrap': {deps: ['angular']},
            'ui.select': {deps: ['angular']},
            'LocalStorageModule': {deps: ['angular']},
            'gettext': {deps: ['angular']},
            'angular-mocks': {deps: ['angular']},
            'ngResource': {deps: ['angular']},
            'ngRoute': {deps: ['angular']},
            'ngSanitize': {deps: ['angular']}
        }
    };

    return config;
});
