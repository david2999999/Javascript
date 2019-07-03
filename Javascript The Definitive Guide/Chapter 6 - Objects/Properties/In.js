// The in operator expects a property name (as a string) on its left side and an object on
// its right. It returns true if the object has an own property or an inherited property by
// that name:

var o = { x: 1 }
"x" in o; // true: o has an own property "x"
"y" in o; // false: o doesn't have a property "y"
"toString" in o; // true: o inherits a toString property