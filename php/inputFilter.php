<?php

/*
CONTRIBUTORS: Dillon Bastan 2016.
DESCRIPTION: This is a PHP function for input validation.
*/


//Validating header input
function input_filter($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);

	return $data;
}

?>