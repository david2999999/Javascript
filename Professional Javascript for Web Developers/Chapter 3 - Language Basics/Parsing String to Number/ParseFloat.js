// The parseFloat() function works in a similar way to parseInt(), looking at each character
// starting in position 0. It also continues to parse the string until it reaches either the end of the string
// or a character that is invalid in a fl oating-point number. This means that a decimal point is valid
// the fi rst time it appears, but a second decimal point is invalid and the rest of the string is ignored,
// resulting in “22.34.5” being converted to 22.34.
// Another difference in parseFloat() is that initial zeros are always ignored. This function will
// recognize any of the fl oating-point formats discussed earlier, as well as the decimal format (leading
// zeros are always ignored). Hexadecimal numbers always become 0. Because parseFloat() parses
// only decimal values, there is no radix mode. A fi nal note: if the string represents a whole number
// (no decimal point or only a zero after the decimal point), parseFloat() returns an integer

var num1 = parseFloat(“1234blue”); //1234 - integer
var num2 = parseFloat(“0xA”); //0
var num3 = parseFloat(“22.5”); //22.5
var num4 = parseFloat(“22.34.5”); //22.34
var num5 = parseFloat(“0908.5”); //908.5
var num6 = parseFloat(“3.125e7”); //31250000