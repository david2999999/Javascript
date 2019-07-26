// The function keyword is used to define functions. We saw it in function definition
// expressions in §4.3. It can also be used in statement form. Consider the following two
// functions:
var f = function(x) { return x+1; } // Expression assigned to a variable

// function f(x) { return x+1; } // Statement includes variable name
// A function declaration statement has the following syntax:
//     function funcname([arg1 [, arg2 [..., argn]]]) {
//         statements
//     }

function hypotenuse(x, y) {
    return Math.sqrt(x*x + y*y); // return is documented in the next section
}
function factorial(n) { // A recursive function
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function declaration statements differ from function definition expressions in that they
// include a function name. Both forms create a new function object, but the function
// declaration statement also declares the function name as a variable and assigns the
// function object to it. Like variables declared with var, functions defined with function
// definition statements are implicitly “hoisted” to the top of the containing script or
// function, so that they are visible throughout the script or function. With var, only the
// variable declaration is hoisted—the variable initialization code remains where you
// placed it. With function declaration statements, however, both the function name and
// the function body are hoisted: all functions in a script or all nested functions in a function
// are declared before any other code is run. This means that you can invoke a Java-
// Script function before you declare it.