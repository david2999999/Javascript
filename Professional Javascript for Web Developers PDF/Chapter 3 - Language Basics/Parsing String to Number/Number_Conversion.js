// There are three functions to convert nonnumeric values into numbers: the Number() casting
// function, the parseInt() function, and the parseFloat() function. The fi rst function, Number(),
// can be used on any data type; the other two functions are used specifi cally for converting strings to
// numbers.

var num1 = Number("Hello world!"); //NaN
var num2 = Number(""); //0
var num3 = Number("000011"); //11
var num4 = Number(true); //1