// When working with financial or scientific data, you may want to convert numbers to
// strings in ways that give you control over the number of decimal places or the number
// of significant digits in the output, or you may want to control whether exponential
// notation is used. The Number class defines three methods for these kinds of numberto-
// string conversions. toFixed() converts a number to a string with a specified number
// of digits after the decimal point. It never uses exponential notation. toExponential()
// converts a number to a string using exponential notation, with one digit before the
// decimal point and a specified number of digits after the decimal point (which means
// that the number of significant digits is one larger than the value you specify). toPreci
// sion() converts a number to a string with the number of significant digits you specify.
//     It uses exponential notation if the number of significant digits is not large enough to
// display the entire integer portion of the number. Note that all three methods round the
// trailing digits or pad with zeros as appropriate. Consider the following examples:
var n = 123456.789;
n.toFixed(0); // "123457"
n.toFixed(2); // "123456.79"
n.toFixed(5); // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4); // "1.235e+5"
n.toPrecision(7); // "123456.8"
n.toPrecision(10); // "123456.7890"