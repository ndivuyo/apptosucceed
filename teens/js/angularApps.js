/*
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: Angular App for Teens pages for the App To Succeed website
*/


//Manage views for subpages from url
Pages.routePages(pageViewApp, Pages.teens);
Pages.redirect(pageViewApp, Pages.teens[0]);//Redirect to page root if not at any subpage


//Subpage data
pageViewApp.controller('controller', ['$scope', function($scope) {

	//Subpage information
	$scope.pages = Pages.teens;

	//Manage showing extended side nav menus for page sections and slideshows
	var extendedMenus = ['financial-trends-you-will-face', 'map-the-money-maze-faq'];//Slideshow menus
	ExtendMenu.showSlideshow(extendedMenus);//(slideshowMenus)

	//Highlights the menu link associated with the page or slide
	highlightCurrentPageLink();

	//Highlights the header link
	highlightLink('#teens-header-link span.dropDownTitle');
}]);