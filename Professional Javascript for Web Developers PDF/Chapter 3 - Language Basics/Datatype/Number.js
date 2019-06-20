var intNum = 55; //integer


// Integers can also be represented as either octal (base 8) or hexadecimal (base 16) literals. For an
// octal literal, the fi rst digit must be a zero (0) followed by a sequence of octal digits (numbers 0
// through 7). If a number out of this range is detected in the literal, then the leading zero is ignored
// and the number is treated as a decimal
var octalNum1 = 070; //octal for 56
var octalNum2 = 079; //invalid octal - interpreted as 79
var octalNum3 = 08; //invalid octal - interpreted as 8

// To create a hexadecimal literal, you must make the fi rst two characters 0x (case insensitive),
// followed by any number of hexadecimal digits (0 through 9, and A through F).
var hexNum1 = 0xA; //hexadecimal for 10
var hexNum2 = 0x1f; //hexedecimal for 31