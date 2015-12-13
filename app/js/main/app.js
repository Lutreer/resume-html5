/**
 * Created by lixiang.
 */
'use strict';
var app = angular.module('ngTubaApp',['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/index');

	$stateProvider
		.state('index',{
			url:'/index',
			controller: 'myController',
			//templateUrl:'/templates/tuba.html'
		});

});