// Any arguments to call() after the first invocation context argument are the values that
// are passed to the function that is invoked. For example, to pass two numbers to the
// function f() and invoke it as if it were a method of the object o, you could use code
// like this:
f.call(o, 1, 2);

//The apply() method is like the call() method, except that the arguments to be passed
// to the function are specified as an array:
f.apply(o, [1,2]);

// If a function is defined to accept an arbitrary number of arguments, the apply() method
// allows you to invoke that function on the contents of an array of arbitrary length. For
// example, to find the largest number in an array of numbers, you could use the
// apply() method to pass the elements of the array to the Math.max() function:
var biggest = Math.max.apply(Math, array_of_numbers);