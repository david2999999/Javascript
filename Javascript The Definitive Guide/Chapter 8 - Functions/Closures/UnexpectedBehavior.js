// We’ve now seen a number of examples in which two closures are defined in the same
// scope chain and share access to the same private variable or variables. This is an
//important technique, but it is just as important to recognize when closures inadvertently
// share access to a variable that they should not share.

// This function returns a function that always returns v
function constfunc(v) { return function() { return v; }; }

// Create an array of constant functions:
var funcs = [];

for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// The function at array element 5 returns the value 5.
funcs[5]() // => 5


// When working with code like this that creates multiple closures using a loop, it is a
// common error to try to move the loop within the function that defines the closures.
// Return an array of functions that return the values 0-9
function constfuncs() {
    var funcs = [];
    for(var i = 0; i < 10; i++)
        funcs[i] = function() { return i; };
    return funcs;
}
var funcs = constfuncs();
funcs[5]() // What does this return?

// The code above creates 10 closures, and stores them in an array. The closures are all
// defined within the same invocation of the function, so they share access to the variable
// i. When constfuncs() returns, the value of the variable i is 10, and all 10 closures share
// this value. Therefore, all the functions in the returned array of functions return the same
// value, which is not what we wanted at all. It is important to remember that the scope
// chain associated with a closure is “live.” Nested functions do not make private copies
// of the scope or make static snapshots of the variable bindings.