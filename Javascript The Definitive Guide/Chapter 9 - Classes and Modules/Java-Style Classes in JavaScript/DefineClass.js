// A simple function for defining simple classes
function defineClass(constructor, // A function that sets instance properties
                     methods, // Instance methods: copied to prototype
                     statics) // Class properties: copied to constructor
{
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}
// This is a simple variant of our Range class
var SimpleRange =
    defineClass(function(f,t) { this.f = f; this.t = t; },
        {
            includes: function(x) { return this.f <= x && x <= this.t;},
            toString: function() { return this.f + "..." + this.t; }
        },
        { upto: function(t) { return new SimpleRange(0, t); } });