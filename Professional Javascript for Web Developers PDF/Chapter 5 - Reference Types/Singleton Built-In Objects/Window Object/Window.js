// Though ECMA-262 doesn’t indicate a way to access the Global object directly, web browsers
// implement it such that the window is the Global object’s delegate. Therefore, all variables and functions
// declared in the global scope become properties on window.
var color = “red”;

function sayColor(){
    alert(window.color);
}
window.sayColor(); //”red”