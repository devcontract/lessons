
<?php


function getIcon($icon){
    $icons = array(
        "facebook"=> '<svg id="img" viewBox="30 257 50 50" width="100" height="100"><image xlink:href="./img/pattern.svg"/></svg>',
        "instagram"=> '<svg id="img" viewBox="84.5 257 50 50" width="100" height="100"><image xlink:href="./img/pattern.svg"/></svg>'

    );
    //echo '<svg id="img" viewBox="30 257 50 50" width="100" height="100"><image xlink:href="./img/pattern.svg"/></svg>';
    echo $icons[$icon];
    return ;

}

?>