// Several methods manipulate the values of strings. The fi rst of these methods is concat(), which is
// used to concatenate one or more strings to another, returning the concatenated string as the result.
// Consider the following example:
var stringValue = “hello “;
var result = stringValue.concat(“world”);
alert(result); //”hello world”
alert(stringValue); //”hello”

// The result of calling the concat() method on stringValue in this example is “hello world” — the
// value of stringValue remains unchanged. The concat() method accepts any number of arguments,
// so it can create a string from any number of other strings, as shown here:
var stringValue = “hello “;
var result = stringValue.concat(“world”, “!”);
alert(result); //”hello world!”
alert(stringValue); //”hello”

// This modified example concatenates “world” and “!” to the end of “hello “. Although the
// concat() method is provided for string concatenation, the addition operator (+) is used more often
// and, in most cases, actually performs better than the concat() method even when concatenating
// multiple strings.