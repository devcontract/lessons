<?php


require 'mysql.php';

if(isset($_POST['itemCount'])){

    $sql = "SELECT poshM.userid, poshM.fullname, COUNT(*) AS total_Items FROM poshM INNER JOIN items ON poshM.userid = items.user_id GROUP BY poshM.userid, poshM.fullname ORDER BY total_items";
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