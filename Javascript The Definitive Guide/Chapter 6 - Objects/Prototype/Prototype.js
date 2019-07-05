// In ECMAScript 5, you can query the prototype of any object by passing that object to
// Object.getPrototypeOf(). There is no equivalent function in ECMAScript 3, but it is
// often possible to determine the prototype of an object o using the expression
// o.constructor.prototype. Objects created with a new expression usually inherit a
// constructor property that refers to the constructor function used to create the object.
// And, as described above, constructor functions have a prototype property that specifies
// the prototype for objects created using that constructor. This is explained in more detail
// in §9.2, which also explains why it is not a completely reliable method for determining
// an object’s prototype. Note that objects created by object literals or by
// Object.create() have a constructor property that refers to the Object() constructor.
// Thus, constructor.prototype refers to the correct prototype for object literals, but does
// not usually do so for objects created with Object.create().

// To determine whether one object is the prototype of (or is part of the prototype chain
// of) another object, use the isPrototypeOf() method. To find out if p is the prototype
// of o write p.isPrototypeOf(o)
var p = {x:1}; // Define a prototype object.
var o = Object.create(p); // Create an object with that prototype.
p.isPrototypeOf(o) // => true: o inherits from p
Object.prototype.isPrototypeOf(o) // => true: p inherits from Object.prototype