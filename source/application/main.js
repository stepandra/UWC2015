angular.module('DopomogaApp', [
	'ngResource',
	'ngRoute',
	'DopomogaApp.navbar',
	'DopomogaApp.list',
	'DopomogaApp.details'
	])
.run(['$window','$location',function ($window,$location) {
	// 	$window.addEventListener('scroll', function(){
	// 		if ($location.path() == '/dashboard')
	// })
}])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
	$routeProvider
		.otherwise({ 
			redirectTo: '/dashboard' 
		});
	$locationProvider.html5Mode(true);
}])