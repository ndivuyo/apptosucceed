/*
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: Angular App for Educators pages for the App To Succeed website
*/


//Manage views for subpages from url
Pages.routePages(pageViewApp, Pages.educators);
Pages.routePages(pageViewApp, Pages.educators_hidden);
Pages.redirect(pageViewApp, Pages.educators[0]);//Redirect to page root if not at any subpage


//Subpage data. This executes everytime a page changes
pageViewApp.controller('controller', ['$scope', function($scope) {

	//Subpage information
	$scope.pages = Pages.educators;

	//Manage showing extended side nav menus for page sections and slideshows
	var extendedMenus = ['eight-trends-impacting-teens', 'superior-content'],//Slideshow menus
		mmAssociatedPages = ['map-the-money-maze', 'superior-content', 'major-topics', 'metrics'];//Pages that have side menu for Map The Money Maze hidden pages
	ExtendMenu.showSlideshow(extendedMenus);//(slideshowMenus)
	ExtendMenu.showPages('ul.map-the-money-maze', mmAssociatedPages);//(menu, associatedPages)

	//Highlights the menu link associated with the page or slide
	highlightCurrentPageLink();

	//Highlights the header link
	highlightLink('#educators-header-link span.dropDownTitle');
}]);