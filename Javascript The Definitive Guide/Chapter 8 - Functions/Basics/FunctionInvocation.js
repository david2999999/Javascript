// Functions are invoked as functions or as methods with an invocation expression
// (§4.5). An invocation expression consists of a function expression that evaluates to a
// function object followed by an open parenthesis, a comma-separated list of zero or
// more argument expressions, and a close parenthesis. If the function expression is a
// property-access expression—if the function is the property of an object or an element
// of an array—then it is a method invocation expression. That case will be explained
// below. The following code includes a number of regular function invocation
// expressions:
printprops({x:1});
var total = distance(0,0,2,1) + distance(2,1,3,5);
var probability = factorial(5)/factorial(13);

// For regular function invocation, the return value of the function becomes the value of
// the invocation expression. If the function returns because the interpreter reaches the
// end, the return value is undefined. If the function returns because the interpreter executes
// a return, the return value is the value of the expression that follows the return or
// undefined if the return statement has no value.