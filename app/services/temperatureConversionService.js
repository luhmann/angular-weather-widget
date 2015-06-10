(function() {
    'use strict';

    module.exports = angular
        .module('weatherApp')
        .factory('services.temperatureConversion', temperatureConversionService);

    temperatureConversionService.$inject = [];

    function temperatureConversionService() {
        var service = {
            kelvinToCelsius: kelvinToCelsius
        };

        return service;

        function kelvinToCelsius(degrees) {
            var temp = parseFloat(degrees) - 273.15;
            return (temp < 0) ? 0 : temp;
        }
    }
})();
