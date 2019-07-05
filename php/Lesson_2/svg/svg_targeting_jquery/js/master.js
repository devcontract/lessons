$(document).ready(function () {
    $('button').click(function () {
        $.ajax({
            url: "./php/icon.php",
            type: 'get',
            data: {icon: this.id},
            cache: false,
            success: function () {
                console.log('Success function');
            },
            error: function () {
                alert('error has occured');
            }
        }).done(function(html) {


            $('#svg').append(html);
        });
    });
});