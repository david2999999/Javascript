var s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
s // => "hello": the original string has not changed

// Primitives are also compared by value: two values are the same only if they have the
// same value. This sounds circular for numbers, booleans, null, and undefined: there is
// no other way that they could be compared. Again, however, it is not so obvious for
//     strings. If two distinct string values are compared, JavaScript treats them as equal if,
// and only if, they have the same length and if the character at each index is the same.