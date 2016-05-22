/*
CONTRIBUTORS: Mingjie Jin 2016
DESCRIPTION: This is a function to call mobile menu
*/


$(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#side-menu.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
    $('#side-menu.navbar-default').after($('<div id="navbar-height-col"></div>'));  
    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '250px';
    var menuneg = '-100%';
    var slideneg = '-250px';
    $(".sideMenu").on("click", function (e) {
        if($(window).width() >= 990) {
            $('#side-menu').hide();
          } else {
            $('#side-menu').show();
         }
        var selected = $(this).hasClass('slide-active');
        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $('.header').stop().animate({
            left: selected ? '0px' : slidewidth
        });
        // $('body').stop().animate({
        //     left: selected ? '0px' : slidewidth
        // });
        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');
        $('#page-content, .navbar, body, .navbar-header, header, footer').toggleClass('slide-active');
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header, header, footer';
    $(window).on("resize", function () {
        if ($(window).width() >= 990 && $('.navbar-toggle').is(':hidden')) {
          $(selected).removeClass('slide-active');
        } 
        if ($(window).width() >= 990 ) {
          $('#side-nav').hide();
          $('#side-menu').hide();
          // $('body').attr("left", "0px");
        } else {
          $('#side-nav').show();
          $('#side-menu').show();
        }
    });
});