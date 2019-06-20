var color = “blue”;

function changeColor(){
    if (color === “blue”){
        color = “red”;
    } else {
        color = “blue”;
    }
}

changeColor();

var color = “blue”;
function changeColor(){
    var anotherColor = “red”;
    
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        //color, anotherColor, and tempColor are all accessible here
    }
    //color and anotherColor are accessible here, but not tempColor
    swapColors();
}
//only color is accessible here
changeColor();