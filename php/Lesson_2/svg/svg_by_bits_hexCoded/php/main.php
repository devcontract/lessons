
<?php

function getIcon(){
    $svg = fopen('./img/pattern.svg','r') or die('no file found');
    fseek($svg,35);
    $str = fread($svg,100);

    fclose($svg);

    //$str = "Hello world!";
    return bin2hex($str);







};

?>