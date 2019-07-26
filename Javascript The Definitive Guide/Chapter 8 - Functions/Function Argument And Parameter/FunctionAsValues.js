// The most important features of functions are that they can be defined and invoked.
// Function definition and invocation are syntactic features of JavaScript and of most
// other programming languages. In JavaScript, however, functions are not only syntax
// but also values, which means they can be assigned to variables, stored in the properties
// of objects or the elements of arrays, passed as arguments to functions, and so on
function square(x) { return x*x; }

var s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16

var o = {square: function(x) { return x*x; }}; // An object literal
var y = o.square(16); // y equals 256

var a = [function(x) { return x*x; }, 20]; // An array literal
a[0](a[1]); // => 400

// We define some simple functions here
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

// Here's a function that takes one of the above functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}
// We could invoke this function like this to compute the value (2+3) + (4*5):
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
// For the sake of the example, we implement the simple functions again,
// this time using function literals within an object literal;
var operators = {
    add: function(x,y) { return x+y; },
    subtract: function(x,y) { return x-y; },
    multiply: function(x,y) { return x*y; },
    divide: function(x,y) { return x/y; },
    pow: Math.pow // Works for predefined functions too
};

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function")
        return operators[operation](operand1, operand2);
    else throw "unknown operator";
}

// Compute the value ("hello" + " " + "world") like this:
var j = operate2("add", "hello", operate2("add", " ", "world"));
// Using the predefined Math.pow() function:
var k = operate2("pow", 10, 2);