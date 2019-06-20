// There are two methods for locating substrings within another string: indexOf() and
// lastIndexOf(). Both methods search a string for a given substring and return the position (or –1
// if the substring isn’t found). The difference between the two is that the indexOf() method begins
// looking for the substring at the beginning of the string, whereas the lastIndexOf() method
// begins looking from the end of the string. Consider this example:
var stringValue = “hello world”;
alert(stringValue.indexOf(“o”)); //4
alert(stringValue.lastIndexOf(“o”)); //7

var stringValue = “hello world”;
alert(stringValue.indexOf(“o”, 6)); //7
alert(stringValue.lastIndexOf(“o”, 6)); //4