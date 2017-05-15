var loginapp = angular.module('loginapp', []);


loginapp.controller('LoginController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	console.log("Hello from LoginController");
	//destroy session
	$http.get('/sessiondestroy').then(function (response) {
		console.log("session destroyed");
	});

	//insert user details
	$scope.addUser = function () {
		console.log($scope.user);

		$http.post('/usersignup', $scope.user).then(function (response) {
			console.log(response);
			$window.alert("Registration Successful..!!");
			$scope.user = "";
			$window.location.href = "/login.html#signin";
		});
	};

	$scope.authUser = function () {
		console.log($scope.userlogin);

		$http.post('/authuser', $scope.userlogin).then(function (response) {
			console.log("Login " + response.data);
			if (response.data.success == "successful") {
				$window.location.href = "index.html";

			} else {
				$window.alert("Invalid username/password.");
			}
		});
	};
}]);