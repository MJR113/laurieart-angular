(function() {
    'use strict';

    angular
    .module('app.layout')
    .controller('Shell', Shell);

    Shell.$inject = [];

    function Shell() {
        var vm = this;

        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;

        activate();

        function activate() {
            hideSplash();
        }

        function hideSplash() {
            // common.$timeout(function() {
                vm.showSplash = false;
            // }, 1000);
        }
    }
})();