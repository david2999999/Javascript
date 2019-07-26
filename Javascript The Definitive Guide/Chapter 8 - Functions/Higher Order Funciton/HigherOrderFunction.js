//A higher-order function is a function that operates on functions, taking one or more
// functions as arguments and returning a new function.
// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function() { // Return a new function
        var result = f.apply(this, arguments); // that calls f
        return !result; // and negates its result.
    };
}

var even = function(x) { // A function to determine if a number is even
    return x % 2 === 0;
};

var odd = not(even); // A new function that does the opposite
[1,1,3,5,5].every(odd); // => true: every element of the array is odd