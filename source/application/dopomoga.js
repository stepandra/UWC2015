/**
*  Module
*
* Description
*/

angular.module('DopomogaApp', [
	'ngResource',
	'DopomogaApp.navbar',
	'DopomogaApp.programlist'
	])

.service('ArticleService', ['$resource', function($resource){
	return $resource('http://www.filltext.com/?rows=5&delay=5&title={business}&about={lorem|30}',
		{}, 
		{});
}])
