// When a function is invoked with more argument values than there are parameter
// names, there is no way to directly refer to the unnamed values. The Arguments object
// provides a solution to this problem. Within the body of a function, the identifier
// arguments refers to the Arguments object for that invocation. The Arguments object is
// an array-like object (see §7.11) that allows the argument values passed to the function
// to be retrieved by number, rather than by name.

//Suppose you define a function f that expects to be passed one argument, x. If you invoke
// this function with two arguments, the first argument is accessible within the function
// by the parameter name x or as arguments[0]. The second argument is accessible only
// as arguments[1]. Furthermore, like true arrays, arguments has a length property that
// specifies the number of elements it contains. Thus, within the body of the function f,
// invoked with two arguments, arguments.length has the value 2.
function f(x, y, z)
{
    // First, verify that the right number of arguments was passed
    if (arguments.length != 3) {
        throw new Error("function f called with " + arguments.length +
            "arguments, but it expects 3 arguments.");
    }
// Now do the actual function...
}

function max(/* ... */) {
    var max = Number.NEGATIVE_INFINITY;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(var i = 0; i < arguments.length; i++)
        if (arguments[i] > max) max = arguments[i];
    // Return the biggest
    return max;
}
var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000
