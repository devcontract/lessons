<?php

require 'mysql.php';

if(isset($_POST['getLast'])){


    $sql = $sql = "SELECT `search_input`, `last_added_user`, `max_id` FROM `last_added`";


    if ($result = mysqli_query($connection, $sql)) {
        //  echo "New record created successfully";
        // Fetch one and one row
        while ($row=mysqli_fetch_row($result))
        {


            echo json_encode($row);

        }
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }
    mysqli_close($connection);


}