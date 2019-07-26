// In §8.4.1 we defined a uniqueInteger() function that used a property of the function
// itself to keep track of the next value to be returned. A shortcoming of that approach is
// that buggy or malicious code could reset the counter or set it to a noninteger, causing
// the uniqueInteger() function to violate the “unique” or the “integer” part of its contract.
// Closures capture the local variables of a single function invocation and can use
// those variables as private state. Here is how we could rewrite the uniqueInteger()
// function using closures:
var uniqueInteger = (function() { // Define and invoke
    var counter = 0; // Private state of function below
    return function() { return counter++; };
}());


// Private variables like counter need not be exclusive to a single closure: it is perfectly
// possible for two or more nested functions to be defined within the same outer function
// and share the same scope chain. Consider the following code:
function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}
var c = counter(), d = counter(); // Create two counters
c.count() // => 0
d.count() // => 0: they count independently
c.reset() // reset() and count() methods share state
c.count() // => 0: because we reset c
d.count() // => 1: d was not reset

// It is worth noting here that you can combine this closure technique with property
// getters and setters. The following version of the counter() function is a variation on
// code that appeared in §6.6, but it uses closures for private state rather than relying on
// a regular object property:
function counter(n) { // Function argument n is the private variable
    return {
        // Property getter method returns and increments private counter var.
        get count() { return n++; },
        // Property setter doesn't allow the value of n to decrease
        set count(m) {
            if (m >= n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}
var c = counter(1000);
c.count // => 1000
c.count // => 1001
c.count = 2000
c.count // => 2000
c.count = 2000 // => Error!