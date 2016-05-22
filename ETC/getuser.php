<!DOCTYPE html>
<html>
    <head>
    </head>


    <body>
    <?php

    include('dbConnect.php');

    $q = $_GET['q'];

    $sql = "SELECT name FROM images WHERE idimages = '$q';";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
        $value = $v['name'];
        //$temp = '<img src="'.WEB_ROOT."/images".$value.'" alt="">';
        echo '<img src="'.WEB_ROOT."/images".$value.'" alt="">';
    }
    ?>
    </body>
</html>
