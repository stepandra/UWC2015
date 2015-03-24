angular.module('DopomogaApp.navbar', [])
	.directive('nav', [function () {
		return {
			restrict: 'E',
			controller: NavbarCtrl,
			link: function (scope, iElement, iAttrs) {
				console.log('navbar init');
			}
		};
	}])