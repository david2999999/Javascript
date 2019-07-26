var F = function() {}; // This is a function object.
var p = F.prototype; // This is the prototype object associated with it.
var c = p.constructor; // This is the function associated with the prototype.
c === F // => true: F.prototype.constructor==F for any function

var o = new F(); // Create an object o of class F
o.constructor === F // => true: the constructor property specifies the class