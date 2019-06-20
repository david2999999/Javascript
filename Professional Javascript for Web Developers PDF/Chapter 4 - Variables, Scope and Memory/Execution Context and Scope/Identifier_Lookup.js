// When the function getColor() is called in this example, the
// variable color is referenced. At that point, a two-step search begins.
// First getColor()’s variable object is searched for an identifi er named
// color. When it isn’t found, the search goes to the next variable
// object (from the global context) and then searches for an identifi er
// named color. Because that variable object is where the variable is
// defined, the search ends
var color = “blue”;

function getColor(){
    return color;
}

alert(getColor()); //”blue”


// In this modified code, a local variable named color is declared inside the getColor() function.
// When the function is called, the variable is declared. When the second line of the function is
// executed, it knows that a variable named color must be used. The search begins in the local
// context, where it fi nds a variable named color with a value of “red”. Because the variable was
// found, the search stops and the local variable is used, meaning that the function returns “red”.
var color = “blue”;

function getColor(){
    var color = “red”;
    return color;
}

alert(getColor()); //”red”