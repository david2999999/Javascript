// Define a constructor function to initialize a new Point object
function Point(x,y) { // By convention, constructors start with capitals
    this.x = x; // this keyword is the new object being initialized
    this.y = y; // Store function arguments as object properties
} // No return is necessary

// Use a constructor function with the keyword "new" to create instances
var p = new Point(1, 1); // The geometric point (1,1)
// Define methods for Point objects by assigning them to the prototype
// object associated with the constructor function.

Point.prototype.r = function() {
    return Math.sqrt( // Return the square root of x² + y²
        this.x * this.x + // This is the Point object on which the method...
        this.y * this.y // ...is invoked.
    );
};
// Now the Point object p (and all future Point objects) inherits the method r()
p.r() // => 1.414...