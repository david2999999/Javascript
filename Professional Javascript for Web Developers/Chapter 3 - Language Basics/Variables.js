var message = “hi”;
message = 100; //legal, but not recommended


// Although it’s possible to define global variables by omitting the var operator, this
// approach is not recommended. Global variables defined locally are hard to
// maintain and cause confusion, because it’s not immediately apparent if the omission
// of var was intentional. Strict mode throws a ReferenceError when an undeclared
// variable is assigned a value.
function test(){
    var message = “hi”; //local variable
}
test();
alert(message); //error!


function test(){
    message = “hi”; //global variable
}
test();
alert(message); //”hi”