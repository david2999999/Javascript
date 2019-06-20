// Because of the complexities and oddities of the Number() function when converting strings, the
// parseInt() function is usually a better option when you are dealing with integers. The parseInt()
// function examines the string much more closely to see if it matches a number pattern. Leading white
// space in the string is ignored until the fi rst non–white space character is found. If this fi rst character
// isn’t a number, the minus sign, or the plus sign, parseInt() always returns NaN, which means the
// empty string returns NaN (unlike with Number(), which returns 0). If the fi rst character is a number,
// plus, or minus, then the conversion goes on to the second character and continues on until either
// the end of the string is reached or a nonnumeric character is found. For instance, “1234blue” is
// converted to 1234 because “blue” is completely ignored. Similarly, “22.5” will be converted to 22
// because the decimal is not a valid integer character.
// Assuming that the fi rst character in the string is a number, the parseInt() function also recognizes
// the various integer formats (decimal, octal, and hexadecimal, as discussed previously). This means
// when the string begins with “0x”, it is interpreted as a hexadecimal integer; if it begins with “0”
// followed by a number, it is interpreted as an octal value

var num1 = parseInt(“1234blue”); //1234
var num2 = parseInt(“”); //NaN
var num3 = parseInt(“0xA”); //10 - hexadecimal
var num4 = parseInt(22.5); //22
var num5 = parseInt(“70”); //70 - decimal
var num6 = parseInt(“0xf”); //15 - hexadecimal