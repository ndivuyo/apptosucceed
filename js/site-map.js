/*
CONTRIBUTORS: Dillon Bastan 2016
DESCRIPTION: JS to render page links for the Site Map page
*/


//Main jQuery
$(document).ready( function() {

	//Render links for pages
	renderPage(Pages.home, Pages.home.title);
	renderSubpages(Pages.aboutUs, "About Us");
	renderSubpages(Pages.howToHelp, "How to Help");
	renderSubpages(Pages.educators, "Educators");
	renderSubpages(Pages.parents, "Parents");
	renderSubpages(Pages.teens, "16-19 Year Olds");
	renderPage(Pages.contact, Pages.contact.title);
	renderPage(Pages.blog, Pages.blog.title);
});


//Render page link
var renderPage = function(page, title) {
	//Link for each main page
	var newUl = document.createElement("ul"),
		newStrong = document.createElement("strong"),
		newA = document.createElement("a");

	$(newA).attr('href', page.url);
	$(newA).html(title);
	$(newStrong).append(newA);
	$('#main-entry').append(newStrong);
};


//Render Page with subpages
var renderSubpages = function(page, title) {
	var newUl = document.createElement("ul");

	//Loop for each link to add for subpages
	for (var i = 0; i < page.length; i++) {
		var newLi = document.createElement("li"),
			newA = document.createElement("a");

		$(newA).attr('href', page[i].url);
		$(newA).html(page[i].title);
		$(newLi).append(newA);
		$(newUl).append(newLi);
	}

	//Render main page link
	renderPage(page[0], title);
	$('#main-entry').append(newUl);
};