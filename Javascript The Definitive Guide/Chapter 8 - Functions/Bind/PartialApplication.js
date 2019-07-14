// The ECMAScript 5 bind() method does more than just bind a function to an object. It
// also performs partial application: any arguments you pass to bind() after the first are
// bound along with the this value. Partial application is a common technique in functional
// programming and is sometimes called currying. Here are some examples of the
// bind() method used for partial application:
var sum = function(x,y) { return x + y }; // Return the sum of 2 args

// Create a new function like sum, but with the this value bound to null
// and the 1st argument bound to 1. This new function expects just one arg.
var succ = sum.bind(null, 1);
succ(2) // => 3: x is bound to 1, and we pass 2 for the y argument

function f(y,z) { return this.x + y + z }; // Another function that adds
var g = f.bind({x:1}, 2); // Bind this and y
g(3) // => 6: this.x is bound to 1, y is bound to 2 and z is 3