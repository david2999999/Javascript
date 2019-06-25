// An array initializer is a comma-separated list of expressions contained within square
// brackets. The value of an array initializer is a newly created array. The elements of this
// new array are initialized to the values of the comma-separated expressions:
[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

// The element expressions in an array initializer can themselves be array initializers,
// which means that these expressions can create nested arrays:
var matrix = [[1,2,3], [4,5,6], [7,8,9]];

// The element expressions in an array initializer are evaluated each time the array initializer
// is evaluated. This means that the value of an array initializer expression may be
// different each time it is evaluated.
// Undefined elements can be included in an array literal by simply omitting a value between
// commas. For example, the following array contains five elements, including three
// undefined elements:
var sparseArray = [1,,,,5];