// As you can see from the code above, assigning an object (or array) to a variable simply
// assigns the reference: it does not create a new copy of the object. If you want to make
// a new copy of an object or array, you must explicitly copy the properties of the object
// or the elements of the array. This example demonstrates using a for loop (§5.5.3):
var a = ['a','b','c']; // An array we want to copy
var b = []; // A distinct array we'll copy into
for(var i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}

// Similarly, if we want to compare two distinct objects or arrays, we must compare their
// properties or elements. This code defines a function to compare two arrays:
function equalArrays(a,b) {
    if (a.length != b.length) return false; // Different-size arrays not equal
    for(var i = 0; i < a.length; i++) // Loop through all elements
        if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    return true; // Otherwise they are equal
}