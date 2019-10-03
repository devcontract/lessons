<?php

require 'mysql.php';


    $sql = "INSERT INTO `test` (`id`, `userid`, `nickname`, `fullname`, `followed`, `shared`, `no_listing`, `liked`) VALUES (NULL, '57f9a431b7a6095c5605d51f', 'testos', 'test test', 'y', 'y', 'y', 'y');";

    for($i = 0 ; $i <100000000; $i++){

        if (mysqli_query($connection, $sql)) {
            //  echo "New record created successfully";
        } else {

            echo "Error: " . $sql . "<br>" . mysqli_error($connection);

        }
    }


    mysqli_close($connection);

