// Function definitions can be nested. Each function has its own local scope, so it is possible
// to have several nested layers of local scope. For example:
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