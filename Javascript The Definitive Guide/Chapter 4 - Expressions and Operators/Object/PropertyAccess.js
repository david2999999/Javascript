// A property access expression evaluates to the value of an object property or an array
// element. JavaScript defines two syntaxes for property access:
//      expression . identifier
//      expression [ expression ]
// The first style of property access is an expression followed by a period and an identifier.
//     The expression specifies the object, and the identifier specifies the name of the desired
// property. The second style of property access follows the first expression (the object or
// array) with another expression in square brackets. This second expression specifies the
// name of the desired property of the index of the desired array element. Here are some
// concrete examples:
var o = {x:1,y:{z:3}}; // An example object
var a = [o,4,[5,6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]