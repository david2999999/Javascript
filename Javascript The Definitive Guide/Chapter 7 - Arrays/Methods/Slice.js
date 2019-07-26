// The Array.slice() method returns a slice, or subarray, of the specified array. Its two
// arguments specify the start and end of the slice to be returned. The returned array
// contains the element specified by the first argument and all subsequent elements up
// to, but not including, the element specified by the second argument. If only one argument
// is specified, the returned array contains all elements from the start position to the
// end of the array. If either argument is negative, it specifies an array element relative to
// the last element in the array. An argument of -1, for example, specifies the last element
// in the array, and an argument of -3 specifies the third from last element of the array.
// Note that slice() does not modify the array on which it is invoked. Here are some
// examples:
var a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3,-2); // Returns [3]