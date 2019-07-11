// The following code defines a function named check() that is passed the arguments array
// from another function. It compares arguments.length (the number of arguments actually
// passed) to arguments.callee.length (the number expected) to determine whether
// the function was passed the right number of arguments. If not, it throws an exception.
// The check() function is followed by a test function f() that demonstrates how
// check() can be used:

// This function uses arguments.callee, so it won't work in strict mode.
function check(args) {
    var actual = args.length; // The actual number of arguments
    var expected = args.callee.length; // The expected number of arguments
    if (actual !== expected) // Throw an exception if they differ.
        throw Error("Expected " + expected + "args; got " + actual);
}
function f(x, y, z) {
    check(arguments); // Check that the actual # of args matches expected #.
    return x + y + z; // Now do the rest of the function normally.
}