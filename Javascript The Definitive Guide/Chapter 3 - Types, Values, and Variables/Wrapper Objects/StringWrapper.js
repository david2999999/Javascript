var s = "hello world!"; // A string
var word = s.substring(s.indexOf(" ")+1, s.length); // Use string properties
// Strings are not objects, though, so why do they have properties? Whenever you try to
// refer to a property of a string s, JavaScript converts the string value to an object as if by
//     calling new String(s). This object inherits (see §6.2.2) string methods and is used to
// resolve the property reference. Once the property has been resolved, the newly created
// object is discarded. (Implementations are not required to actually create and discard
// this transient object: they must behave as if they do, however.)

var s = "test"; // Start with a string value.
s.len = 4; // Set a property on it.
var t = s.len; // Now query the property.
// When you run this code, the value of t is undefined. The second line of code creates a
// temporary String object, sets its len property to 4, and then discards that object. The
// third line creates a new String object from the original (unmodified) string value and
// then tries to read the len property. This property does not exist, and the expression
// evaluates to undefined. This code demonstrates that strings, numbers, and boolean
// values behave like objects when you try to read the value of a property (or method)
// from them. But if you attempt to set the value of a property, that attempt is silently
// ignored: the change is made on a temporary object and does not persist.