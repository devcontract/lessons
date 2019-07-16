var d = 0;
var b = 0;

setInterval(function () {

    click(b);
    b++;

    console.log(b);
},1000);


$(document).on('click', 'button' , function () {
    $(this).text('following');
    $(this).removeClass('btn-primary');
    $(this).addClass('border-primary');

});


function createElement() {
    d++;
    var div = document.createElement("div");
    div.id = d;
    div.setAttribute('class','border border-light');
    $("#container").append(div);

    var button = document.createElement('button');
    button.id = d;
    button.setAttribute('class','btn btn-primary');
    button.setAttribute('onclick','btn btn-primary');
    button.innerText = 'follow';
    $('#'+ d +'').append(button);

}

function click(i){

    $('button')[i].focus();
    $('button')[i].click();
}


for (var i = 0; i<100;i++){
    createElement();
}

