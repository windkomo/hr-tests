var app = angular.module('RunningHeroes', ['ui.bootstrap', 'ngCookies', 'ngSanitize','RunningHeroes.controllers']);

app.config(['$tooltipProvider', function ($tooltipProvider) {
	'use strict';
	$tooltipProvider.setTriggers({
		'mouseenter': 'mouseleave',
		'click': 'click',
		'blur': 'focus',
		'never': 'blur' // <- This ensures the tooltip will go away on blur
	});
}]);

app.run(['$rootScope', '$window', function ($rootScope, $window) {
	'use strict';

	// fix dead link caused by angular
	$('[ng-app]').on('click', 'a:not(.oauth)', function() {
		if ($(this).attr('href') && $(this).attr('target') !== '_blank') {
			window.location.href = $(this).attr('href');
		}
	});

	// prevents double submit
	$(document).one("click", "button[type=submit], a.oauth", function () {
		$(this).click(function () { return false; });
	});
}]);