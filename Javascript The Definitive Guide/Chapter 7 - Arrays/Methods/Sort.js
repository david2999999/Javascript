// Array.sort() sorts the elements of an array in place and returns the sorted array. When
// sort() is called with no arguments, it sorts the array elements in alphabetical order
// (temporarily converting them to strings to perform the comparison, if necessary):
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"

// To sort an array into some order other than alphabetical, you must pass a comparison
// function as an argument to sort(). This function decides which of its two arguments
// should appear first in the sorted array. If the first argument should appear before the
// second, the comparison function should return a number less than zero. If the first
// argument should appear after the second in the sorted array, the function should return
// a number greater than zero. And if the two values are equivalent (i.e., if their order is
// irrelevant), the comparison function should return 0. So, for example, to sort array
// elements into numerical rather than alphabetical order, you might do this:
var a = [33, 4, 1111, 222];
a.sort(); // Alphabetical order: 1111, 222, 33, 4
a.sort(function(a,b) { // Numerical order: 4, 33, 222, 1111
    return a-b; // Returns &lt; 0, 0, or &gt; 0, depending on order
});
a.sort(function(a,b) {return b-a}); // Reverse numerical order

// As another example of sorting array items, you might perform a case-insensitive alphabetical
// sort on an array of strings by passing a comparison function that converts
// both of its arguments to lowercase (with the toLowerCase() method) before comparing
// them:
a = ['ant', 'Bug', 'cat', 'Dog']
a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function(s,t) { // Case-insensitive sort
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}); // => ['ant','Bug','cat','Dog']