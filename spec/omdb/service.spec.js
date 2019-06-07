describe('ombd service', function(){
    var movieData ={"Search":[{"Title":"Star Wars"}]}
    it('should return search movie data', function(){
        var omdbApi = {};

        // angular.mock.module({
        //     'omdbApi':{
        //         search: function(query){
        //             return movieData;
        //         }
        //     }
        // });

        angular.mock.module(function($provide){
            $provide.factory('ombdApi', function(){
                return {
                    search: function(query){
                        return movieData;
                    }
                }
            })
        })

        angular.mock.inject(function(_omdbApi_){
            omdbApi = _omdbApi_;
        })

        expect(omdbApi.search('star wars')).toEqual(movieData);
    })
})