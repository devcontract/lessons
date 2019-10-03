<?php

require 'mysql.php';

if(isset($_POST['like'])){

    $userId = $_POST['userid'];

    $sql = "UPDATE `poshM` SET liked = 'Y' WHERE userid = '$userId'";

    if (mysqli_query($connection, $sql)) {
        //  echo "New record created successfully";
        echo $userId . "is marked as liked ";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }

    mysqli_close($connection);

}