<?php
    $dbhost_name = "localhost";
    $database = "apptosuc_apptosucceed"; // Change your database nae
    $username = "root";          // Your database user id
    $password = "password";          // Your password
    //////// Do not Edit below /////////
    try {
        $conn = new PDO('mysql:host=localhost;dbname='.$database, $username, $password);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
    ?>