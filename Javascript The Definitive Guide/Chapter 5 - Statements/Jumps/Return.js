// Recall that function invocations are expressions and that all expressions have values.
// A return statement within a function specifies the value of invocations of that function.
// Here’s the syntax of the return statement:
    // return expression;

// A return statement may appear only within the body of a function. It is a syntax error
// for it to appear anywhere else. When the return statement is executed, the function
// that contains it returns the value of expression to its caller. For example:
function square(x) { return x*x; } // A function that has a return statement
square(2) // This invocation evaluates to 4

// The return statement can also be used without an expression to make the function
// return undefined to its caller. For example:
function display_object(o) {
    // Return immediately if the argument is null or undefined.
    if (!o) return;
    // Rest of function goes here...
}