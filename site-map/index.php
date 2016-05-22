<?php
/*
CONTRIBUTORS: Dillon Bastan, 2016.

DESCRIPTION: This is the PHP for the Site Map landing page for the App To Succeed website
*/


//Relative address for accessing resources
include('../config.php');

//HTML with main page content
$page_content = file_get_contents("views/site-map.html");

//This is the php template for Pages
include "../php/page-template.php";

?>