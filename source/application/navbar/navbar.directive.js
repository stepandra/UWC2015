angular.module('DopomogaApp.navbar', [])
	.directive('navbar', [function () {
		return {
			restrict: 'A',
			controller: NavbarCtrl,
			template: '{{brand}}',
			link: function (scope, iElement, iAttrs) {
				
			}
		};
	}])