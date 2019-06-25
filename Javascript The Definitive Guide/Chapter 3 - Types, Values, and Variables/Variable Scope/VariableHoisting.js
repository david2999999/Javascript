// JavaScript’s function scope means that all variables declared within a function are visible
// throughout the body of the function. Curiously, this means that variables are even
// visible before they are declared. This feature of JavaScript is informally known as hoisting:
// JavaScript code behaves as if all variable declarations in a function (but not any
// associated assignments) are “hoisted” to the top of the function. Consider the following
// code:
var scope = "global";
function f() {
    console.log(scope); // Prints "undefined", not "global"
    var scope = "local"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}

// You might think that the first line of the function would print “global”, because the
// var statement declaring the local variable has not yet been executed. Because of the
// rules of function scope, however, this is not what happens. The local variable is defined
// throughout the body of the function, which means the global variable by the same name
// is hidden throughout the function. Although the local variable is defined throughout,
//     it is not actually initialized until the var statement is executed. Thus, the function above
// is equivalent to the following, in which the variable declaration is “hoisted” to the top
// and the variable initialization is left where it is:
function f() {
    var scope; // Local variable is declared at the top of the function
    console.log(scope); // It exists here, but still has "undefined" value
    scope = "local"; // Now we initialize it and give it a value
    console.log(scope); // And here it has the value we expect
}