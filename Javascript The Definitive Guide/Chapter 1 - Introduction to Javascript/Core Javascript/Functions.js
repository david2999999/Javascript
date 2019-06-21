// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) { // Define a function named "plus1" with parameter "x"
    return x+1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces

plus1(y) // => 4: y is 3, so this invocation returns 3+1
var square = function(x) { // Functions are values and can be assigned to vars
    return x*x; // Compute the function's value
}; // Semicolon marks the end of the assignment.
square(plus1(y)) // => 16: invoke two functions in one expression