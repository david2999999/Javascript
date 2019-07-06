// ECMAScript 5 defines functions for querying and setting the extensibility of an object.
// To determine whether an object is extensible, pass it to Object.isExtensible(). To
// make an object nonextensible, pass it to Object.preventExtensions(). Note that there
// is no way to make an object extensible again once you have made it nonextensible. Also
// note that calling preventExtensions() only affects the extensibility of the object itself.
// If new properties are added to the prototype of a nonextensible object, the nonextensible
// object will inherit those new properties.

// The purpose of the extensible attribute is to be able to “lock down” objects into a known
// state and prevent outside tampering. The extensible object attribute is often used in
// conjunction with the configurable and writable property attributes, and
// ECMAScript 5 defines functions that make it easy to set these attributes together.
// Object.seal() works like Object.preventExtensions(), but in addition to making the
// object nonextensible, it also makes all of the own properties of that object nonconfigurable.
// This means that new properties cannot be added to the object, and existing
// properties cannot be deleted or configured. Existing properties that are writable can
// still be set, however. There is no way to unseal a sealed object. You can use
// Object.isSealed() to determine whether an object is sealed.

// Object.freeze() locks objects down even more tightly. In addition to making the object
// nonextensible and its properties nonconfigurable, it also makes all of the object’s own
// data properties read-only. (If the object has accessor properties with setter methods,
// these are not affected and can still be invoked by assignment to the property.) Use
// Object.isFrozen() to determine if an object is frozen.

// Create a sealed object with a frozen prototype and a nonenumerable property
var o = Object.seal(Object.create(Object.freeze({x:1}),
    {y: {value: 2, writable: true}}));