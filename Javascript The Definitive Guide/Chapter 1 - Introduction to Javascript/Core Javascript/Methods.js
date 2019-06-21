// When functions are assigned to the properties of an object, we call
// them "methods". All JavaScript objects have methods:
var a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements


// Arrays and objects can hold other arrays and objects:
var points = [ // An array with 2 elements.
    {x:0, y:0}, // Each element is an object.
    {x:1, y:1}
];

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
points.dist = function() { // Define a method to compute distance between points
    var p1 = this[0]; // First element of array we're invoked on
    var p2 = this[1]; // Second element of the "this" object
    var a = p2.x-p1.x; // Difference in X coordinates
    var b = p2.y-p1.y; // Difference in Y coordinates
    return Math.sqrt(a*a + // The Pythagorean theorem
        b*b); // Math.sqrt() computes the square root
};
points.dist() // => 1.414: distance between our 2 points