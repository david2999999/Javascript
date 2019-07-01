// The var keyword is followed by a comma-separated list of variables to declare; each
// variable in the list may optionally have an initializer expression that specifies its initial
// value. For example:
var i; // One simple variable
var j = 0; // One var, one value
var p, q; // Two variables
var greeting = "hello" + name; // A complex initializer
var x = 2.34, y = Math.cos(0.75), r, theta; // Many variables
var x = 2, y = x*x; // Second var uses the first
var x = 2, // Multiple variables...
    f = function(x) { return x*x }, // each on its own line
    y = f(x);

//If a var statement appears within the body of a function, it defines local variables,
// scoped to that function. When var is used in top-level code, it declares global variables,
// visible throughout the JavaScript program. As noted in §3.10.2, global variables are
// properties of the global object. Unlike other global properties, however, properties
// created with var cannot be deleted.