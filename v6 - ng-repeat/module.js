var app = angular.module("myModule", [])
				.controller("myController", function($scope) {
					var employees = [

						{
							firstName : "John", 
							lastName : "Doe", 
							gender : "Male"
						}, 

						{
							firstName : "Sara", 
							lastName : "Paul", 
							gender : "Female"
						}, 

						{
							firstName : "Sid", 
							lastName : "Shah", 
							gender : "Male"
						}, 

						{
							firstName : "A", 
							lastName : "B", 
							gender : "Male"
						}, 
					];

					$scope.employees = employees;

					var countries = [
						{
							name : "UK",
							cities : [
								{name: "Liverpool"},
								{name: "London"},
								{name: "Edinburgh"}
							]	
						},
						{
							name : "USA",
							cities : [
								{name: "Dallas"},
								{name: "New York"},
								{name: "San Francisco"}
							]	
						},
						{
							name : "India",
							cities : [
								{name: "Mumbai"},
								{name: "Mumbai"},
								{name: "Bangalore"}
							]	
						}
					];

					$scope.countries = countries;

				});