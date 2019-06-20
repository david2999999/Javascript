// Two special objects exist inside a function: arguments and this. The arguments object, as
// discussed in Chapter 3, is an array-like object that contains all of the arguments that were passed
// into the function. Though its primary use is to represent function arguments, the arguments object
// also has a property named callee, which is a pointer to the function that owns the arguments
// object. Consider the following classic factorial function:
function factorial(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1)
    }
}

// Factorial functions are typically defi ned to be recursive, as in this example, which works fi ne
// when the name of the function is set and won’t be changed. However, the proper execution of this
// function is tightly coupled with the function name “factorial”. It can be decoupled by using
// arguments.callee as follows:
function factorial(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)
    }
}