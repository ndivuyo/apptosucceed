<?php

    $dbhost_name = "localhost";
    $database = "apptosuc_apptosucceed"; // Change your database name
    $username = "apptosuc";          // Your database user id
    $password = "MMhost13!!";          // Your password
    //////// Do not Edit below /////////
    try {
        $conn = new PDO('mysql:host=localhost;dbname='.$database, $username, $password);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }


/*$servername = "66.147.244.109";//"www.apptosucceed.org";
$username = "apptosuc";
$password = "MMhost13!!";
$dbname = "apptosuc_apptosucceed";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo ("no!!");
    die("Connection to database failed: " . $conn->connect_error);
}*/

?>
