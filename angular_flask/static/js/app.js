'use strict';

angular.module('Youpin', ['angularFlaskServices'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: IndexController
		})
		.when('/about', {
			templateUrl: 'static/partials/about.html',
			controller: AboutController
		})
		.when('/post', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.when('/post/:postId', {
			templateUrl: '/static/partials/post-detail.html',
			controller: PostDetailController
		})
		/* Create a "/blog" route that takes the user to the same place as "/post" */
		.when('/blog', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.when('/account', {
			templateUrl: 'static/partials/account.html',
			controller: AccountController
		})
		.when('/history', {
			templateUrl: 'static/partials/history.html',
			controller: HistoryController
		})
		.when('/login', {
			templateUrl: 'static/partials/login.html',
			controller: LoginController
		})
		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
	}])
;

Parse.initialize("dsACIwhIkiSpEV73fTJ90sWvSXtJThbrqRSOtkq7", "isjS7IgcflAdpIWOeoFkhMVRZ8MPqmSBikUTYUNO");