var s = "hello world!"; // A string
var word = s.substring(s.indexOf(" ")+1, s.length); // Use string properties
// Strings are not objects, though, so why do they have properties? Whenever you try to
// refer to a property of a string s, JavaScript converts the string value to an object as if by
//     calling new String(s). This object inherits (see §6.2.2) string methods and is used to
// resolve the property reference. Once the property has been resolved, the newly created
// object is discarded. (Implementations are not required to actually create and discard
// this transient object: they must behave as if they do, however.)