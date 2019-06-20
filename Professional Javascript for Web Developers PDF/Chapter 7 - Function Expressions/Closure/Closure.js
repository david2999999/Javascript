// The terms anonymous functions and closures are often incorrectly used interchangeably. Closures
// are functions that have access to variables from another function’s scope. This is often accomplished
// by creating a function inside a function, as in the following highlighted lines from the previous
// createComparisonFunction() example:
function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

//The highlighted lines in this example are part of the inner function (an anonymous function) that is
// accessing a variable (propertyName) from the outer function. Even after the inner function has been
// returned and is being used elsewhere, it has access to that variable. This occurs because the inner
// function’s scope chain includes the scope of createComparisonFunction().