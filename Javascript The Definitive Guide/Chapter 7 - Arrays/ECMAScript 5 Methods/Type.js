// We’ve seen throughout this chapter that arrays are objects with some special behavior.
// Given an unknown object, it is often useful to be able to determine whether it is an
// array or not. In ECMAScript 5, you can do this with the Array.isArray() function
Array.isArray([]) // => true
Array.isArray({}) // => false

// This test of the class attribute is, in fact, exactly what the ECMAScript 5
// Array.isArray() function does. The technique for obtaining the class of an object using
// Object.prototype.toString() is explained in §6.8.2 and demonstrated in Example 6-4.
var isArray = Function.isArray || function(o) {
    return typeof o === "object" &&
        Object.prototype.toString.call(o) === "[object Array]";
};