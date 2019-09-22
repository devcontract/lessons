<?php

require 'mysql.php';

if(isset($_POST['no_listing'])){
    $userId = $_POST['user_Id'];

    $sql = "UPDATE `poshM` SET no_listing = 'Y' WHERE userid = '$userId'";

    if (mysqli_query($connection, $sql)) {
      //  echo "New record created successfully";
        echo $userId . ' is marked as not listing';

    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection) . ' ' .$userId;
    }

    mysqli_close($connection);

}