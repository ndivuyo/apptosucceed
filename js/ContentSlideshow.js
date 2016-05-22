/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: This class handles content slideshows
*/


//ContentSlideshow class
var ContentSlideshow = new function() {

	//Method to execute class methods for better readability
	this.manage = function() {
		this.showSlide();
		this.setNavButtons();
	};

	//Display a slide in a slideshow based on url hashtag
	this.showSlide = function() {

		//Set the hash url to the first slide's id if no slide is landed on
		if (window.location.hash.substring(1).indexOf('#') === -1)
			window.location.hash += '#' + $('div.content-slideshow-child').first().attr('id');

		//Toggle visibility of slide or show all of the slides
		if (getHashName() === '#show-all')
			$('div.content-slideshow-child').each( function() {
				$(this).show(200);
			});
		else
			$(getHashName()).toggle(200);
	};


	//Sets the prev and next slide link buttons to the appropriate slides
	this.setNavButtons = function() {
		var prevSlide = $('div.content-slideshow').find(getHashName()).prev().attr('id'),
			nextSlide = $('div.content-slideshow').find(getHashName()).next().attr('id');

		//Wrap around when at first and last children
		if (!prevSlide)
			prevSlide = $('div.content-slideshow-child').last().attr('id');
		if (!nextSlide)
			nextSlide = $('div.content-slideshow-child').first().attr('id');

		$('#prevSlide').attr('href', '#/' + getPageName() + '#' + prevSlide);
		$('#nextSlide').attr('href', '#/' + getPageName() + '#' + nextSlide);


		//Determine if all slides are shown or not
		if (getHashName() == "#show-all") {
			$('#allSlides').attr('href', '#/' + getPageName() + '#' + $('div.content-slideshow-child').first().attr('id'));
			$('#allSlides').html('Show Less');
		} else {
			$('#allSlides').attr('href', '#/' + getPageName() + '#show-all');
			$('#allSlides').html('Show All');
		}
	};


	//Alternative to content slideshow, jump to page section by ID
	this.pageJump = function() {
		//Show all slides because not a slideshow
		$('div.content-slideshow-child').each( function() {
			$(this).show();
		});

		//Scroll to section of page
		$(getHashName()).pageScroll(1000);
	};


	//Alternative to content slideshow, dropdown reveal content
	this.dropdown = function() {
		//Show all slides because not a slideshow
		$('div.content-slideshow-child').each( function() {
			$(this).show();
			$(this).find('div.dropdown-content').hide();
		});

		//Reveal dropdown hidden content
		$(getHashName()).find('div.dropdown-content').show(200);
	};
};