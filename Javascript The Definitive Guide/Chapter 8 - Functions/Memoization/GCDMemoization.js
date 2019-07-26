// Return the Greatest Common Divisor of two integers, using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) { // Type checking for a and b has been omitted
    var t; // Temporary variable for swapping values
    if (a < b) t=b, b=a, a=t; // Ensure that a >= b
    while(b != 0) t=b, b = a%b, a=t; // This is Euclid's algorithm for GCD
    return a;
}
var gcdmemo = memoize(gcd);
gcdmemo(85, 187) // => 17

// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
var factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n-1);
});
factorial(5) // => 120. Also caches values for 4, 3, 2 and 1.