angular.module('DopomogaApp.navbar', [])
	.directive('navbar', [function () {
		return {
			restrict: 'A',
			controller: NavbarCtrl,
			link: function (scope, iElement, iAttrs) {
				
			}
		};
	}])