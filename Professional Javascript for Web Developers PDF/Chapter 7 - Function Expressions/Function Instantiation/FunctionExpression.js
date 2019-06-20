// The second way to create a function is by using a function expression. Function expressions have
// several forms. The most common is as follows:
var functionName = function(arg0, arg1, arg2){
    //function body
};

// This pattern of function expression looks like a normal variable assignment. A function is created
// and assigned to the variable functionName. The created function is considered to be an anonymous
// function, because it has no identifi er after the function keyword. (Anonymous functions are also
// sometimes called lambda functions.) This means the name property is the empty string.
//     Function expressions act like other expressions and, therefore, must be assigned before usage. The
// following causes an error:
sayHi(); //error – function doesn’t exist yet
var sayHi = function(){
    alert(“Hi!”);
};