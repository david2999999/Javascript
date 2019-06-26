// Object initializer expressions are like array initializer expressions, but the square brackets
// are replaced by curly brackets, and each subexpression is prefixed with a property
// name and a colon:
var p = { x:2.3, y:-1.2 }; // An object with 2 properties
var q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p
// Object literals can be nested. For example:
var rectangle = { upperLeft: { x: 2, y: 2 },
                lowerRight: { x: 4, y: 5 } };