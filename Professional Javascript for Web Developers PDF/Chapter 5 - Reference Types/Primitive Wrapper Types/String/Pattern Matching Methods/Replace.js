// To simplify replacing substrings, ECMAScript provides the replace() method. This method
// accepts two arguments. The fi rst argument can be a RegExp object or a string (the string is not
// converted to a regular expression), and the second argument can be a string or a function. If the
// fi rst argument is a string, then only the fi rst occurrence of the substring will be replaced. The only
// way to replace all instances of a substring is to provide a regular expression with the global fl ag
// specifi ed, as in this example:
var text = “cat, bat, sat, fat”;
var result = text.replace(“at”, “ond”);
alert(result); //”cond, bat, sat, fat”
result = text.replace(/at/g, “ond”);
alert(result); //”cond, bond, sond, fond”