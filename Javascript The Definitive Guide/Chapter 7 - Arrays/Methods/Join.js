// The Array.join() method converts all the elements of an array to strings and concatenates
// them, returning the resulting string. You can specify an optional string that
// separates the elements in the resulting string. If no separator string is specified, a comma
// is used. For example, the following lines of code produce the string “1,2,3”:
var a = [1, 2, 3]; // Create a new array with these three elements
a.join(); // => "1,2,3"
a.join(" "); // => "1 2 3"
a.join(""); // => "123"
var b = new Array(10); // An array of length 10 with no elements
b.join('-') // => '---------': a string of 9 hyphens