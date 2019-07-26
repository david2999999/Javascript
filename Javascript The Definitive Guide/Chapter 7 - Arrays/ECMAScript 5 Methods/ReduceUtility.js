/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o,p) { return extend(extend({},o), p); }

// The examples shown so far have been numeric for simplicity, but reduce() and reduce
// Right() are not intended solely for mathematical computations. Consider the
// union() function from Example 6-2. It computes the “union” of two objects and returns
// a new object that has the properties of both. This function expects two objects and
// returns another object, so it works as a reduction function, and we can use reduce() to
// generalize it and compute the union of any number of objects:
var objects = [{x:1}, {y:2}, {z:3}];
var merged = objects.reduce(union); // => {x:1, y:2, z:3}

var objects = [{x:1,a:1}, {y:2,a:2}, {z:3,a:3}];
var leftunion = objects.reduce(union); // {x:1, y:2, z:3, a:1}
var rightunion = objects.reduceRight(union); // {x:1, y:2, z:3, a:3}