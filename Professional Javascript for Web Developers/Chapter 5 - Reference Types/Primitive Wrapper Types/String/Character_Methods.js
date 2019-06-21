// Two methods access specifi c characters in the string: charAt() and charCodeAt(). These methods
// each accept a single argument, which is the character’s zero-based position. The charAt() method
// simply returns the character in the given position as a single-character string. (There is no character
// type in ECMAScript.) For example:
var stringValue = "hello world";
alert(stringValue.charAt(1)); //”e”

// The character in position 1 of “hello world” is “e”, so calling charAt(1) returns “e”. If you want
// the character’s character code instead of the actual character, then calling charCodeAt() is the
// appropriate choice, as in the following example:
var stringValue = "hello world";
alert(stringValue.charCodeAt(1)); //outputs “101”

// This example outputs “101”, which is the character code for the lowercase “e” character.
// ECMAScript 5 defi nes another way to access an individual character. Supporting browsers allow
// you to use bracket notation with a numeric index to access a specifi c character in the string, as in
// this example:
var stringValue = "hello world";
alert(stringValue[1]); //”e”