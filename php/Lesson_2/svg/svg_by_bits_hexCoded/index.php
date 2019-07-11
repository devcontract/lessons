<?php

require './php/main.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>
    <svg height="400" width="400">
        <?php echo pack('H*',getIcon())?>
    </svg>
</div>

</body>
</html>


<!--



Parameters
format
See pack() for an explanation of the format codes.

data
The packed data.

offset
The offset to begin unpacking from.


-->