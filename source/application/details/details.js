angular.module('DopomogaApp.details', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/details/:id', {
				templateUrl: 'templates/details.html',
				controller: DetailsCtrl,
				resolve: {
					details : ['ProgramService',function(ProgramService){
						return ProgramService.getdetails();
					}]
				}
			})
	}])
