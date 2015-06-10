(function() {
    'use strict';

    module.exports = angular
        .module('weatherApp')
        .factory('services.openweather', openweatherService);

    openweatherService.$inject = ['$http', 'services.temperatureConversion'];

    function openweatherService($http, temperatureConversionService) {
        var config = {
            baseUrl: 'http://api.openweathermap.org/data/2.5/weather?q='
        };

        var service = {
            getTempForCity: getTempForCity
        };

        return service;

        function getTempForCity(city) {
            return $http.get(config.baseUrl + city)
                .then(function (result) {
                    return temperatureConversionService.kelvinToCelsius(result.data.main.temp);
                });
        }
    }
})();
