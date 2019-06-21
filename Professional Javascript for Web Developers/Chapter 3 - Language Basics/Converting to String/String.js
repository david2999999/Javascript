// If you’re not sure that a value isn’t null or undefined, you can use the String() casting function,
// which always returns a string regardless of the value type. The String() function follows these rules:
// If the value has a toString() method, it is called (with no arguments) and the result is
// returned.
// If the value is null, “null” is returned.
// If the value is undefined, “undefined” is returned.

var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
alert(String(value1)); //”10”
alert(String(value2)); //”true”
alert(String(value3)); //”null”
alert(String(value4)); //”undefined”