angular.module('DopomogaApp')

.service('ProgramService', ['$http','$q', function($http,$q){
	return {
		getlist: function(){
			var def = $q.defer();
			var res = {};
			$http({
				url: 'http://www.filltext.com/',
				params: {
					id: '{numberLength|8}',
					title: '{business}',
					about: '{lorem|30}',
					// delay: '2',
					rows: '8'
				},
				method: 'GET'
			}).success(function(data, status) {
          res.status = status;
          res.data = data;
          def.resolve(res);
        }).
        error(function(data, status) {
          res.data = data || "Request failed";
          res.status = status;
          def.reject(res);
      });
			return def.promise
		},
		getdetails: function(){
			var def = $q.defer();
			var res = {};
			$http({
				url: 'http://www.filltext.com/',
				params: {
					id: '{numberLength|8}',
					title: '{business}',
					about: '{lorem|230}',
					// delay: '2',
					rows: '1',
					address :'{addressObject}',
					company :'{business}',
					phone		:'{phone|format}'
				},
				method: 'GET'
			}).success(function(data, status) {
          res.status = status;
          res.data = data[0];
          def.resolve(res);
        }).
        error(function(data, status) {
          res.data = data || "Request failed";
          res.status = status;
          def.reject(res);
      });
      return def.promise			
		}
	}
}])