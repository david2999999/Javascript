// Another way to create an array is with the Array() constructor. You can invoke this
// constructor in three distinct ways:
var a = new Array();

// Call it with a single numeric argument, which specifies a length:
var a = new Array(10);

// This technique creates an array with the specified length. This form of the
// Array() constructor can be used to preallocate an array when you know in advance
// how many elements will be required. Note that no values are stored in the array,
// and the array index properties “0”, “1”, and so on are not even defined for the array.

// Explicitly specify two or more array elements or a single non-numeric element for
// the array:
var a = new Array(5, 4, 3, 2, 1, "testing, testing");