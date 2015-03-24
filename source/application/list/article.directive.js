angular.module('DopomogaApp')
	.directive('article', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				iElement.bind('click',function(){
					iElement.addClass('active').append(' <i class="fa fa-refresh fa-spin"></i>')
				})
			}
		};
	}])