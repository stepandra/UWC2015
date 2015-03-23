angular.module('DopomogaApp.programlist', [])
	.directive('programlist', [function () {
		return {
			restrict: 'A',
			controller: programListCtrl
		};
	}])