/*
CONTRIBUTORS: Dillon Bastan 2016
DESCRIPTION: Manages the email for school credit dialog
*/


$(document).ready(function() {

	//Format dialog for email for school credit
	$("#credit-dialog").dialog({
        modal: true,
        autoOpen: false,
        width: 400,
        height: 450,
        overlay: true,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        overlay: {
            opacity: 0.25,
            background: "black"
        }
    });

    //Open dialog on click
    $("#open-credit-dialog").on("click", function() {
        $("#credit-dialog").dialog("open");
        return false;
    });
});