<?php


function getIcon($icon){
    // loading file

    $buffer = file_get_contents('./json/icon.json');

// decoding string to object

    $data = json_decode($buffer);


// checking for errors

    $jsonError = 'Unknown error';

    switch (json_last_error()){
        case JSON_ERROR_NONE:
            //no error

            $jsonError = '';
            break;
        case JSON_ERROR_DEPTH:
            $jsonError = 'Stack maximum depth achieved';
            break;
        case JSON_ERROR_STATE_MISMATCH:
            $jsonError = 'State Mismatch';
            break;
        case JSON_ERROR_CTRL_CHAR:
            $jsonError = 'Control Character error';
            break;
        default:
            $jsonError = 'Unknown error';
            break;

    }

    if ($jsonError != ''){
        // we have an error

        echo $jsonError;
    }

    else {
        echo $data->$icon;
    }
};
