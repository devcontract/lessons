$(document).ready(function () {

    var loading = false;

    var startFrom = 0;


         $.ajax({
             url: './php/data.php',
             method: 'POST',
             data:{'startFrom': startFrom},
             beforeSend: function () {
                 loading = true;
             }
         }).done(function (data) {
             console.log(data);
             resp = jQuery.parseJSON(data);
             console.log(resp);
             if (resp.length > 0){
                 $.each(resp, function (index, element) {
                     $('#dataOutpu1').append('<p><b>'  + element + '</b><br></p>');

                 });
             }
             loading = false;
             startFrom += 10;
         })



$(window).scroll(function () {
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !loading){

        $.ajax({
            url: './php/data.php',
            method: 'POST',
            data:{'startFrom': startFrom},
            beforeSend: function () {
                loading = true;
            }
        }).done(function (data) {
            console.log(data);
            data = jQuery.parseJSON(data);

            if (data.length > 0){
                $.each(data, function (index, element) {
                    $('#dataOutpu1').append('<p><b>'  + element + '</b><br></p>');

                });
            }
            loading = false;
            startFrom += 10;
        })
    }
});


});