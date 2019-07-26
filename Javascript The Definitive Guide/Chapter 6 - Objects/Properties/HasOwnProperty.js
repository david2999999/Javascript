// The hasOwnProperty() method of an object tests whether that object has an own property
// with the given name. It returns false for inherited properties:

var o = { x: 1 }
o.hasOwnProperty("x"); // true: o has an own property x
o.hasOwnProperty("y"); // false: o doesn't have a property y
o.hasOwnProperty("toString"); // false: toString is an inherited property