




 function onCLick(element) {


    getMethod(element);
} ;

function getMethod(elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
        var svg = document.getElementById('svg_targeting_Icon');
        svg.setAttribute("viewBox", ""+ this.response +" 257 50 50")

            console.log(this.response);

        }
    };

    xhttp.open("GET", "/svg_targeting_Icon/php/icon.php?icon="+ elementId +" ", true);
    xhttp.send();
}