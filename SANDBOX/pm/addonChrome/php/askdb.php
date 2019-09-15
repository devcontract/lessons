<?php


require 'mysql.php';

if(isset($_POST['askdb'])){


    $sql = "SELECT `userid` FROM poshM WHERE followed = 'N' ORDER BY RAND() LIMIT 1 ";
    if ($result = mysqli_query($connection, $sql)) {
        //  echo "New record created successfully";
        // Fetch one and one row
        while ($row=mysqli_fetch_row($result))
        {
           echo $row[0];
           $sqlFollow = "UPDATE `poshM` SET followed = 'Y' WHERE userid = '$row[0]'";

            if (mysqli_query($connection, $sqlFollow)) {
                //  echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($connection);
            }
        }
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }
    mysqli_close($connection);
}