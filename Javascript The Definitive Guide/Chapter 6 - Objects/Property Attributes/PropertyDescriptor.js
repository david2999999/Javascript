//The ECMAScript 5 methods for querying and setting the attributes of a property use
// an object called a property descriptor to represent the set of four attributes. A property
// descriptor object has properties with the same names as the attributes of the property
// it describes. Thus, the property descriptor object of a data property has properties
// named value, writable, enumerable, and configurable. And the descriptor for an accessor
// property has get and set properties instead of value and writable. The writa
// ble, enumerable, and configurable properties are boolean values, and the get and set
// properties are function values, of course

// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({x:1}, "x");

// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited