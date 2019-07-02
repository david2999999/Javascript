// To obtain the value of a property, use the dot (.) or square bracket ([]) operators
// described in §4.4. The left-hand side should be an expression whose value is an object.
// If using the dot operator, the right-hand must be a simple identifier that names the
// property. If using square brackets, the value within the brackets must be an expression
// that evaluates to a string that contains the desired property name:
var author = book.author; // Get the "author" property of the book.
var name = author.surname // Get the "surname" property of the author.
var title = book["main title"] // Get the "main title" property of the book.

// To create or set a property, use a dot or square brackets as you would to query the
// property, but put them on the left-hand side of an assignment expression:
book.edition = 6; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Set the "main title" property.