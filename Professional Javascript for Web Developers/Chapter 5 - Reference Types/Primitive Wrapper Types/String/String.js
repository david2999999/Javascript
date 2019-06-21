// The String type is the object representation for strings and is created using the String constructor
// as follows:
var stringObject = new String("hello world");

// The methods of a String object are available on all string primitives. All three of the inherited
// methods — valueOf(), toLocaleString(), and toString() — return the object’s primitive
// string value.
// Each instance of String contains a single property, length, which indicates the number of
// characters in the string. Consider the following example:
var stringValue = "hello world";
alert(stringValue.length); //”11”