<?php
/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: Configure globals for App To Succeed Website
*/


//Root path for use with absolute paths for PHP files
define('ROOT_PATH', dirname(__FILE__));

//Extracting username for WEB_ROOT path for testing on localhost
$username = substr(ROOT_PATH, strpos(ROOT_PATH, "Users") + 6, strpos(ROOT_PATH, "Sites") - 8);

//Root path for use with absolute paths for urls **MUST CHANGE IF NOT VIRTUAL HOST**
define('WEB_ROOT', "http://localhost/~$username/new-website");

?>


<!-- Creating javascript ROOT_PATH constant -->
<script type="text/javascript">
	const WEB_ROOT = "<?php echo WEB_ROOT; ?>";
</script>