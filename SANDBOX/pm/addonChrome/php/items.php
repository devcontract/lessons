<?php

require 'mysql.php';

if(isset($_POST['userid'])){
    $userid = $_POST['userid'];
    $item_id = $_POST['item_id'];
    $item_max_id = $_POST['item_max_id'];




    $sql = "INSERT INTO `items` (`id`, `user_id`, `item_id`, `item_max_id`) VALUES (NULL, '$userid', '$item_id', '$item_max_id')";

    if (mysqli_query($connection, $sql)) {
      //  echo "New record created successfully";
    } else {
        if(mysqli_errno($connection)==1062){
            print 'User exist ';
        } else{
            echo "Error: " . $sql . "<br>" . mysqli_error($connection);
        }

    }

    mysqli_close($connection);

}