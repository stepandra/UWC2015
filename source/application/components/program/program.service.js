angular.module('DopomogaApp')

.service('ProgramService', ['$resource', function($resource){
	return $resource('http://www.filltext.com/'+
		'?rows=5&delay=5&id={numberLength|8}&title={business}&about={lorem|30}');
}])