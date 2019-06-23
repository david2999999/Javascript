// Note that it is possible (but almost never necessary or useful) to explicitly create wrapper
// objects, by invoking the String(), Number(), or Boolean() constructors:
var s = "test", n = 1, b = true; // A string, number, and boolean value.
var S = new String(s); // A String object
var N = new Number(n); // A Number object
var B = new Boolean(b); // A Boolean object

// JavaScript converts wrapper objects into the wrapped primitive value as necessary, so
// the objects S, N, and B above usually, but not always, behave just like the values s, n,
//     and b. The == equality operator treats a value and its wrapper object as equal, but you
// can distinguish them with the === strict equality operator. The typeof operator will also
// show you the difference between a primitive value and its wrapper object.