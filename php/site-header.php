<!-- 
CONTRIBUTORS: Dillon Bastan 2016, Mingjie Jin 2016
DESCRIPTION: This is the HTML for the main header of all pages for the App To Succeed website
 -->
 

<header id="masthead">
	<!-- Site Navigation -->
	<div id="header-nav-container">
		<div class="inner-wrap">
			<!-- Left Header: Logo and 3 main pages -->
			<div class="header-left-section col-lg-6 col-sm-12 col-md-6 col-xs-12">
				<div class="header-logo-image-div">
					<a href=<?php echo WEB_ROOT; ?> class="header-logo-image">
						<img src=<?php echo WEB_ROOT."/images/logo-main.png"; ?> alt="App To Succeed Logo" class="header-logo-image"/>
					</a>
				</div>
			</div>
			<!-- .header-left-section -->
            
			<!-- Right Header: Link menu -->
			<div class="header-right-section col-lg-6 col-sm-12 col-md-6 col-xs-12">
				<div class = "header-right-sidebar">
					<div class="appendRight">
						<a href=<?php echo WEB_ROOT."/about-us"; ?> class="btn btn-primary btn-lg topbutton" role="button">About Us</a>
						<a href=<?php echo WEB_ROOT."/how-to-help"; ?> class="btn btn-primary btn-lg topbutton" role="button">How to Help</a>
						<a href=<?php echo WEB_ROOT."/how-to-help/#/donate"; ?> class="btn btn-primary btn-lg topbutton" role="button">Donate</a>
						<a href=<?php echo WEB_ROOT."/search"; ?> class="btn btn-primary btn-lg topbutton" role="button">Search</a>
					</div>
				</div>
				<!-- .header-right-sidebar -->
			</div>
			<!-- .header-right-section -->

			<!-- Drop down Nav Links -->
			<div class="dropDownDiv col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="centerDiv">
					<nav class="main-navigation">
						<div id="educators-header-link" class="dropdown div-line">
							<span class="downButton dropdown-toggle">
								<a href=<?php echo WEB_ROOT."/educators"; ?>><span class="dropDownTitle">Educators</span></a>
							</span>
						</div>
						<div id="parents-header-link" class="dropdown div-line">
							<span class="downButton dropdown-toggle">
								<a href=<?php echo WEB_ROOT."/parents"; ?>><span class="dropDownTitle">Parents</span></a>
							</span>
						</div>
						<div id="teens-header-link" class="dropdown div-line">
							<span class="downButton dropdown-toggle">
								<a href=<?php echo WEB_ROOT."/teens"; ?>><span class="dropDownTitle">16-19 Year Olds</span></a>
							</span>
						</div>
					</nav>
					<!-- .main-navigation -->
				</div>
			</div>

			<!-- Mobile Menu Button -->
            <div class="header-right-simple-menu col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div>
					<button class="btn btn-primary btn-lg sideMenu"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>Menu</button>
				</div>
			</div>
		</div>
	</div>
	<!-- #header-nav-container -->

	<!-- Page Title -->
	<div class="header-page-title col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<!-- <div class="inner-wrap centerTitle">
			
		</div> -->
		<div class="centerHeadDiv">
			<div class="centerHeadInner">
				<span class="header-page-title"></span>
			</div>
		</div>
	</div>
	<!-- .header-page-title -->

</header>