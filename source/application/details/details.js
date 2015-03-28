angular.module('DopomogaApp.details', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/dashboard/p/:id', {
				templateUrl: '/static/templates/details.html',
				controller: DetailsCtrl,
				resolve: {
					details : ['ProgramService',function(ProgramService){
						return ProgramService.getdetails();
					}]
				}
			})
	}])
