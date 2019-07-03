// The in operator expects a property name (as a string) on its left side and an object on
// its right. It returns true if the object has an own property or an inherited property by
// that name:

var o = { x: 1 }
"x" in o; // true: o has an own property "x"
"y" in o; // false: o doesn't have a property "y"
"toString" in o; // true: o inherits a toString property

// There is one thing the in operator can do that the simple property access technique
// shown above cannot do. in can distinguish between properties that do not exist and
// properties that exist but have been set to undefined.
var o = { x: undefined } // Property is explicitly set to undefined
o.x !== undefined // false: property exists but is undefined
o.y !== undefined // false: property doesn't even exist
"x" in o // true: the property exists
"y" in o // false: the property doesn't exists
delete o.x; // Delete the property x
"x" in o // false: it doesn't exist anymore