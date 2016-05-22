/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: AngularJs Apps for the App To Succeed Website
*/



/** App for managing views for pages with subpages. Managed more in angularJS app with page directories **/
var pageViewApp = angular.module("pageViewApp", ['ngRoute', 'ngSanitize']);
/* END pageViewApp */



/** App for Mobile Side Menu **/
var mobileMenuApp = angular.module("mobileMenuApp", ['ngRoute']);

//SubPage information 
mobileMenuApp.controller('mobileMenuController', ['$scope', function($scope) {

	$scope.pages = [
		{
			title: 'Educators',
			subpages: Pages.educators
		},
		{
			title: 'Parents',
			subpages: Pages.parents
		},
		{
			title: 'Teens',
			subpages: Pages.teens
		},
		{
			title: 'About Us',
			subpages: Pages.aboutUs
		},
		{
			title: 'How To Help',
			subpages: Pages.howToHelp
		}
	];
}]);
/* END mobileMenuApp */