// The final method is perhaps the most powerful in the entire ECMAScript language: the eval()
// method. This method works like an entire ECMAScript interpreter and accepts one argument, a
// string of ECMAScript (or JavaScript) to execute. Here’s an example:
eval(“alert(‘hi’)”);

// This line is functionally equivalent to the following:
alert(“hi”);

// Here, the variable msg is defi ned outside the context of the eval() call, yet the call to alert()
// still displays the text “hello world”, because the second line is replaced with a real line of code.
// Likewise, you can defi ne a function or variables inside an eval() call that can be referenced by the
// code outside, as follows:
eval(“function sayHi() { alert(‘hi’); }”);
sayHi();

// Here, the sayHi() function is defi ned inside an eval() call. Because that call is replaced with the
// actual function, it is possible to call sayHi() on the following line. This works the same for variables:
eval(“var msg = ‘hello world’;”);
alert(msg); //”hello world”

// Any variables or functions created inside of eval() will not be hoisted, as they are contained within
// a string when the code is being parsed. They are created only at the time of eval() execution.
// In strict mode, variables and functions created inside of eval() are not accessible outside, so these
// last two examples would cause errors. Also, in strict mode, assigning a value to eval causes an error:
“use strict”;
eval = “hi”; //causes error