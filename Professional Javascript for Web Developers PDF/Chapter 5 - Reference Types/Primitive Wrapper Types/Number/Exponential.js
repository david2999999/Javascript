// Another method related to formatting numbers is the toExponential() method, which returns a
// string with the number formatted in exponential notation (aka e-notation). Just as with toFixed(),
// toExponential() accepts one argument, which is the number of decimal places to output. Consider
// this example:
var num = 10;
alert(num.toExponential(1)); //”1.0e+1”

// This code outputs “1.0e+1” as the result. Typically, this small number wouldn’t be represented
// using e-notation. If you want to have the most appropriate form of the number, the toPrecision()
// method should be used instead.
// The toPrecision() method returns either the fi xed or the exponential representation of a number,
// depending on which makes the most sense. This method takes one argument, which is the total
// number of digits to use to represent the number (not including exponents). Here’s an example:
var num = 99;
alert(num.toPrecision(1)); //”1e+2”
alert(num.toPrecision(2)); //”99”
alert(num.toPrecision(3)); //”99.0”