var b = 0;


setInterval(function () {

    click(b);
    b++;

    console.log(b);
},1000);


function click(i){

    $('iframe').contents().find('button')[i].focus();
    $('iframe').contents().find('button')[i].click();
}

