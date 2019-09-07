



document.getElementById('xAxis').addEventListener('input',function(){
    var valueX = document.getElementById('xAxis').value;
    document.getElementById('mytext').style.marginLeft = valueX+'px';
    //alert(valueX);
});

document.getElementById('yAxis').addEventListener('input',function(){
    var valueY = document.getElementById('yAxis').value;
    document.getElementById('mytext').style.marginTop = valueY+'px';
});