// The toString() method defined by the Number class accepts an optional argument
// that specifies a radix, or base, for the conversion. If you do not specify the argument,
//     the conversion is done in base 10. However, you can also convert numbers in other
// bases (between 2 and 36). For example:
var n = 17;
binary_string = n.toString(2); // Evaluates to "10001"
octal_string = "0" + n.toString(8); // Evaluates to "021"
hex_string = "0x" + n.toString(16); // Evaluates to "0x11"