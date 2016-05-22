<!-- 
CONTRIBUTORS: Dillon Bastan 2016,

DESCRIPTION: This is the PHP/HTML template for all Sub Pages with sections (views) for the App To Succeed website
-->


<?php

//Relative address for accessing resources
include('../config.php');

//HTML for the main content and side nav menu for different views of the page
ob_start();
include ROOT_PATH."/php/page-views.php";
$page_content = ob_get_clean();

//This is the php template for Pages
include "page-template.php";

?>