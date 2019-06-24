// Objects are not compared by value: two objects are not equal even if they have the same
// properties and values. And two arrays are not equal even if they have the same elements
// in the same order:
var o = {x:1}, p = {x:1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
var a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal

// Objects are sometimes called reference types to distinguish them from JavaScript’s
// primitive types. Using this terminology, object values are references, and we say that
// objects are compared by reference: two object values are the same if and only if they
//     refer to the same underlying object.
var a = []; // The variable a refers to an empty array.
var b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.