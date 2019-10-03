<?php

require 'mysql.php';




if($_POST['message1'] === 'allCount'){

    $user = $_POST['username'];

    $sql = "SELECT 
   (SELECT COUNT(*) FROM poshM ) TOTAL_COUNTS,
   (SELECT COUNT(*) FROM poshM WHERE followed='Y') FOLLOWED_COUNTS,
   (SELECT COUNT(*) FROM poshM WHERE liked='Y') LIKED_COUNTS,
   (SELECT COUNT(*) FROM poshM WHERE shared='Y') SHARED_COUNTS,
   (SELECT COUNT(*) FROM poshM WHERE no_listing='Y') NOLISTING_COUNTS,
   
   (SELECT fullname FROM poshM WHERE id='$user') FULL_NAME,
   (SELECT last_added_user FROM last_added WHERE last_rec = 'y') LAST_ADDED_USERID,
   (SELECT last_added_user FROM last_added WHERE last_follow = 'y') LAST_FOLLOW_USERID,
   (SELECT last_added_user FROM last_added WHERE last_share = 'y') LAST_SHARE_USER,
   (SELECT last_added_user FROM last_added WHERE last_like = 'y') LAST_LIKE_USERID,
   (SELECT last_item FROM last_added WHERE last_like = 'y') LAST_LIKE_ITEM,
   (SELECT search_input FROM last_added WHERE last_rec = 'y') LAST_SEARCH_USERNAME
   FROM poshM LIMIT 1";
}

if ($result = mysqli_query($connection, $sql)) {
    //  echo "New record created successfully";
    // Fetch one and one
    while ($row = mysqli_fetch_assoc($result)) {
        echo json_encode($row);
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}
mysqli_close($connection);
