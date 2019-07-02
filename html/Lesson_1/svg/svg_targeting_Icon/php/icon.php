
<?php

if(isset($_GET)){
    getIcon($_GET['icon']);
}

function getIcon($icon){
    $icons = array(
        "facebook"=> array('x'=> '30',"y"=>'257','scaleX'=>'50','scaleY'=>'50'),
        "instagram"=> array('x'=> '82.5',"y"=>'257','scaleX'=>'50','scaleY'=>'50'),

    );
    if ($icon == $_GET['icon']){
        echo $icons[$icon]['x'] ;
    }
}

?>