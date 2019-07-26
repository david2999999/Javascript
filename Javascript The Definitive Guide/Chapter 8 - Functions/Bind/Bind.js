// The bind() method was added in ECMAScript 5, but it is easy to simulate in
// ECMAScript 3. As its name implies, the primary purpose of bind() is to bind a function
// to an object. When you invoke the bind() method on a function f and pass an object
// o, the method returns a new function. Invoking the new function (as a function) invokes
// the original function f as a method of o. Any arguments you pass to the new function
// are passed to the original function. For example:
function f(y) { return this.x + y; } // This function needs to be bound
var o = { x : 1 }; // An object we'll bind to
var g = f.bind(o); // Calling g(x) invokes o.f(x)
g(2) // => 3

// It is easy to accomplish this kind of binding with code like the following:
// Return a function that invokes f as a method of o, passing all its arguments.
function bind(f, o) {
    if (f.bind) return f.bind(o); // Use the bind method, if there is one
    else return function() { // Otherwise, bind it like this
        return f.apply(o, arguments);
    };
}