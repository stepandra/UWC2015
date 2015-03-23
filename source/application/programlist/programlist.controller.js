/**
* DopomogaApp.programlist Module
*
* Description
*/
var programListCtrl = ['$scope','ArticleService',
function($scope,ArticleService){
	$scope.loading = true;
	ArticleService.query(function(data){
		$scope.loading = false;
		$scope.articles = data;
	});	
}];