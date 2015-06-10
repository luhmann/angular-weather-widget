(function() {
    'use strict';

    angular
        .module('weatherApp')
        .factory('services.numberFormat', numberFormatFactory);

    numberFormatFactory.$inject = [];

    function numberFormatFactory() {
        var service = {
            twoDecimals: twoDecimals
        };

        return service;

        function twoDecimals(float) {
            return parseInt(float * 100, 10) / 100;
        }
    }
})();
