// In addition to its array elements, the Arguments object defines callee and caller properties.
// In ECMAScript 5 strict mode, these properties are guaranteed to raise a Type-
// Error if you try to read or write them. Outside of strict mode, however, the ECMAScript
// standard says that the callee property refers to the currently running function.
// caller is a nonstandard but commonly implemented property that refers to the function
// that called this one. The caller property gives access to the call stack, and the callee
// property is occasionally useful to allow unnamed functions to call themselves
// recursively:
var factorial = function(x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x-1);
};