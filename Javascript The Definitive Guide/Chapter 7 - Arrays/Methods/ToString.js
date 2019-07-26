// An array, like any JavaScript object, has a toString() method. For an array, this method
// converts each of its elements to a string (calling the toString() methods of its elements,
// if necessary) and outputs a comma-separated list of those strings. Note that the output
// does not include square brackets or any other sort of delimiter around the array value.
[1,2,3].toString() // Yields '1,2,3'
["a", "b", "c"].toString() // Yields 'a,b,c'
[1, [2,'c']].toString() // Yields '1,2,c'