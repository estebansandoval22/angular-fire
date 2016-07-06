angular.module('videogames', ['videogames.controllers', 'videogames.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/home.html"
	})
	.when('/games', {
		templateUrl: "views/games.html",
		controller: 'listController as list'
	})
	.when('/game/:id', {
		templateUrl: "views/game.html",
		controller: 'editController as game'
	})
	.when('/new', {
		templateUrl: "views/game.html",
		controller: 'addController as game'
	})
	.otherwise({
		redirectTo: '/'
	});

	var config = {
		apiKey: "AIzaSyDrbWEq-Gm9awC-XxZEMu20rCU3D7mutr0",
		authDomain: "project-5047501402504107690.firebaseapp.com",
		databaseURL: "https://project-5047501402504107690.firebaseio.com",
		storageBucket: "project-5047501402504107690.appspot.com",
	};
	firebase.initializeApp(config);
});

