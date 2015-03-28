angular.module('DopomogaApp.list', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/dashboard', {
				templateUrl: '/static/templates/list.html',
				controller: 'ListCtrl'
			})
	}])
