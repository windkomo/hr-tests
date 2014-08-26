/*jshint loopfunc: true */
/*jshint devel: true */


angular.module('RunningHeroes.controllers', [])
.controller('NavbarCtrl', ['$scope', '$window', function ($scope, $window) {
	'use strict';

	$scope.loggedInUser = $window.loggedInUser;

	if ($window.innerWidth < 768) {
		$scope.isNavbarCollapsed = true;
	} else {
		$scope.isNavbarCollapsed = false;
	}

}])
.controller('LandingCtrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';

	$http.get('/js/faq.json').success(function (data) {
		$scope.faqs = data;
	});

}])
.controller('FooterCtrl', ['$scope', function ($scope) {
	'use strict';
}]);