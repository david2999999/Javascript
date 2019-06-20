// ECMA-262 describes prototype chaining as the primary method of inheritance in ECMAScript.
// The basic idea is to use the concept of prototypes to inherit properties and methods between two
// reference types. Recall the relationship between constructors, prototypes, and instances: each
// constructor has a prototype object that points back to the constructor, and instances have an
// internal pointer to the prototype. What if the prototype were actually an instance of another type?
// That would mean the prototype itself would have a pointer to a different prototype that, in turn,
// would have a pointer to another constructor. If that prototype were also an instance of another
// type, then the pattern would continue, forming a chain between instances and prototypes. This is
// the basic idea behind prototype chaining.

function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); //true

// The relationship between prototypes and instances is discernible in two ways. The fi rst way is to use
// the instanceof operator, which returns true whenever an instance is used with a constructor that
// appears in its prototype chain
alert(instance instanceof Object); //true
alert(instance instanceof SuperType); //true
alert(instance instanceof SubType); //true

// The second way to determine this relationship is to use the isPrototypeOf() method. Each
// prototype in the chain has access to this method, which returns true for an instance in the chain,
// as in this example:
alert(Object.prototype.isPrototypeOf(instance)); //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance)); //true