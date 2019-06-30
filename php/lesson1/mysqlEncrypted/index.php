

<?php

// adding  variables

$servername = "127.0.0.1";
$username = "test_user";
$password = "testpass";
$db = "test_ssl";

// Create connection with database

$con = mysqli_init();
if (!$con)
  {
  die("mysqli_init failed");
  }

 mysqli_ssl_set($con,"ssl/ssClient/client-key.pem","ssl/ssClient/client-cert.pem","ssl/ssClient/ca.pem",NULL, NULL);

if (!mysqli_real_connect($con,$servername,$username,$password,$db,NULL, NULL,MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT))
  {
  die("Connect Error: " . mysqli_connect_error());
  }




/* Select queries return a resultset */
//if ($result = $con->query("SELECT * FROM test")) {
if ($result = $con->query("SHOW SESSION STATUS LIKE 'Ssl_cipher';")) {
    /* numeric array */
    $row = $result->fetch_array(MYSQLI_NUM);
    for($i=0 ; $i<2; $i++){
        echo $row[$i];

    }

}

mysqli_close($con);
?>