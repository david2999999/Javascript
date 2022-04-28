var scope = "global"; // Declare a global variable

function checkscope() {
    var scope = "local"; // Declare a local variable with the same name
    return scope; // Return the local value, not the global one
}

checkscope();


scope = "global"; // Declare a global variable, even without var.
function checkscope2() {
    scope = "local"; // Oops! We just changed the global variable.
    myscope = "local"; // This implicitly declares a new global variable.

    return [scope, myscope]; // Return two values.
}
checkscope2() // => ["local", "local"]: has side effects!
scope // => "local": global variable has changed.
myscope // => "local": global namespace cluttered up.



var scope = "global scope"; // A global variable
function checkscope() {
    var scope = "local scope"; // A local variable
        function nested() {
            var scope = "nested scope"; // A nested scope of local variables
            return scope; // Return the value in scope here
        }
    return nested();
}
checkscope() // => "nested scope"
