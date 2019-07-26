// Reduce the array a to a single value using the function f and
// optional initial value. Use Array.prototype.reduce if it is defined.
var reduce = Array.prototype.reduce
    ? function(a, f, initial) { // If the reduce() method exists.
        if (arguments.length > 2)
            return a.reduce(f, initial); // If an initial value was passed
        else return a.reduce(f); // Otherwise, no initial value.
    }
    : function(a, f, initial) { // This algorithm from the ES5 specification
        var i = 0, len = a.length, accumulator;
        // Start with the specified initial value, or the first value in a
        if (arguments.length > 2) accumulator = initial;
        else { // Find the first defined index in the array
            if (len == 0) throw TypeError();
            while(i < len) {
                if (i in a) {
                    accumulator = a[i++];
                    break;
                }
                else i++;
            }
            if (i == len) throw TypeError();
        }
        // Now call f for each remaining element in the array
        while(i < len) {
            if (i in a)
                accumulator = f.call(undefined, accumulator, a[i], i, a);
            i++;
        }
        return accumulator;
    };