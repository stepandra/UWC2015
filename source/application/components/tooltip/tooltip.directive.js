angular.module('DopomogaApp')
.directive('tooltip', [function () {
	return {
		restrict: 'A',
		scope: {tip:'@tooltip'},
		link: function (scope, elem, attr) {
			var show = false;
			var tooltip;
			elem.bind('mouseover',function(){
				if (show) return;
				tooltip = angular.element(document.createElement('span')).addClass('tooltip');
				tooltip.text(scope.tip);
				elem.append(tooltip);
				show = true;
				console.log('over',scope.tip);
			});
			elem.bind('mouseleave',function(){
				tooltip.remove();
				show = false;
				console.log('leave',scope.tip);
			});
		}
	};
}])