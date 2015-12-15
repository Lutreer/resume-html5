'use strict';
var myService=angular.module('myService', ['ngResource']);
myService.factory('myFactory',function($resource){
	return $resource('/', {}, {
		localData: {
			url: 'http://172.28.5.71:29218/LocalData',
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			}
		}
	});
});