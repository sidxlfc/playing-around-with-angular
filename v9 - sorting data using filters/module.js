var app = angular.module("myModule", [])
				.controller("myController", function($scope) {
					
					var employees = [ 
						{name: "John", dateOfBirth : new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
						{name: "Sid", dateOfBirth : new Date("March 3, 1992"), gender: "Male", salary: 155000.895},
						{name: "Sara", dateOfBirth : new Date("December 23, 1980"), gender: "Female", salary: 55000.788},
						{name: "Pam", dateOfBirth : new Date("October 23, 1980"), gender: "Female", salary: 65000.788},
						{name: "John", dateOfBirth : new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
					]; 

					$scope.employees = employees;

					$scope.sortColumn = "name";

				});