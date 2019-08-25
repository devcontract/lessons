<?php


$bigData = array();

for($i = 0; $i < 101; $i++){
    array_push($bigData,"record number ". $i ."");
}

if($_POST['startFrom']){

    $upTo = (int)$_POST['startFrom'] + 10;
    echo json_encode(array_slice($bigData, (int)$_POST['startFrom'],$upTo));
}




