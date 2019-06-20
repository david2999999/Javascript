// ECMAScript provides three methods for creating string values from a substring: slice(), substr(),
// and substring(). All three methods return a substring of the string they act on, and all accept either
// one or two arguments. The fi rst argument is the position where capture of the substring begins; the
// second argument, if used, indicates where the operation should stop. For slice() and substring(),
// this second argument is the position before which capture is stopped (all characters up to this point
// are included except the character at that point). For substr(), the second argument is the number
// of characters to return. If the second argument is omitted in any case, it is assumed that the ending
// position is the length of the string. Just as with the concat() method, slice(), substr(), and
// substring() do not alter the value of the string itself — they simply return a primitive string value
// as the result, leaving the original unchanged. Consider this example:
var stringValue = “hello world”;
alert(stringValue.slice(3)); //”lo world”
alert(stringValue.substring(3)); //”lo world”
alert(stringValue.substr(3)); //”lo world”
alert(stringValue.slice(3, 7)); //”lo w”
alert(stringValue.substring(3,7)); //”lo w”
alert(stringValue.substr(3, 7)); //”lo worl”

// For the substr() method, a negative fi rst argument is treated as the length of the string plus the
// number, whereas a negative second number is converted to 0. For the substring() method, all
// negative numbers are converted to 0. Consider this example:
var stringValue = “hello world”;
alert(stringValue.slice(-3)); //”rld”
alert(stringValue.substring(-3)); //”hello world”
alert(stringValue.substr(-3)); //”rld”
alert(stringValue.slice(3, -4)); //”lo w”
alert(stringValue.substring(3, -4)); //”hel”
alert(stringValue.substr(3, -4)); //”” (empty string)