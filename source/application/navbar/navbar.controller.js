var NavbarCtrl = ['$scope','$location', function ($scope,$location) {
	$scope.path = function(link){
		return $location.path() == link;
	}
}];