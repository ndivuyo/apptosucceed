<?php
/*
	Mingjie Jin, 2016. 
	Query image path from database
*/
	if(isset($_POST["ID"])){

		//Connect to Database
		include('dbConnect.php');

		// QUERY for the image
		$sql = "SELECT link FROM images WHERE idimages = "."'".$_POST["ID"]."';";
		$result = $conn->query($sql);
		// Check if data
		if ($result->num_rows > 0) {
		    // Data of each match
		    while($row = $result->fetch_assoc()) {
		        echo $row['link'];
		    }
		} else {
			echo("nothing found");
		    // ACTION IF NO IMAGE
		    // TODO: give out a default image?
		}

		// Close connection
		$conn->close();
	}
?>