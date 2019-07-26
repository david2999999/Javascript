// The easiest way to create an object is to include an object literal in your JavaScript code.
// An object literal is a comma-separated list of colon-separated name:value pairs, enclosed
// within curly braces. A property name is a JavaScript identifier or a string literal
// (the empty string is allowed). A property value is any JavaScript expression; the value
// of the expression (it may be a primitive value or an object value) becomes the value of
// the property.

var empty = {}; // An object with no properties
var point = { x:0, y:0 }; // Two properties
var point2 = { x:point.x, y:point.y+1 }; // More complex values
var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
    author: { // The value of this property is
        firstname: "David", // itself an object. Note that
        surname: "Flanagan" // these property names are unquoted.
    }
};