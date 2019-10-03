<?php

require 'mysql.php';

if(isset($_POST['userid'])){
    $userId = $_POST['userid'];
    $nickname = $_POST['nickname'];
    $fullname = $_POST['fullname'];
    $shared = $_POST['shared'];

    $clean_fullname = htmlentities($fullname, ENT_QUOTES, 'UTF-8');

    $sql = "INSERT INTO `poshM` (`id`, `userid`, `nickname`, `fullname`, `followed`) VALUES (NULL, '$userId', '$nickname', '$clean_fullname', 'N')";

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