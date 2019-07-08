// indexOf() and lastIndexOf() search an array for an element with a specified value, and
// return the index of the first such element found, or –1 if none is found. indexOf()
// searches the array from beginning to end, and lastIndexOf() searches from end to
// beginning.
a = [0,1,2,1,0];
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
    var results = [], // The array of indexes we'll return
        len = a.length, // The length of the array to be searched
        pos = 0; // The position to search from
    while(pos < len) { // While more elements to search...
        pos = a.indexOf(x, pos); // Search
        if (pos === -1) break; // If nothing found, we're done.
        results.push(pos); // Otherwise, store index in array
        pos = pos + 1; // And start next search at next element
    }
    return results; // Return array of indexes
}