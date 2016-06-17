var app = angular.module("myModule", [])
					.controller("myController", function ($scope) {
						$scope.message = "Hello world";

						var employee = {
							firstName : "John",
							lastName : "Doe",
							gender : "male"
						};

						$scope.employee = employee;
					});
					