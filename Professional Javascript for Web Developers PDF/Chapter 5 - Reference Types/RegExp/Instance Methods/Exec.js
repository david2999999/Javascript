// The primary method of a RegExp object is exec(), which is intended for use with capturing groups.
// This method accepts a single argument, which is the string on which to apply the pattern, and
// returns an array of information about the fi rst match or null if no match was found. The returned
// array, though an instance of Array, contains two additional properties: index, which is the location
// in the string where the pattern was matched, and input, which is the string that the expression was
// run against. In the array, the fi rst item is the string that matches the entire pattern. Any additional
// items represent captured groups inside the expression (if there are no capturing groups in the
// pattern, then the array has only one item). Consider the following:

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index); //0
alert(matches.input); //”mom and dad and baby”
alert(matches[0]); //”mom and dad and baby”
alert(matches[1]); //” and dad and baby”
alert(matches[2]); //” and baby”