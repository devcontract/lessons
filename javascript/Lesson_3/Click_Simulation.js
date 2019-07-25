let win = 0;
let y = 0;
let scrollInterval = null;
let timesClickedCount = 0;
let timesToClick = 39;


startStop(true);   // start process

document.addEventListener('mouseover',function (event) { //
    var element = event.target;
    if(timesClickedCount == timesToClick){
        startStop(false);
    } else {
        if(element.className == "'your class name'"){

            startStop(false);         // clearing interval

            setTimeout(function(){   // time out for click

                element.click();
                timesClickedCount++;
                window.scroll({
                    top: win + 80,
                    behavior: 'smooth' });

                startStop(true);    // start interval

            },2000);

        }
    }


})



function startStop(bool){                  // start and stop function
    clearInterval(scrollInterval);
    if(bool){
        scrollInterval = setInterval(function(){
            win  = window.pageYOffset || document.documentElement.scrollTop;
            y += 30;
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        },300);
    }
}

