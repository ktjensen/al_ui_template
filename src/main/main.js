/**
 * Main JavaScript file for requireJS
 *
 * @module RequireJS
 *
 * @requires config/config
 *
 * @author Kyle Jensen <kjensen@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2016
 */

(function (require) {
    "use strict";

    // Load Angular into RequireJS first.
    require.config({
        baseUrl: '/',
        paths: {
            'angular' : 'vendor/angular/angular.min'
        },
        shim: {
            'angular' : {
                deps: [],
                exports: 'angular'
            }
        }
    });

    // Bootstrap the Angular application, using app.js with RequireJS.
    require( ['config/config'], function (config) {
        require.config(config.requireConfiguration);

        require( config.standardRequireModules, function (angular) {
            try {
                angular.bootstrap(document,['app']);
            } catch (e) {
                console.error("Caught an error during bootstrap: ", e.message );
            }
        });
    });

})(require);
