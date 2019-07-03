
<?php


function getIcon($icon){
    $icons = array(
        "facebook"=> array('x'=> '30',"y"=>'257','scaleX'=>'50','scaleY'=>'50'),
        "instagram"=> array('x'=> '84.5',"y"=>'257','scaleX'=>'50','scaleY'=>'50'),

    );
    echo '<svg id="svg" viewBox="'. $icons[$icon]['x'] .' 257 50 50" width="100" height="100"><image xlink:href="pattern.svg"/></svg>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php getIcon("facebook"); ?>
<?php echo '<br>' ?>
<?php getIcon("instagram"); ?>
<div>
</div>
</body>
</html>