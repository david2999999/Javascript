// Unlike variables, the this keyword does not have a scope, and nested functions do not
// inherit the this value of their caller. If a nested function is invoked as a method, its
// this value is the object it was invoked on. If a nested function is invoked as a function
// then its this value will be either the global object (non-strict mode) or undefined (strict
// mode). It is a common mistake to assume that a nested function invoked as a function
// can use this to obtain the invocation context of the outer function. If you want to access
// the this value of the outer function, you need to store that value into a variable that is
// in scope for the inner function. It is common to use the variable self for this purpose.
var o = { // An object o.
    m: function() { // Method m of the object.
        var self = this; // Save the this value in a variable.
        console.log(this === o); // Prints "true": this is the object o.
        f(); // Now call the helper function f().
        function f() { // A nested function f
            console.log(this === o); // "false": this is global or undefined
            console.log(self === o); // "true": self is the outer this value.
        }
    }
};
o.m(); // Invoke the method m on the object o.

