// Accessor properties are inherited, just as data properties are, so you can use the object
// p defined above as a prototype for other points. You can give the new objects their own
// x and y properties, and they’ll inherit the r and theta properties:
var q = inherit(p); // Create a new object that inherits getters and setters
q.x = 0, q.y = 0; // Create q's own data properties
console.log(q.r); // And use the inherited accessor properties
console.log(q.theta);

// This object generates strictly increasing serial numbers
var serialnum = {
    // This data property holds the next serial number.
    // The $ in the property name hints that it is a private property.
    $n: 0,
    // Return the current value and increment it
    get next() { return this.$n++; },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "serial number can only be set to a larger value";
    }
};

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() { return Math.floor(Math.random()*65536); },
    get int16() { return Math.floor(Math.random()*65536)-32768; }
};
