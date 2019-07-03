// The delete operator (§4.13.3) removes a property from an object. Its single operand
// should be a property access expression. Surprisingly, delete does not operate on the
// value of the property but on the property itself:
delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

// A delete expression evaluates to true if the delete succeeded or if the delete had no
// effect (such as deleting a nonexistent property). delete also evaluates to true when used
// (meaninglessly) with an expression that is not a property access expression:
o = {x:1}; // o has own property x and inherits property toString
delete o.x; // Delete x, and return true
delete o.x; // Do nothing (x doesn't exist), and return true
delete o.toString; // Do nothing (toString isn't an own property), return true
delete 1; // Nonsense, but evaluates to true

// delete does not remove properties that have a configurable attribute of false. (Though
// it will remove configurable properties of nonextensible objects.) Certain properties of
// built-in objects are nonconfigurable, as are properties of the global object created by
// variable declaration and function declaration. In strict mode, attempting to delete a
// nonconfigurable property causes a TypeError. In non-strict mode (and in
// ECMAScript 3), delete simply evaluates to false in this case:
delete Object.prototype; // Can't delete; property is non-configurable
var x = 1; // Declare a global variable
delete this.x; // Can't delete this property
function f() {} // Declare a global function
delete this.f; // Can't delete this property either

// When deleting configurable properties of the global object in non-strict mode, you can
// omit the reference to the global object and simply follow the delete operator with the
// property name:
this.x = 1; // Create a configurable global property (no var)
delete x; // And delete it

// In strict mode, however, delete raises a SyntaxError if its operand is an unqualified
// identifier like x, and you have to be explicit about the property access:
delete x; // SyntaxError in strict mode
delete this.x; // This works