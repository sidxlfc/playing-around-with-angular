var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope)
	{
		var employee = {
			firstName: "John",
			lastName: "Doe",
			gender: "Male"  
		};

		$scope.emp = employee;
	});