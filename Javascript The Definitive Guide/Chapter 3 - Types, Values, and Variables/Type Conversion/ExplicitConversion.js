// The simplest way to perform an explicit type conversion is to use the Boolean(),
//     Number(), String(), or Object() functions. We’ve already seen these functions as constructors
// for wrapper objects (in §3.6). When invoked without the new operator, however,
//     they work as conversion functions and perform the conversions summarized in
// Table 3-2:
Number("3") // => 3
String(false) // => "false" Or use false.toString()
Boolean([]) // => true
Object(3) // => new Number(3)

// Note that any value other than null or undefined has a toString() method and the
// result of this method is usually the same as that returned by the String() function. Also
// note that Table 3-2 shows a TypeError if you attempt to convert null or undefined to
// an object. The Object() function does not throw an exception in this case: instead it
// simply returns a newly created empty object.