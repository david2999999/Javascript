// When you declare a global JavaScript variable, what you are actually doing is defining
// a property of the global object (§3.5). If you use var to declare the variable, the property
// that is created is nonconfigurable (see §6.7), which means that it cannot be deleted
// with the delete operator. We’ve already noted that if you’re not using strict mode and
// you assign a value to an undeclared variable, JavaScript automatically creates a global
// variable for you. Variables created in this way are regular, configurable properties of
// the global object and they can be deleted:
var truevar = 1; // A properly declared global variable, nondeletable.
fakevar = 2; // Creates a deletable property of the global object.
this.fakevar2 = 3; // This does the same thing.
delete truevar // => false: variable not deleted
delete fakevar // => true: variable deleted
delete this.fakevar2 // => true: variable deleted