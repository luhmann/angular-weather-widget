import styles from './weather.css';
var template = require('./weather.html');

(function() {
    'use strict';

    module.exports = angular
        .module('weatherApp')
        .directive('weather', weather);

    function weather() {
        var directive = {
            restrict: 'E',
            templateUrl: template,
            scope: {
                city: '@'
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['services.openweather', 'services.numberFormat'];

    function Controller(openweatherService, numberFormatService) {
        var vm = this;

        activate();

        function activate() {
            vm.styles = styles;
            openweatherService.getTempForCity(vm.city)
                .then(function (data) {
                    return numberFormatService.twoDecimals(data);
                })
                .then(function (data) {
                    vm.temp = data;
                });
        }
    }
})();
