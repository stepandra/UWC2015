angular.module('DopomogaApp.details', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/details/:id', {
				templateUrl: '/templates/details.html',
				controller: DetailsCtrl
			})
	}])