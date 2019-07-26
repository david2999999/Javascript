// The propertyIsEnumerable() refines the hasOwnProperty() test. It returns true only if
// the named property is an own property and its enumerable attribute is true. Certain
// built-in properties are not enumerable. Properties created by normal JavaScript code
// are enumerable unless you’ve used one of the ECMAScript 5 methods shown later to
// make them nonenumerable.
var o = inherit({ y: 2 });
o.x = 1;
o.propertyIsEnumerable("x"); // true: o has an own enumerable property x
o.propertyIsEnumerable("y"); // false: y is inherited, not own
Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable