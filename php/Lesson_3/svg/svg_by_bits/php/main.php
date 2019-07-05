
<?php

function getIcon(){

    $svg = fopen('./img/pattern.svg','r') or die('no file found');

    fseek($svg,30);
    echo fread($svg,100);

    fclose($svg);

};

?>