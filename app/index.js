module.exports = angular.module('weatherApp', []);

// this seems pretty stupid
require('./services/temperatureConversionService');
require('./services/openweatherService');
require('./services/numberFormatService');

require('./directives/weather/weather.js');
require('./directives/layout/layout.js');
