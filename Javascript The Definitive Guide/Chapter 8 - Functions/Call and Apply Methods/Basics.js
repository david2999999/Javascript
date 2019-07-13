// call() and apply() allow you to indirectly invoke (§8.2.4) a function as if it were a
// method of some other object. (We used the call() method in Example 6-4 to invoke
// Object.prototype.toString on an object whose class we wanted to determine, for example.)
// The first argument to both call() and apply() is the object on which the function
// is to be invoked; this argument is the invocation context and becomes the value
// of the this keyword within the body of the function. To invoke the function f() as a
// method of the object o (passing no arguments), you could use either call() or apply():
f.call(o);
f.apply(o);

// Either of the lines of code above are similar to the following (which assume that o does
// not already have a property named m):
o.m = f; // Make f a temporary method of o.
o.m(); // Invoke it, passing no arguments.
delete o.m; // Remove the temporary method.