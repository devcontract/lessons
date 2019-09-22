<?php

require 'mysql.php';

if ($_POST['message'] === 'userCount') {

    $sql = "SELECT COUNT(*) FROM poshM";
}

if ($_POST['message'] === 'followCount') {

    $sql = "SELECT COUNT(*) FROM poshM WHERE followed = 'Y'";
}

if ($_POST['message'] === 'sharingCount') {

    $sql = "SELECT COUNT(*) FROM poshM WHERE shared = 'Y'";
}

if ($_POST['message'] == 'lastuser') {

    $sql = "SELECT last_added_user FROM last_added WHERE last_rec = 'y'";
}

if ($_POST['message'] == 'lastSearch') {

    $sql = "SELECT search_input FROM last_added WHERE last_rec = 'y'";
}

if ($_POST['message'] == 'lastFollow') {

    $sql = "SELECT last_added_user FROM last_added WHERE last_follow = 'y'";
}

if($_POST['message']=='likeCount'){
    $sql = "SELECT COUNT(*) FROM poshM WHERE liked = 'Y'";
}

if($_POST['message']==='lastShare'){
    $sql = "SELECT last_added_user FROM last_added WHERE last_share = 'y'";
}

if($_POST['message']==='lastLike'){
    $sql = "SELECT last_added_user FROM last_added WHERE last_like = 'y'";
}


if ($result = mysqli_query($connection, $sql)) {
    //  echo "New record created successfully";
    // Fetch one and one row
    while ($row = mysqli_fetch_row($result)) {
        echo $row[0];

    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}
mysqli_close($connection);
