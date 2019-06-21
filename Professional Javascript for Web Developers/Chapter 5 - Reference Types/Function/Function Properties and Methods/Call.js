// The call() method exhibits the same behavior as apply(), but arguments are passed to it
// differently. The fi rst argument is the this value, but the remaining arguments are passed directly
// into the function. Using call() arguments must be enumerated specifi cally, as in this example:
function sum(num1, num2){
    return num1 + num2;
}

function callSum(num1, num2){
    return sum.call(this, num1, num2);
}
alert(callSum(10,10)); //20