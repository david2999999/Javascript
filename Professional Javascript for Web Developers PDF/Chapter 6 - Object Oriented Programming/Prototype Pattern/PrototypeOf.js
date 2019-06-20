// Even though [[Prototype]] is not accessible in all implementations, the isPrototypeOf() method
// can be used to determine if this relationship exists between objects. Essentially, isPrototypeOf()
// returns true if [[Prototype]] points to the prototype on which the method is being called, as
// shown here:
alert(Person.prototype.isPrototypeOf(person1)); //true
alert(Person.prototype.isPrototypeOf(person2)); //true

// In this code, the prototype’s isPrototypeOf() method is called on both person1 and person2.
// Since both instances have a link to Person.prototype, it returns true.
// ECMAScript 5 adds a new method called Object.getPrototypeOf(), which returns the value of
// [[Prototype]] in all supporting implementations. For example:
alert(Object.getPrototypeOf(person1) == Person.prototype); //true
alert(Object.getPrototypeOf(person1).name); //”Nicholas”