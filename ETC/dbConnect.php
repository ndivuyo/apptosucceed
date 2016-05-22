<?php

    $servername = "66.147.244.109";//"www.apptosucceed.org";
    $username = "apptosuc";
    $password = "MMhost13!!";
    $dbname = "apptosuc_apptosucceed";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        echo ("no!!");
        die("Connection to database failed: " . $conn->connect_error);
    }
    
?>
