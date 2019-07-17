// A utility function to convert an array-like object (or suffix of it)
// to a true array. Used below to convert arguments objects to real arrays.
function array(a, n) { return Array.prototype.slice.call(a, n || 0); }
// The arguments to this function are passed on the left
function partialLeft(f /*, ...*/) {
    var args = arguments; // Save the outer arguments array
    return function() { // And return this function
        var a = array(args, 1); // Start with the outer args from 1 on.
        a = a.concat(array(arguments)); // Then add all the inner arguments.
        return f.apply(this, a); // Then invoke f on that argument list.
    };
}

// The arguments to this function are passed on the right
function partialRight(f /*, ...*/) {
    var args = arguments; // Save the outer arguments array
    return function() { // And return this function
        var a = array(arguments); // Start with the inner arguments.
        a = a.concat(array(args,1)); // Then add the outer args from 1 on.
        return f.apply(this, a); // Then invoke f on that argument list.
    };
}