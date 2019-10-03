<?php

require 'mysql.php';

if(isset($_POST)){
    $userId = $_POST['userid'];
    $search_input = $_POST['search_input'];
    $max_id = $_POST['max_id'];
    $lastItem = $_POST['last_item'];

    if($_POST['type'] === 'lastRec'){
        $sql = "UPDATE `last_added` SET search_input = '$search_input', last_added_user = '$userId', max_id = $max_id WHERE last_rec = 'y'";
    }

    if($_POST['type']=== 'lastFollow'){
        $sql = "UPDATE `last_added` SET  last_added_user = '$userId' WHERE last_follow = 'y'";
    }


    if($_POST['type'] === 'lastShare'){
        $sql = "UPDATE `last_added` SET search_input = '$search_input', last_added_user = '$userId', max_id = '$max_id' WHERE last_share = 'y'";
    }

    if($_POST['type'] === 'lastLike'){
        $sql = "UPDATE `last_added` SET search_input = '$search_input', last_added_user = '$userId', max_id = '$max_id' , last_item = '$lastItem' WHERE last_like = 'y'";
    }


    if (mysqli_query($connection, $sql)) {
      //  echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }

    mysqli_close($connection);

}