angular.module('DopomogaApp')
.controller('ListCtrl', ['$scope','ProgramService',
	function ($scope,ProgramService) {
		$scope.loading = true;
		ProgramService.query(function(data){
			$scope.loading = false;
			$scope.articles = data;
		});	
	}
])