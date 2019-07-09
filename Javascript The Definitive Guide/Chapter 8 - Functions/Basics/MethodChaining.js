// When methods return objects, you can use the return value of one method invocation
// as part of a subsequent invocation. This results in a series (or “chain” or “cascade”) of
// method invocations as a single expression. When working with the jQuery library
// (Chapter 19), for example, it is common to write code like this:

// Find all headers, map to their ids, convert to an array and sort them
$(":header").map(function() { return this.id }).get().sort();

// When you write a method that does not have a return value of its own, consider having
// the method return this. If you do this consistently throughout your API, you will enable
// a style of programming known as method chaining2 in which an object can be named
// once and then multiple methods can be invoked on it:
shape.setX(100).setY(100).setSize(50).setOutline("red").setFill("blue").draw();
