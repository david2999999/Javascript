// To set the attributes of a property, or to create a new property with the specified attributes,
// call Object.defineProperty(), passing the object to be modified, the name of
// the property to be created or altered, and the property descriptor object:

var o = {}; // Start with no properties at all

// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", { value : 1,
    writable: true,
    enumerable: false,
    configurable: true});

// Check that the property is there but is nonenumerable
o.x; // => 1
Object.keys(o) // => []

// Now modify the property x so that it is read-only
Object.defineProperty(o, "x", { writable: false });

// Try to change the value of the property
o.x = 2; // Fails silently or throws TypeError in strict mode
o.x // => 1

// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
o.x // => 2

// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function() { return 0; } });
o.x // => 0

// If you want to create or modify more than one property at a time, use Object.define
// Properties(). The first argument is the object that is to be modified. The second argument
// is an object that maps the names of the properties to be created or modified to
// the property descriptors for those properties
var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable:true, configurable:true },
    y: { value: 1, writable: true, enumerable:true, configurable:true },
    r: {
        get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
        enumerable:true,
        configurable:true
    }
});