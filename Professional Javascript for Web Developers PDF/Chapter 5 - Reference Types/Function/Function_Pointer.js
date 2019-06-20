// Because function names are simply pointers to functions, they act like any other variable containing
// a pointer to an object. This means it’s possible to have multiple names for a single function, as in
// this example:

function sum(num1, num2){
    return num1 + num2;
}

alert(sum(10,10)); //20

var anotherSum = sum;
alert(anotherSum(10,10)); //20

sum = null;
alert(anotherSum(10,10)); //20