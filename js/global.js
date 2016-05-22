/*
CONTRIBUTORS: Dillon Bastan 2016, Mingjie Jin 2016

DESCRIPTION: Global functions and variables for general use
*/


//Main jQuery upon loading of DOM
$(document).ready( function() {
	//Show hide elements based on window size
	windowSizeVisibility();

	//Set backgrond image
	$('body').css('background-image', 'url(' + WEB_ROOT + '/images/background-texture.png)');

	//Scroll to top
	$('#scroll-up').on('click', function() {
		$('#masthead').pageScroll(500);
		return false;
	});
});


//Events when scrolling
$(window).scroll( function() {
	if( $(window).scrollTop() > 1000 )
		$('#scroll-up').removeClass('hidden');
	else
		$('#scroll-up').addClass('hidden');
});


//Events on window resize
$(window).resize( function() {
	//Show hide elements based on window size
	windowSizeVisibility();
});


//Show hide different elements based on window size
var windowSizeVisibility = function() {

	if ( $(window).width() >= 990 ) {
		$('#secondary').removeClass('hidden');	//Side nav menu
		$('#primary').addClass("col-lg-9").addClass("col-sm-9").addClass("col-md-9").addClass("col-xs-9");
	} else {
		$('#secondary').addClass('hidden');
		$('#primary').removeClass("col-lg-9").removeClass("col-sm-9").removeClass("col-md-9").removeClass("col-xs-9");
	}
};


//JQuery function to set the Header Page Title
var setHeaderPageTitle = function(title) {
	$('span.header-page-title').html(title);
};


//Function to highlight link of current page or slide on the side menu
var highlightCurrentPageLink = function() {
	$('ul.page-nav-menu').find('li').each( function() {
		var $currentA = $(this).find('a'),
			currentHref;

		if (getHashName() === null)
			currentHref = window.location.href;
		else
			currentHref = window.location.hash;

		if ($currentA.attr('href') === currentHref)
			$currentA.css('color', '#000');
		else
			$currentA.css('color', '#238967');
	});	
};


//Highlights an element black
var highlightLink = function(element) {
	$(element).css('color', '#000');
};


//Returns link to normal color
var unHighlightLink = function(element) {
	$(element).css('color', 'gray');
};


//Get the hash tag page name between the first and additional hash tags
getPageName = function() {
	var pageName = window.location.hash.substring(2),
		hashIndex = pageName.indexOf('#');

	if (hashIndex !== -1)
		pageName = pageName.substring(0, hashIndex);

	return pageName;
};


//Get the second hashtag name in the url (after the page name hashtag)
getHashName = function() {
	var pageName = window.location.hash.substring(2),
		hashName;

	if (pageName.indexOf('#') !== -1)
		hashName = pageName.substring( pageName.indexOf('#') );
	else
		hashName = null;

	return hashName;
};


//Scroll page to certain ID
$.fn.pageScroll = function (duration) {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, duration);
    });
}