angular.module('DopomogaApp')
.controller('ListCtrl', ['$scope','ProgramService', '$window','$location',
	function ($scope,ProgramService,$window,$location) {
		$scope.loading = true;
		var list = ProgramService.getlist();
		list.then(function(res){
			$scope.loading = false;
			$scope.articles = res.data;
		});	
		
		$window.addEventListener('scroll', function(){
			if ($location.path() == '/dashboard')
				if ($window.scrollY == $window.document.body.scrollHeight-$window.innerHeight){
						var moar = ProgramService.getlist();
						moar.then(function(res){
							angular.forEach(res.data,function(item){
								$scope.articles.push(item);								
							});
						});
				}
		})

	}
])