// The map() method passes each element of the array on which it is invoked to the function
// you specify, and returns an array containing the values returned by that function. For
// example:
a = [1, 2, 3];
b = a.map(function(x) { return x*x; }); // b is [1, 4, 9]

// The function you pass to map() is invoked in the same way as a function passed to
// forEach(). For the map() method, however, the function you pass should return a value.
// Note that map() returns a new array: it does not modify the array it is invoked on. If
// that array is sparse, the returned array will be sparse in the same way: it will have the
// same length and the same missing elements.