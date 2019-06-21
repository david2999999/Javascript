// Some of the most interesting parts of ECMAScript are its functions, primarily because functions
// actually are objects. Each function is an instance of the Function type that has properties and
// methods just like any other reference type. Because functions are objects, function names are simply
// pointers to function objects and are not necessarily tied to the function itself. Functions are typically
// defi ned using function-declaration syntax
function sum (num1, num2) {
    return num1 + num2;
}

var sum = function(num1, num2){
    return num1 + num2;
};

// The last way to defi ne functions is by using the Function constructor, which accepts any number
// of arguments. The last argument is always considered to be the function body, and the previous
// arguments enumerate the new function’s arguments.
var sum = new Function("num1", "num2", "return num1 + num2"); //not recommended