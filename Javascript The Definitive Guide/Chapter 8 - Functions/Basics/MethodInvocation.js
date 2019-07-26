// The arguments and return value of a method invocation are handled exactly as described
// above for regular function invocation. Method invocations differ from function
// invocations in one important way, however: the invocation context. Property access
// expressions consist of two parts: an object (in this case o) and a property name (m). In
// a method invocation expression like this, the object o becomes the invocation context,
// and the function body can refer to that object by using the keyword this. Here is a
// concrete example:
var calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add: function() {
// Note the use of the this keyword to refer to this object.
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] is a function).

customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()