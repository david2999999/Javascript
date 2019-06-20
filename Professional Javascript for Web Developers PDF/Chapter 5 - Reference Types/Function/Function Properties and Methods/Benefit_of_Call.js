// The true power of apply() and call() lies not in their ability to pass arguments but rather in their
// ability to augment the this value inside of the function. Consider the following example:
window.color = “red”;
var o = { color: “blue” };

function sayColor(){
    alert(this.color);
}

sayColor(); //red
sayColor.call(this); //red
sayColor.call(window); //red
sayColor.call(o); //blue