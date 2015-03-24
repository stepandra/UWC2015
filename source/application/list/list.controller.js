angular.module('DopomogaApp')
.controller('ListCtrl', ['$scope','ProgramService',
	function ($scope,ProgramService) {
		$scope.loading = true;
		var list = ProgramService.getlist();
		list.then(function(res){
			$scope.loading = false;
			$scope.articles = res.data;
		})	
	}
])