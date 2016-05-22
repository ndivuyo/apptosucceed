/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: The methods of this class render an extended side navigation menu for pages with further subsections like a slideshow
as well as manage the various extended menus' visibility
*/


//ExtendMenu class
var ExtendMenu = new function() {

	/*
	Method for rendering an extended menu to the side navigation for slideshows
	lisType : whether an ol or ul
	parentList : Parent list where extended menu renders under
	childIndex : the li index in which menu renders under
	sections : an array of names for list element to be added
	*/
	this.slideshow = function(listType, parentList, childIndex, id) {

		//Collects the slides on the current page
		var sections = this.collectSlides();//[0] is id, [1] is title

		//Check if already rendered
		if ( !$('#' + id).length ) {

			var newList = document.createElement(listType);

			//Loop for adding each new menu item
			$(sections).each( function() {
				
				var newItem = document.createElement('li'),
					newLink = document.createElement('a');

				$(newLink).attr('href', '#/' + id + '#' + this[0]);
				$(newLink).html(this[1]);
				$(newItem).append(newLink);
				$(newList).append(newItem);
			});

			//Add id so can show/hide and stylize
			$(newList).attr('id', id);

			//Add class for styling
			$(newList).addClass('extended-menu-list');

			//Hide the menu until shown from showMenu function below
			$(newList).attr('display', 'none');

			//Append new sub menu to parent menu
			$(parentList).children('li').eq(childIndex).append(newList);
		}
	};


	//Returns array of slideshow children for current page
	this.collectSlides = function() {
		var sections = new Array();

		//Add link names to array for menu for each slide
		$('div.content-slideshow-child').each( function() {
			sections.push( [$(this).attr('id'), $(this).attr('title')] );
		});

		return sections;
	};


	/*
	This is a similar function as slideshow but for adding pages to the side menu instead of slides
	lisType : whether an ol or ul
	sections: an array of names for list element to be added
	className: class name to refer to list
	*/
	this.pages = function(listType, sections, className) {

		var container = document.createElement('div'),
			newList = document.createElement(listType);

		//Loop for adding each new menu item
		$(sections).each( function() {
			
			var newItem = document.createElement('li'),
				newLink = document.createElement('a');

			$(newLink).attr('href', this.url);
			$(newLink).html(this.title);
			$(newItem).append(newLink);
			$(newList).append(newItem);
		});

		//Add class so can show/hide and stylize
		$(newList).addClass(className);

		$(container).append(newList);

		return $(container).html();
	};


	/*
	This function manages whether an extended side menu for a slideshow is visible or not.
	menus: the array of possible side menus for the page
	*/
	this.showSlideshow = function(menus) {

		//Show or hide side menus based on their id
		for (var i = 0; i < menus.length; i++) {

			if (getPageName() === menus[i])
				$('#' + menus[i]).show();
			else
				$('#' + menus[i]).hide();
		}
	};


	/*
	This function manages whether an extended side menu for pages is visible or not.
	menu: The side menu element to display
	associatedPages: The array of pages the menu shows for
	*/
	this.showPages = function(menu, associatedPages) {

		var isOpen = false;

		//Check to see if one of the pages associated with the menu is open
		for (var i = 0; i < associatedPages.length; i++) {
			if (getPageName() === associatedPages[i])
				isOpen = true;
		}

		if (isOpen)
			$(menu).show();
		else
			$(menu).hide();
	};
};