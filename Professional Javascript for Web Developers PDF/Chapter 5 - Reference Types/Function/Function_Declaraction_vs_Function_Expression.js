// Throughout this section, the function declaration and function expression are referred to as being
// almost equivalent. This hedging is due to one major difference in the way that a JavaScript engine
// loads data into the execution context. Function declarations are read and available in an execution
// context before any code is executed, whereas function expressions aren’t complete until the
// execution reaches that line of code. Consider the following:
alert(sum(10,10));
function sum(num1, num2){
    return num1 + num2;
}

// This code runs perfectly, because function declarations are read and added to the execution context
// before the code begins running through a process called function declaration hoisting. As the code
// is being evaluated, the JavaScript engine does a fi rst pass for function declarations and pulls them
// to the top of the source tree. So even though the function declaration appears after its usage in the
// actual source code, the engine changes this to hoist the function declarations to the top. Changing
// the function declaration to an equivalent function expression, as in the following example, will
// cause an error during execution:
alert(sum(10,10));
var sum = function(num1, num2){
    return num1 + num2;
};

// This updated code will cause an error, because the function is part of an initialization statement,
// not part of a function declaration. That means the function isn’t available in the variable sum
// until the highlighted line has been executed, which won’t happen, because the fi rst line causes an
// “unexpected identifier” error.