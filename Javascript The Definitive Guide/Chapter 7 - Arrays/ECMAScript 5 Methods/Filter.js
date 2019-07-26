// The filter() method returns an array containing a subset of the elements of the array
// on which it is invoked. The function you pass to it should be predicate: a function that
// returns true or false. The predicate is invoked just as for forEach() and map(). If the
// return value is true, or a value that converts to true, then the element passed to the
// predicate is a member of the subset and is added to the array that will become the return
// value.
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]
everyother = a.filter(function(x,i) { return i%2==0 }); // [5, 3, 1]

// Note that filter() skips missing elements in sparse arrays, and that its return value is
// always dense. To close the gaps in a sparse array, you can do this:
var dense = sparse.filter(function() { return true; });

// And to close gaps and remove undefined and null elements you can use filter like this:
a = a.filter(function(x) { return x !== undefined && x != null; });