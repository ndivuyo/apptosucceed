<!-- 
CONTRIBUTORS: Dillon Bastan 2016, Mingjie Jin 2016

DESCRIPTION: This is the PHP/HTML template for all Sub Pages for the App To Succeed website
-->

<!doctype html>

<html lang="en">

	<!-- Essential HEAD tags for all pages -->
	<?php include(ROOT_PATH."/php/head-tags.php"); ?>
	
	<body class="col-lg-12 col-sm-12 col-xs-12 col-md-12">

		<div id="page" class="col-lg-12 col-sm-12 col-xs-12 col-md-12">

			<!-- Main Header -->
			<?php include(ROOT_PATH."/php/site-header.php"); ?>

			<!-- Main Page Section -->
			<section id="main" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="inner-wrap">

					<!-- Main Content: Managed in the page index.php or in page-views.php -->
					<?php echo $page_content ?>

				</div>
				<!-- .inner-wrap -->
			</section>
			<!-- #main -->

		</div>
		<!-- #page -->

		<?php 
		//Footer
		include(ROOT_PATH."/php/site-footer.php");

		//Popout Side Mobile Menu
		echo file_get_contents(ROOT_PATH."/html/mobile-menu.html");
		?>

		<!-- Back to top -->
		<a class="hidden btn btn-primary btn-lg arrow-up" href="#masthead" id="scroll-up">^</a>

	</body>

</html>