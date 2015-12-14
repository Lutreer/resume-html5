/**
 * Created by lutreer.
 */
'use strict';
var app = angular.module('myApp',['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/resume');

	$stateProvider
		.state('resume', {
            url: "/resume",
            template:" my resume",
            controller:'myController'
        });

});