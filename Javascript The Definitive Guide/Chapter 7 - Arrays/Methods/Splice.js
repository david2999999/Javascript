// splice() can delete elements from an array, insert new elements into an array, or perform
// both operations at the same time. Elements of the array that come after the insertion
// or deletion point have their indexes increased or decreased as necessary so that
// they remain contiguous with the rest of the array. The first argument to splice() specifies
// the array position at which the insertion and/or deletion is to begin. The second
// argument specifies the number of elements that should be deleted from (spliced out of)
// the array. If this second argument is omitted, all array elements from the start element
// to the end of the array are removed. splice() returns an array of the deleted elements,
// or an empty array if no elements were deleted.
var a = [1,2,3,4,5,6,7,8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1,2); // Returns [2,3]; a is [1,4]
a.splice(1,1); // Returns [4]; a is [1]

// The first two arguments to splice() specify which array elements are to be deleted.
// These arguments may be followed by any number of additional arguments that specify
// elements to be inserted into the array, starting at the position specified by the first
// argument.
var a = [1,2,3,4,5];
a.splice(2,0,'a','b'); // Returns []; a is [1,2,'a','b',3,4,5]
a.splice(2,2,[1,2],3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]