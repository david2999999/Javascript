// Generally speaking, you should never explicitly set a variable to be undefi ned.
// The literal undefi ned value is provided mainly for comparison and wasn’t added
// until ECMA-262, third edition to help formalize the difference between an
// empty object pointer (null) and an uninitialized variable.

var message;
alert(message == undefined); //true

var message = undefined;
alert(message == undefined); //true

var message; //this variable is declared but has a value of undefined
//make sure this variable isn’t declared
//var age
alert(message); //”undefined”
alert(age); //causes an error