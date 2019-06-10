angular.module('omdb', [])
    .factory('omdbApi', function($http, $q){
        var service = {};
        var baseUrl = 'http://wwww.omdbapi.com/?v=1&'
        

        service.search = function(query){
            var deferred = $q.defer();
            $http.get(baseUrl + 's=' + encodeURIComponent(query))
                .success(function(data){
                    deferred.resolve(data);
                });
                return deferred.promise;
        }
        service.find = function(id){
            return {"Search":[{"Title":"Star Wars", "ID":"pp2154"}]};
        }
        return service;
    })