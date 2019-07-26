// Functions are not primitive values in JavaScript, but a specialized kind of object, which
// means that functions can have properties. When a function needs a “static” variable
// whose value persists across invocations, it is often convenient to use a property of the
// function, instead of cluttering up the namespace by defining a global variable. For
// example, suppose you want to write a function that returns a unique integer whenever
// it is invoked. The function must never return the same value twice. In order to manage
// this, the function needs to keep track of the values it has already returned, and this
// information must persist across function invocations. You could store this information
// in a global variable, but that is unnecessary, because the information is used only by
// the function itself. It is better to store the information in a property of the Function
// object. Here is an example that returns a unique integer whenever it is called

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;

// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++; // Increment and return counter property
}

// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
    if (isFinite(n) && n>0 && n==Math.round(n)) { // Finite, positive ints only
        if (!(n in factorial)) // If no cached result
            factorial[n] = n * factorial(n-1); // Compute and cache it
        return factorial[n]; // Return the cached result
    }
    else return NaN; // If input was bad
}
factorial[1] = 1; // Initialize the cache to hold this base case.