<?php

// adding  variables

$servername = "localhost";
$username = "root";
$passwrod = "root";
$db = "myBd";

// Create connection with database


$connection = new mysqli($servername,$username,$passwrod);

//check connection

if ($connection-> connect_error){
    die("Connection Failed: " . $connection->connect_error);
}

//echo "Connected successfully";

// choosing database

if(mysqli_select_db($connection,$db)){
 //echo 'db is chosen';
} else{
 //   echo 'error has occurred when choosing db';
}

// closing connection

//mysqli_close($connection);

