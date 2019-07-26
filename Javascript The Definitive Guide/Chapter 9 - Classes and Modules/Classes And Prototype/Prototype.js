// Notice that Figure 9-1 uses our Range() constructor as an example. In fact, however,
// the Range class defined in Example 9-2 overwrites the predefined Range.prototype object
// with an object of its own. And the new prototype object it defines does not have a
// constructor property. So instances of the Range class, as defined, do not have a con
// structor property. We can remedy this problem by explicitly adding a constructor to
// the prototype:
Range.prototype = {
    constructor: Range, // Explicitly set the constructor back-reference
    includes: function(x) { return this.from <= x && x <= this.to; },
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function(x) { return this.from<=x && x<=this.to; };
Range.prototype.foreach = function(f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};

Range.prototype.toString = function() {
    return "(" + this.from + "..." + this.to + ")";
};