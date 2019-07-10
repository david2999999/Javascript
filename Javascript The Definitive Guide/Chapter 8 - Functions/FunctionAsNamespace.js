// Suppose, for example, you have a module of JavaScript code that you want to use in a
// number of different JavaScript programs (or, for client-side JavaScript, on a number of
// different web pages). Assume that this code, like most code, defines variables to store
// the intermediate results of its computation. The problem is that since this module will
// be used in many different programs, you don’t know whether the variables it creates
// will conflict with variables used by the programs that import it. The solution, of course,
// is to put the code into a function and then invoke the function. This way, variables that
// would have been global become local to the function:
function mymodule() {
    // Module code goes here.
    // Any variables used by the module are local to this function
    // instead of cluttering up the global namespace.
}
mymodule(); // But don't forget to invoke the function!

(function() { // mymodule function rewritten as an unnamed expression
// Module code goes here.
}()); // end the function literal and invoke it now.

// This technique of defining and invoking a function in a single expression is used frequently
// enough that it has become idiomatic. Note the use of parentheses in the code
// above. The open parenthesis before function is required because without it, the Java-
// Script interpreter tries to parse the function keyword as a function declaration statement.
// With the parenthesis, the interpreter correctly recognizes this as a function
// definition expression. It is idiomatic to use the parentheses, even when they are not
// required, around a function that is to be invoked immediately after being defined

// Define an extend function that copies the properties of its second and
// subsequent arguments onto its first argument.
// We work around an IE bug here: in many versions of IE, the for/in loop
// won't enumerate an enumerable property of o if the prototype of o has
// a nonenumerable property by the same name. This means that properties
// like toString are not handled correctly unless we explicitly check for them.
var extend = (function() { // Assign the return value of this function
    // First check for the presence of the bug before patching it.
    for(var p in {toString:null}) {
        // If we get here, then the for/in loop works correctly and we return
        // a simple version of the extend() function
        return function extend(o) {
            for(var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for(var prop in source) o[prop] = source[prop];
            }
            return o;
        };
    }

    // If we get here, it means that the for/in loop did not enumerate
    // the toString property of the test object. So return a version
    // of the extend() function that explicitly tests for the nonenumerable
    // properties of Object.prototype.
    return function patched_extend(o) {
        for(var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            // Copy all the enumerable properties
            for(var prop in source) o[prop] = source[prop];
            // And now check the special-case properties
            for(var j = 0; j < protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) o[prop] = source[prop];
            }
        }
        return o;
    };
    // This is the list of special-case properties we check for
    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
        "isPrototypeOf", "propertyIsEnumerable","toLocaleString"];
}());