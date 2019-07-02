// Property assignment examines the prototype chain to determine whether the assignment
// is allowed. If o inherits a read-only property named x, for example, then the
// assignment is not allowed. (Details about when a property may be set are in §6.2.3.) If
// the assignment is allowed, however, it always creates or sets a property in the original
// object and never modifies the prototype chain. The fact that inheritance occurs when
// querying properties but not when setting them is a key feature of JavaScript because it
// allows us to selectively override inherited properties:

var unitcircle = { r:1 }; // An object to inherit from
var c = inherit(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r; // => 1: the prototype object is not affected

// There is one exception to the rule that a property assignment either fails or creates or
// sets a property in the original object. If o inherits the property x, and that property is
// an accessor property with a setter method (see §6.6), then that setter method is called
// rather than creating a new property x in o. Note, however, that the setter method is
// called on the object o, not on the prototype object that defines the property, so if the
//     setter method defines any properties, it will do so on o, and it will again leave the
// prototype chain unmodified.