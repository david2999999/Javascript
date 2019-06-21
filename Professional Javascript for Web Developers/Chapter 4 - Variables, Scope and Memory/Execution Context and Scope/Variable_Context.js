// Here, the function add() defi nes a local variable named sum that contains the result of an addition
// operation. This value is returned as the function value, but the variable sum isn’t accessible outside
// the function
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var result = add(10, 20); //30
alert(sum); //causes an error since sum is not a valid variable


// Here, the variable sum is initialized to a value without ever having been declared using var. When
// add() is called, sum is created in the global context and continues to exist even after the function
// has completed, allowing you to access it later
function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
var result = add(10, 20); //30
alert(sum); //30