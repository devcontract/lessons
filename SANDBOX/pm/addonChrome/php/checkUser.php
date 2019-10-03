<?php


require 'mysql.php';

if(isset($_POST['checkUser'])){

    $user = $_POST['username'];

    $sql = "SELECT fullname FROM poshM WHERE userid = '$user'";
    if ($result = mysqli_query($connection, $sql)) {
        //  echo "New record created successfully";
        // Fetch one and one row
        while ($row=mysqli_fetch_row($result))
        {
           echo $row[0];
        }
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }
    mysqli_close($connection);
}