// delete is a unary operator that attempts to delete the object property or array element
// specified as its operand.1 Like the assignment, increment, and decrement operators,
// delete is typically used for its property deletion side effect, and not for the value it
// returns.

var o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
var a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
a.length // => 2: array only has two elements now

// In ECMAScript 5 strict mode, delete raises a SyntaxError if its operand is an unqualified
// identifier such as a variable, function, or function parameter: it only works when the
// operand is a property access expression (§4.4). Strict mode also specifies that delete
// raises a TypeError if asked to delete any nonconfigurable property (see §6.7). Outside
// of strict mode, no exception occurs in these cases and delete simply returns false to
// indicate that the operand could not be deleted.

var o = {x:1, y:2}; // Define a variable; initialize it to an object
delete o.x; // Delete one of the object properties; returns true
typeof o.x; // Property does not exist; returns "undefined"
delete o.x; // Delete a nonexistent property; returns true
delete o; // Can't delete a declared variable; returns false.
// Would raise an exception in strict mode.
delete 1; // Argument is not an lvalue: returns true
this.x = 1; // Define a property of the a global object without var
delete x; // Try to delete it: returns true in non-strict mode
            // Exception in strict mode. Use 'delete this.x' instead
x; // Runtime error: x is not defined