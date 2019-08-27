$(document).ready(function () {

   var limit = 10; // the number of records to displau per request
    var start = 0; // starting pointer of data
    var action = false;


    if(action === false)
    {
        action = true;
        load_country_data(limit, start);
    }

    $(window).scroll(function () {
       if($(window).scrollTop() + $(window).height() > $("#load_data").height() && action === false){
           action = true;
           start = start + limit;
           setTimeout(function () {
               load_country_data(limit, start);
           },1000);
       }
    });

    function load_country_data(limit, start) {
        $.ajax({
            url:'./php/data.php',
            method: 'POST',
            data:{limit:limit,start:start},
            cache:false,
            success:function (data) {

                try {
                    var parsed = jQuery.parseJSON(data);

                    $.each(parsed, function (index, element) {

                        $('#load_data').append('<tr><td class="text-center">'  + element + '</td></tr>');

                        //  console.log(element);

                    });
                } catch (e) {
                    console.log(e);
                }


                if(parsed.length <= 0){
                    $('#load_data_message').html('<button type=\'button\' class=\'btn btn-info\'>No Data Found</button>');
                    action = true;
                } else {
                    $('#load_data_message').html('<button type=\'button\' class=\'btn btn-warning\'>Please Wait....</button>');
                    action = false;

                }
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status +  " : " + xhr.statusText;
                console.log('Error -' + errorMessage);
                console.log('Error -' + error);

            }
        }).done(function () {

        });
    }

});

