<?php
/*
CONTRIBUTORS: Dillon Bastan, 2016.

DESCRIPTION: This is the PHP/HTML for the Search landing page for the App To Succeed website
*/


//Relative address for accessing resources
include('../config.php');

//HTML with main page content
$page_content = file_get_contents("views/search.html");

//This is the php template for Pages
include ROOT_PATH."/php/page-template.php";

?>