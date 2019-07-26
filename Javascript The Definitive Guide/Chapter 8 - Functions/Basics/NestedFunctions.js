function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}

// The interesting thing about nested functions is their variable scoping rules: they can
// access the parameters and variables of the function (or functions) they are nested within.
// In the code above, for example, the inner function square() can read and write the
// parameters a and b defined by the outer function hypotenuse(). These scope rules for
// nested functions are very important, and we’ll consider them again in §8.6.

// As noted in §5.3.2, function declaration statements are not true statements, and the
// ECMAScript specification only allows them as top-level statements. They can appear
// in global code, or within other functions, but they cannot appear inside of loops, conditionals,
// or try/catch/finally or with statements.1 Note that this restriction applies
// only to functions declared as statements. Function definition expressions may appear
// anywhere in your JavaScript code.