// ECMAScript 5 deprecates EvalError and standardizes the de facto behavior of eval().
// A “direct eval” is a call to the eval() function with an expression that uses the exact,
// unqualified name “eval” (which is beginning to feel like a reserved word). Direct calls
// to eval() use the variable environment of the calling context. Any other call—an
// indirect call—uses the global object as its variable environment and cannot read, write,
// or define local variables or functions.

var geval = eval; // Using another name does a global eval
var x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
    var x = "local"; // Define a local variable
    eval("x += 'changed';"); // Direct eval sets local variable
    return x; // Return changed local variable
}
function g() { // This function does a global eval
    var y = "local"; // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":