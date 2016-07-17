(function() {
'use strict';

    angular
        .module('app')
        .factory('Category', Category);

    Category.$inject = ['$resource'];
    function Category($resource) {
	    return $resource('data/categories.json', {}, {});
    }
})();