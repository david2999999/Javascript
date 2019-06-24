// The scope of a variable is the region of your program source code in which it is defined.
// A global variable has global scope; it is defined everywhere in your JavaScript code. On
// the other hand, variables declared within a function are defined only within the body
// of the function. They are local variables and have local scope. Function parameters also
// count as local variables and are defined only within the body of the function.
// Within the body of a function, a local variable takes precedence over a global variable
// with the same name. If you declare a local variable or function parameter with the same
// name as a global variable, you effectively hide the global variable:
var scope = "global"; // Declare a global variable
function checkscope() {
    var scope = "local"; // Declare a local variable with the same name
    return scope; // Return the local value, not the global one
}
checkscope() // => "local"