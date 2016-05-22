/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: This script adds the dropdown subpage links for page links in the header nav menu
*/


//Main JQuery
$(document).ready( function() {

	//Add dropdown menu
	$('#educators-header-link').addLinks(Pages.educators);
	$('#parents-header-link').addLinks(Pages.parents);
	$('#teens-header-link').addLinks(Pages.teens);


	//Show dropdown menu based on window size
	$(window).resize( function() {
		manageDropdownLinks();
	});
});


//Manage dropdown links visibility based on window size
var manageDropdownLinks = function() {

	if ( $(window).width() >= 990 ) {
		$('.main-navigation ul').removeClass('hidden');
	} else {
		$('.main-navigation ul').addClass('hidden');
	}
};


//Function to add HTML elements for each subpage link
$.fn.addLinks = function(page) {

	var element = $(this).find('span.downbutton'),
		newUl = document.createElement('ul'),
		topHr = document.createElement('hr');

	$(newUl).addClass('dropdown-menu');
	$(newUl).addClass('dropdown-menu');
	$(newUl).append(topHr);

	$(page).each( function() {

		var newLi = document.createElement('li'),
			newA = document.createElement('a'),
			newHr = document.createElement('hr');

		$(newA).attr('href', this.url);
		$(newA).html(this.title);

		$(newLi).append(newA);
		$(newUl).append(newLi, newHr);
	});

	$(element).append(newUl);
};