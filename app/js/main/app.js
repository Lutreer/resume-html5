/**
 * Created by lutreer.
 */
'use strict';
var app = angular.module('myApp',['ui.router', 'ngResource', 'myController']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/resume');

	$stateProvider
		.state('resume', {
            url: "/resume",
            template:"",
            controller:'myController'
        });

});