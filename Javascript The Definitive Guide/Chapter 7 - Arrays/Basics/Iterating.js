var keys = Object.keys(o); // Get an array of property names for object o
var values = [] // Store matching property values in this array
for(var i = 0; i < keys.length; i++) { // For each index in the array
    var key = keys[i]; // Get the key at that index
    values[i] = o[key]; // Store the value in the values array
}

// These examples assume that the array is dense and that all elements contain valid data.
// If this is not the case, you should test the array elements before using them. If you want
// to exclude null, undefined, and nonexistent elements, you can write this:
for(var i = 0; i < a.length; i++) {
    if (!a[i]) continue; // Skip null, undefined, and nonexistent elements
    // loop body here
}

// If you only want to skip undefined and nonexistent elements, you might write:
for(var i = 0; i < a.length; i++) {
    if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
    // loop body here
}

// Finally, if you only want to skip indexes for which no array element exists but still want
// to handle existing undefined elements, do this:
for(var i = 0; i < a.length; i++) {
    if (!(i in a)) continue ; // Skip nonexistent elements
    // loop body here
}

// You can also use a for/in loop (§5.5.4) with sparse arrays. This loop assigns enumerable
// property names (including array indexes) to the loop variable one at a time. Indexes
// that do not exist will not be iterated:
for(var index in sparseArray) {
    var value = sparseArray[index];
    // Now do something with index and value
}

for(var i in a) {
    if (!a.hasOwnProperty(i)) continue; // Skip inherited properties
    // loop body here
}

for(var i in a) {
    // Skip i if it is not a non-negative integer
    if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
}

// ECMAScript 5 defines a number of new methods for iterating array elements by passing
// each one, in index order, to a function that you define. The forEach() method is the
// most general of these methods:
var data = [1,2,3,4,5]; // This is the array we want to iterate
var sumOfSquares = 0; // We want to compute the sum of the squares of data
data.forEach(function(x) { // Pass each element of data to this function
    sumOfSquares += x*x; // add up the squares
});
sumOfSquares // =>55 : 1+4+9+16+25