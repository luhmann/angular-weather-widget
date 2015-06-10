import styles from './layout.css';

(function() {
    'use strict';

    angular
        .module('weatherApp')
        .directive('layout', layoutDirective);

    function layoutDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/directives/layout/layout.html',
            scope: {
            },
            transclude: true,
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = [];

    function Controller() {
        var vm = this;

        activate();

        function activate() {
            vm.styles = styles;
        }
    }
})();
