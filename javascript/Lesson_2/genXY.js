

function genXY(width,height) {

    var diff = height - width;

    var x = Math.floor(Math.random() * diff) + width ;

    var y = Math.floor(Math.random() * diff) + width ;

    console.log('your x value is ' + x);
    console.log('your y value is ' + y);

}

genXY(25,19);