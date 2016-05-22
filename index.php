<?php
/*
CONTRIBUTORS: Dillon Bastan, 2016.

DESCRIPTION: This is the PHP for the Home landing page for the App To Succeed website
*/

//Relative address for accessing resources
include('config.php');

//Adds html into main content section of the page
$page_content = file_get_contents("html/home.html");

//This is the php template for Pages
include "php/page-template.php";

?>