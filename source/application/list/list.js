angular.module('DopomogaApp.list', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/templates/list.html',
				controller: 'ListCtrl'
			})
	}])
