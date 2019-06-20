// Because function names in ECMAScript are nothing more than variables, functions can be used any
// place any other value can be used. This means it’s possible not only to pass a function into another
// function as an argument but also to return a function as the result of another function. Consider the
// following function:
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}

// This function accepts two arguments. The fi rst argument should be a function, and the second
// argument should be a value to pass to that function. Any function can then be passed in as follows:
function add10(num){
    return num + 10;
}

var result1 = callSomeFunction(add10, 10);
alert(result1); //20
function getGreeting(name){
    return “Hello, “ + name;
}

var result2 = callSomeFunction(getGreeting, “Nicholas”);
alert(result2); //”Hello, Nicholas”