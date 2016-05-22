<!-- 
DESCRIPTION: HTML/PHP file for head tags consistent in all pages for the App To Succeed website
 -->

<head>

	<meta charset="utf-8"/>
	<link rel="shortcut icon" href=<?php echo WEB_ROOT."/images/favicon.ico" ?> />

	<!-- Lato font -->
	<link href='https://fonts.googleapis.com/css?family=Lato:400,300' rel='stylesheet' type='text/css'>

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

	<!-- BOOTSTRAP: Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	
	<!-- BOOTSTRAP: Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- jQuery UI -->
	<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />

	<!-- Core AngularJS library -->
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>

	<!-- AngularJS routing library -->
	<script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>

	<!-- AngularJS sanitize -->
	<script src="//code.angularjs.org/1.3.5/angular-sanitize.js"></script>


	<!-- General JS functions and variables -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/global.js" ?>></script>

	<!-- JS class for adding extended side nav menu for the slideshow or hidden pages -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/ExtendMenu.js" ?>></script>

	<!-- JS class for managing slides for a content slideshow -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/ContentSlideshow.js" ?>></script>

	<!-- JS class for pages with subpages -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/Pages.js" ?>></script>

	<!-- JS to handle dropdown nav links for pages with subpages on header nav menu -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/dropdownNavLinks.js" ?>></script>

	<!-- JS for AngularJS apps sitewide -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/angularApps.js" ?>></script>

	<!-- JS for revealing mobile side menu -->
	<script type="text/javascript" src=<?php echo WEB_ROOT."/js/mobile-menu.js" ?>></script>


	<!-- CSS style rules for all pages -->
	<link rel="stylesheet" type="text/css" href=<?php echo WEB_ROOT."/css/global.css" ?>>

	<!-- CSS style rules for the header -->
	<link rel="stylesheet" type="text/css" href=<?php echo WEB_ROOT."/css/site-header.css" ?>>

	<!-- CSS style rules for the footer -->
	<link rel="stylesheet" type="text/css" href=<?php echo WEB_ROOT."/css/site-footer.css" ?>>

	<!-- CSS style rules for the mobile side menu -->
	<link rel="stylesheet" type="text/css" href=<?php echo WEB_ROOT."/css/mobile-menu.css" ?>>

	<!-- CSS style rules for all slide -->
	<link rel="stylesheet" type="text/css" href=<?php echo WEB_ROOT."/css/slide.css" ?>>
</head>