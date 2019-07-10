// Like most modern programming languages, JavaScript uses lexical scoping. This means
// that functions are executed using the variable scope that was in effect when they were
// defined, not the variable scope that is in effect when they are invoked. In order to
// implement lexical scoping, the internal state of a JavaScript function object must include
// not only the code of the function but also a reference to the current scope chain.
// (Before reading the rest of this section, you may want to review the material on variable
// scope and the scope chain in §3.10 and §3.10.3.) This combination of a function object
// and a scope (a set of variable bindings) in which the function’s variables are resolved
// is called a closure in the computer science literature

var scope = "global scope"; // A global variable
function checkscope() {
    var scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f();
}
checkscope() // => "local scope"

// Remember the fundamental rule of lexical scoping: JavaScript functions are executed
// using the scope chain that was in effect when they were defined. The nested function
// f() was defined under a scope chain in which the variable scope was bound to the value
// “local scope”. That binding is still in effect when f is executed, wherever it is executed
// from. So the last line of code above returns “local scope”, not “global scope”.
var scope = "global scope"; // A global variable
function checkscope() {
    var scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f;
}
checkscope()() // What does this return?