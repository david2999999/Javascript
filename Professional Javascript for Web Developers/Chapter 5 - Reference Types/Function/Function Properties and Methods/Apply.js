// There are two additional methods for functions: apply() and call(). These methods both call
// the function with a specifi c this value, effectively setting the value of the this object inside the
// function body. The apply() method accepts two arguments: the value of this inside the function
// and an array of arguments. This second argument may be an instance of Array, but it can also be
// the arguments object.


function sum(num1, num2){
    return num1 + num2;
}

function callSum1(num1, num2){
    return sum.apply(this, arguments); //passing in arguments object
}

function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]); //passing in array
}
alert(callSum1(10,10)); //20
alert(callSum2(10,10)); //20

// In this example, callSum1() executes the sum() method, passing in this as the this value (which
// is equal to window because it’s being called in the global scope) and also passing in the arguments
// object. The callSum2() method also calls sum(), but it passes in an array of the arguments instead.