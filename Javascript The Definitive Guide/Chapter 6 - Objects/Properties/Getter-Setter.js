// Accessor properties are defined as one or two functions whose name is the same as the
// property name, and with the function keyword replaced with get and/or set. Note that
// no colon is used to separate the name of the property from the functions that access
// that property, but that a comma is still required after the function body to separate the
// method from the next method or data property. As an example, consider the following
// object that represents a 2D Cartesian point. It has ordinary data properties to represent
// the X and Y coordinates of the point, and it has accessor properties for the equivalent
// polar coordinates of the point:
var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};