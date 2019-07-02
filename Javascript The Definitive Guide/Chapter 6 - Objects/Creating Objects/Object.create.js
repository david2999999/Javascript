// Object.create() is a static function, not a method invoked on individual objects. To
// use it, simply pass the desired prototype object:
var o1 = Object.create({x:1, y:2}); // o1 inherits properties x and y.

// You can pass null to create a new object that does not have a prototype, but if you do
// this, the newly created object will not inherit anything, not even basic methods like
// toString() (which means it won’t work with the + operator either):
var o2 = Object.create(null); // o2 inherits no props or methods.

// If you want to create an ordinary empty object (like the object returned by {} or new
// Object()), pass Object.prototype:
var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().