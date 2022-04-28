// JavaScript's most important data type is the object.
// An object is a collection of name/value pairs, or a string to value map.
var book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // The property "topic" has value "JavaScript".
    fat: true // The property "fat" has value true.
}; // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["fat"] // => true: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

// JavaScript also supports arrays (numerically indexed lists) of values:
var primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
var empty = []; // [] is an empty array with no elements.
empty.length // => 0

// Arrays and objects can hold other arrays and objects:
var points = [ // An array with 2 elements.
    {x:0, y:0}, // Each element is an object.
    {x:1, y:1}
];
var data = { // An object with 2 properties
    trial1: [[1,2], [3,4]], // The value of each property is an array.
    trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};

var o = { x:1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
var a = [1,2,3] // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

var o = {x:1}, p = {x:1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
var a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal

var a = []; // The variable a refers to an empty array.
var b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.
