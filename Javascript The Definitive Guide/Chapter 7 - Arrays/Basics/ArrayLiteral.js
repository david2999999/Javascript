// The easiest way to create an array is with an array literal, which is simply a commaseparated
// list of array elements within square brackets.

var empty = []; // An array with no elements
var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

var base = 1024;
var table = [base, base+1, base+2, base+3];

var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];

// If you omit a value from an array literal, the omitted element is given the value
// undefined:
var count = [1,,3]; // An array with 3 elements, the middle one undefined.
var undefs = [,,]; // An array with 2 elements, both undefined.