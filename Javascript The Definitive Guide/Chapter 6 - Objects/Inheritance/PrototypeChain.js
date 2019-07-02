// Suppose you query the property x in the object o. If o does not have an own property
// with that name, the prototype object of o is queried for the property x. If the prototype
// object does not have an own property by that name, but has a prototype itself, the query
// is performed on the prototype of the prototype. This continues until the property x is
// found or until an object with a null prototype is searched. As you can see, the prototype
// attribute of an object creates a chain or linked list from which properties are
// inherited.

var o = {} // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
var q = inherit(p); // q inherits properties from p, o, and Object.prototype
q.z = 3; // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3: x and y are inherited from o and p