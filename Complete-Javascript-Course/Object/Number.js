Infinity // A read/write variable initialized to Infinity.
Number.POSITIVE_INFINITY // Same value, read-only.
1/0 // This is also the same value.
Number.MAX_VALUE + 1 // This also evaluates to Infinity.
Number.NEGATIVE_INFINITY // These expressions are negative infinity.
-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN // A read/write variable initialized to NaN.
Number.NaN // A read-only property holding the same value.
0/0 // Evaluates to NaN.
Number.MIN_VALUE/2 // Underflow: evaluates to 0
-Number.MIN_VALUE/2 // Negative zero
-1/Infinity // Also negative 0
-0

var zero = 0; // Regular zero
var negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === 1/negz // => false: infinity and -infinity are not equal

var n = 17;
binary_string = n.toString(2); // Evaluates to "10001"
octal_string = "0" + n.toString(8); // Evaluates to "021"
hex_string = "0x" + n.toString(16); // Evaluates to "0x11"


var n = 123456.789;
n.toFixed(0); // "123457"
n.toFixed(2); // "123456.79"
n.toFixed(5); // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4); // "1.235e+5"
n.toPrecision(7); // "123456.8"
n.toPrecision(10); // "123456.7890"
