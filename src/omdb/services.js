angular.module('omdb', [])
    .factory('omdbApi', function(){
        var service = {};
        service.search = function(query){
            return {"Search":[{"Title":"Star Wars", "ID":"pp2154"}]}
        }
        service.find = function(id){
            return {"Search":[{"Title":"Star Wars", "ID":"pp2154"}]};
        }
        return service;
    })