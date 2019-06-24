// If you pass a string to the Number() conversion function, it attempts to parse that string
// as an integer or floating-point literal. That function only works for base-10 integers,
//     and does not allow trailing characters that are not part of the literal. The parseInt()
// and parseFloat() functions (these are global functions, not methods of any class) are
// more flexible. parseInt() parses only integers, while parseFloat() parses both integers
// and floating-point numbers. If a string begins with “0x” or “0X”, parseInt() interprets
// it as a hexadecimal number.2 Both parseInt() and parseFloat() skip leading whitespace,
// parse as many numeric characters as they can, and ignore anything that follows.
//     If the first nonspace character is not part of a valid numeric literal, they return NaN:
parseInt("3 blind mice") // => 3
parseFloat(" 3.14 meters") // => 3.14
parseInt("-12.34") // => -12
parseInt("0xFF") // => 255
parseInt("0xff") // => 255
parseInt("-0XFF") // => -255
parseFloat(".1") // => 0.1
parseInt("0.1") // => 0
parseInt(".1") // => NaN: integers can't start with "."
parseFloat("$72.47"); // => NaN: numbers can't start with "$"

// parseInt() accepts an optional second argument specifying the radix (base) of the
// number to be parsed. Legal values are between 2 and 36. For example:
parseInt("11", 2); // => 3 (1*2 + 1)
parseInt("ff", 16); // => 255 (15*16 + 15)
parseInt("zz", 36); // => 1295 (35*36 + 35)
parseInt("077", 8); // => 63 (7*8 + 7)
parseInt("077", 10); // => 77 (7*10 + 7)