// The typeof operator, introduced in the previous chapter, is the best way to determine if a variable is a
// primitive type. More specifi cally, it’s the best way to determine if a variable is a string, number, Boolean,
// or undefined. If the value is an object or null, then typeof returns “object”,

var s = “Nicholas”;
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

alert(typeof s); //string
alert(typeof i); //number
alert(typeof b); //boolean
alert(typeof u); //undefined
alert(typeof n); //object
alert(typeof o); //object