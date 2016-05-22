<!-- 
CONTRIBUTORS: Dillon Bastan 2016, Mingjie Jin 2016

DESCRIPTION: This is the HTML/PHP for the subpages with page sections for the App To Succeed website
 -->


<div id="page-view" ng-controller="controller">

<!-- Page Navigation Sidebar -->
	<div id="secondary" class = "col-lg-3 col-sm-3 col-xs-3 col-md-3 div-inline">
		<span class = "secondary-title"><?php echo $page_name; ?></span>
		<hr class="page-side-hr">
		<div class="page-nav-menu">
			<ul class="page-nav-menu">
				<!-- Repeat for each page section, handled in js/controller in corresponding sub pages -->
				<li ng-repeat="page in pages" class="page-nav-menu">
					<a ng-href="{{ page.url }}">{{ page.title }}</a>
					<div ng-bind-html="page.subpages"></div>
					<hr>
				</li>
			</ul>
		</div>
	</div>
	<!-- #secondary -->
	
	<!-- Main Content: Views are managed by the js module within each subpage -->
	<div id="primary" class = "col-lg-9 col-sm-9 col-xs-9 col-md-9 div-inline">
		<article>
			<div id="entry-content" ng-view>
			</div>
		</article>
	</div>
	<!-- #primary -->

</div>
<!-- #app-controller-scope -->


<!-- AngularJs Apps for page views -->
<script type="text/javascript" src="js/angularApps.js"></script>
<script type="text/javascript">
	angular.bootstrap($("#page-view"), ['pageViewApp']);
</script>