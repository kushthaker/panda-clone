function ApiService($http) {

	this.http = $http;

	//URLs
	this.BASE_URL = 'http://localhost:3000';
	this.DRIBBLE_URL = 'https://api.dribbble.com/v1/shots?';
	this.PH_URL = 'https://api.producthunt.com/v1/posts?';
	this.GENIUS_URL = 'http://api.genius.com/search?q=Drake&';

	//DRIBBLE TOKEN
	this.dribble_access_token = "access_token=00e945e8643beb4a86f77ac5ac5af0989d248a81b0608f4706d78db9febdd49c";

	//PRODUCTHUNT TOKEN
	this.ph_access_token = "access_token=ebae349f8b26bb6a695e0aeda41075952142bb869db7c8a89fa7c48630d46988";

	//NYTimes
	this.genius_token = "access_token=4jiqWRKhn_2I461zuKvR_4cz7AhRCxEzaxJOEeS_GiJCtCcTkQja41EJqyl2xM4b";
}

angular.module('pandaApp').service('api', ApiService);



ApiService.prototype.saveFavorite = function(articleObject) {

	var self = this;

	console.log(articleObject); 

	return self.http.post(self.BASE_URL + '/api/articles', {"article": articleObject} )
	.then(function(response) {
		console.log("article post request successful")
		return response.data;
	})
	.catch(function(response) {
		console.log("article post request unsuccessful")
		return response.data;
	});

};

ApiService.prototype.getFavorites = function() {

	var self = this;

	return self.http.get(self.BASE_URL + '/api/articles.json')
	.then(function(response) {
		console.log("articles get request successful")
		return response.data;
	})
	.catch(function(response) {
		console.log("articles get request unsuccessful")
		return response.data;
	});

};

ApiService.prototype.getDribble = function() {

	var self = this;

	return self.http.get(self.DRIBBLE_URL + self.dribble_access_token)
	.then(function(response) {
		console.log("successful dribble call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful dribble call")
		return response.data;
	}); 
};

ApiService.prototype.getProductHunt = function() {

	var self = this;

	return self.http.get(self.PH_URL + self.ph_access_token)
	.then(function(response) {
		console.log("successful producthunt call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful producthunt call")
		return response.data;
	}); 
};


ApiService.prototype.getGenius = function(){

	var self = this;

	return self.http.get(self.GENIUS_URL + self.genius_token)
	.then(function(response) {
		console.log("successful genius call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful genius call")
		return response.data;
	}); 
}










