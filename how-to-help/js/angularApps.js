/*
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: Angular App for How to Help pages for the App To Succeed website
*/


//Manage views for subpages from url
Pages.routePages(pageViewApp, Pages.howToHelp);

//Redirect to page root. How to help uniquely has a landing page not included on the side menu
pageViewApp.config( function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "views/how-to-help.html",
		controller: 'controller'
	})
	.otherwise({
		redirectTo: '/',
		controller: 'controller'
	});
});


//Subpage data
pageViewApp.controller('controller', ['$scope', function($scope) {
	//Subpage information
	$scope.pages = Pages.howToHelp;

	//Highlights the menu link associated with the page or slide
	highlightCurrentPageLink();

	//Highlight the footer link
	if (window.location.hash === '#/')
		highlightLink('div.footer-box:nth-child(4) a');
	else
		unHighlightLink('div.footer-box:nth-child(4) a');
}]);