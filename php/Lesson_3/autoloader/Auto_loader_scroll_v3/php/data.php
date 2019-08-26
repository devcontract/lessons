<?php


$bigData = ["record number 0","record number 1","record number 2","record number 3","record number 4","record number 5","record number 6","record number 7","record number 8","record number 9","record number 10","record number 11","record number 12","record number 13","record number 14","record number 15","record number 16","record number 17","record number 18","record number 19","record number 20","record number 21","record number 22","record number 23","record number 24","record number 25","record number 26","record number 27","record number 28","record number 29","record number 30","record number 31","record number 32","record number 33","record number 34","record number 35","record number 36","record number 37","record number 38","record number 39","record number 40","record number 41","record number 42","record number 43","record number 44","record number 45","record number 46","record number 47","record number 48","record number 49","record number 50"];

if(isset($_POST['limit'],$_POST['start'])){

    $start = (int)$_POST['start'];

    $limit = (int)$_POST['limit'];

    try{

        echo json_encode(array_slice($bigData, $start , $limit ));

    } catch (exception $e){

        echo $e;

    }

    finally{

        // code to execute
    }

}





