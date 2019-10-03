function contTimer(recCount,followCount) {

    var timer = true;
    var milisecVal = 400;
    var recordsCount = recCount;
   // var recordsCount = 157636;
    var followedC = followCount;
   // var followedC = 5058;
    var countDownC = ((milisecVal/1000 ) * (recordsCount-followedC))/3600;

// Set the date we're counting down to
    var countDownDate = new Date();

    countDownDate.setHours(countDownDate.getHours() + countDownC);

// Update the count down every 1 second
    var x = setInterval(function() {

        if(timer === true){
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        } else{
            // pause timer
        }
    }, 1000);

    setTimeout(function () {
        timer = false;
    },5000)
}
