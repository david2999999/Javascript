// JavaScript is very flexible about the types of values it requires. We’ve seen this for
// booleans: when JavaScript expects a boolean value, you may supply a value of any type,
// and JavaScript will convert it as needed. Some values (“truthy” values) convert to
// true and others (“falsy” values) convert to false. The same is true for other types: if
// JavaScript wants a string, it will convert whatever value you give it to a string. If Java-
// Script wants a number, it will try to convert the value you give it to a number (or to
// NaN if it cannot perform a meaningful conversion). Some examples:
10 + " objects" // => "10 objects". Number 10 converts to a string
"7" * "4" // => 28: both strings convert to numbers
var n = 1 - "x"; // => NaN: string "x" can't convert to a number
n + " objects" // => "NaN objects": NaN converts to string "NaN"