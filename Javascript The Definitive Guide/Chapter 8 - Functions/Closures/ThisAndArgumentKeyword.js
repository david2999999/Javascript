// Another thing to remember when writing closures is that this is a JavaScript keyword,
// not a variable. As discussed earlier, every function invocation has a this value, and a
// closure cannot access the this value of its outer function unless the outer function has
// saved that value into a variable:
var self = this; // Save this value in a variable for use by nested funcs.

// The arguments binding is similar. This is not a language keyword, but it is automatically
// declared for every function invocation. Since a closure has its own binding for
// arguments, it cannot access the outer function’s arguments array unless the outer function
// has saved that array into a variable by a different name:
var outerArguments = arguments; // Save for use by nested functions