(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('common', common);

    common.$inject = ['$location', '$timeout'];

    function common($location, $timeout) {
        var service = {
            isNumber: isNumber
        };

        return service;

        function isNumber(val) {
            return (/^[-]?\d+$/).test(val);
        }
    }
})();