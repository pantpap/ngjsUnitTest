describe('ombd service', function(){
    var movieData = {"Search":[{"Title":"Star Wars", "ID":"pp2154"}]};
    var movieDatabyId = {"Search":[{"Title":"Star Wars", "ID":"pp2154"}]};
    var omdbApi = {};

    beforeEach(angular.mock.module('omdb'));

    beforeEach(angular.mock.inject(function(_omdbApi_){
        omdbApi = _omdbApi_;
    }));
    
    it('should return search movie data', function(){
        var response;
        omdbApi.search('star wars').then(function(data){
            response = data;
        })

        expect(response).toEqual(movieData);
    });

    it('should return search movie data by id', function(){
        expect(omdbApi.find('pp2154')).toEqual(movieData);
    });
})