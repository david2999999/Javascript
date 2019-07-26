// When a function has more than three parameters, it becomes difficult for the programmer
// who invokes the function to remember the correct order in which to pass
// arguments. To save the programmer the trouble of consulting the documentation each
// time she uses the function, it can be nice to allow arguments to be passed as name/
// value pairs in any order. To implement this style of method invocation, define your
// function to expect a single object as its argument and then have users of the function
// pass an object that defines the required name/value pairs. The following code gives an
// example and also demonstrates that this style of function invocation allows the function
// to specify defaults for any arguments that are omitted:
// Copy length elements of the array from to the array to.
// Begin copying with element from_start in the from array
// and copy that element to to_start in the to array.
// It is hard to remember the order of the arguments.
function arraycopy(/* array */ from, /* index */ from_start,
                   /* array */ to, /* index */ to_start,
                   /* integer */ length)
{
// code goes here
}

// This version is a little less efficient, but you don't have to
// remember the order of the arguments, and from_start and to_start
// default to 0.
function easycopy(args) {
    arraycopy(args.from,
        args.from_start || 0, // Note default value provided
        args.to,
        args.to_start || 0,
        args.length);
}

// Here is how you might invoke easycopy():
var a = [1,2,3,4], b = [];
easycopy({from: a, to: b, length: 4});