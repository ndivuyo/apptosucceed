/*
CONTRIBUTORS: Mingjie Jin, 2016.
DESCRIPTION: Jquery ajax function to query database for image url
*/


$.fn.getImageUrl = function(index) {
	var element = this,
		promise = $.ajax({
			url: WEB_ROOT + '/php/queryImageUrl.php',
			type: 'POST',
			data: {
				ID : index
		},
		success: function(data) {
			element.attr("src", WEB_ROOT + data);
		}
	});
}


/**
 * Created by Brian on 5/10/16.
 **/
var showImage = function(str) {

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","../php/getuser.php?q=" + str, true);
    xmlhttp.send();

};