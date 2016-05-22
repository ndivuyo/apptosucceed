<?php
/*
	Mingjie Jin 2016
	Query image path from database
*/
function find_image() 
{
    include('dbConnect.php');

    if (isset($_POST["ID"])) {

        $image = $_POST["ID"];

        // QUERY for the image
        $sql = "SELECT link FROM images WHERE idimages = '$image';";

        $query = <<EOD
        $sql
        EOD;

        $stmt = $conn->prepare($query);
        $stmt->execute();

        // Check if data exists
        if ($result->num_rows > 0) {
            // Data of each match
            while ($row = $result->fetch_assoc()) {
                echo $row['link'];
            }
        } else {
            //Give a tiny, blank image
            echo("data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D");
        }

        // Close connection
        $conn->close();
    }
}

?>