var data = [1,1,3,5,5]; // Our data
var sum = function(x,y) { return x+y; }; // Two elementary functions
var product = function(x,y) { return x*y; };
var neg = partial(product, -1); // Define some others
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, .5);
var reciprocal = partial(Math.pow, undefined, -1);
// Now compute the mean and standard deviation. This is all function
// invocations with no operators, and it starts to look like Lisp code!
var mean = product(reduce(data, sum), reciprocal(data.length));
var stddev = sqrt(product(reduce(map(data,
    compose(square,
        partial(sum, neg(mean)))),
    sum),
    reciprocal(sum(data.length,-1))));