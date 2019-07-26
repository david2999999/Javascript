// Functions are usually defined using the function keyword, either in the form of a function
// definition statement or a function literal expression. But functions can also be
// defined with the Function() constructor. For example:
var f = new Function("x", "y", "return x*y;");

//This line of code creates a new function that is more or less equivalent to a function
// defined with the familiar syntax:
var f = function(x, y) { return x*y; }

/// A last, very important point about the Function() constructor is that the functions
// it creates do not use lexical scoping; instead, they are always compiled as if they
// were top-level functions, as the following code demonstrates:
var scope = "global";
function constructFunction() {
    var scope = "local";
    return new Function("return scope"); // Does not capture the local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
constructFunction()(); // => "global"