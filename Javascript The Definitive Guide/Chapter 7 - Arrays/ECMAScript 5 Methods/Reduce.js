// The reduce() and reduceRight() methods combine the elements of an array, using the
// function you specify, to produce a single value. This is a common operation in functional
// programming and also goes by the names “inject” and “fold.”
var a = [1,2,3,4,5]
var sum = a.reduce(function(x,y) { return x+y }, 0); // Sum of values
var product = a.reduce(function(x,y) { return x*y }, 1); // Product of values
var max = a.reduce(function(x,y) { return (x>y)?x:y; }); // Largest value

// reduce() takes two arguments. The first is the function that performs the reduction
// operation. The task of this reduction function is to somehow combine or reduce two
// values into a single value, and to return that reduced value. In the examples above, the
// functions combine two values by adding them, multiplying them, and choosing the
// largest. The second (optional) argument is an initial value to pass to the function.

// Functions used with reduce() are different than the functions used with forEach() and
// map(). The familiar value, index, and array values are passed as the second, third, and
// fourth arguments. The first argument is the accumulated result of the reduction so far.
// On the first call to the function, this first argument is the initial value you passed as the
// second argument to reduce(). On subsequent calls, it is the value returned by the previous
// invocation of the function. In the first example above, the reduction function is
// first called with arguments 0 and 1. It adds these and returns 1. It is then called again
// with arguments 1 and 2 and it returns 3. Next it computes 3+3=6, then 6+4=10, and
// finally 10+5=15. This final value, 15, becomes the return value of reduce().