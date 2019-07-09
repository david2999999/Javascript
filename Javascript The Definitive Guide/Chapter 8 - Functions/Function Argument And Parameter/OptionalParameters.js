// When a function is invoked with fewer arguments than declared parameters, the additional
// parameters are set to the undefined value. It is often useful to write functions
// so that some arguments are optional and may be omitted when the function is invoked.
// To do this, you must be able to assign a reasonable default value to parameters that are
// omitted.

// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, /* optional */ a) {
    if (a === undefined) a = []; // If undefined, use a new array
    for(var property in o) a.push(property);
    return a;
}
// This function can be invoked with 1 or 2 arguments:
var a = getPropertyNames(o); // Get o's properties into a new array
getPropertyNames(p,a); // append p's properties to that array

// Instead of using an if statement in the first line of this function, you can use the ||
// operator in this idiomatic way:
a = a || [];