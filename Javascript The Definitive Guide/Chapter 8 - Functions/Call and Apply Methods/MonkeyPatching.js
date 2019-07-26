// Note that apply() works with array-like objects as well as true arrays. In particular, you
// can invoke a function with the same arguments as the current function by passing the
// arguments array directly to apply(). The following code demonstrates:

// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
    var original = o[m]; // Remember original method in the closure.
    o[m] = function() { // Now define the new method.
        console.log(new Date(), "Entering:", m); // Log message.
        var result = original.apply(this, arguments); // Invoke original.
        console.log(new Date(), "Exiting:", m); // Log message.
        return result; // Return result.
    };
}