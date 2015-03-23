angular.module('DopomogaApp', [
	'ngResource',
	'ngRoute',
	'DopomogaApp.navbar',
	'DopomogaApp.list',
	'DopomogaApp.details'
	])

.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
	$routeProvider
		.otherwise({ 
			redirectTo: '/' 
		});
	$locationProvider.html5Mode(true);
}])