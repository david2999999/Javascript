// The Array.concat() method creates and returns a new array that contains the elements
// of the original array on which concat() was invoked, followed by each of the arguments
// to concat(). If any of these arguments is itself an array, then it is the array elements that
// are concatenated, not the array itself. Note, however, that concat() does not recursively
// flatten arrays of arrays. concat() does not modify the array on which it is invoked. Here
// are some examples:
var a = [1,2,3];
a.concat(4, 5) // Returns [1,2,3,4,5]
a.concat([4,5]); // Returns [1,2,3,4,5]
a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]]