//The instanceof operator expects a left-side operand that is an object and a right-side
// operand that identifies a class of objects. The operator evaluates to true if the left-side
// object is an instance of the right-side class and evaluates to false otherwise. Chapter
// 9 explains that, in JavaScript, classes of objects are defined by the constructor
// function that initializes them. Thus, the right-side operand of instanceof should be a
// function
var d = new Date(); // Create a new object with the Date() constructor
d instanceof Date; // Evaluates to true; d was created with Date()
d instanceof Object; // Evaluates to true; all objects are instances of Object
d instanceof Number; // Evaluates to false; d is not a Number object
var a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array; // Evaluates to true; a is an array
a instanceof Object; // Evaluates to true; all arrays are objects
a instanceof RegExp; // Evaluates to false; arrays are not regular expressions

//Note that all objects are instances of Object. instanceof considers the “superclasses”
// when deciding whether an object is an instance of a class. If the left-side operand of
// instanceof is not an object, instanceof returns false. If the right-hand side is not a
// function, it throws a TypeError.