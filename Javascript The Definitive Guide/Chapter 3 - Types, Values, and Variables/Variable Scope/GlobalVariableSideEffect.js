// Although you can get away with not using the var statement when you write code in
// the global scope, you must always use var to declare local variables. Consider what
// happens if you don’t:
scope = "global"; // Declare a global variable, even without var.
function checkscope2() {
    scope = "local"; // Oops! We just changed the global variable.
    myscope = "local"; // This implicitly declares a new global variable.
    return [scope, myscope]; // Return two values.
}

checkscope2() // => ["local", "local"]: has side effects!
scope // => "local": global variable has changed.
myscope // => "local": global namespace cluttered up.