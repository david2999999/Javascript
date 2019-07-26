// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for(var p in o)
        console.log(p + ": " + o[p] + "\n");
}
// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; }
// Function expressions can include names, which is useful for recursion.

var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };
// Function expressions can also be used as arguments to other functions:
data.sort(function(a,b) { return a-b; });
// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));

// Note that the function name is optional for functions defined as expressions. A function
// declaration statement actually declares a variable and assigns a function object to it. A
// function definition expression, on the other hand, does not declare a variable. A name
// is allowed for functions, like the factorial function above, that need to refer to themselves.
// If a function definition expression includes a name, the local function scope for
// that function will include a binding of that name to the function object. In effect, the
// function name becomes a local variable within the function. Most functions defined as
// expressions do not need names, which makes their definition more compact. Function
// definition expressions are particularly well suited for functions that are used only once,
// as in the last two examples above.