var a = ["world"]; // Start with a one-element array
var value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

// Remember that arrays are a specialized kind of object. The square brackets used to
// access array elements work just like the square brackets used to access object properties.
// JavaScript converts the numeric array index you specify to a string—the index 1 becomes
// the string "1"—then uses that string as a property name. There is nothing special
// about the conversion of the index from a number to a string: you can do that with
// regular objects, too:
o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer

// What is special about arrays is that when you use property names that are non-negative
// integers less than 232, the array automatically maintains the value of the length property
// for you. Above, for example, we created an array a with a single element. We then
// assigned values at indexes 1, 2, and 3. The length property of the array changed as we
// did so:
a.length // => 4


a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.000] // Array index 1. Same as a[1]

// The fact that array indexes are simply a special type of object property name means
// that JavaScript arrays have no notion of an “out of bounds” error. When you try to
// query a nonexistent property of any object, you don’t get an error, you simply get
// undefined.
a = [true, false]; // This array has elements at indexes 0 and 1
a[2] // => undefined. No element at this index.
a[-1] // => undefined. No property with this name.