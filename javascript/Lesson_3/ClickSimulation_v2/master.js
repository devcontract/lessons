var elements = document.getElementsByTagName('I');
var largeHeart = document.getElementsByClassName('icon as--c heart-gray-empty btn__icon');
var heartsSmall = document.getElementsByClassName('icon as--c heart-white-empty-large');
var shareSmall = document.getElementsByClassName('icon share-white-large');
var bigShare = document.getElementsByClassName('icon share-gray-large btn__icon');
var randomNumber = null;
var body = document.body;

console.log('i element count ' + elements.length);
console.log('Small heart elements count ' + heartsSmall.length);
console.log('large heart elements count ' + largeHeart.length);
console.log('small share count ' + shareSmall.length);


setInterval(function(){

    console.log('i element count ' + elements.length);
    console.log('Small heart elements count ' + heartsSmall.length);
    console.log('large heart elements count ' + largeHeart.length);
    console.log('small share count ' + shareSmall.length);
    

    var random = genXY(0,9);

    if(random >= 0 && random <=3 ){
        try { largeHeartClick()}

        catch(e){
            console.log(e);
        }

    }

    if(random >= 4 && random <=6 ){
        try { bigShareClick()}

        catch(e){
            console.log(e);
        }

    }

    if(random >= 7 && random <=9 ){

        try { smallShareClick()}
        catch(e){
            console.log(e);
        }

    }

},6000);







function largeHeartClick(){

    var largeHeartInterval = setTimeout(function(){
        var tempGen = genXY(0,largeHeart.length);
        try{
            largeHeart[tempGen].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            largeHeart[tempGen].click();
        }
        catch(e){
            console.log(e);
        }



    },3000);

};



function bigShareClick(){

    var bigShareInterval = setTimeout(function(){
        var tempGen = genXY(0,bigShare.length);


        try{
            bigShare[tempGen].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            bigShare[tempGen].click();
        }
        catch(e){
            console.log(e);
        }


    },3000);

};










function smallShareClick(){
    var smallShareInterval = setTimeout(function(){
        var tempGen = genXY(0,shareSmall.length);

        try{
            shareSmall[tempGen].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            shareSmall[tempGen].click();
        }
        catch(e){
            console.log(e);
        }


    },3000);
};





var shareCheck = setInterval(function(){

    if (body.className == 'modal-open'){
        var toFollowers = document.getElementsByClassName("icon pm-logo-white")[0];
        toFollowers.click();
    }

},1000);



function clickSmalHearts(){


    var tempGen = genXY(0,heartsSmall.length);

    try{
        var smalHeartInterval = setTimeout(function(){
            heartsSmall[tempGen].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            heartsSmall[tempGen].click();
        },5000);
    }
    catch(e){
        console.log(e);
    }


}

function genXY(a,b) {
    var diff = b - a;
    return randomNumber = Math.floor(Math.random() * diff) + a ;


}
