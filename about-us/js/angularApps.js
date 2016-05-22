/*
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: Angular App for About Us pages for the App To Succeed website
*/



//Manage views for subpages from url
Pages.routePages(pageViewApp, Pages.aboutUs);
Pages.redirect(pageViewApp, Pages.aboutUs[0]);//Redirect to page root if not at any subpage


//SubPage information 
pageViewApp.controller('controller', ['$scope', function($scope) {

	//Subpage information
	$scope.pages = Pages.aboutUs;

	//Manage showing extended side nav menus for page sections and slideshows
	var extendedMenus = ['supporters'];//Slideshow menus
	ExtendMenu.showSlideshow(extendedMenus);//(slideshowMenus)

	//Highlights the menu link associated with the page or slide
	highlightCurrentPageLink();

	//Highlight the footer links
    switch (getPageName()) {
    	case 'our-mission':
    		highlightLink('div.footer-box:nth-child(2) a');
    		unHighlightLink('div.footer-box:nth-child(3) a');
    		break;
    	case 'privacy-policy':
    		highlightLink('div.footer-box:nth-child(3) a');
    		unHighlightLink('div.footer-box:nth-child(2) a');
    		break;
    	default:
    		unHighlightLink('div.footer-box:nth-child(2) a');
    		unHighlightLink('div.footer-box:nth-child(3) a');
    }
}]);