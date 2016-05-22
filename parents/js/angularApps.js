/*
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: Angular App for Parents pages for the App To Succeed website
*/


//Manage views for subpages from url
Pages.routePages(pageViewApp, Pages.parents);
Pages.routePages(pageViewApp, Pages.parents_hidden);
Pages.redirect(pageViewApp, Pages.parents[0]);//Redirect to page root if not at any subpage


//Subpage data
pageViewApp.controller('controller', ['$scope', function($scope) {

	//Subpage information
	$scope.pages = Pages.parents;

	//Manage showing extended side nav menus for page sections and slideshows
	var extendedMenus = ['financial-trends', 'superior-content'],//Slideshow menus
		mmAssociatedPages = ['map-the-money-maze', 'superior-content'];//Pages that have side menu for Map The Money Maze extra pages

	ExtendMenu.showSlideshow(extendedMenus);//(slideshowMenus)
	ExtendMenu.showPages('ul.map-the-money-maze', mmAssociatedPages);//(menu, associatedPages)

	//Highlights the menu link associated with the page or slide
	highlightCurrentPageLink();

	//Highlights the header link
	highlightLink('#parents-header-link span.dropDownTitle');
}]);