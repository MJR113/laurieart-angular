(function() {
'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Category'];
    function HomeController(Category) {
        var vm = this;
        vm.categories = [];

        activate();

        ////////////////

        function activate() {
            vm.categories = Category.query();
        }
    }
})();